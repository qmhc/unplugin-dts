import { basename, dirname, isAbsolute, relative } from 'node:path'
import { readdirSync } from 'node:fs'

import ts from './core/ts-loader.cjs'
import globToRegExp from 'glob-to-regexp'
import { cyan, green, yellow } from 'kolorist'
import { BuildTimeTracker } from './core/performance'
import {
  defaultIndex,
  dtsRE,
  ensureAbsolute,
  ensureArray,
  getJsExtPrefix,
  handleDebug,
  isNativeObj,
  isRegExp,
  normalizePath,
  resolve,
  tjsRE,
  unwrapPromise,
} from './core'
import {
  Runtime,
  getRuntimeWatchTargets,
  isCanonicalPathEqualOrInside,
  isRuntimeConfigFile,
  isRuntimeWatchDirectory,
  rebuildRuntimeProgram,
  shouldHandleRuntimeWatchChange,
} from './core/runtime'

import type {
  RolldownPlugin,
  RollupPlugin,
  RspackCompiler,
  UnpluginBuildContext,
  UnpluginFactory,
  WebpackCompiler,
} from 'unplugin'
import type { Alias } from './core'
import type { PluginOptions } from './types'
import type { Logger } from './core'
import type { ProgramChange } from './core/runtime'

const pluginName = 'unplugin:dts'
const logPrefix = cyan(`[${pluginName}]`)

type NativeWatchFileSystem = NonNullable<WebpackCompiler['watchFileSystem']>
type NativeWatchParameters = Parameters<NativeWatchFileSystem['watch']>
type NativeWatchIgnored = NativeWatchParameters[4]['ignored'] | ((fileName: string) => boolean)
type NativeWatchOptions = Omit<NativeWatchParameters[4], 'ignored'> & {
  ignored?: NativeWatchIgnored,
}

function nativeWatchGlobToSource(ignored: string) {
  if (!ignored.length) return undefined
  const source = globToRegExp(ignored, { globstar: true, extended: true }).source
  return source.slice(0, -1) + '(?:$|\\/)'
}

function nativeWatchIgnoredToPredicate(ignored: NativeWatchIgnored) {
  if (Array.isArray(ignored)) {
    const sources = ignored.map(nativeWatchGlobToSource).filter(Boolean) as string[]
    if (!sources.length) return () => false
    const regexp = new RegExp(sources.join('|'))
    return (fileName: string) => regexp.test(normalizePath(fileName))
  }
  if (typeof ignored === 'string') {
    const source = nativeWatchGlobToSource(ignored)
    if (!source) return () => false
    const regexp = new RegExp(source)
    return (fileName: string) => regexp.test(normalizePath(fileName))
  }
  if (ignored instanceof RegExp) {
    return (fileName: string) => ignored.test(normalizePath(fileName))
  }
  if (typeof ignored === 'function') return ignored
  return () => false
}

export function mergeNativeWatchIgnored(
  ignored: NativeWatchIgnored,
  isAdditionalIgnored: (fileName: string) => boolean,
): NativeWatchIgnored {
  const isIgnored = nativeWatchIgnoredToPredicate(ignored)
  return (fileName: string) => isIgnored(fileName) || isAdditionalIgnored(fileName)
}

