import { basename, dirname, relative } from 'node:path'
import { existsSync } from 'node:fs'
import { mkdir, readFile, unlink, writeFile } from 'node:fs/promises'
import { cpus } from 'node:os'

import ts from 'typescript'
import { createFilter } from '@rollup/pluginutils'
import { green, red, yellow } from 'kolorist'
import { loadProgramProcesses } from './program'
import { JsonResolver, SvelteResolver, VueResolver, parseResolvers } from './resolvers'
import { hasExportDefault, hasNormalExport, normalizeGlob, transformCode } from './transform'
import { bundleDtsFiles, getHasExtractor } from './bundle'
import {
  defaultIndex,
  dtsRE,
  editSourceMapDir,
  ensureAbsolute,
  ensureArray,
  findTypesPath,
  fullRelativeRE,
  getJsExtPrefix,
  getTsConfig,
  getTsLibFolder,
  globSignRE,
  handleDebug,
  isNativeObj,
  isRegExp,
  jsRE,
  normalizePath,
  parseTsAliases,
  queryPublicPath,
  removeDirIfEmpty,
  resolve,
  resolveConfigDir,
  runParallel,
  setModuleResolution,
  tjsRE,
  toCapitalCase,
  tryGetPkgPath,
  tsToDts,
  unwrapPromise,
} from './utils'

import type { Alias } from 'vite'
import type { ProgramProcesses } from './program'
import type { Resolver } from './resolvers'
import type { AliasOptions, CreateRuntimeOptions, EmitOptions, Logger } from './types'

const fixedCompilerOptions: ts.CompilerOptions = {
  noEmit: false,
  declaration: true,
  emitDeclarationOnly: true,
  checkJs: false,
  skipLibCheck: true,
  preserveSymlinks: false,
  noEmitOnError: undefined,
  target: ts.ScriptTarget.ESNext,
}

function parseAliases(aliasOptions: AliasOptions = [], aliasesExclude: (string | RegExp)[] = []) {
  let aliases: Alias[]

  if (isNativeObj(aliasOptions)) {
    aliases = Object.entries(aliasOptions).map(([key, value]) => {
      return { find: key, replacement: value }
    })
  } else {
    aliases = ensureArray(aliasOptions as Alias[]).map(alias => ({ ...alias }))
  }

  if (aliasesExclude.length > 0) {
    aliases = aliases.filter(
      ({ find }) =>
        !aliasesExclude.some(
          aliasExclude =>
            aliasExclude &&
            (isRegExp(find)
              ? find.toString() === aliasExclude.toString()
              : isRegExp(aliasExclude)
                ? find.match(aliasExclude)?.[0]
                : find === aliasExclude),
        ),
    )
  }

  return aliases
}

export class Runtime {
  static async toInstance(options: CreateRuntimeOptions) {
    return new Runtime(options, await loadProgramProcesses())
  }

  protected root: string
  protected publicRoot: string
  protected entryRoot: string
  protected configPath: string | undefined
  protected compilerOptions: ts.CompilerOptions
  protected rawCompilerOptions: ts.CompilerOptions
  protected host: ts.CompilerHost
  protected program: ts.Program
  protected rootNames: string[]
  protected diagnostics: ts.Diagnostic[]
  protected outDirs: string[]
  protected entries: Record<string, string>
  // protected include: string[]
  // protected exclude: string[]
  protected aliases: Alias[]
  protected aliasesExclude: (string | RegExp)[]
  protected libName: string
  protected indexName: string
  protected logger: Logger
  
  protected resolvers: Resolver[]
  protected rootFiles: Set<string>
  protected outputFiles: Map<string, string>
  protected transformedFiles: Set<string>

  readonly filter: (id: string) => boolean
  readonly rebuildProgram: () => void

