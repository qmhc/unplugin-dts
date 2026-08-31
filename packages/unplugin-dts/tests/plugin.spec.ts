import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve as pathResolve, relative } from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'

import { normalizePath } from '../src/core/utils'
import { pluginFactory } from '../src/plugin'

describe('plugin tests', () => {
  let tempDir: string

  afterEach(() => {
    if (tempDir) {
      rmSync(tempDir, { recursive: true, force: true })
    }
  })

  it('should allow custom resolver files to pass through transform', async () => {
    tempDir = mkdtempSync(pathResolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      pathResolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {},
        include: ['**/*'],
      }),
    )

    writeFileSync(pathResolve(tempDir, 'index.ts'), 'export const foo = 1\n')
    writeFileSync(pathResolve(tempDir, 'syntax.grammar'), 'export const parser = {}\n')

    let runtime: any

    const plugin = pluginFactory(
      {
        root: tempDir,
        tsconfigPath: 'tsconfig.json',
        resolvers: [
          {
            name: 'grammar-resolver',
            supports: (id: string) => id.endsWith('.grammar'),
            transform: ({ id, root }) => {
              return [
                {
                  path: relative(root, `${id}.d.ts`),
                  content: 'export declare const parser: any;\n',
                },
              ]
            },
          },
        ],
        afterBootstrap: (r: any) => {
          runtime = r
        },
      },
      { framework: 'vite' },
    )

    await (plugin as any).buildStart.call({ addWatchFile: () => {} })

    await (plugin as any).transform(
      'export const parser = {}',
      pathResolve(tempDir, 'syntax.grammar'),
    )

    const dtsPath = normalizePath(pathResolve(tempDir, 'syntax.grammar.d.ts'))

    expect(runtime.outputFiles.has(dtsPath)).toBe(true)
    expect(runtime.outputFiles.get(dtsPath)).toBe('export declare const parser: any;\n')
  })

  it('should rebuild the queued Program before transforms in buildStart', async () => {
    tempDir = mkdtempSync(pathResolve(tmpdir(), 'unplugin-dts-'))
    const sourcePath = pathResolve(tempDir, 'index.ts')

    writeFileSync(
      pathResolve(tempDir, 'tsconfig.json'),
      JSON.stringify({ compilerOptions: {}, include: ['index.ts'] }),
    )
    writeFileSync(sourcePath, "export const value = 'before'\n")

    let runtime: any
    const plugin = pluginFactory(
      {
        processor: 'ts',
        root: tempDir,
        tsconfigPath: 'tsconfig.json',
        afterBootstrap: (instance: any) => {
          runtime = instance
        },
      },
      { framework: 'vite' },
    )

    await (plugin as any).buildStart.call({ addWatchFile: () => {} })
    const previousProgram = runtime.getProgram()
    writeFileSync(sourcePath, "export const value = 'after'\n")

    expect(
      (plugin as any).watchChange.call({ addWatchFile: () => {} }, sourcePath, { event: 'update' }),
    ).toBeUndefined()
    expect(runtime.getProgram()).toBe(previousProgram)
    expect(runtime.getProgram().getSourceFile(normalizePath(sourcePath)).text).toContain("'before'")

    await (plugin as any).buildStart.call({ addWatchFile: () => {} })
    expect(runtime.getProgram()).not.toBe(previousProgram)
    expect(runtime.getProgram().getSourceFile(normalizePath(sourcePath)).text).toContain("'after'")
  })

  it('should keep the bootstrapped Runtime identity across fresh config rebuilds', async () => {
    tempDir = mkdtempSync(pathResolve(tmpdir(), 'unplugin-dts-'))
    const configPath = pathResolve(tempDir, 'tsconfig.json')
    const sourcePath = pathResolve(tempDir, 'index.ts')
    const otherPath = pathResolve(tempDir, 'other.ts')
    writeFileSync(configPath, JSON.stringify({ include: ['index.ts'] }))
    writeFileSync(sourcePath, 'export const value = true\n')
    writeFileSync(otherPath, 'export const other = true\n')

    let runtime: any
    let bootstrapCalls = 0
    const watched = new Set<string>()
    const context = { addWatchFile: (file: string) => watched.add(normalizePath(file)) }
    const plugin = pluginFactory(
      {
        processor: 'ts',
        root: tempDir,
        tsconfigPath: 'tsconfig.json',
        afterBootstrap: (instance: any) => {
          runtime = instance
          bootstrapCalls++
        },
      },
      { framework: 'vite' },
    )

    await (plugin as any).buildStart.call(context)
    const initialRuntime = runtime
    const initialProgram = runtime.getProgram()
    expect(watched).toContain(normalizePath(configPath))
    expect(watched).toContain(normalizePath(tempDir))

    writeFileSync(configPath, JSON.stringify({ include: ['other.ts'] }))
    ;(plugin as any).watchChange.call(context, configPath, { event: 'update' })
    expect(runtime.getProgram()).toBe(initialProgram)
    await (plugin as any).buildStart.call(context)

    expect(runtime).toBe(initialRuntime)
    expect(runtime.getProgram()).not.toBe(initialProgram)
    expect(runtime.getProgram().getSourceFile(normalizePath(sourcePath))).toBeUndefined()
    expect(runtime.getProgram().getSourceFile(normalizePath(otherPath))).toBeDefined()
    expect(bootstrapCalls).toBe(1)
  })

  it('should pass refreshed diagnostics to afterDiagnostic on each watch build', async () => {
    tempDir = mkdtempSync(pathResolve(tmpdir(), 'unplugin-dts-'))
    const sourcePath = pathResolve(tempDir, 'index.ts')
    writeFileSync(
      pathResolve(tempDir, 'tsconfig.json'),
      JSON.stringify({ compilerOptions: { strict: true }, include: ['index.ts'] }),
    )
    writeFileSync(sourcePath, "export const value: string = 'valid'\n")

    const diagnosticCodes: number[][] = []
    const context = { addWatchFile: () => {} }
    const plugin = pluginFactory(
      {
        processor: 'ts',
        root: tempDir,
        outDirs: pathResolve(tempDir, 'types'),
        tsconfigPath: 'tsconfig.json',
        afterDiagnostic: diagnostics => {
          diagnosticCodes.push(diagnostics.map(diagnostic => diagnostic.code))
        },
      },
      { framework: 'vite' },
    )

    await (plugin as any).buildStart.call(context)
    await (plugin as any).writeBundle()

    writeFileSync(sourcePath, 'export const value: string = 1\n')
    ;(plugin as any).watchChange.call(context, sourcePath, { event: 'update' })
    await (plugin as any).buildStart.call(context)
    await (plugin as any).writeBundle()

    writeFileSync(sourcePath, "export const value: string = 'fixed'\n")
    ;(plugin as any).watchChange.call(context, sourcePath, { event: 'update' })
    await (plugin as any).buildStart.call(context)
    await (plugin as any).writeBundle()

    expect(diagnosticCodes).toHaveLength(3)
    expect(diagnosticCodes[0]).not.toContain(2322)
    expect(diagnosticCodes[1]).toContain(2322)
    expect(diagnosticCodes[2]).not.toContain(2322)
  })

  it('should batch a consistent multi-file update without transient diagnostics', async () => {
    tempDir = mkdtempSync(pathResolve(tmpdir(), 'unplugin-dts-'))
    const firstPath = pathResolve(tempDir, 'a.ts')
    const secondPath = pathResolve(tempDir, 'b.ts')
    writeFileSync(
      pathResolve(tempDir, 'tsconfig.json'),
      JSON.stringify({ compilerOptions: { strict: true }, include: ['*.ts'] }),
    )
    writeFileSync(firstPath, "import { b } from './b'\nexport const a: string = b\n")
    writeFileSync(secondPath, "export const b = 'before'\n")

    const errors: string[] = []
    const diagnosticCodes: number[][] = []
    let runtime: any
    const context = { addWatchFile: () => {} }
    const plugin = pluginFactory(
      {
        processor: 'ts',
        root: tempDir,
        outDirs: pathResolve(tempDir, 'types'),
        tsconfigPath: 'tsconfig.json',
        afterBootstrap(instance: any) {
          runtime = instance
          instance.logger = {
            info() {},
            warn() {},
            error(message: unknown) {
              errors.push(String(message))
            },
          }
        },
        afterDiagnostic: diagnostics => {
          diagnosticCodes.push(diagnostics.map(diagnostic => diagnostic.code))
        },
      },
      { framework: 'vite' },
    )

    await (plugin as any).buildStart.call(context)
    await (plugin as any).writeBundle()
    const previousProgram = runtime.getProgram()
    writeFileSync(firstPath, "import { b } from './b'\nexport const a: number = b\n")
    writeFileSync(secondPath, 'export const b = 1\n')
    ;(plugin as any).watchChange.call(context, firstPath, { event: 'update' })
    ;(plugin as any).watchChange.call(context, secondPath, { event: 'update' })

    expect(runtime.getProgram()).toBe(previousProgram)
    expect(errors).toEqual([])
    await (plugin as any).buildStart.call(context)
    expect(runtime.getProgram()).not.toBe(previousProgram)
    expect(runtime.getDiagnostics()).toEqual([])
    expect(errors).toEqual([])
    await (plugin as any).writeBundle()
    expect(diagnosticCodes).toEqual([[], []])
  })

  it('should register Webpack source directories as context dependencies', async () => {
    tempDir = mkdtempSync(pathResolve(tmpdir(), 'unplugin-dts-'))
    const sourceDirectory = pathResolve(tempDir, 'src')
    const sourcePath = pathResolve(sourceDirectory, 'index.ts')
    const addedPath = pathResolve(sourceDirectory, 'new.ts')
    mkdirSync(sourceDirectory)
    writeFileSync(pathResolve(tempDir, 'tsconfig.json'), JSON.stringify({ include: ['src/*.ts'] }))
    writeFileSync(sourcePath, 'export const value = true\n')

    let runtime: any
    const fileDependencies = new Set<string>()
    const contextDependencies = new Set<string>()
    const context = {
      addWatchFile: (file: string) => fileDependencies.add(normalizePath(file)),
      getNativeBuildContext: () => ({
        framework: 'webpack',
        compilation: { contextDependencies },
      }),
    }
    const plugin = pluginFactory(
      {
        processor: 'ts',
        root: tempDir,
        outDirs: pathResolve(tempDir, 'types'),
        tsconfigPath: 'tsconfig.json',
        afterBootstrap(instance: any) {
          runtime = instance
        },
      },
      { framework: 'webpack', webpack: { compiler: {} as any } },
    )

    await (plugin as any).buildStart.call(context)
    expect(fileDependencies).toContain(normalizePath(sourcePath))
    expect(fileDependencies).not.toContain(normalizePath(sourceDirectory))
    expect(contextDependencies).toContain(normalizePath(sourceDirectory))

    writeFileSync(addedPath, 'export const added = true\n')
    ;(plugin as any).watchChange.call(context, sourceDirectory, { event: 'update' })
    await (plugin as any).buildStart.call(context)
    expect(runtime.getProgram().getSourceFile(normalizePath(addedPath))).toBeDefined()
  })
})
