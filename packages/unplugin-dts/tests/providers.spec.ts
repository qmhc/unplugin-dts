import { describe, expect, it } from 'vitest'

import { normalizeProvider } from '../src/core/providers'

describe('provider tests', () => {
  it('should wrap bundle function provider', async () => {
    const bundle = async () => ({
      succeeded: true,
      outputPath: 'dist/index.d.ts',
    })

    const provider = normalizeProvider(bundle)
    const result = await provider.bundle({} as never)

    expect(provider).toEqual({ bundle })
    expect(result).toEqual({
      succeeded: true,
      outputPath: 'dist/index.d.ts',
    })
  })

  it('should keep object provider unchanged', () => {
    const provider = {
      name: 'custom',
      bundle: async () => ({
        succeeded: true,
        outputPath: 'dist/index.d.ts',
      }),
    }

    expect(normalizeProvider(provider)).toBe(provider)
  })
})
