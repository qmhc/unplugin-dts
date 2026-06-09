import type { Logger } from '../types'
import type { MaybePromise } from '../utils'

export interface BundleTypesProviderContext {
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

export interface BundleTypesProviderResult {
  succeeded: boolean,
  warningCount?: number,
  errorCount?: number,
  outputPath: string,
  meta?: unknown,
}

export type BundleTypesProviderFn = (
  context: BundleTypesProviderContext
) => MaybePromise<BundleTypesProviderResult>

export interface BundleTypesProvider {
  name?: string,
  bundle: BundleTypesProviderFn,
}

export type BundleTypesProviderLike = BundleTypesProvider | BundleTypesProviderFn