export const pluginFactory: UnpluginFactory<PluginOptions | undefined, false> = /* #__PURE__ */ (
  options = {},
  meta,
) => {
  const {
    processor: userProcessor,
    tsconfigPath,
    staticImport = false,
    clearPureImport = true,
    cleanVueFileName = false,
    insertTypesEntry = false,
    bundleTypes = false,
    pathsToAliases = true,
    aliasesExclude = [],
    copyDtsFiles = meta.framework !== 'vite',
    declarationOnly = false,
    strictOutput = true,
    afterBootstrap,
    afterDiagnostic,
    beforeWriteFile,
    afterRollup,
    afterBuild,

    include,
    exclude,
    compilerOptions,
    resolvers,
    entryRoot,
  } = options

  let root = ensureAbsolute(options.root ?? '', process.cwd())
  let outDirs: string[] | undefined
  let entries: Record<string, string> | undefined
  let aliases: Alias[] | undefined

  let libName = '_default'
  let indexName = defaultIndex
  let logger: Logger = console

  let isDev = false
  let bundled = false
  const buildTime = new BuildTimeTracker()
  let bundlerOutDirs: string[] = []
  let nativeWatchIgnoredDirectories: string[] = []
  const preparedWatchFileSystems = new WeakSet<object>()

  let entryPromise: Promise<any> | undefined

  let runtime: Runtime
  const pendingProgramChanges = new Map<string, ProgramChange>()

  function queueProgramChange(change: ProgramChange) {
    const fileName = change.fileName && normalizePath(change.fileName)
    const key = fileName
      ? ts.sys.useCaseSensitiveFileNames
        ? fileName
        : fileName.toLowerCase()
      : '__missing__'
    const previous = pendingProgramChanges.get(key)
    pendingProgramChanges.set(key, {
      fileName,
      event: change.event ?? previous?.event,
      forceFresh: change.forceFresh || previous?.forceFresh,
    })
  }

  function isInsideWatchIgnoredDirectory(fileName: string) {
    fileName = ensureAbsolute(fileName, root)
    const canonicalFileName = ts.sys.useCaseSensitiveFileNames
      ? normalizePath(fileName)
      : normalizePath(fileName).toLowerCase()

    return nativeWatchIgnoredDirectories.some(directory => {
      const canonicalDirectory = ts.sys.useCaseSensitiveFileNames
        ? normalizePath(directory)
        : normalizePath(directory).toLowerCase()
      return (
        canonicalFileName === canonicalDirectory ||
        canonicalFileName.startsWith(`${canonicalDirectory}/`)
      )
    })
  }

  function isPathEqualOrInside(fileName: string, directory: string) {
    const canonicalFileName = ts.sys.useCaseSensitiveFileNames
      ? normalizePath(fileName)
      : normalizePath(fileName).toLowerCase()
    const canonicalDirectory = ts.sys.useCaseSensitiveFileNames
      ? normalizePath(directory)
      : normalizePath(directory).toLowerCase()
    return isCanonicalPathEqualOrInside(canonicalFileName, canonicalDirectory)
  }

  function getRealPath(fileName: string) {
    const unresolvedSegments: string[] = []
    let existingPath = normalizePath(fileName)

    while (!ts.sys.fileExists(existingPath) && !ts.sys.directoryExists(existingPath)) {
      const parent = normalizePath(dirname(existingPath))
      if (parent === existingPath) return undefined
      unresolvedSegments.unshift(basename(existingPath))
      existingPath = parent
    }

    try {
      const realExistingPath = ts.sys.realpath?.(existingPath)
      if (!realExistingPath) return undefined
      return unresolvedSegments.length
        ? resolve(realExistingPath, ...unresolvedSegments)
        : realExistingPath
    } catch {
      return undefined
    }
  }

  function getWatchPathAliases(directory: string) {
    const normalizedDirectory = normalizePath(directory)
    const aliases = new Set([normalizedDirectory])
    const realDirectory = getRealPath(normalizedDirectory)
    if (realDirectory) aliases.add(normalizePath(realDirectory))

    if (isPathEqualOrInside(normalizedDirectory, root)) {
      const realRoot = getRealPath(root)
      if (realRoot) {
        const relativeDirectory = normalizePath(relative(root, normalizedDirectory))
        if (!isAbsolute(relativeDirectory) && !relativeDirectory.startsWith('../')) {
          aliases.add(normalizePath(resolve(realRoot, relativeDirectory)))
        }
      }
    }

    return [...aliases]
  }

  function isAnyPathEqualOrInside(fileNames: readonly string[], directories: readonly string[]) {
    return fileNames.some(fileName =>
      directories.some(directory => isPathEqualOrInside(fileName, directory)),
    )
  }

  function isInsideNativeWatchIgnoredDirectory(fileName: string) {
    return nativeWatchIgnoredDirectories.some(directory => isPathEqualOrInside(fileName, directory))
  }

  function prepareNativeWatchFileSystem(compiler: WebpackCompiler | RspackCompiler) {
    compiler.hooks.afterEnvironment.tap(pluginName, () => {
      const watchFileSystem = compiler.watchFileSystem as NativeWatchFileSystem | null
      if (!watchFileSystem || preparedWatchFileSystems.has(watchFileSystem)) return

      preparedWatchFileSystems.add(watchFileSystem)
      const watch = watchFileSystem.watch.bind(watchFileSystem)
      watchFileSystem.watch = (...parameters: NativeWatchParameters) => {
        const watchOptions = parameters[4] as NativeWatchOptions
        parameters[4] = {
          ...watchOptions,
          ignored: nativeWatchIgnoredDirectories.length
            ? mergeNativeWatchIgnored(watchOptions.ignored, isInsideNativeWatchIgnoredDirectory)
            : watchOptions.ignored,
        } as NativeWatchParameters[4]
        return watch(...parameters)
      }
    })
  }

  function captureRollupOutputDirectories(options: unknown) {
    const outputs = ensureArray(
      (
        options as {
          output?: { dir?: string, file?: string } | { dir?: string, file?: string }[],
        }
      ).output,
    ).filter((output): output is { dir?: string, file?: string } => !!output)
    bundlerOutDirs = outputs.flatMap(output => {
      if (output.dir) return [ensureAbsolute(output.dir, process.cwd())]
      if (output.file) return [ensureAbsolute(dirname(output.file), process.cwd())]
      return []
    })
  }

  function addRuntimeWatchTargets(context: UnpluginBuildContext) {
    if (meta.framework === 'esbuild') return

    const targets = getRuntimeWatchTargets(runtime, bundlerOutDirs)
    const outputDirectories = [
      ...new Set([...targets.outputDirectories, ...bundlerOutDirs].map(normalizePath)),
    ]
    const fileAliases = targets.files.map(getWatchPathAliases)
    const outputTargets = outputDirectories.map(directory => {
      const aliases = getWatchPathAliases(directory)
      return {
        directory,
        aliases,
        canIgnore: fileAliases.every(
          sourceAliases => !isAnyPathEqualOrInside(sourceAliases, aliases),
        ),
      }
    })
    const ignoredOutputDirectories = outputTargets.filter(target => target.canIgnore)
    nativeWatchIgnoredDirectories = [
      ...new Set(ignoredOutputDirectories.flatMap(target => target.aliases)),
    ]
    for (const file of targets.files) {
      context.addWatchFile(file)
    }

    function canWatchDirectory(directory: string, canIgnoreNestedOutputs: boolean) {
      const directoryAliases = getWatchPathAliases(directory)
      return outputTargets.every(outputTarget => {
        if (isAnyPathEqualOrInside(directoryAliases, outputTarget.aliases)) return false
        if (!isAnyPathEqualOrInside(outputTarget.aliases, directoryAliases)) return true
        return canIgnoreNestedOutputs && outputTarget.canIgnore
      })
    }

    const nativeContext = context.getNativeBuildContext?.()
    if (nativeContext?.framework === 'webpack' || nativeContext?.framework === 'rspack') {
      const compilation = nativeContext.compilation
      if (compilation) {
        const contextDirectories = targets.directories.filter(directory =>
          canWatchDirectory(directory, true),
        )
        for (const directory of contextDirectories) {
          compilation.contextDependencies.add(directory)
        }
      }
      return
    }

    const directories =
      meta.framework === 'rollup' || meta.framework === 'rolldown'
        ? targets.contextDirectories.filter(directory => canWatchDirectory(directory, false))
        : targets.directories.filter(directory => canWatchDirectory(directory, true))
    for (const directory of directories) {
      context.addWatchFile(directory)
    }
  }

  function flushPendingProgramChanges() {
    if (!pendingProgramChanges.size) return

    const changedSourceFiles = rebuildRuntimeProgram(runtime, [...pendingProgramChanges.values()])
    for (const sourceFile of changedSourceFiles) {
      runtime.addRootFile(sourceFile)
    }
    pendingProgramChanges.clear()
  }

  function hasVueFilesInDir(dir: string): boolean {
    try {
      const entries = readdirSync(dir, { withFileTypes: true })
      for (const entry of entries) {
        if (entry.isFile() && entry.name.endsWith('.vue')) {
          return true
        }
        if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
          const subEntries = readdirSync(`${dir}/${entry.name}`, { withFileTypes: true })
          if (subEntries.some(f => f.isFile() && f.name.endsWith('.vue'))) {
            return true
          }
        }
      }
      return false
    } catch {
      return false
    }
  }

  function prepareFromCompiler(compiler: WebpackCompiler | RspackCompiler) {
    root = ensureAbsolute(options.root ?? '', compiler.context)
    isDev = compiler.options.mode === 'development'
    logger = compiler.getInfrastructureLogger(pluginName)

    entryPromise = (async () => {
      if (typeof compiler.options.entry === 'function') {
        return await compiler.options.entry()
      }
      return compiler.options.entry
    })().then(entry => {
      entries = Object.keys(entry).reduce(
        (prev, current) => {
          const imports = entry[current].import

          if (imports) {
            prev[current] = imports[0]
          }

          return prev
        },
        {} as Record<string, string>,
      )
    })

    const aliasOptions = compiler.options.resolve.alias ?? []

    if (Array.isArray(aliasOptions)) {
      aliases = ensureArray(aliasOptions)
        .filter(alias => alias.alias && alias.alias.length > 0)
        .map(alias => ({
          find: alias.name,
          replacement: Array.isArray(alias.alias) ? alias.alias[0] : (alias.alias as string),
        }))
    } else {
      aliases = Object.entries(aliasOptions)
        .filter(([, value]) => value && value.length > 0)
        .map(([key, value]) => {
          return { find: key, replacement: Array.isArray(value) ? value[0] : (value as string) }
        })
    }

    if (compiler.options.output.library) {
      const library = compiler.options.output.library
      let fileName

      if (typeof library.name === 'string') {
        fileName = library.name
      } else if (Array.isArray(library.name)) {
        fileName = library.name[0]
      } else if (library.name?.root) {
        fileName = ensureArray(library.name.root)[0]
      }

      indexName = `${fileName || 'index'}.d.ts`
    }

    if (!options.outDirs && compiler.options.output.path) {
      outDirs = [ensureAbsolute(compiler.options.output.path, root)]
    }
    bundlerOutDirs = compiler.options.output.path
      ? [ensureAbsolute(compiler.options.output.path, root)]
      : []

    handleDebug('parse webpack(rspack) config')
  }

  const rollupHooks: Partial<RollupPlugin> = {
    options(options) {
      captureRollupOutputDirectories(options)
      const input = typeof options.input === 'string' ? [options.input] : options.input

      if (Array.isArray(input)) {
        entries = input.reduce(
          (prev, current) => {
            prev[basename(current)] = current
            return prev
          },
          {} as Record<string, string>,
        )
      } else {
        entries = { ...input }
      }

      logger = {
        info: this.info,
        warn: this.warn,
        error: this.error,
      }

      handleDebug('parse rollup(rolldown) options')
    },
    generateBundle(_, bundle) {
      if (declarationOnly) {
        for (const id of Object.keys(bundle)) {
          delete bundle[id]
        }
      }
    },
  }

  return {
    name: 'unplugin-dts',
    enforce: 'pre',
    async buildStart() {
      if (isDev) return

      if (runtime) {
        const interval = buildTime.begin('buildStart')
        try {
          flushPendingProgramChanges()
          addRuntimeWatchTargets(this)
        } finally {
          buildTime.end(interval)
        }
        return
      }

      handleDebug('begin buildStart')
      buildTime.reset()
      const interval = buildTime.begin('buildStart')

      if (entryPromise) {
        await entryPromise
      }

      aliases = aliases || []

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

      for (const alias of aliases) {
        alias.replacement = resolve(alias.replacement)
      }

      let processor = userProcessor

      let hasVueFiles = userProcessor === 'vue'

      if (!hasVueFiles) {
        const hasVueEntries = entries && Object.values(entries).some(e => e.endsWith('.vue'))
        let hasVueInTsconfig = false
        let hasVueInInclude = false

        if (!hasVueEntries) {
          const includeGlobs = ensureArray(include)
          hasVueInInclude = includeGlobs.some(g => g?.includes('.vue'))

          if (!hasVueInInclude) {
            const configPath = tsconfigPath
              ? ensureAbsolute(tsconfigPath, root)
              : ts.findConfigFile(root, ts.sys.fileExists)

            if (configPath) {
              const config = ts.readJsonConfigFile(configPath, ts.sys.readFile)
              const raw = ts.parseJsonSourceFileConfigFileContent(
                config,
                ts.sys,
                dirname(configPath),
                {},
                configPath,
              ).raw

              const tsIncludes = [
                ...ensureArray(raw?.include ?? []),
                ...ensureArray(raw?.files ?? []),
              ]
              hasVueInTsconfig = tsIncludes.some((g: string) => g.includes('.vue'))
            }
          }
        }

        hasVueFiles = hasVueEntries || hasVueInInclude || hasVueInTsconfig || hasVueFilesInDir(root)
      }

      if (!processor && hasVueFiles) {
        processor = 'vue'
      }

      runtime = await Runtime.toInstance({
        processor,
        root,
        outDirs: options.outDirs ?? outDirs,
        entryRoot,
        tsconfigPath,
        compilerOptions,
        pathsToAliases,
        include,
        exclude,
        resolvers,
        entries,
        aliases: options.aliases ?? aliases,
        aliasesExclude,
        libName,
        indexName,
        logger,
      })

      if (userProcessor === 'ts' && hasVueFiles) {
        logger.warn(
          `\n${logPrefix} ${yellow(
            'Detected .vue files but processor is set to "ts". Vue declaration files may not be generated correctly. Consider using processor: "vue".',
          )}\n`,
        )
      }

      addRuntimeWatchTargets(this)

      if (typeof afterBootstrap === 'function') {
        await unwrapPromise(afterBootstrap(runtime))
      }

      handleDebug('create ts program')
      buildTime.end(interval)
    },
    async transform(code, id) {
      id = normalizePath(id).split('?')[0]

      if (isDev || !runtime) return

      if (!runtime.matchResolver(id) && !tjsRE.test(id)) return

      await buildTime.track('transform', () => runtime.transform(id, code))
    },
    watchChange(id, change) {
      id = normalizePath(id).split('?')[0]

      const isWatchDirectory = runtime && isRuntimeWatchDirectory(runtime, id)
      if (
        isDev ||
        !runtime ||
        (!isWatchDirectory && !shouldHandleRuntimeWatchChange(runtime, id))
      ) {
        return
      }

      if (bundled) buildTime.reset()
      const interval = buildTime.begin('watchChange')

      if (
        !isWatchDirectory &&
        !isRuntimeConfigFile(runtime, id) &&
        !runtime.matchResolver(id) &&
        !tjsRE.test(id)
      ) {
        // Non-type files (e.g. CSS) changed: no need to rebuild program,
        // but need to restore rootFiles and allow writeBundle to re-emit
        // declarations. This is important in watch mode because the bundler
        // may empty outDir during rebuild, deleting previously emitted .d.ts.
        runtime.restoreRootFiles()
        bundled = false
        buildTime.end(interval)
        return
      }

      runtime.restoreRootFiles()
      bundled = false
      queueProgramChange({
        fileName: id,
        event: change?.event,
        forceFresh: isWatchDirectory,
      })

      buildTime.end(interval)
    },
    async writeBundle() {
      if (isDev || !runtime || bundled) {
        runtime?.clearTransformedFiles()
        handleDebug('skip writeBundle')
        return
      }

      bundled = true
      handleDebug('begin writeBundle')
      logger.info(green(`\n${logPrefix} Start generate declaration files...`))

      const interval = buildTime.begin('writeBundle')

      if (typeof afterDiagnostic === 'function') {
        await unwrapPromise(afterDiagnostic(runtime.getDiagnostics()))
      }

      const emittedFiles = await runtime.emitOutput({
        strictOutput,
        copyDtsFiles,
        cleanVueFileName,
        staticImport,
        clearPureImport,
        insertTypesEntry,
        bundleTypes,
        logPrefix,
        beforeWriteFile,
        afterRollup,
      })

      if (typeof afterBuild === 'function') {
        await unwrapPromise(afterBuild(emittedFiles))
      }

      handleDebug('finish')
      buildTime.end(interval)
      const timing = buildTime.summarize()
      handleDebug('timing summary %O', timing)
      logger.info(
        green(`${logPrefix} Declaration files built in ${Math.round(timing.attributedMs)}ms.\n`),
      )
    },
    vite: {
      apply: 'build',
      config(config) {
        const aliasOptions = config?.resolve?.alias ?? []

        const watchOptions = config.build?.watch
        if (watchOptions) {
          const chokidarOptions = watchOptions.chokidar ?? {}
          config.build!.watch = {
            ...watchOptions,
            chokidar: {
              ...chokidarOptions,
              ignored: [
                ...ensureArray(chokidarOptions.ignored),
                (fileName: string) => isInsideWatchIgnoredDirectory(fileName),
              ],
            },
          }
        }

        if (isNativeObj(aliasOptions)) {
          aliases = Object.entries(aliasOptions).map(([key, value]) => {
            return { find: key, replacement: value }
          })
        } else {
          aliases = ensureArray(aliasOptions as Alias[]).map(alias => ({ ...alias }))
        }
      },

      async configResolved(config) {
        logger = config.logger
        root = ensureAbsolute(options.root ?? '', config.root)
        bundlerOutDirs = [ensureAbsolute(config.build.outDir, root)]

        if (config.build.lib) {
          const input =
            typeof config.build.lib.entry === 'string'
              ? [config.build.lib.entry]
              : config.build.lib.entry

          if (Array.isArray(input)) {
            entries = input.reduce(
              (prev, current) => {
                prev[basename(current)] = current
                return prev
              },
              {} as Record<string, string>,
            )
          } else {
            entries = { ...input }
          }

          const filename = config.build.lib.fileName ?? defaultIndex
          const entry =
            typeof config.build.lib.entry === 'string'
              ? config.build.lib.entry
              : Object.keys(config.build.lib.entry)[0]

          libName = config.build.lib.name || '_default'
          indexName = typeof filename === 'string' ? filename : filename('es', entry)

          if (!dtsRE.test(indexName)) {
            indexName = `${indexName.replace(tjsRE, '')}.d.${getJsExtPrefix(indexName)}ts`
          }
        } else {
          logger.warn(
            `\n${logPrefix} ${yellow(
              'You are building a library that may not need to generate declaration files.',
            )}\n`,
          )

          libName = '_default'
          indexName = defaultIndex
        }

        if (!options.outDirs) {
          outDirs = [ensureAbsolute(config.build.outDir, root)]
        }

        handleDebug('parse vite config')
      },
      generateBundle(_, bundle) {
        if (declarationOnly) {
          for (const id of Object.keys(bundle)) {
            delete bundle[id]
          }
        }
      },
    },
    rollup: rollupHooks,
    rolldown: {
      ...(rollupHooks as RolldownPlugin),
    },
    webpack(compiler) {
      prepareFromCompiler(compiler)
      prepareNativeWatchFileSystem(compiler)

      compiler.hooks.emit.tap('UnpluginDtsRemoveAssets', compilation => {
        if (declarationOnly) {
          compilation.assets = {}
        }
      })
    },
    rspack(compiler) {
      prepareFromCompiler(compiler)
      prepareNativeWatchFileSystem(compiler)

      compiler.hooks.thisCompilation.tap('UnpluginDtsRemoveAssets', compilation => {
        compilation.hooks.processAssets.tap(
          {
            name: 'UnpluginDtsRemoveAssets',
            stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE,
          },
          assets => {
            if (declarationOnly) {
              for (const filename of Object.keys(assets)) {
                delete assets[filename]
              }
            }
          },
        )
      })
    },
    esbuild: {
      setup(build) {
        const { entryPoints, outdir, absWorkingDir = process.cwd() } = build.initialOptions

        root = ensureAbsolute(options.root ?? '', absWorkingDir)

        if (Array.isArray(entryPoints)) {
          entries = entryPoints.reduce(
            (prev, current) => {
              if (typeof current === 'string') {
                prev[basename(current)] = current
              } else {
                prev[basename(current.in)] = current.out
              }

              return prev
            },
            {} as Record<string, string>,
          )
        } else {
          entries = { ...entryPoints }
        }

        if (!options.outDirs && outdir) {
          outDirs = [ensureAbsolute(outdir, root)]
        }

        handleDebug('parse esbuild options')
      },
    },
  }
}
