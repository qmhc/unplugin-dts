import { mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, it, vi } from 'vitest'

// typescript-v6 is "npm:typescript@^6" — provides real TS 6 compilation behaviour
// where the default rootDir is dirname(tsconfig) not the source ancestor.
vi.mock('../src/core/ts-loader.cjs', async () => {
  const ts6 = await import('typescript-v6')
  return { default: ts6.default ?? ts6 }
})

const { Runtime } = await import('../src/core/runtime')
const { normalizePath } = await import('../src/core/utils')

describe('runtime tests (TypeScript 6)', () => {
  let tempDir: string

  afterEach(() => {
    if (tempDir) {
      rmSync(tempDir, { recursive: true, force: true })
    }
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

    expect(normalizePath((runtime as any).publicRoot)).toBe(normalizePath(tempDir))
    expect(normalizePath((runtime as any).entryRoot)).toBe(normalizePath(resolve(tempDir, 'src')))

    await runtime.transform(resolve(tempDir, 'src/index.ts'), '')
    const emittedFiles = await runtime.emitOutput({ insertTypesEntry: false })

    expect(emittedFiles.has(normalizePath(resolve(tempDir, 'dist/index.d.ts')))).toBe(true)
    expect(emittedFiles.has(normalizePath(resolve(tempDir, 'dist/src/index.d.ts')))).toBe(false)
  })

  it('should bundle a non-empty entry declaration when rootDir is not explicitly set', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'package.json'),
      JSON.stringify({
        name: 'test',
        version: '1.0.0',
        types: 'dist/index.d.ts',
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
    const emittedFiles = await runtime.emitOutput({ bundleTypes: true })

    const indexDts = normalizePath(resolve(tempDir, 'dist/index.d.ts'))
    const content = emittedFiles.get(indexDts) ?? readFileSync(indexDts, 'utf-8')

    expect(content).toContain('foo')
    expect(content.trim()).not.toBe('export { }')
  }, 20_000)

  it('should preserve Vue declarations reached only from a TypeScript root', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
    mkdirSync(resolve(tempDir, 'src'))
    symlinkSync(
      resolve(dirname(fileURLToPath(import.meta.url)), '../../../playground/vue-vite/node_modules'),
      resolve(tempDir, 'node_modules'),
      process.platform === 'win32' ? 'junction' : 'dir',
    )
    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          strict: true,
          declaration: true,
        },
        files: ['src/index.ts'],
      }),
    )
    writeFileSync(
      resolve(tempDir, 'src/App.vue'),
      '<script setup lang="ts">\nconst value = 1\ndefineExpose({ value })\n</script>\n',
    )
    writeFileSync(resolve(tempDir, 'src/index.ts'), "export { default as App } from './App.vue'\n")

    const runtime = await Runtime.toInstance({
      processor: 'vue',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
    })
    const declarations = new Map<string, string>()
    runtime
      .getProgram()
      .emit(undefined, (fileName, content) => declarations.set(fileName, content), undefined, true)
    const vueDeclaration = [...declarations].find(([fileName]) =>
      fileName.endsWith('App.vue.d.ts'),
    )?.[1]

    expect(runtime.getDiagnostics()).toEqual([])
    expect(vueDeclaration).toContain('DefineComponent')
    expect(vueDeclaration).not.toContain('__VLS_export: any')
  })
})
