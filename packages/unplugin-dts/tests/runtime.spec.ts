import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
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
})
