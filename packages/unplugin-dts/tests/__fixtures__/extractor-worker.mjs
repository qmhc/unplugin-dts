import { parentPort, threadId } from 'node:worker_threads'

parentPort.on('message', ({ compilerOptions }) => {
  if (compilerOptions.exit) process.exit(0)
  if (compilerOptions.crash) throw new Error('worker crashed')
  if (compilerOptions.error) {
    parentPort.postMessage({ error: { name: 'TypeError', message: 'extractor failed' } })
    return
  }
  const { barrier } = compilerOptions
  if (barrier) {
    Atomics.add(barrier, 0, 1)
    Atomics.wait(barrier, 1, 0, 5000)
  }
  parentPort.postMessage({
    result: {
      succeeded: true,
      apiReportChanged: false,
      warningCount: threadId,
      errorCount: 0,
    },
  })
})