  protected constructor(options: CreateRuntimeOptions, { createParsedCommandLine, createProgram }: ProgramProcesses) {
    const {
      root,
      tsconfigPath,
      aliasesExclude = [],
      pathsToAliases,
      entries = {},
      logger = console,
    } = options
  
    const resolvers = parseResolvers([
      JsonResolver(),
      VueResolver(),
      SvelteResolver(),
      ...(options.resolvers || []),
    ])
  
    const aliases = parseAliases(options.aliases, aliasesExclude)
  
    const configPath = tsconfigPath
      ? ensureAbsolute(tsconfigPath, root)
      : ts.findConfigFile(root, ts.sys.fileExists)
  
    const content = configPath ? createParsedCommandLine(ts as any, ts.sys, configPath) : undefined
  
    const compilerOptions: ts.CompilerOptions = {
      ...(content?.options || {}),
      ...(options.compilerOptions || {}),
      ...fixedCompilerOptions,
      outDir: '.',
      declarationDir: '.',
    }
    const rawCompilerOptions = content?.raw.compilerOptions || {}
  
    if (content?.fileNames.find(name => name.endsWith('.vue'))) {
      // (#277) A patch for Vue
      // If user don't specify `moduleResolution` in top config file,
      // declaration of Vue files will be inferred to `any` type.
      setModuleResolution(compilerOptions)
    }
  
    const outDirs = options.outDirs
      ? ensureArray(options.outDirs).map(d => ensureAbsolute(d, root))
      : [
        ensureAbsolute(
          content?.raw.compilerOptions?.outDir
            ? resolveConfigDir(content.raw.compilerOptions.outDir, root)
            : 'dist',
          root,
        ),
      ]
  
    const {
      // Here we are using the default value to set the `baseUrl` to the current directory if no value exists. This is
      // the same behavior as the TS Compiler. See TS source:
      // https://github.com/microsoft/TypeScript/blob/3386e943215613c40f68ba0b108cda1ddb7faee1/src/compiler/utilities.ts#L6493-L6501
      baseUrl = compilerOptions.paths ? process.cwd() : undefined,
      paths,
    } = compilerOptions
  
    if (pathsToAliases && baseUrl && paths) {
      aliases.push(
        ...parseTsAliases(
          ensureAbsolute(resolveConfigDir(baseUrl, root), configPath ? dirname(configPath) : root),
          paths,
        ),
      )
    }
  
    const computeGlobs = (
      rootGlobs: string | string[] | undefined,
      tsGlobs: string | string[] | undefined,
      defaultGlob: string | string[],
    ) => {
      if (rootGlobs?.length) {
        return ensureArray(rootGlobs).map(glob =>
          normalizeGlob(resolveConfigDir(glob, '.')),
        )
      }
  
      const relativeRoot = configPath ? normalizePath(relative(root, dirname(configPath)).replace(globSignRE, '\\$&')) : '.'

      return ensureArray(tsGlobs?.length ? tsGlobs : defaultGlob).map(glob =>
        normalizeGlob(resolveConfigDir(glob, relativeRoot)),
      )
    }
  
    const include = computeGlobs(
      options.include,
      [...ensureArray(content?.raw.include ?? []), ...ensureArray(content?.raw.files ?? [])],
      '**/*',
    )
    const exclude = computeGlobs(options.exclude, content?.raw.exclude, 'node_modules/**')
    const filter = createFilter(include, exclude, { resolve: root })

    const rootNames = [
      ...new Set(
        Object.values(entries)
          .map(entry => ensureAbsolute(entry, root))
          .concat(content?.fileNames.filter(filter) || [])
          .map(normalizePath),
      ),
    ]
  
    const host = ts.createCompilerHost(compilerOptions)
    const rebuildProgram = () =>
      createProgram({
        host,
        rootNames,
        options: compilerOptions,
        projectReferences: content?.projectReferences,
      })
    const program = rebuildProgram()
  
    const libName = toCapitalCase(options.libName || '_default')
    const indexName = options.indexName || defaultIndex
  
    const maybeEmitted = (sourceFile: ts.SourceFile) => {
      return (
        !(compilerOptions.noEmitForJsFiles && jsRE.test(sourceFile.fileName)) &&
        !sourceFile.isDeclarationFile &&
        !program!.isSourceFileFromExternalLibrary(sourceFile)
      )
    }
  
    let publicRoot = compilerOptions.rootDir
      ? ensureAbsolute(resolveConfigDir(compilerOptions.rootDir, root), root)
      : compilerOptions.composite && compilerOptions.configFilePath
        ? dirname(compilerOptions.configFilePath as string)
        : queryPublicPath(
          program
            .getSourceFiles()
            .filter(maybeEmitted)
            .map(sourceFile => sourceFile.fileName),
        )
    publicRoot = normalizePath(publicRoot)
  
    let entryRoot = options.entryRoot || publicRoot
    entryRoot = ensureAbsolute(entryRoot, root)
  
    const diagnostics = [
      ...program.getDeclarationDiagnostics(),
      ...program.getSemanticDiagnostics(),
      ...program.getSyntacticDiagnostics(),
    ]
  
    if (diagnostics?.length) {
      logger.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, host))
    }
  
    const rootFiles = new Set<string>()
    for (const file of rootNames) {
      rootFiles.add(file)
    }
  
    
    this.root = root
    this.publicRoot = publicRoot
    this.entryRoot = entryRoot
    this.configPath = configPath
    this.compilerOptions = compilerOptions
    this.rawCompilerOptions = rawCompilerOptions
    this.host = host
    this.rootNames = rootNames
    this.diagnostics = diagnostics
    this.outDirs = outDirs
    this.entries = entries
    // this.include = include
    // this.exclude = exclude
    this.aliases = aliases
    this.aliasesExclude = aliasesExclude
    this.libName = libName
    this.indexName = indexName
    this.logger = logger
    this.resolvers = resolvers
    this.rootFiles = rootFiles
    this.outputFiles = new Map()
    this.transformedFiles = new Set()

    this.filter = filter

    this.program = program
    this.rebuildProgram = () => {
      this.program = rebuildProgram()
    }
  }

  getHost() {
    return this.host
  }

  getProgram() {
    return this.program
  }

  matchResolver(id: string) {
    return this.resolvers.find(r => r.supports(id))
  }

  getRootFiles() {
    return [...this.rootFiles]
  }

  addRootFile(fileName: string) {
    this.rootFiles.add(normalizePath(fileName))
  }

  clearTransformedFiles() {
    this.transformedFiles.clear()
  }

  getDiagnostics() {
    return [...this.diagnostics]
  }

  async transform(id: string, code: string) {
    const {
      publicRoot,
      outDirs,
      resolvers,
      rootFiles,
      outputFiles,
      transformedFiles,
    } = this
  
    let resolver: Resolver | undefined
    id = normalizePath(id).split('?')[0]

    if (
      !this.filter(id) ||
      (!(resolver = resolvers.find(r => r.supports(id))) && !tjsRE.test(id)) ||
      transformedFiles.has(id)
    ) {
      return
    }
  
    rootFiles.delete(id)
    transformedFiles.add(id)
  
    const outDir = outDirs[0]
  
    if (resolver) {
      const result = await resolver.transform({
        id,
        code,
        root: publicRoot,
        outDir,
        host: this.host,
        program: this.program,
      })

      let outputs: {
        path: string,
        content: string
      }[]

      if (Array.isArray(result)) {
        outputs = result
      } else {
        const { emitSkipped, diagnostics = [] } = result

        if (emitSkipped && diagnostics.length > 0) {
          this.logger.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, this.host))
          this.diagnostics.push(...diagnostics)
        }

        outputs = result.outputs
      }
  
      for (const { path, content } of outputs) {
        outputFiles.set(resolve(publicRoot, relative(outDir, ensureAbsolute(path, outDir))), content)
      }
    } else {
      const sourceFile = this.program.getSourceFile(id)
  
      if (sourceFile) {
        const { emitSkipped, diagnostics } = this.program.emit(
          sourceFile,
          (name, text) => {
            outputFiles.set(resolve(publicRoot, relative(outDir, ensureAbsolute(name, outDir))), text)
          },
          undefined,
          true,
          undefined,
          // @ts-expect-error
          true,
        )

        if (emitSkipped && diagnostics.length > 0) {
          this.logger.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, this.host))
          this.diagnostics.push(...diagnostics)
        }
      }
    }
  
    const dtsId = id.replace(tjsRE, '') + '.d.ts'
    const dtsSourceFile = this.program.getSourceFile(dtsId)
  
    dtsSourceFile &&
      this.filter(dtsSourceFile.fileName) &&
      outputFiles.set(normalizePath(dtsSourceFile.fileName), dtsSourceFile.getFullText())
  }

  async emitOutput(options: EmitOptions = {}) {
    const {
      outDirs,
      logger,
      outputFiles,
      rootFiles,
      root,
      publicRoot,
      entryRoot,
      aliases,
      aliasesExclude,
      entries,
      indexName,
      libName,
      configPath,
      rawCompilerOptions,
    } = this
  
    const {
      strictOutput = true,
      logPrefix = '[dts]',
      copyDtsFiles = false,
      cleanVueFileName = false,
      staticImport = false,
      clearPureImport = true,
      insertTypesEntry = false,
      bundleTypes = false,
      beforeWriteFile,
      afterRollup,
    } = options
  
    const {
      extractorConfig,
      bundledPackages,
      invokeOptions,
    } = isNativeObj(bundleTypes) ? bundleTypes : {}
  
    const cleanPath = (path: string, emittedFiles: Map<string, string>) => {
      const newPath = path.replace('.vue.d.ts', '.d.ts')
      return !emittedFiles.has(newPath) && cleanVueFileName ? newPath : path
    }
  
    const outDir = outDirs[0]
    const emittedFiles = new Map<string, string>()
    const declareModules: string[] = []
  
    const writeOutput = async (path: string, content: string, outDir: string, record = true) => {
      if (typeof beforeWriteFile === 'function') {
        const result = await unwrapPromise(beforeWriteFile(path, content))
  
        if (result === false) return
  
        if (result) {
          path = result.filePath || path
          content = result.content ?? content
        }
      }
  
      path = normalizePath(path)
      const dir = normalizePath(dirname(path))
  
      if (strictOutput && !dir.startsWith(normalizePath(outDir))) {
        logger.warn(`${logPrefix} ${yellow('Outside emitted:')} ${path}`)
        return
      }
  
      if (!existsSync(dir)) {
        await mkdir(dir, { recursive: true })
      }
  
      await writeFile(path, content, 'utf-8')
      record && emittedFiles.set(path, content)
    }
  
    const sourceFiles = this.program.getSourceFiles()
  
    for (const sourceFile of sourceFiles) {
      if (!this.filter(sourceFile.fileName)) continue
  
      if (copyDtsFiles && dtsRE.test(sourceFile.fileName)) {
        outputFiles.set(normalizePath(sourceFile.fileName), sourceFile.getFullText())
      }
  
      if (rootFiles.has(sourceFile.fileName)) {
        this.program.emit(
          sourceFile,
          (name, text) => {
            outputFiles.set(resolve(publicRoot, relative(outDir, ensureAbsolute(name, outDir))), text)
          },
          undefined,
          true,
        )
  
        rootFiles.delete(sourceFile.fileName)
      }
    }
  
    handleDebug('emit output patch')
  
    const currentDir = this.host.getCurrentDirectory()
    const declarationFiles = new Map<string, string>()
    const mapFiles = new Map<string, string>()
    const prependMappings = new Map<string, string>()
  
    for (const [filePath, content] of outputFiles.entries()) {
      if (filePath.endsWith('.map')) {
        mapFiles.set(filePath, content)
      } else {
        declarationFiles.set(filePath, content)
      }
    }
  
    await runParallel(
      cpus().length,
      Array.from(declarationFiles.entries()),
      async ([filePath, content]) => {
        const newFilePath = resolve(
          outDir,
          relative(entryRoot, cleanVueFileName ? filePath.replace('.vue.d.ts', '.d.ts') : filePath),
        )
  
        if (content) {
          const result = transformCode({
            filePath,
            content,
            aliases,
            aliasesExclude,
            staticImport,
            clearPureImport,
            cleanVueFileName,
          })
  
          content = result.content
          declareModules.push(...result.declareModules)
  
          if (result.diffLineCount) {
            prependMappings.set(`${newFilePath}.map`, ';'.repeat(result.diffLineCount))
          }
        }
  
        await writeOutput(newFilePath, content, outDir)
      },
    )
  
    await runParallel(cpus().length, Array.from(mapFiles.entries()), async ([filePath, content]) => {
      const baseDir = dirname(filePath)
  
      filePath = resolve(
        outDir,
        relative(entryRoot, cleanVueFileName ? filePath.replace('.vue.d.ts', '.d.ts') : filePath),
      )
  
      try {
        const sourceMap: { sources: string[], mappings: string } = JSON.parse(content)
  
        sourceMap.sources = sourceMap.sources.map(source => {
          return normalizePath(
            relative(dirname(filePath), resolve(currentDir, relative(publicRoot, baseDir), source)),
          )
        })
  
        if (prependMappings.has(filePath)) {
          sourceMap.mappings = `${prependMappings.get(filePath)}${sourceMap.mappings}`
        }
  
        content = JSON.stringify(sourceMap)
      } catch (e) {
        logger.warn(`${logPrefix} ${yellow('Processing source map fail:')} ${filePath}`)
      }
  
      await writeOutput(filePath, content, outDir)
    })
  
    handleDebug('write output')
  
    if (insertTypesEntry || bundleTypes) {
      const pkgPath = tryGetPkgPath(root)
  
      let pkg: any
  
      try {
        pkg = pkgPath && existsSync(pkgPath) ? JSON.parse(await readFile(pkgPath, 'utf-8')) : {}
      } catch (e) {}
  
      const entryNames = Object.keys(entries)
      const types = findTypesPath(pkg.publishConfig, pkg)
      const multiple = entryNames.length > 1
  
      let typesPath = cleanPath(
        types ? resolve(root, types) : resolve(outDir, indexName),
        emittedFiles,
      )
  
      if (!multiple && !dtsRE.test(typesPath)) {
        logger.warn(
          `\n${logPrefix} ${yellow("The resolved path of type entry is not ending with '.d.ts'.")}\n`,
        )
  
        typesPath = `${typesPath.replace(tjsRE, '')}.d.${getJsExtPrefix(typesPath)}ts`
      }
  
      for (const name of entryNames) {
        const entryDtsPath = multiple
          ? cleanPath(resolve(outDir, tsToDts(name)), emittedFiles)
          : typesPath
  
        if (existsSync(entryDtsPath)) continue
  
        const sourceEntry = normalizePath(
          cleanPath(resolve(outDir, relative(entryRoot, tsToDts(entries[name]))), emittedFiles),
        )
  
        let fromPath = normalizePath(relative(dirname(entryDtsPath), sourceEntry))
  
        fromPath = fromPath.replace(dtsRE, '')
        fromPath = fullRelativeRE.test(fromPath) ? fromPath : `./${fromPath}`
  
        let content = 'export {}\n'
  
        if (emittedFiles.has(sourceEntry)) {
          if (hasNormalExport(emittedFiles.get(sourceEntry)!)) {
            content = `export * from '${fromPath}'\n${content}`
          }
  
          if (hasExportDefault(emittedFiles.get(sourceEntry)!)) {
            content += `import ${libName} from '${fromPath}'\nexport default ${libName}\n${content}`
          }
        }
  
        await writeOutput(cleanPath(entryDtsPath, emittedFiles), content, outDir)
      }
  
      handleDebug('insert index')
  
      if (bundleTypes) {
        logger.info(green(`${logPrefix} Start bundling declaration files...`))

        if (!getHasExtractor()) {
          logger.error(
            `\n${logPrefix} ${red("Failed to load '@microsoft/api-extractor', have you installed it?")}\n`,
          )
          logger.warn(
            `\n${logPrefix} ${yellow('Error occurred, skip bundle declaration files.')}\n`,
          )
        } else {
          const rollupFiles = new Set<string>()
          const compilerOptions = configPath
            ? getTsConfig(configPath, this.host.readFile).compilerOptions
            : rawCompilerOptions
    
          const rollup = async (path: string) => {
            const result = await bundleDtsFiles({
              root,
              configPath,
              compilerOptions,
              outDir,
              entryPath: path,
              fileName: basename(path),
              libFolder: getTsLibFolder(),
              extractorConfig,
              bundledPackages,
              invokeOptions,
            })
    
            emittedFiles.delete(path)
            rollupFiles.add(path)
    
            if (typeof afterRollup === 'function') {
              await unwrapPromise(afterRollup(result))
            }
          }
    
          if (multiple) {
            await runParallel(cpus().length, entryNames, async name => {
              await rollup(cleanPath(resolve(outDir, tsToDts(name)), emittedFiles))
            })
          } else {
            await rollup(typesPath)
          }
    
          await runParallel(cpus().length, Array.from(emittedFiles.keys()), f => unlink(f))
          removeDirIfEmpty(outDir)
          emittedFiles.clear()
    
          const declared = declareModules.join('\n')
    
          await runParallel(cpus().length, [...rollupFiles], async filePath => {
            await writeOutput(
              filePath,
              (await readFile(filePath, 'utf-8')) + (declared ? `\n${declared}` : ''),
              dirname(filePath),
            )
          })
    
          handleDebug('rollup output')
        }
      }
    }
  
    if (outDirs.length > 1) {
      const extraOutDirs = outDirs.slice(1)
  
      await runParallel(cpus().length, Array.from(emittedFiles), async ([wroteFile, content]) => {
        const relativePath = relative(outDir, wroteFile)
  
        await Promise.all(
          extraOutDirs.map(async targetOutDir => {
            const path = resolve(targetOutDir, relativePath)
  
            if (wroteFile.endsWith('.map')) {
              // edit `sources` section with correct relative path of source map file
              if (!editSourceMapDir(content, outDir, targetOutDir)) {
                logger.warn(`${logPrefix} ${yellow('Processing source map fail:')} ${path}`)
              }
            }
  
            await writeOutput(path, content, targetOutDir, false)
          }),
        )
      })
    }
  
    return emittedFiles
  }
}
