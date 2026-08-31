import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  realpathSync,
  renameSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve } from 'node:path'

import { afterEach, describe, expect, it } from 'vitest'

import { rspack } from '@rspack/core'
import { watch as rollupWatch } from 'rollup'
import { build } from 'vite'
import webpack from 'webpack'

import { normalizePath } from '../src/core/utils'
import { mergeNativeWatchIgnored } from '../src/plugin'
import rollupDts from '../src/rollup'
import rspackDts from '../src/rspack'
import viteDts from '../src/vite'
import webpackDts from '../src/webpack'

import type { RollupWatcher, RollupWatcherEvent } from 'rollup'
import type { Runtime } from '../src/core/runtime'

interface Watching {
  close(callback: () => void): void,
}

interface WatchCompiler {
  hooks: {
    afterDone: {
      tap(name: string, callback: () => void): void,
    },
    invalid: {
      tap(name: string, callback: (fileName?: string) => void): void,
    },
  },
  modifiedFiles?: ReadonlySet<string>,
  removedFiles?: ReadonlySet<string>,
  watch(
    options: { aggregateTimeout: number },
    callback: (error?: Error | null, stats?: { hasErrors(): boolean, toString(): string }) => void
  ): Watching,
}

describe('native watch ignored merging', () => {
  const asPredicate = (ignored: ReturnType<typeof mergeNativeWatchIgnored>) =>
    ignored as (fileName: string) => boolean

  it('should preserve Watchpack string and string-array glob semantics', () => {
    const stringIgnored = asPredicate(mergeNativeWatchIgnored('**/node_modules', () => false))
    const arrayIgnored = asPredicate(mergeNativeWatchIgnored(['**/*.tmp', '**/cache'], () => false))

    expect(stringIgnored('/project/node_modules/package/index.js')).toBe(true)
    expect(stringIgnored('/project/src/index.ts')).toBe(false)
    expect(arrayIgnored('/project/src/result.tmp')).toBe(true)
    expect(arrayIgnored('/project/cache/item.json')).toBe(true)
    expect(arrayIgnored('/project/src/item.json')).toBe(false)
  })

  it('should preserve function input and match additional paths literally', () => {
    const received: string[] = []
    const outputDirectory = '/project[alias]/bundle'
    const merged = asPredicate(
      mergeNativeWatchIgnored(
        fileName => {
          received.push(fileName)
          return fileName.endsWith('.cache')
        },
        fileName => fileName === outputDirectory || fileName.startsWith(`${outputDirectory}/`),
      ),
    )

    expect(merged('C:\\project\\source.cache')).toBe(true)
    expect(received).toEqual(['C:\\project\\source.cache'])
    expect(merged('/project[alias]/bundle/index.js')).toBe(true)
    expect(merged('/projecta/bundle/index.js')).toBe(false)
  })
})

function writeFixture(root: string, include: string, entry: string) {
  writeFileSync(
    resolve(root, 'tsconfig.json'),
    JSON.stringify({ compilerOptions: { strict: true }, include: [include] }),
  )
  writeFileSync(resolve(root, entry), 'export const entry = true\n')
}

function createTempDirectory(prefix: string) {
  return mkdtempSync(resolve(realpathSync.native(tmpdir()), prefix))
}

async function waitForViteBundle(watcher: RollupWatcher, timeoutMs: number) {
  return await new Promise<void>((fulfill, reject) => {
    const timer = setTimeout(
      () => finish(new Error('Timed out waiting for Vite bundle')),
      timeoutMs,
    )
    function finish(error?: Error) {
      clearTimeout(timer)
      watcher.off('event', onEvent)
      error ? reject(error) : fulfill()
    }
    function onEvent(event: RollupWatcherEvent) {
      if (event.code === 'BUNDLE_END') finish()
      else if (event.code === 'ERROR') {
        finish(new Error(event.error?.message ?? 'Vite watch failed'))
      }
    }
    watcher.on('event', onEvent)
  })
}

