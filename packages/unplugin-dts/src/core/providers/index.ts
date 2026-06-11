export * from './api-extractor'
export type * from './types'

import type { BundleProvider, BundleProviderLike } from './types'

export function normalizeProvider(provider: BundleProviderLike): BundleProvider {
  return typeof provider === 'function' ? { bundle: provider } : provider
}
