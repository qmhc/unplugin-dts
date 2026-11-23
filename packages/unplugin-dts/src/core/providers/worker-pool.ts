import { createRequire } from 'node:module'
import { dirname } from 'node:path'
import { Worker } from 'node:worker_threads'

import { resolve } from '../utils'

import type { ExtractorResult } from '../types'
import type { ApiExtractorBundleOptions } from './api-extractor'

export type ExtractorWorkerResponse =
  | { result: ExtractorResult }
  | { error: { name: string, message: string, stack?: string } }

interface BundleJob {
  options: ApiExtractorBundleOptions,
  resolve: (result: ExtractorResult) => void,
  reject: (error: Error) => void,
}

interface WorkerSlot {
  worker: Worker,
  job?: BundleJob,
}

export class ApiExtractorWorkerPool {
  private slots: WorkerSlot[] = []
  private queue: BundleJob[] = []
  private closed = false
  private closing: Promise<void> = Promise.resolve()

  constructor(
    private maxWorkers: number,
    private workerPath = resolve(
      dirname(createRequire(import.meta.url).resolve('unplugin-dts/package.json')),
      'dist/api-extractor-worker.mjs',
    ),
  ) {
    if (!Number.isSafeInteger(maxWorkers) || maxWorkers < 1) {
      throw new RangeError('[unplugin-dts] Worker count must be a positive integer.')
    }
  }

  bundle(options: ApiExtractorBundleOptions): Promise<ExtractorResult> {
    if (this.closed) {
      return Promise.reject(new Error('[unplugin-dts] Declaration worker pool is closed.'))
    }

    return new Promise((resolve, reject) => {
      this.queue.push({ options, resolve, reject })
      this.dispatch()
    })
  }

  private dispatch() {
    while (!this.closed && this.queue.length) {
      let slot = this.slots.find(slot => !slot.job)
      if (!slot) {
        if (this.slots.length >= this.maxWorkers) return
        try {
          slot = this.createWorker()
        } catch (error) {
          this.stop(error instanceof Error ? error : new Error(String(error)))
          return
        }
      }

      slot.job = this.queue.shift()!
      try {
        slot.worker.postMessage(slot.job.options)
      } catch (error) {
        this.stop(
          new Error(
            `[unplugin-dts] Could not send declaration options to a worker. ` +
              `Worker options must be structured-cloneable: ${error instanceof Error ? error.message : String(error)}`,
          ),
        )
      }
    }
  }

  private createWorker(): WorkerSlot {
    const worker = new Worker(this.workerPath)
    const slot: WorkerSlot = { worker }
    this.slots.push(slot)
    worker.on('message', (response: ExtractorWorkerResponse) => {
      const job = slot.job
      if (!job || this.closed) return
      slot.job = undefined
      if ('error' in response) {
        const error = new Error(response.error.message)
        error.name = response.error.name
        error.stack = response.error.stack
        job.reject(error)
        this.stop(error)
      } else {
        job.resolve(response.result)
        this.dispatch()
      }
    })
    worker.on('error', error => this.stop(error))
    worker.on('exit', code => {
      if (!this.closed) {
        this.stop(
          new Error(`[unplugin-dts] Declaration worker exited unexpectedly (code ${code}).`),
        )
      }
    })
    return slot
  }

  private stop(error: Error) {
    if (this.closed) return
    this.closed = true
    for (const job of this.queue.splice(0)) job.reject(error)
    for (const slot of this.slots) {
      slot.job?.reject(error)
      slot.job = undefined
    }
    this.closing = Promise.allSettled(this.slots.map(slot => slot.worker.terminate())).then(
      () => undefined,
    )
  }

  async close() {
    this.stop(new Error('[unplugin-dts] Declaration worker pool is closed.'))
    await this.closing
  }
}