async function runContextWatch(
  compiler: WatchCompiler,
  root: string,
  declarationPath: string,
  maximumBuilds: number,
) {
  let builds = 0
  let initialBuilds = 0
  let phase: 'initial' | 'create' = 'initial'
  let watching: Watching

  await new Promise<void>((fulfill, reject) => {
    let settled = false
    let actionTimer: ReturnType<typeof setTimeout> | undefined
    const timeout = setTimeout(
      () => finish(new Error('Timed out waiting for context dependency rebuild')),
      10_000,
    )
    function finish(error?: Error) {
      if (settled) return
      settled = true
      clearTimeout(timeout)
      if (actionTimer) clearTimeout(actionTimer)
      watching.close(() => (error ? reject(error) : fulfill()))
    }

    watching = compiler.watch({ aggregateTimeout: 50 }, (error, stats) => {
      if (error || stats?.hasErrors()) {
        finish(error ?? new Error(stats?.toString() || 'Compiler watch failed'))
        return
      }

      builds++
      if (phase === 'initial') {
        initialBuilds++
        if (initialBuilds >= maximumBuilds) {
          finish(new Error('Context watcher exceeded its bootstrap build allowance'))
          return
        }
        if (actionTimer) clearTimeout(actionTimer)
        actionTimer = setTimeout(() => {
          phase = 'create'
          writeFileSync(resolve(root, 'src/new.ts'), 'export const created = true\n')
        }, 3000)
        return
      }

      if (builds !== initialBuilds + 1 || !existsSync(declarationPath)) {
        finish(new Error('Context source creation did not produce exactly one valid rebuild'))
        return
      }
      actionTimer = setTimeout(() => {
        if (builds !== initialBuilds + 1) {
          finish(new Error('Generated output triggered an unexpected context rebuild'))
        } else {
          finish()
        }
      }, 750)
    })
  })

  expect(builds).toBe(initialBuilds + 1)
  expect(builds).toBeLessThanOrEqual(maximumBuilds)
  expect(existsSync(declarationPath)).toBe(true)
}

