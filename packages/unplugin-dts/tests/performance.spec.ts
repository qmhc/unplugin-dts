import { describe, expect, it } from 'vitest'

import { BuildTimeTracker } from '../src/core/performance'

describe('build time tracker', () => {
  it('does not double-count concurrently pending transform promises', async () => {
    let now = 0
    const tracker = new BuildTimeTracker(() => now)
    tracker.reset(0)
    let resolveFirst!: () => void
    let resolveSecond!: () => void

    const first = tracker.track(
      'transform',
      () => new Promise<void>(fulfill => (resolveFirst = fulfill)),
    )
    now = 5
    const second = tracker.track(
      'transform',
      () => new Promise<void>(fulfill => (resolveSecond = fulfill)),
    )
    now = 10
    resolveFirst()
    await first
    now = 15
    resolveSecond()
    await second

    const timing = tracker.summarize(15)

    expect(timing.transformSumMs).toBe(20)
    expect(timing.transformUnionMs).toBe(15)
    expect(timing.transformOverlapMs).toBe(5)
    expect(timing.transformMaxConcurrency).toBe(2)
    expect(timing.attributedMs).toBe(15)
    expect(timing.attributedMs).toBeLessThanOrEqual(timing.wallMs)
  })

  it('keeps watchChange before the next build and reports unattributed gaps', () => {
    let now = 0
    const tracker = new BuildTimeTracker(() => now)
    tracker.reset(0)

    now = 1
    const watchChange = tracker.begin('watchChange')
    now = 6
    tracker.end(watchChange)
    now = 10
    const buildStart = tracker.begin('buildStart')
    now = 12
    tracker.end(buildStart)
    const writeBundle = tracker.begin('writeBundle')
    now = 20
    tracker.end(writeBundle)

    expect(tracker.getIntervals().map(interval => interval.hook)).toEqual([
      'watchChange',
      'buildStart',
      'writeBundle',
    ])
    expect(tracker.summarize(20)).toMatchObject({
      wallMs: 20,
      watchChangeMs: 5,
      buildStartMs: 2,
      writeBundleMs: 8,
      attributedMs: 15,
      unattributedMs: 5,
    })
  })
})
