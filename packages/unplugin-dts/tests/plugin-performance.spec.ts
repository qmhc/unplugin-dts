import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve } from 'node:path'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { normalizePath } from '../src/core/utils'
import { pluginFactory } from '../src/plugin'

import type { BuildTimeTracker as ActualBuildTimeTracker } from '../src/core/performance'

const timingMock = vi.hoisted(() => ({ trackers: [] as ActualBuildTimeTracker[] }))

vi.mock('../src/core/performance', async importOriginal => {
  const actual = await importOriginal<typeof import('../src/core/performance')>()

  return {
    ...actual,
    BuildTimeTracker: class extends actual.BuildTimeTracker {
      constructor() {
        super()
        timingMock.trackers.push(this)
      }
    },
  }
})

describe('plugin performance lifecycle', () => {
  let tempDir: string

  afterEach(() => {
    timingMock.trackers.length = 0
    if (tempDir) rmSync(tempDir, { recursive: true, force: true })
  })

  it('keeps consecutive watchChange intervals before the next writeBundle', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-performance-'))
    mkdirSync(resolve(tempDir, 'src'))
    const sourcePath = resolve(tempDir, 'src/index.ts')

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({ compilerOptions: {}, include: ['src/**/*'] }),
    )
    writeFileSync(sourcePath, "export const value = 'before'\n")

    const plugin = pluginFactory(
      {
        processor: 'ts',
        root: tempDir,
        outDirs: resolve(tempDir, 'dist'),
        tsconfigPath: 'tsconfig.json',
      },
      { framework: 'vite' },
    )

    await (plugin as any).buildStart.call({ addWatchFile: () => {} })
    await (plugin as any).writeBundle()
    writeFileSync(sourcePath, "export const value = 'after'\n")
    ;(plugin as any).watchChange.call({ addWatchFile: () => {} }, sourcePath, { event: 'update' })
    writeFileSync(sourcePath, "export const value = 'again'\n")
    ;(plugin as any).watchChange.call({ addWatchFile: () => {} }, sourcePath, { event: 'update' })

    const tracker = timingMock.trackers.at(-1)!
    expect(tracker.getIntervals().map(interval => interval.hook)).toEqual([
      'watchChange',
      'watchChange',
    ])

    await (plugin as any).buildStart.call({ addWatchFile: () => {} })
    await (plugin as any).writeBundle()

    expect(tracker.getIntervals().map(interval => interval.hook)).toEqual([
      'watchChange',
      'watchChange',
      'buildStart',
      'writeBundle',
    ])
    expect(tracker.summarize().watchChangeMs).toBeGreaterThan(0)
  })

  it.each([
    { label: 'one-shot build', meta: { watchMode: false }, expectWatch: false },
    { label: 'watch build', meta: { watchMode: true }, expectWatch: true },
    { label: 'context without meta', meta: undefined, expectWatch: true },
  ])(
    'registers watch targets only when they can be used ($label)',
    async ({ meta, expectWatch }) => {
      tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-watch-targets-'))
      mkdirSync(resolve(tempDir, 'src'))
      const sourcePath = resolve(tempDir, 'src/index.ts')

      writeFileSync(
        resolve(tempDir, 'tsconfig.json'),
        JSON.stringify({ compilerOptions: {}, include: ['src/**/*'] }),
      )
      writeFileSync(sourcePath, 'export const value = 1\n')

      const plugin = pluginFactory(
        {
          processor: 'ts',
          root: tempDir,
          outDirs: resolve(tempDir, 'dist'),
          tsconfigPath: 'tsconfig.json',
        },
        { framework: 'vite' },
      )

      const watched: string[] = []
      await (plugin as any).buildStart.call({
        addWatchFile: (id: string) => watched.push(id),
        meta,
      })

      if (expectWatch) {
        expect(watched.map(normalizePath)).toContain(normalizePath(sourcePath))
      } else {
        expect(watched).toEqual([])
      }
    },
  )
})
