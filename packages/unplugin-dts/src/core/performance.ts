import { performance } from 'node:perf_hooks'

export type BuildHook = 'buildStart' | 'watchChange' | 'transform' | 'writeBundle'

interface BuildInterval {
  hook: BuildHook,
  start: number,
  end: number,
}

interface BuildIntervalToken {
  hook: BuildHook,
  start: number,
  generation: number,
}

export interface BuildTimingSummary {
  wallMs: number,
  attributedMs: number,
  unattributedMs: number,
  buildStartMs: number,
  watchChangeMs: number,
  transformSumMs: number,
  transformUnionMs: number,
  transformMaxConcurrency: number,
  transformOverlapMs: number,
  writeBundleMs: number,
}

function measureIntervals(intervals: readonly BuildInterval[]) {
  if (intervals.length === 0) {
    return { sum: 0, union: 0, maxConcurrency: 0 }
  }

  const sum = intervals.reduce((total, interval) => total + interval.end - interval.start, 0)
  const points = intervals.flatMap(interval => [
    { time: interval.start, delta: 1 },
    { time: interval.end, delta: -1 },
  ])

  points.sort((left, right) => {
    if (left.time === right.time) return left.delta - right.delta
    return left.time - right.time
  })

  let active = 0
  let maxConcurrency = 0
  let previous = points[0].time
  let union = 0

  for (const point of points) {
    if (active > 0) union += point.time - previous
    active += point.delta
    maxConcurrency = Math.max(maxConcurrency, active)
    previous = point.time
  }

  return { sum, union, maxConcurrency }
}

/**
 * 跟踪一次声明构建周期内的插件 hook 区间。
 *
 * 逐次耗时之和只用于解释工作量；用户可感知耗时使用单调时钟墙钟，
 * 并发 transform 的归因使用区间并集，避免重复计算重叠时间。
 */
export class BuildTimeTracker {
  private readonly now: () => number
  private generation = 0
  private cycleStart = 0
  private intervals: BuildInterval[] = []

  constructor(now: () => number = () => performance.now()) {
    this.now = now
    this.reset()
  }

  reset(start = this.now()) {
    this.generation++
    this.cycleStart = start
    this.intervals = []
  }

  begin(hook: BuildHook): BuildIntervalToken {
    return { hook, start: this.now(), generation: this.generation }
  }

  end(token: BuildIntervalToken) {
    if (token.generation !== this.generation) return

    const end = this.now()
    this.intervals.push({ hook: token.hook, start: token.start, end })
  }

  async track<T>(hook: BuildHook, action: () => Promise<T>): Promise<T> {
    const interval = this.begin(hook)

    try {
      return await action()
    } finally {
      this.end(interval)
    }
  }

  getIntervals(): readonly BuildInterval[] {
    return [...this.intervals].sort((left, right) => left.start - right.start)
  }

  summarize(end = this.now()): BuildTimingSummary {
    const intervals = this.getIntervals()
    const all = measureIntervals(intervals)
    const phase = (hook: BuildHook) =>
      measureIntervals(intervals.filter(interval => interval.hook === hook))
    const transforms = phase('transform')
    const wallMs = Math.max(0, end - this.cycleStart)

    return {
      wallMs,
      attributedMs: all.union,
      unattributedMs: Math.max(0, wallMs - all.union),
      buildStartMs: phase('buildStart').union,
      watchChangeMs: phase('watchChange').union,
      transformSumMs: transforms.sum,
      transformUnionMs: transforms.union,
      transformMaxConcurrency: transforms.maxConcurrency,
      transformOverlapMs: transforms.sum - transforms.union,
      writeBundleMs: phase('writeBundle').union,
    }
  }
}
