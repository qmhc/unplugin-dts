import { resolve as _resolve, dirname, relative, basename } from 'node:path'
import { existsSync } from 'node:fs'
import { writeFile, mkdir, readFile, unlink } from 'node:fs/promises'
import { cpus } from 'node:os'
import ts from 'typescript'
import { createFilter } from '@rollup/pluginutils'
import { createParsedCommandLine } from '@vue/language-core'
import { createProgram } from 'vue-tsc'
import debug from 'debug'
import { cyan, yellow, green } from 'kolorist'
import { rollupDeclarationFiles } from './rollup'
import {
  normalizeGlob,
  removePureImport,
  transformAliasImport,
  transformDynamicImport
} from './transform'
import {
  ensureAbsolute,
  ensureArray,
  isNativeObj,
  isPromise,
  isRegExp,
  normalizePath,
  queryPublicPath,
  removeDirIfEmpty,
  runParallel
} from './utils'

import type { Alias, Logger } from 'vite'
import type { _Program as Program } from 'vue-tsc'
import type { PluginOptions } from './types'

const vueRE = /\.vue$/
const tsRE = /\.(m|c)?tsx?$/
const dtsRE = /\.d\.(m|c)?tsx?$/
const tjsRE = /\.(m|c)?(t|j)sx?$/
const mtjsRE = /\.m(t|j)sx?$/
const ctjsRE = /\.c(t|j)sx?$/
const fullRelativeRE = /^\.\.?\//
const watchExtensionRE = /\.(vue|(m|c)?(t|j)sx?)$/
const defaultIndex = 'index.d.ts'

const logPrefix = cyan('[vite:dts]')
const bundleDebug = debug('vite-plugin-dts:bundle')

const fixedCompilerOptions: ts.CompilerOptions = {
  noEmit: false,
  declaration: true,
  emitDeclarationOnly: true,
  noUnusedParameters: false,
  checkJs: false,
  skipLibCheck: true,
  preserveSymlinks: false,
  noEmitOnError: undefined,
  target: ts.ScriptTarget.ESNext
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}
const extPrefix = (file: string) => (mtjsRE.test(file) ? 'm' : ctjsRE.test(file) ? 'c' : '')
const resolve = (...paths: string[]) => normalizePath(_resolve(...paths))

