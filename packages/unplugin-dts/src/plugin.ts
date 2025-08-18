import { basename } from 'node:path'

import ts from 'typescript'
import { cyan, green, yellow } from 'kolorist'
import {
  Runtime,
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

import type { RolldownPlugin, RollupPlugin, RspackCompiler, UnpluginFactory, WebpackCompiler } from 'unplugin'
import type { Alias } from 'vite'
import type { PluginOptions } from './types'
import type { Logger } from './core'

const pluginName = 'unplugin:dts'
const logPrefix = cyan(`[${pluginName}]`)

export const pluginFactory: UnpluginFactory<PluginOptions | undefined> = /* #__PURE__ */ (options = {}, meta) => {
  const {
    processor = 'ts',
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
  let timeRecord = 0

  let entryPromise: Promise<any> | undefined

  let runtime: Runtime

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
      aliases = ensureArray(aliasOptions).filter(alias => alias.alias && alias.alias.length > 0).map(alias => ({ find: alias.name, replacement: Array.isArray(alias.alias) ? alias.alias[0] : alias.alias as string }))
    } else {
      aliases = Object.entries(aliasOptions).filter(([, value]) => value && value.length > 0).map(([key, value]) => {
        return { find: key, replacement: Array.isArray(value) ? value[0] : value as string }
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

      indexName = `${(fileName || 'index')}.d.ts`
    }

    if (!options.outDirs && compiler.options.output.path) {
      outDirs = [ensureAbsolute(compiler.options.output.path, root)]
    }

    handleDebug('parse webpack(rspack) config')
  }

  const rollupHooks: Partial<RollupPlugin> = {
    options(options) {
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
      if (isDev || runtime) return

      handleDebug('begin buildStart')
      timeRecord = 0
      const startTime = Date.now()

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
        libName,
        indexName,
        logger,
      })

      if (meta.framework !== 'esbuild') {
        for (const file of runtime.getRootFiles()) {
          this.addWatchFile(file)
        }
      }

      if (typeof afterBootstrap === 'function') {
        await unwrapPromise(afterBootstrap(runtime))
      }

      handleDebug('create ts program')
      timeRecord += Date.now() - startTime
    },
    transform: {
      filter: {
        id: {
          include: [tjsRE, /\.vue$/, /\.svelte$/, /\.json$/],
          exclude: /[\\/]node_modules[\\/]/,
        },
      },
      async handler(code, id) {
        id = normalizePath(id).split('?')[0]

        if (isDev || !runtime) return

        const startTime = Date.now()

        await runtime.transform(id, code)

        timeRecord += Date.now() - startTime
      },
    },
    watchChange(id) {
      id = normalizePath(id)

      if (
        isDev ||
        !runtime ||
        !runtime.filter(id) ||
        (!runtime.matchResolver(id) && !tjsRE.test(id))
      ) {
        return
      }

      id = id.split('?')[0]
      const sourceFile = runtime.getHost().getSourceFile(id, ts.ScriptTarget.ESNext)

      if (sourceFile) {
        for (const file of runtime.getRootFiles()) {
          runtime.addRootFile(file)
        }

        runtime.addRootFile(normalizePath(sourceFile.fileName))

        bundled = false
        timeRecord = 0
        // We lose the fast way to trigger source file re-emit in Volar 1,
        // so now we have to rebuild the program to get the latest declaration
        // files of those changed files.
        runtime.rebuildProgram()
      }
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

      const startTime = Date.now()

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
      logger.info(
        green(`${logPrefix} Declaration files built in ${timeRecord + Date.now() - startTime}ms.\n`),
      )
    },
    vite: {
      apply: 'build',
      config(config) {
        const aliasOptions = config?.resolve?.alias ?? []
  
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
      ...rollupHooks as RolldownPlugin,
    },
    webpack(compiler) {
      prepareFromCompiler(compiler)

      compiler.hooks.emit.tap('UnpluginDtsRemoveAssets', (compilation) => {
        if (declarationOnly) {
          compilation.assets = {}
        }
      })
    },
    rspack(compiler) {
      prepareFromCompiler(compiler)

      compiler.hooks.thisCompilation.tap('UnpluginDtsRemoveAssets', (compilation) => {
        compilation.hooks.processAssets.tap(
          {
            name: 'UnpluginDtsRemoveAssets',
            stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE,
          },
          (assets) => {
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
