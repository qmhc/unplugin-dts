import { parentPort } from 'node:worker_threads'

import { bundleDtsFiles } from './api-extractor'

import type { ApiExtractorBundleOptions } from './api-extractor'
import type { ExtractorWorkerResponse } from './worker-pool'

parentPort?.on('message', async (options: ApiExtractorBundleOptions) => {
  let response: ExtractorWorkerResponse
  try {
    const result = await bundleDtsFiles(options, true)
    // ExtractorResult also holds compiler internals which cannot cross a thread boundary.
    response = {
      result: {
        succeeded: result.succeeded,
        apiReportChanged: result.apiReportChanged,
        errorCount: result.errorCount,
        warningCount: result.warningCount,
      },
    }
  } catch (error) {
    response = {
      error:
        error instanceof Error
          ? { name: error.name, message: error.message, stack: error.stack }
          : { name: 'Error', message: String(error) },
    }
  }
  parentPort!.postMessage(response)
})
