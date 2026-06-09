export * from './api-extractor'
export type * from './types'

import type { BundleTypesProvider, BundleTypesProviderLike } from './types'

export function normalizeProvider(provider: BundleTypesProviderLike): BundleTypesProvider {
  return typeof provider === 'function' ? { bundle: provider } : provider
}