async function runUnsafeRootWatchLifecycle(
  compiler: WatchCompiler,
  root: string,
  outputDirectory: string,
  getRuntime: () => Runtime,
) {
  let builds = 0
  let bootstrapBuilds = 0
  let watching: Watching
  const pendingInvalidations: string[] = []

  await new Promise<void>((fulfill, reject) => {
    let settled = false
    let expectedBuild: 'initial' | 'probe' | 'create' | 'rename' | 'delete' | 'stable' = 'initial'
    let pendingAction: (() => void) | undefined
    let actionTimer: ReturnType<typeof setTimeout> | undefined
    let quietTimer: ReturnType<typeof setTimeout> | undefined
    const timeout = setTimeout(
      () => finish(new Error(`Timed out waiting for ${expectedBuild} compiler build`)),
      20_000,
    )
    function finish(error?: Error) {
      if (settled) return
      settled = true
      clearTimeout(timeout)
      if (actionTimer) clearTimeout(actionTimer)
      if (quietTimer) clearTimeout(quietTimer)
      watching.close(() => (error ? reject(error) : fulfill()))
    }

    function afterWatchReady(action: () => void) {
      pendingAction = action
    }

    compiler.hooks.invalid.tap('unplugin-dts-watch-test', fileName => {
      if (fileName) pendingInvalidations.push(normalizePath(fileName))
    })

    compiler.hooks.afterDone.tap('unplugin-dts-watch-test', () => {
      const action = pendingAction
      if (!action || settled) return
      if (actionTimer) clearTimeout(actionTimer)
      actionTimer = setTimeout(() => {
        if (pendingAction !== action) return
        pendingAction = undefined
        try {
          action()
        } catch (error) {
          finish(error instanceof Error ? error : new Error(String(error)))
        }
      }, 500)
    })

    watching = compiler.watch({ aggregateTimeout: 50 }, (error, stats) => {
      if (error || stats?.hasErrors()) {
        finish(error ?? new Error(stats?.toString() || 'Compiler watch failed'))
        return
      }

      builds++
      try {
        const invalidations = pendingInvalidations.splice(0)
        const modifiedFiles = [...(compiler.modifiedFiles ?? [])].map(normalizePath)
        const removedFiles = [...(compiler.removedFiles ?? [])].map(normalizePath)
        const normalizedOutputDirectory = normalizePath(outputDirectory)
        const isOutputPath = (fileName: string) =>
          fileName === normalizedOutputDirectory ||
          fileName.startsWith(`${normalizedOutputDirectory}/`)
        expect([...invalidations, ...modifiedFiles, ...removedFiles].some(isOutputPath)).toBe(false)

        if (pendingAction) {
          if (expectedBuild === 'probe' && bootstrapBuilds === 0) {
            bootstrapBuilds++
            return
          }
          finish(
            new Error(
              `Unexpected ${expectedBuild} rebuild before its source action; invalidations=${JSON.stringify(invalidations)}`,
            ),
          )
          return
        }

        if (expectedBuild === 'initial') {
          expectedBuild = 'probe'
          afterWatchReady(() => {
            writeFileSync(resolve(root, 'index.ts'), 'export const entry = false\n')
          })
          return
        }

        if (expectedBuild === 'probe') {
          const probeSource = getRuntime()
            .getProgram()
            .getSourceFile(normalizePath(resolve(root, 'index.ts')))
          if (!probeSource?.text.includes('false') && bootstrapBuilds === 0) {
            bootstrapBuilds++
            return
          }
          expect(probeSource?.text).toContain('false')
          expectedBuild = 'create'
          afterWatchReady(() => {
            writeFileSync(resolve(root, 'new.ts'), 'export const created = true\n')
          })
          return
        }

        if (expectedBuild === 'create') {
          const createdDeclaration = existsSync(resolve(outputDirectory, 'new.d.ts'))
          const createdSource = getRuntime()
            .getProgram()
            .getSourceFile(normalizePath(resolve(root, 'new.ts')))
          expect(modifiedFiles).toContain(normalizePath(root))
          expect(createdDeclaration).toBe(true)
          expect(createdSource).toBeTruthy()
          expectedBuild = 'rename'
          afterWatchReady(() => {
            renameSync(resolve(root, 'new.ts'), resolve(root, 'renamed.ts'))
          })
          return
        }

        if (expectedBuild === 'rename') {
          const previousSource = getRuntime()
            .getProgram()
            .getSourceFile(normalizePath(resolve(root, 'new.ts')))
          const renamedSource = getRuntime()
            .getProgram()
            .getSourceFile(normalizePath(resolve(root, 'renamed.ts')))
          const renamedDeclaration = existsSync(resolve(outputDirectory, 'renamed.d.ts'))
          expect(previousSource).toBeFalsy()
          expect(renamedSource).toBeTruthy()
          expect(renamedDeclaration).toBe(true)
          expectedBuild = 'delete'
          afterWatchReady(() => {
            rmSync(resolve(root, 'renamed.ts'))
          })
          return
        }

        if (expectedBuild === 'stable') {
          finish(new Error('Generated output triggered an unexpected compiler rebuild'))
          return
        }

        const deletedSource = getRuntime()
          .getProgram()
          .getSourceFile(normalizePath(resolve(root, 'renamed.ts')))
        expect(deletedSource).toBeFalsy()
        expectedBuild = 'stable'
        afterWatchReady(() => {
          watching.close(() => {
            const closedBuilds = builds
            writeFileSync(resolve(root, 'after-close.ts'), 'export const closed = true\n')
            quietTimer = setTimeout(() => {
              if (builds !== closedBuilds) {
                finish(new Error('Closed compiler watcher rebuilt after a source change'))
              } else {
                settled = true
                clearTimeout(timeout)
                fulfill()
              }
            }, 500)
          })
        })
      } catch (callbackError) {
        finish(callbackError instanceof Error ? callbackError : new Error(String(callbackError)))
      }
    })
  })

  expect(bootstrapBuilds).toBeLessThanOrEqual(1)
  expect(builds).toBe(5 + bootstrapBuilds)
}