export function dtsPlugin(options: PluginOptions = {}): import('vite').Plugin {
  const {
    tsconfigPath,
    staticImport = false,
    clearPureImport = true,
    cleanVueFileName = false,
    insertTypesEntry = false,
    rollupTypes = false,
    bundledPackages = [],
    aliasesExclude = [],
    logLevel,
    copyDtsFiles = false,
    afterDiagnostic = noop,
    beforeWriteFile = noop,
    afterBuild = noop
  } = options

  let root = ensureAbsolute(options.root ?? '', process.cwd())
  let entryRoot = options.entryRoot ?? ''

  let compilerOptions: ts.CompilerOptions
  let rawCompilerOptions: ts.CompilerOptions

  let outDirs: string[]
  let entries: Record<string, string>
  let include: string[]
  let exclude: string[]
  let aliases: Alias[]
  let libName: string
  let indexName: string
  let logger: Logger
  let host: ts.CompilerHost | undefined
  let program: Program | undefined
  let filter: ReturnType<typeof createFilter>

  let bundled = false

  const rootFiles = new Set<string>()
  const outputFiles = new Map<string, string>()

  return {
    name: 'vite:dts',

    apply: 'build',

    enforce: 'pre',

    config(config) {
      const aliasOptions = config?.resolve?.alias ?? []

      if (isNativeObj(aliasOptions)) {
        aliases = Object.entries(aliasOptions).map(([key, value]) => {
          return { find: key, replacement: value }
        })
      } else {
        aliases = ensureArray(aliasOptions)
      }

      if (aliasesExclude.length > 0) {
        aliases = aliases.filter(
          ({ find }) =>
            !aliasesExclude.some(
              alias =>
                alias &&
                (isRegExp(find)
                  ? find.toString() === alias.toString()
                  : isRegExp(alias)
                    ? find.match(alias)?.[0]
                    : find === alias)
            )
        )
      }
    },

    async configResolved(config) {
      logger = logLevel
        ? (await import('vite')).createLogger(logLevel, { allowClearScreen: config.clearScreen })
        : config.logger

      root = ensureAbsolute(options.root ?? '', config.root)

      if (config.build.lib) {
        const input =
          typeof config.build.lib.entry === 'string'
            ? [config.build.lib.entry]
            : config.build.lib.entry

        if (Array.isArray(input)) {
          entries = input.reduce((prev, current) => {
            prev[basename(current)] = current
            return prev
          }, {} as Record<string, string>)
        } else {
          entries = { ...input }
        }

        const filename = config.build.lib.fileName ?? defaultIndex
        const entry =
          typeof config.build.lib.entry === 'string'
            ? config.build.lib.entry
            : Object.values(config.build.lib.entry)[0]

        libName = config.build.lib.name || '_default'
        indexName = typeof filename === 'string' ? filename : filename('es', entry)

        if (!dtsRE.test(indexName)) {
          indexName = `${indexName.replace(tjsRE, '')}.d.${extPrefix(indexName)}ts`
        }
      } else {
        logger.warn(
          yellow(
            `\n${cyan(
              '[vite:dts]'
            )} You are building a library that may not need to generate declaration files.\n`
          )
        )

        libName = '_default'
        indexName = defaultIndex
      }

      if (!options.outDir) {
        outDirs = [ensureAbsolute(config.build.outDir, root)]
      }

      bundleDebug('parse vite config')
    },

    options(options) {
      if (entries) return

      const input = typeof options.input === 'string' ? [options.input] : options.input

      if (Array.isArray(input)) {
        entries = input.reduce((prev, current) => {
          prev[basename(current)] = current
          return prev
        }, {} as Record<string, string>)
      } else {
        entries = { ...input }
      }

      logger = logger || console
      libName = '_default'
      indexName = defaultIndex

      bundleDebug('parse options')
    },

    async buildStart() {
      if (program) return

      bundleDebug('begin buildStart')

      const configPath = tsconfigPath
        ? ensureAbsolute(tsconfigPath, root)
        : ts.findConfigFile(root, ts.sys.fileExists)

      const content = configPath
        ? createParsedCommandLine(ts as any, ts.sys, configPath)
        : undefined

      const config: {
        include?: string[],
        exclude?: string[],
        raw?: any,
        options: ts.CompilerOptions
      } = content
        ? {
            include: content.raw.include,
            exclude: content.raw.exclude,
            raw: content.raw,
            options: {
              ...content.options,
              ...(options.compilerOptions || {}),
              ...fixedCompilerOptions
            } as ts.CompilerOptions
          }
        : { options: { ...(options.compilerOptions || {}), ...fixedCompilerOptions } }

      if (!outDirs) {
        outDirs = options.outDir
          ? ensureArray(options.outDir).map(d => ensureAbsolute(d, root))
          : [ensureAbsolute(config.raw?.compilerOptions?.outDir || 'dist', root)]
      }

      include = ensureArray(options.include ?? config.include ?? '**/*').map(normalizeGlob)
      exclude = ensureArray(options.exclude ?? config.exclude ?? 'node_modules/**').map(
        normalizeGlob
      )
      compilerOptions = { ...config.options, outDir: outDirs[0] }
      rawCompilerOptions = config.raw?.compilerOptions || {}

      filter = createFilter(include, exclude, { resolve: root })

      const rootNames = Object.values(entries)
        .concat(content?.fileNames.filter(filter) || [])
        .map(normalizePath)

      host = ts.createCompilerHost(compilerOptions, true)
      program = createProgram({ host, rootNames, options: compilerOptions })

      libName = libName || '_default'
      indexName = indexName || defaultIndex

      const diagnostics = program.getDeclarationDiagnostics()

      if (diagnostics?.length) {
        logger.error(ts.formatDiagnostics(diagnostics, host))
      }

      if (typeof afterDiagnostic === 'function') {
        const result = afterDiagnostic(diagnostics)

        isPromise(result) && (await result)
      }

      rootNames.forEach(file => {
        this.addWatchFile(file)
        rootFiles.add(file)
      })

      bundleDebug('create ts program')
    },

    transform(_, id) {
      if (!program || !filter(id) || id.includes('.vue?vue') || (!tsRE.test(id) && !vueRE.test(id))) { return }

      id = normalizePath(id)
      rootFiles.delete(id)

      let sourceFile = program.getSourceFile(normalizePath(id))

      if (!sourceFile && vueRE.test(id)) {
        sourceFile =
          program.getSourceFile(id + '.ts') ||
          program.getSourceFile(id + '.js') ||
          program.getSourceFile(id + '.tsx') ||
          program.getSourceFile(id + '.jsx')
      }

      if (!sourceFile) return

      const outDir = outDirs[0]
      const service = program.__vue.languageService

      for (const outputFile of service.getEmitOutput(sourceFile.fileName, true).outputFiles) {
        outputFiles.set(resolve(root, relative(outDir, outputFile.name)), outputFile.text)
      }

      const dtsId = id.replace(tjsRE, '.d.ts')
      const dtsSourceFile = program.getSourceFile(dtsId)

      dtsSourceFile &&
        filter(dtsSourceFile.fileName) &&
        outputFiles.set(dtsSourceFile.fileName, dtsSourceFile.getFullText())
    },

    watchChange(id) {
      if (host && program && watchExtensionRE.test(id)) {
        const sourceFile = host.getSourceFile(normalizePath(id), ts.ScriptTarget.ESNext)

        if (sourceFile && filter(sourceFile.fileName)) {
          !vueRE.test(id) && rootFiles.add(sourceFile.fileName)
          program.__vue.projectVersion++
          bundled = false
        }
      }
    },

    async writeBundle() {
      if (!program || bundled) return

      bundled = true
      bundleDebug('begin writeBundle')
      logger.info(green(`\n${logPrefix} Start generate declaration files...`))

      const startTime = Date.now()

      const outDir = outDirs[0]
      const emittedFiles = new Map<string, string>()

      const service = program.__vue.languageService
      const sourceFiles = program.getSourceFiles()

      for (const sourceFile of sourceFiles) {
        if (!filter(sourceFile.fileName)) continue

        if (copyDtsFiles && dtsRE.test(sourceFile.fileName)) {
          outputFiles.set(sourceFile.fileName, sourceFile.getFullText())
        }

        if (rootFiles.has(sourceFile.fileName)) {
          for (const outputFile of service.getEmitOutput(sourceFile.fileName, true).outputFiles) {
            outputFiles.set(resolve(root, relative(outDir, outputFile.name)), outputFile.text)
          }

          rootFiles.delete(sourceFile.fileName)
        }
      }

      bundleDebug('emit output patch')

      entryRoot = entryRoot || queryPublicPath(Array.from(outputFiles.keys()))
      entryRoot = ensureAbsolute(entryRoot, root)

      await runParallel(
        cpus().length,
        Array.from(outputFiles.entries()),
        async ([path, content]) => {
          const isMapFile = path.endsWith('.map')

          if (!isMapFile && content) {
            content = clearPureImport ? removePureImport(content) : content
            content = transformAliasImport(path, content, aliases, aliasesExclude)
            content = staticImport || rollupTypes ? transformDynamicImport(content) : content
          }

          path = resolve(
            outDir,
            relative(entryRoot, cleanVueFileName ? path.replace('.vue.d.ts', '.d.ts') : path)
          )
          content = cleanVueFileName ? content.replace(/['"](.+)\.vue['"]/g, '"$1"') : content

          if (typeof beforeWriteFile === 'function') {
            const result = beforeWriteFile(path, content)

            // #110 skip if return false
            if (result === false) return

            if (result && isNativeObj(result)) {
              path = result.filePath || path
              content = result.content ?? content
            }
          }

          path = normalizePath(path)
          const dir = dirname(path)

          if (!existsSync(dir)) {
            await mkdir(dir, { recursive: true })
          }

          await writeFile(path, content, 'utf-8')
          emittedFiles.set(path, content)
        }
      )

      bundleDebug('write output')

      if (insertTypesEntry || rollupTypes) {
        const pkgPath = resolve(root, 'package.json')
        const pkg = existsSync(pkgPath) ? JSON.parse(await readFile(pkgPath, 'utf-8')) : {}
        const entryNames = Object.keys(entries)
        const types =
          pkg.types ||
          pkg.typings ||
          pkg.publishConfig?.types ||
          pkg.publishConfig?.typings ||
          (pkg.exports?.['.'] || pkg.exports?.['./'])?.types
        const multiple = entryNames.length > 1

        const typesPath = types ? resolve(root, types) : resolve(outDir, indexName)

        for (const name of entryNames) {
          let path = multiple ? resolve(outDir, `${name.replace(tsRE, '')}.d.ts`) : typesPath

          if (existsSync(path)) continue

          const index = resolve(
            outDir,
            relative(entryRoot, `${entries[name].replace(tsRE, '')}.d.ts`)
          )

          let fromPath = normalizePath(relative(dirname(path), index))

          fromPath = fromPath.replace(dtsRE, '')
          fromPath = fullRelativeRE.test(fromPath) ? fromPath : `./${fromPath}`

          let content = `export * from '${fromPath}'\n`

          if (existsSync(index)) {
            const entryCodes = await readFile(index, 'utf-8')

            if (entryCodes.includes('export default')) {
              content += `import ${libName} from '${fromPath}'\nexport default ${libName}\n`
            }
          }

          let result: ReturnType<typeof beforeWriteFile> | undefined

          if (typeof beforeWriteFile === 'function') {
            result = beforeWriteFile(path, content)

            if (result && isNativeObj(result)) {
              path = result.filePath ?? path
              content = result.content ?? content
            }
          }

          path = normalizePath(path)

          if (result !== false) {
            await writeFile(path, content, 'utf-8')
            emittedFiles.set(path, content)
          }
        }

        bundleDebug('insert index')

        if (rollupTypes) {
          logger.info(green(`${logPrefix} Start rollup declaration files...`))

          let libFolder: string | undefined = resolve(root, 'node_modules/typescript')

          if (!existsSync(libFolder)) {
            if (root !== entryRoot) {
              libFolder = resolve(entryRoot, 'node_modules/typescript')

              if (!existsSync(libFolder)) libFolder = undefined
            }

            libFolder = undefined
          }

          const rollupFiles = new Set<string>()

          if (multiple) {
            for (const name of entryNames) {
              const path = resolve(outDir, `${name.replace(tsRE, '')}.d.ts`)

              rollupDeclarationFiles({
                root,
                compilerOptions: rawCompilerOptions,
                outDir,
                entryPath: path,
                fileName: basename(path),
                libFolder,
                bundledPackages
              })

              emittedFiles.delete(path)
              rollupFiles.add(path)
            }
          } else {
            rollupDeclarationFiles({
              root,
              compilerOptions: rawCompilerOptions,
              outDir,
              entryPath: typesPath,
              fileName: basename(typesPath),
              libFolder,
              bundledPackages
            })

            emittedFiles.delete(typesPath)
            rollupFiles.add(typesPath)
          }

          await runParallel(cpus().length, Array.from(emittedFiles.keys()), f => unlink(f))
          removeDirIfEmpty(outDir)
          emittedFiles.clear()

          for (const file of rollupFiles) {
            emittedFiles.set(file, await readFile(file, 'utf-8'))
          }

          bundleDebug('rollup output')
        }
      }

      if (outDirs.length > 1) {
        const dirs = outDirs.slice(1)

        await runParallel(cpus().length, Array.from(emittedFiles), async ([wroteFile, content]) => {
          const relativePath = relative(outDir, wroteFile)

          await Promise.all(
            dirs.map(async dir => {
              const path = resolve(dir, relativePath)
              const dirPath = dirname(path)

              if (!existsSync(dirPath)) {
                await mkdir(dirPath, { recursive: true })
              }

              await writeFile(path, content, 'utf-8')
            })
          )
        })
      }

      if (typeof afterBuild === 'function') {
        const result = afterBuild()

        isPromise(result) && (await result)
      }

      bundleDebug('finish')
      logger.info(green(`${logPrefix} Declaration files built in ${Date.now() - startTime}ms.\n`))
    }
  }
}
