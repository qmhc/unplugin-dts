import type { Logger } from '../types'
import type { MaybePromise } from '../utils'

export interface BundleProviderContext {
  root: string,
  tsconfigPath?: string,
  compilerOptions: Record<string, any>,
  outDir: string,
  entryPath: string,
  outputPath: string,
  fileName: string,
  libFolder?: string,
  logger: Logger,
}

export interface BundleProviderResult {
  succeeded: boolean,
  warningCount?: number,
  errorCount?: number,
  outputPath: string,
  meta?: unknown,
}

export type BundleProviderFn = (
  context: BundleProviderContext
) => MaybePromise<BundleProviderResult>

export interface BundleProvider {
  name?: string,
  bundle: BundleProviderFn,
}

export type BundleProviderLike = BundleProvider | BundleProviderFn
