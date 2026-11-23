import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { ApiExtractorWorkerPool } from '../src/core/providers/worker-pool'

import type { ApiExtractorBundleOptions } from '../src/core/providers/api-extractor'

const workerPath = fileURLToPath(new URL('./__fixtures__/extractor-worker.mjs', import.meta.url))
const options = (compilerOptions: Record<string, unknown> = {}): ApiExtractorBundleOptions => ({
  root: '',
  outDir: '',
  entryPath: '',
  fileName: 'index.d.ts',
  compilerOptions,
})

describe('API Extractor worker pool', () => {
  let pool: ApiExtractorWorkerPool | undefined
  afterEach(async () => {
    await pool?.close()
  })

  it('runs CPU jobs in separate threads, bounds concurrency and reuses workers', async () => {
    pool = new ApiExtractorWorkerPool(2, workerPath)
    const barrier = new Int32Array(new SharedArrayBuffer(8))
    const jobs = [0, 1, 2, 3].map(() => pool!.bundle(options({ barrier })))
    await vi.waitFor(() => expect(Atomics.load(barrier, 0)).toBe(2), { timeout: 5000 })
    Atomics.store(barrier, 1, 1)
    Atomics.notify(barrier, 1)
    const results = await Promise.all(jobs)
    expect(Atomics.load(barrier, 0)).toBe(4)
    expect(new Set(results.map(result => result.warningCount)).size).toBe(2)
    expect(results.every(result => result.succeeded)).toBe(true)
  })

  it.each(['error', 'crash', 'exit'] as const)(
    'rejects active and queued jobs on %s',
    async failure => {
      pool = new ApiExtractorWorkerPool(1, workerPath)
      const results = await Promise.allSettled([
        pool.bundle(options({ [failure]: true })),
        pool.bundle(options()),
      ])
      expect(results.every(result => result.status === 'rejected')).toBe(true)
      const result = results[0] as PromiseRejectedResult
      expect(result.reason.message).toContain(
        { error: 'extractor failed', crash: 'worker crashed', exit: 'exited unexpectedly' }[failure],
      )
      await expect(pool.bundle(options())).rejects.toThrow('pool is closed')
    },
  )

  it('rejects non-cloneable options and shuts down', async () => {
    pool = new ApiExtractorWorkerPool(1, workerPath)
    await expect(pool.bundle(options({ callback() {} }))).rejects.toThrow('structured-cloneable')
    await pool.close()
  })

  it('rejects active and queued jobs when explicitly closed', async () => {
    pool = new ApiExtractorWorkerPool(1, workerPath)
    const barrier = new Int32Array(new SharedArrayBuffer(8))
    const results = Promise.allSettled([pool.bundle(options({ barrier })), pool.bundle(options())])
    await vi.waitFor(() => expect(Atomics.load(barrier, 0)).toBe(1), { timeout: 5000 })
    await pool.close()
    expect((await results).every(result => result.status === 'rejected')).toBe(true)
    await pool.close()
  })

  it('reports worker startup failures without leaving queued work pending', async () => {
    pool = new ApiExtractorWorkerPool(1, workerPath + '.missing')
    const results = await Promise.allSettled([pool.bundle(options()), pool.bundle(options())])
    expect(results.every(result => result.status === 'rejected')).toBe(true)
  })

  it.each([0, -1, 1.5, Infinity, NaN])('rejects invalid worker limits (%s)', limit => {
    expect(() => new ApiExtractorWorkerPool(limit, workerPath)).toThrow('positive integer')
  })
})
