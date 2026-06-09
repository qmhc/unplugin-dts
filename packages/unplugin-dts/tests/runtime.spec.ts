import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve } from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'

import { Runtime } from '../src/core/runtime'
import { normalizePath } from '../src/core/utils'

describe('runtime tests', () => {
  let tempDir: string

  afterEach(() => {
    if (tempDir) {
      rmSync(tempDir, { recursive: true, force: true })
    }
  })

  it('should resolve paths relative to tsconfig dir when baseUrl is absent', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          paths: {
            '@/*': ['./src/*'],
          },
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'))
    writeFileSync(resolve(tempDir, 'src', 'index.ts'), 'export const foo = 1\n')
    writeFileSync(resolve(tempDir, 'src', 'helper.ts'), 'export const bar = 2\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      pathsToAliases: true,
    })

    const alias = (runtime as any).aliases.find((a: any) =>
      typeof a.find === 'string' ? a.find === '@/' : a.find.test('@/helper'),
    )

    expect(alias).toBeDefined()
    expect(normalizePath(alias!.replacement)).toBe(normalizePath(resolve(tempDir, 'src/$1')))
  })

  it('should resolve @/* alias when wildcard * path is also present', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          paths: {
            '*': ['./src/*'],
            '@/*': ['./src/*'],
          },
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'))
    writeFileSync(resolve(tempDir, 'src', 'index.ts'), 'export const foo = 1\n')
    writeFileSync(resolve(tempDir, 'src', 'helper.ts'), 'export const bar = 2\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      pathsToAliases: true,
    })

    const atAlias = (runtime as any).aliases.find((a: any) =>
      typeof a.find === 'string' ? a.find === '@/' : a.find.test('@/helper'),
    )

    expect(atAlias).toBeDefined()
    expect(normalizePath(atAlias!.replacement)).toBe(normalizePath(resolve(tempDir, 'src/$1')))
  })

  it('should include .vue files when using glob patterns with processor vue', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        include: ['src/**/*'],
        exclude: ['node_modules', 'dist'],
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          composite: true,
          moduleResolution: 'bundler',
          strict: true,
        },
      }),
    )

    mkdirSync(resolve(tempDir, 'src', 'components'), { recursive: true })
    writeFileSync(
      resolve(tempDir, 'src', 'main.ts'),
      `import App from './App.vue'\nexport { App }\n`,
    )
    writeFileSync(
      resolve(tempDir, 'src', 'App.vue'),
      `<template><HelloWorld /></template>\n<script setup lang="ts">\nimport HelloWorld from './components/HelloWorld.vue'\n</script>\n`,
    )
    writeFileSync(
      resolve(tempDir, 'src', 'components', 'HelloWorld.vue'),
      `<template><div>Hello</div></template>\n<script setup lang="ts">\nconst msg = 'Hello World'\n</script>\n`,
    )

    const runtime = await Runtime.toInstance({
      processor: 'vue',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      entries: {
        main: resolve(tempDir, 'src/main.ts'),
      },
    })

    const diagnostics = runtime.getDiagnostics()
    const ts6307 = diagnostics.filter((d: any) => {
      const msg = typeof d.messageText === 'string' ? d.messageText : d.messageText.messageText
      return msg.includes('not listed within the file list')
    })

    expect(ts6307).toHaveLength(0)
  })

  it('should forward aliasesExclude to Runtime', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {},
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'), { recursive: true })
    writeFileSync(resolve(tempDir, 'src', 'index.ts'), 'export const foo = 1\n')

    const aliasesExclude = [/^@gafe\//]
    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      aliasesExclude,
    })

    expect((runtime as any).aliasesExclude).toEqual(aliasesExclude)
  })

  it('should use baseUrl when explicitly set', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          baseUrl: './lib',
          paths: {
            '@/*': ['./src/*'],
          },
        },
        include: ['lib/src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'lib', 'src'), { recursive: true })
    writeFileSync(resolve(tempDir, 'lib', 'src', 'index.ts'), 'export const foo = 1\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      pathsToAliases: true,
    })

    const alias = (runtime as any).aliases.find((a: any) =>
      typeof a.find === 'string' ? a.find === '@/' : a.find.test('@/helper'),
    )

    expect(alias).toBeDefined()
    expect(normalizePath(alias!.replacement)).toBe(normalizePath(resolve(tempDir, 'lib/src/$1')))
  })

  it('should not create self-referencing synthetic entry when entry dts path equals types path', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          allowImportingTsExtensions: true,
          strict: true,
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'), { recursive: true })
    writeFileSync(
      resolve(tempDir, 'src', 'index.ts'),
      `export { setupCounter } from './counter.ts'\n`,
    )
    writeFileSync(
      resolve(tempDir, 'src', 'counter.ts'),
      `export function setupCounter(element: HTMLButtonElement) {}\n`,
    )

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      entries: {
        index: resolve(tempDir, 'src/index.ts'),
      },
    })

    // Simulate a rebuild by re-transforming the entry file
    await runtime.transform(resolve(tempDir, 'src/index.ts'), '')

    const emittedFiles = await runtime.emitOutput({
      insertTypesEntry: true,
      bundleTypes: false,
    })

    const indexDtsPath = resolve(tempDir, 'dist/index.d.ts')
    const content = emittedFiles.get(normalizePath(indexDtsPath))

    // The entry declaration itself should be preserved, not replaced by a
    // self-referencing synthetic entry like `export * from './index'`.
    expect(content).toContain('setupCounter')
    expect(content).not.toContain("export * from './index'")
  })

  it('should emit to dist/index.d.ts not dist/src/index.d.ts when rootDir is not explicitly set', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          strict: true,
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'), { recursive: true })
    writeFileSync(resolve(tempDir, 'src', 'index.ts'), 'export const foo = 1\n')
    writeFileSync(resolve(tempDir, 'src', 'helper.ts'), 'export const bar = 2\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      entries: {
        index: resolve(tempDir, 'src/index.ts'),
      },
    })

    const srcDir = normalizePath(resolve(tempDir, 'src'))
    expect(normalizePath((runtime as any).publicRoot)).toBe(srcDir)
    expect(normalizePath((runtime as any).entryRoot)).toBe(srcDir)

    await runtime.transform(resolve(tempDir, 'src/index.ts'), '')
    const emittedFiles = await runtime.emitOutput({ insertTypesEntry: false })

    const indexDts = normalizePath(resolve(tempDir, 'dist/index.d.ts'))
    const srcIndexDts = normalizePath(resolve(tempDir, 'dist/src/index.d.ts'))

    expect(emittedFiles.has(indexDts)).toBe(true)
    expect(emittedFiles.has(srcIndexDts)).toBe(false)
  })

  it('should use explicit rootDir as the default entryRoot', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          rootDir: '.',
          strict: true,
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'), { recursive: true })
    writeFileSync(resolve(tempDir, 'src', 'index.ts'), 'export const foo = 1\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      entries: {
        index: resolve(tempDir, 'src/index.ts'),
      },
    })

    const rootDir = normalizePath(tempDir)
    expect(normalizePath((runtime as any).publicRoot)).toBe(rootDir)
    expect(normalizePath((runtime as any).entryRoot)).toBe(rootDir)

    await runtime.transform(resolve(tempDir, 'src/index.ts'), '')
    const emittedFiles = await runtime.emitOutput({ insertTypesEntry: false })

    const indexDts = normalizePath(resolve(tempDir, 'dist/index.d.ts'))
    const srcIndexDts = normalizePath(resolve(tempDir, 'dist/src/index.d.ts'))

    expect(emittedFiles.has(indexDts)).toBe(false)
    expect(emittedFiles.has(srcIndexDts)).toBe(true)
  })

  it('should add .js extension to synthetic entry imports for nodenext compatibility', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'package.json'),
      JSON.stringify({
        name: 'test',
        types: 'dist/main.d.ts',
      }),
    )

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          strict: true,
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'), { recursive: true })
    writeFileSync(resolve(tempDir, 'src', 'index.ts'), 'export const foo = 1\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      entries: {
        index: resolve(tempDir, 'src/index.ts'),
      },
    })

    await runtime.transform(resolve(tempDir, 'src/index.ts'), '')

    const emittedFiles = await runtime.emitOutput({
      insertTypesEntry: true,
      bundleTypes: false,
    })

    const mainDtsPath = resolve(tempDir, 'dist/main.d.ts')
    const content = emittedFiles.get(normalizePath(mainDtsPath))

    expect(content).toContain("export * from './index.js'")
  })

  it('should bundle nested multiple entries back to their entry declaration paths', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'package.json'),
      JSON.stringify({
        name: 'test',
        version: '1.0.0',
      }),
    )

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          strict: true,
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'), { recursive: true })
    writeFileSync(resolve(tempDir, 'src', 'button.ts'), 'export const button = "button"\n')
    writeFileSync(resolve(tempDir, 'src', 'input.ts'), 'export const input = "input"\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      entries: {
        'components/button': resolve(tempDir, 'src/button.ts'),
        'fields/input': resolve(tempDir, 'src/input.ts'),
      },
    })

    await runtime.transform(resolve(tempDir, 'src/button.ts'), '')
    await runtime.transform(resolve(tempDir, 'src/input.ts'), '')

    const emittedFiles = await runtime.emitOutput({ bundleTypes: true })

    const buttonDtsPath = normalizePath(resolve(tempDir, 'dist/components/button.d.ts'))
    const inputDtsPath = normalizePath(resolve(tempDir, 'dist/fields/input.d.ts'))

    const buttonContent = emittedFiles.get(buttonDtsPath) ?? readFileSync(buttonDtsPath, 'utf-8')
    const inputContent = emittedFiles.get(inputDtsPath) ?? readFileSync(inputDtsPath, 'utf-8')

    expect(buttonContent).toContain('button')
    expect(inputContent).toContain('input')
    expect(buttonContent).not.toContain("export * from '../button.js'")
    expect(inputContent).not.toContain("export * from '../input.js'")
    expect(existsSync(resolve(tempDir, 'dist/button.d.ts'))).toBe(false)
    expect(existsSync(resolve(tempDir, 'dist/input.d.ts'))).toBe(false)
  }, 15_000)
})