async function runSymlinkOutputWatch(
  compiler: WatchCompiler,
  root: string,
  sourcePath: string,
  getRuntime: () => Runtime,
) {
  let builds = 0
  let initialBuilds = 0
  let phase: 'initial' | 'structural' | 'update' = 'initial'
  let watching: Watching

  await new Promise<void>((fulfill, reject) => {
    let settled = false
    let actionTimer: ReturnType<typeof setTimeout> | undefined
    const timeout = setTimeout(
      () => finish(new Error('Timed out waiting for symlink output watcher')),
      15_000,
    )
    function finish(error?: Error) {
      if (settled) return
      settled = true
      clearTimeout(timeout)
      if (actionTimer) clearTimeout(actionTimer)
      watching.close(() => (error ? reject(error) : fulfill()))
    }

    watching = compiler.watch({ aggregateTimeout: 50 }, (error, stats) => {
      if (error || stats?.hasErrors()) {
        finish(error ?? new Error(stats?.toString() || 'Compiler watch failed'))
        return
      }

      builds++
      if (phase === 'initial') {
        initialBuilds++
        if (initialBuilds > 2) {
          finish(new Error('Symlinked output triggered more than one bootstrap rebuild'))
          return
        }
        if (actionTimer) clearTimeout(actionTimer)
        actionTimer = setTimeout(() => {
          phase = 'structural'
          writeFileSync(resolve(root, 'src/new.ts'), 'export const created = true\n')
          actionTimer = setTimeout(() => {
            if (builds !== initialBuilds) {
              finish(new Error('Symlinked output kept a source context dependency active'))
              return
            }
            phase = 'update'
            writeFileSync(sourcePath, 'export const entry = false\n')
          }, 750)
        }, 3000)
        return
      }

      if (phase === 'structural') {
        finish(new Error('Symlinked output kept a source context dependency active'))
        return
      }

      if (phase === 'update' && builds === initialBuilds + 1) {
        try {
          expect(
            getRuntime().getProgram().getSourceFile(normalizePath(sourcePath))?.text,
          ).toContain('false')
          actionTimer = setTimeout(() => {
            if (builds !== initialBuilds + 1) {
              finish(new Error('Generated symlink output triggered a compiler rebuild'))
              return
            }
            finish()
          }, 750)
        } catch (callbackError) {
          finish(callbackError instanceof Error ? callbackError : new Error(String(callbackError)))
        }
        return
      }

      finish(new Error(`Unexpected compiler rebuild #${builds} for symlinked output`))
    })
  })

  expect(initialBuilds).toBeLessThanOrEqual(2)
  expect(builds).toBe(initialBuilds + 1)
  expect(existsSync(resolve(root, 'src/new.d.ts'))).toBe(false)
}

