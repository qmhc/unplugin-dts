import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Runtime } from '../src/core/runtime'
import { normalizePath, resolve } from '../src/core/utils'
import ts from '../src/core/ts-loader.cjs'

function fixture() {
  const root = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-parallel-test-'))
  writeFileSync(
    resolve(root, 'package.json'),
    JSON.stringify({ name: 'parallel-test', version: '1.0.0' }),
  )
  writeFileSync(
    resolve(root, 'tsconfig.json'),
    JSON.stringify({
      compilerOptions: { module: 'ESNext', moduleResolution: 'bundler', strict: true, types: [] },
      include: ['src/**/*'],
    }),
  )
  mkdirSync(resolve(root, 'src'))
  for (const [name, content] of Object.entries({
    shared: 'export interface Shared { id: string }',
    a: `import type { Shared } from './shared'
      export interface A { shared: Shared; tag: 'a' }
      export const createA = (id: string): A => ({ shared: { id }, tag: 'a' })`,
    b: `import type { A } from './a'
      export type { A } from './a'
      export interface B { a: A; count: number }`,
    empty: 'export {}',
  }))
    writeFileSync(resolve(root, `src/${name}.ts`), content)
  return root
}

function entries(root: string) {
  return Object.fromEntries(
    ['a', 'b', 'empty'].map(name => [name, resolve(root, `src/${name}.ts`)]),
  )
}

describe('parallel API Extractor bundling', () => {
  let root: string
  afterEach(() => {
    if (root) rmSync(root, { recursive: true, force: true })
  })

  it.each([-1, 1.5, Infinity, NaN])('rejects invalid workerThreads before writing outputs (%s)', async workerThreads => {
    root = fixture()
    const runtime = await Runtime.toInstance({ root, entries: entries(root) })
    await expect(runtime.emitOutput({ bundleTypes: { workerThreads } })).rejects.toThrow('non-negative integer')
    expect(existsSync(resolve(root, 'dist'))).toBe(false)
  })

  it('matches serial bundles for interdependent entries, ESM/CJS outputs and empty entries', async () => {
    root = fixture()
    let serial: [string, string][] | undefined
    for (const workerThreads of [0, 2, 1]) {
      const out = resolve(root, `dist-${workerThreads}`)
      const cjs = resolve(root, `cjs-${workerThreads}`)
      const runtime = await Runtime.toInstance({
        root,
        entries: entries(root),
        outDirs: [
          { dir: out, moduleFormat: 'esm' },
          { dir: cjs, moduleFormat: 'cjs' },
        ],
      })
      const afterRollup = vi.fn()
      const emitted = await runtime.emitOutput({ bundleTypes: { workerThreads }, afterRollup })
      const contents = [...emitted]
        .map(
          ([name, content]) =>
            [
              name.replace(normalizePath(out), '<esm>').replace(normalizePath(cjs), '<cjs>'),
              content,
            ] as [string, string],
        )
        .sort(([a], [b]) => a.localeCompare(b))
      if (!serial) serial = contents
      else expect(contents).toEqual(serial)
      expect(afterRollup).toHaveBeenCalledTimes(2)
      for (const [result] of afterRollup.mock.calls) {
        expect(result).toMatchObject({
          succeeded: true,
          apiReportChanged: false,
          errorCount: 0,
          warningCount: 0,
        })
      }
      expect(existsSync(resolve(out, 'shared.d.mts'))).toBe(false)
      expect(readFileSync(resolve(out, 'empty.d.mts'), 'utf8')).toMatch(/export\s*\{\s*\}/)

      const consumer = resolve(root, 'consumer.mts')
      writeFileSync(
        consumer,
        `
        import type { A as ESM } from './dist-${workerThreads}/a.mjs'
        import type { B } from './dist-${workerThreads}/b.mjs'
        import type { A as CJS } from './cjs-${workerThreads}/a.cjs'
        const a: ESM = { shared: { id: 'ok' }, tag: 'a' }
        const b: B = { a, count: 1 }
        const c: CJS = a
        // @ts-expect-error Bundling must preserve the shared property's type.
        const invalid: ESM = { shared: { id: 1 }, tag: 'a' }
      `,
      )
      const program = ts.createProgram([consumer], {
        module: ts.ModuleKind.NodeNext,
        moduleResolution: ts.ModuleResolutionKind.NodeNext,
        noEmit: true,
        strict: true,
        types: [],
      })
      expect(
        ts
          .getPreEmitDiagnostics(program)
          .map(d => ts.flattenDiagnosticMessageText(d.messageText, '\n')),
      ).toEqual([])
    }
  }, 30_000)

  it('leaves inputs intact and removes temporary output after extraction fails', async () => {
    root = fixture()
    const temporaryOutputs = () =>
      readdirSync(tmpdir())
        .filter(name => name.startsWith('unplugin-dts-bundle-'))
        .sort()
    const before = temporaryOutputs()
    const runtime = await Runtime.toInstance({ root, entries: entries(root) })
    await expect(
      runtime.emitOutput({
        bundleTypes: {
          workerThreads: 2,
          extractorConfig: { docModel: { enabled: true } },
        },
      }),
    ).rejects.toThrow('public declaration rollups only')
    expect(temporaryOutputs()).toEqual(before)
    expect(readFileSync(resolve(root, 'dist/a.d.ts'), 'utf8')).toContain("from './shared'")
    expect(existsSync(resolve(root, 'dist/shared.d.ts'))).toBe(true)
  }, 15_000)

  it('cleans up when afterRollup rejects and supports a later build', async () => {
    root = fixture()
    const runtime = await Runtime.toInstance({ root, entries: entries(root) })
    await expect(
      runtime.emitOutput({
        bundleTypes: { workerThreads: 2 },
        afterRollup: () => {
          throw new Error('callback failed')
        },
      }),
    ).rejects.toThrow('callback failed')
    await expect(runtime.emitOutput({ bundleTypes: { workerThreads: 1 } })).resolves.toBeInstanceOf(
      Map,
    )
  }, 20_000)
})
