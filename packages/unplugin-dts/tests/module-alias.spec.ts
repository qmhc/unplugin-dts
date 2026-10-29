import { mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, it } from 'vitest'

import {
  Runtime,
  getRuntimeWatchTargets,
  isRuntimeConfigFile,
  rebuildRuntimeProgram,
} from '../src/core/runtime'
import ts from '../src/core/ts-loader.cjs'
import { normalizePath } from '../src/core/utils'

import type { CreateRuntimeOptions } from '../src/core/types'

describe('declaration module aliases', () => {
  let root: string

  const write = (path: string, content: string) => {
    path = resolve(root, path)
    mkdirSync(dirname(path), { recursive: true })
    writeFileSync(path, content)
  }
  const read = (path = 'dist/index.d.ts') => readFileSync(resolve(root, path), 'utf8')
  const setup = (
    files: Record<string, string>,
    imports: Record<string, unknown> = { '#src/*': './src/*.js' },
    compilerOptions: Record<string, unknown> = {},
  ) => {
    root = mkdtempSync(resolve(tmpdir(), 'dts-module-alias-'))
    write('package.json', JSON.stringify({ name: 'fixture', type: 'module', imports }))
    write(
      'tsconfig.json',
      JSON.stringify({
        compilerOptions: {
          module: 'ESNext',
          moduleResolution: 'bundler',
          rootDir: './src',
          strict: true,
          types: [],
          paths: { '*': ['./missing/*'], '@/*': ['./generated/*', './src/*'] },
          ...compilerOptions,
        },
        include: ['src/**/*', 'generated/**/*'],
      }),
    )
    for (const [path, content] of Object.entries(files)) write(path, content)
  }
  const create = (options: Partial<CreateRuntimeOptions> = {}) =>
    Runtime.toInstance({ root, ...options })

  afterEach(() => {
    if (root) rmSync(root, { recursive: true, force: true })
  })

  it.each(['bundler', 'nodenext'])(
    'should publish resolvable imports and paths declarations with %s',
    async moduleResolution => {
      setup(
        {
          'src/index.ts': [
            "export type { Item } from '#src/private/utils'",
            `export type { Extra } from '${moduleResolution === 'nodenext' ? '@/extra/index.js' : '@/extra'}'`,
            "import { make } from '#src/private/utils'",
            'export const result = make()',
          ].join('\n'),
          'src/private/utils.ts':
            'export interface Item { value: string }; export const make = (): Item => ({ value: "ok" })',
          'src/extra/index.ts': 'export interface Extra { count: number }',
        },
        undefined,
        { moduleResolution, module: moduleResolution === 'nodenext' ? 'NodeNext' : 'ESNext' },
      )
      const runtime = await create()
      expect(runtime.getDiagnostics().map(d => d.messageText)).toEqual([])
      // 同时覆盖 bundler transform 提前生成入口和 emitOutput 补齐其余声明。
      await runtime.transform(resolve(root, 'src/index.ts'), '')
      await runtime.emitOutput()
      const content = read()
      expect(content).toContain("from './private/utils.js'")
      expect(content).toContain("from './extra/index.js'")
      expect(content).toContain("import('./private/utils.js')")

      write(
        'consumer.mts',
        `import { result, type Item, type Extra } from './dist/index.js'
const item: Item = result
const extra: Extra = { count: 1 }
// @ts-expect-error
const invalid: Item = { value: 1 }
`,
      )
      const options: ts.CompilerOptions = {
        module: ts.ModuleKind.NodeNext,
        moduleResolution: ts.ModuleResolutionKind.NodeNext,
        noEmit: true,
        strict: true,
        types: [],
      }
      const host = ts.createCompilerHost(options)
      const fileExists = host.fileExists.bind(host)
      const readFile = host.readFile.bind(host)
      // 模拟发布包不包含源码，防止错误引用被本地 src 掩盖。
      const sourceDirectory = normalizePath(resolve(root, 'src')) + '/'
      const isSource = (path: string) => normalizePath(path).startsWith(sourceDirectory)
      host.fileExists = path => !isSource(path) && fileExists(path)
      host.readFile = path => (isSource(path) ? undefined : readFile(path))
      const consumer = ts.createProgram([resolve(root, 'consumer.mts')], options, host)
      expect(ts.getPreEmitDiagnostics(consumer).map(d => d.messageText)).toEqual([])
    },
  )

  it.each([
    { pathsToAliases: false, importsToAlias: true },
    { pathsToAliases: true, importsToAlias: false },
    { pathsToAliases: false, importsToAlias: false },
  ])('should independently control paths and imports (%j)', async options => {
    setup(
      {
        'src/index.ts':
          "export type { Item as A } from '#src/item'; export type { Item as B } from '@/item'; export type { Item as C } from '#mapped'",
        'src/item.ts': 'export interface Item { value: string }',
        'src/other.ts': 'export interface Item { value: number }',
      },
      { '#src/*': './src/*.js', '#mapped': './src/other.js' },
      { paths: { '*': ['./missing/*'], '@/*': ['./src/*'], '#mapped': ['./src/item.ts'] } },
    )
    const runtime = await create(options)
    await runtime.emitOutput()
    const content = read()
    expect(content.includes("from '#src/item'")).toBe(!options.importsToAlias)
    expect(content.includes("from '@/item'")).toBe(!options.pathsToAliases)
    expect(content.includes("from '#mapped'")).toBe(!options.pathsToAliases)
    expect(content).not.toContain('./other.js')
  })

  it('should preserve explicit alias priority, exclusions and non-emitted targets', async () => {
    setup({
      'src/index.ts':
        "export type { Item as A } from '#src/item'; export type { Item as B } from '@/item'; export type { Item as C } from '#src/excluded'",
      'src/item.ts': 'export interface Item { value: string }',
      'src/override.ts': 'export interface Item { value: number }',
      'src/excluded.ts': 'export interface Item { value: boolean }',
    })
    const runtime = await create({
      aliases: { '#src/item': resolve(root, 'src/override') },
      aliasesExclude: [/^@\//],
      exclude: ['src/excluded.ts'],
    })
    await runtime.emitOutput()
    expect(read()).toContain("from './override'")
    expect(read()).toContain("from '@/item'")
    expect(read()).toContain("from '#src/excluded'")
  })

  it('should leave external packages and null imports blocked', async () => {
    setup(
      {
        'src/index.ts':
          "export type { Item } from '#external'; export type { Hidden } from '#src/hidden'",
        'src/hidden.ts': 'export interface Hidden { value: string }',
        'node_modules/dep/package.json': JSON.stringify({ name: 'dep', types: 'index.d.ts' }),
        'node_modules/dep/index.d.ts': 'export interface Item { value: string }',
      },
      { '#external': 'dep', '#src/*': './src/*.js', '#src/hidden': null },
    )
    const runtime = await create({ logger: { info() {}, warn() {}, error() {} } })
    expect(runtime.getDiagnostics().map(d => d.code)).toContain(2307)
    await runtime.emitOutput()
    expect(read()).toContain("from '#external'")
    expect(read()).toContain("from '#src/hidden'")
  })

  it('should retain per-reference conditions across declaration formats', async () => {
    setup(
      {
        'src/index.mts': `import type { Flavor as ESM } from '#flavor' with { 'resolution-mode': 'import' }
import type { Flavor as CJS } from '#flavor' with { 'resolution-mode': 'require' }
export interface Result { esm: ESM; cjs: CJS }
export type { Platform } from '#platform'`,
        'src/esm.mts': "export type Flavor = 'esm'",
        'src/cjs.cts': "export type Flavor = 'cjs'",
        'src/browser.ts': "export type Platform = 'browser'",
        'src/server.ts': "export type Platform = 'server'",
      },
      {
        '#flavor': {
          import: { types: './src/esm.mts', default: './src/esm.mjs' },
          require: { types: './src/cjs.cts', default: './src/cjs.cjs' },
        },
        '#platform': { browser: './src/browser.js', default: './src/server.js' },
      },
      { module: 'NodeNext', moduleResolution: 'nodenext', customConditions: ['browser'] },
    )
    const runtime = await create({
      outDirs: [
        { dir: 'dist/esm', moduleFormat: 'esm' },
        { dir: 'dist/cjs', moduleFormat: 'cjs' },
      ],
    })
    expect(runtime.getDiagnostics().map(d => d.messageText)).toEqual([])
    await runtime.emitOutput()
    for (const [format, extension] of [
      ['esm', 'mjs'],
      ['cjs', 'cjs'],
    ]) {
      const content = read(`dist/${format}/index.d.${format === 'esm' ? 'mts' : 'cts'}`)
      expect(content).toContain(`from './esm.${extension}'`)
      expect(content).toContain(`from './cjs.${extension}'`)
      expect(content).toContain(`from './browser.${extension}'`)
      expect(content).not.toContain('./server.')
    }
  })

  it('should refresh fallback paths when a preferred target is created', async () => {
    setup(
      {
        'src/index.ts': "export type { Item } from '@/item'",
        'src/item.ts': 'export interface Item { value: string }',
      },
      undefined,
      { rootDir: '.', paths: { '@/*': ['./generated/*', './src/*'] } },
    )
    const runtime = await create()
    await runtime.emitOutput()
    expect(read('dist/src/index.d.ts')).toContain("from './item.js'")
    write('generated/item.ts', 'export interface Item { value: number }')
    rebuildRuntimeProgram(runtime, {
      fileName: resolve(root, 'generated/item.ts'),
      event: 'create',
    })
    await runtime.emitOutput()
    expect(read('dist/src/index.d.ts')).toContain("from '../generated/item.js'")
  })

  it('should rebuild imports after a package scope changes', async () => {
    setup({
      'src/index.ts': "export type { Item } from '#src/item'",
      'src/item.ts': 'export interface Item { value: string }',
      'src/replacement.ts': 'export interface Item { value: number }',
    })
    const runtime = await create()
    const packagePath = resolve(root, 'package.json')
    expect(getRuntimeWatchTargets(runtime).files).toContain(normalizePath(packagePath))
    expect(isRuntimeConfigFile(runtime, packagePath)).toBe(true)
    await runtime.emitOutput()
    expect(read()).toContain("from './item.js'")
    write(
      'package.json',
      JSON.stringify({
        type: 'module',
        imports: { '#src/*': './src/replacement.js' },
      }),
    )
    rebuildRuntimeProgram(runtime, { fileName: packagePath, event: 'update' })
    await runtime.emitOutput()
    expect(read()).toContain("from './replacement.js'")
  })

  it('should resolve Vue aliases and clean their emitted filenames', async () => {
    setup({
      'src/index.ts': "export { default as Component } from '@/Component.vue'",
      'src/Component.vue': `<script setup lang="ts">
import type { Props } from '#src/props'
defineProps<Props>()
</script>`,
      'src/props.ts': 'export interface Props { value: string }',
    })
    symlinkSync(
      resolve(dirname(fileURLToPath(import.meta.url)), '../../../playground/vue-vite/node_modules'),
      resolve(root, 'node_modules'),
      process.platform === 'win32' ? 'junction' : 'dir',
    )
    const runtime = await create({ processor: 'vue' })
    expect(runtime.getDiagnostics().map(d => d.messageText)).toEqual([])
    await runtime.transform(resolve(root, 'src/Component.vue'), read('src/Component.vue'))
    await runtime.emitOutput({ cleanVueFileName: true })
    expect(read()).toContain("from './Component.js'")
    expect(read('dist/Component.d.ts')).toContain("from './props.js'")
  })
})