describe('real watcher regressions', () => {
  let tempDir: string

  afterEach(() => {
    if (tempDir) rmSync(tempDir, { recursive: true, force: true })
  })

  it('should rebuild Vite for a new root-level file with the default outDir', async () => {
    tempDir = createTempDirectory('unplugin-dts-vite-watch-')
    writeFixture(tempDir, '*.ts', 'index.ts')
    const plugin = viteDts({
      root: tempDir,
      processor: 'ts',
      declarationOnly: true,
    })
    const watcher = (await build({
      configFile: false,
      root: tempDir,
      logLevel: 'silent',
      plugins: [plugin],
      build: {
        lib: { entry: resolve(tempDir, 'index.ts'), formats: ['es'], fileName: 'index' },
        outDir: resolve(tempDir, 'dist'),
        emptyOutDir: true,
        watch: { clearScreen: false },
      },
    })) as RollupWatcher

    let bundles = 0
    watcher.on('event', event => {
      if (event.code === 'BUNDLE_END') bundles++
    })
    try {
      await waitForViteBundle(watcher, 10_000)
      await new Promise(fulfill => setTimeout(fulfill, 750))
      expect(bundles).toBe(1)
      writeFileSync(resolve(tempDir, 'new.ts'), 'export const created = true\n')
      await waitForViteBundle(watcher, 5_000)
      await new Promise(fulfill => setTimeout(fulfill, 500))
    } finally {
      await watcher.close()
    }

    expect(bundles).toBe(2)
    expect(existsSync(resolve(tempDir, 'dist/new.d.ts'))).toBe(true)
  })

  it('should ignore safe Vite bundler and declaration output aliases', async () => {
    tempDir = createTempDirectory('unplugin-dts-vite-alias-watch-')
    const realOutputDirectory = resolve(tempDir, 'real-output')
    const outputLink = resolve(tempDir, 'bundle')
    const declarationDirectory = resolve(outputLink, 'types')
    mkdirSync(realOutputDirectory)
    symlinkSync(realOutputDirectory, outputLink, process.platform === 'win32' ? 'junction' : 'dir')
    writeFixture(tempDir, '*.ts', 'index.ts')
    const watcher = (await build({
      configFile: false,
      root: tempDir,
      logLevel: 'silent',
      plugins: [
        viteDts({
          root: tempDir,
          processor: 'ts',
          outDirs: declarationDirectory,
        }),
      ],
      build: {
        lib: { entry: resolve(tempDir, 'index.ts'), formats: ['es'], fileName: 'index' },
        outDir: resolve(outputLink, 'bundle'),
        emptyOutDir: true,
        watch: { clearScreen: false },
      },
    })) as RollupWatcher
    let bundles = 0
    watcher.on('event', event => {
      if (event.code === 'BUNDLE_END') bundles++
    })

    try {
      await waitForViteBundle(watcher, 10_000)
      await new Promise(fulfill => setTimeout(fulfill, 1500))
      expect(bundles).toBe(1)
      writeFileSync(resolve(tempDir, 'new.ts'), 'export const created = true\n')
      await waitForViteBundle(watcher, 5_000)
      await new Promise(fulfill => setTimeout(fulfill, 750))
    } finally {
      await watcher.close()
    }

    expect(bundles).toBe(2)
    expect(existsSync(resolve(realOutputDirectory, 'bundle/index.mjs'))).toBe(true)
    expect(existsSync(resolve(realOutputDirectory, 'types/new.d.ts'))).toBe(true)
  })

  it('should keep exact Vite source watches when declaration outDir contains the source', async () => {
    tempDir = createTempDirectory('unplugin-dts-vite-overlap-')
    writeFixture(tempDir, '*.ts', 'index.ts')
    const sourcePath = resolve(tempDir, 'index.ts')
    let runtime: any
    const watcher = (await build({
      configFile: false,
      root: tempDir,
      logLevel: 'silent',
      plugins: [
        viteDts({
          root: tempDir,
          processor: 'ts',
          declarationOnly: true,
          outDirs: tempDir,
          afterBootstrap(instance) {
            runtime = instance
          },
        }),
      ],
      build: {
        lib: { entry: sourcePath, formats: ['es'], fileName: 'index' },
        outDir: resolve(tempDir, 'dist'),
        emptyOutDir: true,
        watch: { clearScreen: false },
      },
    })) as RollupWatcher
    let bundles = 0
    watcher.on('event', event => {
      if (event.code === 'BUNDLE_END') bundles++
    })

    try {
      await waitForViteBundle(watcher, 10_000)
      await new Promise(fulfill => setTimeout(fulfill, 500))
      writeFileSync(sourcePath, 'export const entry = false\n')
      await waitForViteBundle(watcher, 5_000)
    } finally {
      await watcher.close()
    }

    expect(bundles).toBe(2)
    expect(runtime.getProgram().getSourceFile(normalizePath(sourcePath))?.text).toContain('false')
  })

  it('should fail closed when a Rollup output alias is nested in a source directory', async () => {
    tempDir = createTempDirectory('unplugin-dts-rollup-alias-watch-')
    const sourceDirectory = resolve(tempDir, 'src')
    const realOutputDirectory = resolve(sourceDirectory, 'generated')
    const outputLink = resolve(tempDir, 'bundle')
    const declarationDirectory = resolve(tempDir, 'types')
    mkdirSync(realOutputDirectory, { recursive: true })
    symlinkSync(realOutputDirectory, outputLink, process.platform === 'win32' ? 'junction' : 'dir')
    writeFixture(tempDir, 'src/*.ts', 'src/index.ts')
    const watcher = rollupWatch({
      input: resolve(sourceDirectory, 'index.ts'),
      output: { dir: outputLink, format: 'es' },
      plugins: [rollupDts({ root: tempDir, processor: 'ts', outDirs: declarationDirectory })],
    })
    let bundles = 0
    watcher.on('event', event => {
      if (event.code === 'BUNDLE_END') bundles++
    })

    try {
      await waitForViteBundle(watcher, 10_000)
      await new Promise(fulfill => setTimeout(fulfill, 1500))
      expect(bundles).toBe(1)
      writeFileSync(resolve(sourceDirectory, 'new.ts'), 'export const created = true\n')
      await new Promise(fulfill => setTimeout(fulfill, 1000))
    } finally {
      await watcher.close()
    }

    expect(bundles).toBe(1)
    expect(existsSync(resolve(declarationDirectory, 'new.d.ts'))).toBe(false)
  })

  it('should resolve the nearest existing output symlink ancestor for Webpack watch', async () => {
    tempDir = createTempDirectory('unplugin-dts-symlink-parent-watch-')
    const projectRoot = resolve(tempDir, 'project')
    const sourceDirectory = resolve(projectRoot, 'src')
    const outputLink = resolve(projectRoot, 'bundle')
    const outputDirectory = resolve(outputLink, 'generated')
    mkdirSync(sourceDirectory, { recursive: true })
    writeFixture(projectRoot, 'src/*.ts', 'src/index.ts')
    symlinkSync(sourceDirectory, outputLink, process.platform === 'win32' ? 'junction' : 'dir')
    const config = {
      mode: 'production' as const,
      context: projectRoot,
      entry: './src/index.ts',
      output: { path: outputDirectory, filename: 'index.js' },
      resolve: { extensions: ['.ts', '.js'] },
      plugins: [webpackDts({ root: projectRoot, processor: 'ts' })],
    }
    const compiler = webpack(config) as unknown as WatchCompiler

    await runContextWatch(compiler, projectRoot, resolve(sourceDirectory, 'generated/new.d.ts'), 3)
  }, 15_000)

  it.each([
    ['Webpack', webpackDts, (config: webpack.Configuration) => webpack(config)],
    ['Rspack', rspackDts, (config: Parameters<typeof rspack>[0]) => rspack(config)],
  ] as const)(
    'should safely watch a root-level %s source context with bounded bootstrap rebuilds',
    async (_, createDts, createCompiler) => {
      tempDir = createTempDirectory('unplugin-dts-output-watch-')
      const projectRoot = resolve(tempDir, 'project')
      mkdirSync(projectRoot)
      writeFixture(projectRoot, '*.ts', 'index.ts')
      const outputDirectory = resolve(projectRoot, 'bundle')
      mkdirSync(outputDirectory)
      let runtime!: Runtime
      const config = {
        mode: 'production' as const,
        context: projectRoot,
        entry: './index.ts',
        output: { path: outputDirectory, filename: 'index.js' },
        resolve: { extensions: ['.ts', '.js'] },
        plugins: [
          createDts({
            root: projectRoot,
            processor: 'ts',
            afterBootstrap(instance) {
              runtime = instance
            },
          }),
        ],
      }
      const compiler = createCompiler(config as never) as unknown as WatchCompiler

      await runUnsafeRootWatchLifecycle(compiler, projectRoot, outputDirectory, () => runtime)
    },
    30_000,
  )

  it('should fail closed when the Rspack output symlink resolves into the source tree', async () => {
    tempDir = createTempDirectory('unplugin-dts-symlink-watch-')
    const projectRoot = resolve(tempDir, 'project')
    const sourceDirectory = resolve(projectRoot, 'src')
    const outputDirectory = resolve(projectRoot, 'bundle')
    mkdirSync(sourceDirectory, { recursive: true })
    writeFixture(projectRoot, 'src/*.ts', 'src/index.ts')
    symlinkSync(sourceDirectory, outputDirectory, process.platform === 'win32' ? 'junction' : 'dir')
    const sourcePath = resolve(sourceDirectory, 'index.ts')
    let runtime!: Runtime
    const config = {
      mode: 'production' as const,
      context: projectRoot,
      entry: './src/index.ts',
      output: { path: outputDirectory, filename: 'index.js' },
      resolve: { extensions: ['.ts', '.js'] },
      plugins: [
        rspackDts({
          root: projectRoot,
          processor: 'ts',
          afterBootstrap(instance) {
            runtime = instance
          },
        }),
      ],
    }
    const compiler = rspack(config) as unknown as WatchCompiler

    await runSymlinkOutputWatch(compiler, projectRoot, sourcePath, () => runtime)
  }, 20_000)
})
