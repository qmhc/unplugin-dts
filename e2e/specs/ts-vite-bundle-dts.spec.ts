import { beforeAll, describe, expect, it } from 'vitest'

import { buildExample, expectDtsContains, expectFileExists, readDts } from '../test-utils'

describe('ts-vite-bundle-dts', () => {
  beforeAll(async () => {
    await buildExample('ts-vite-bundle-dts')
  })

  it('should generate dist/index.d.ts', () => {
    expectFileExists('ts-vite-bundle-dts', 'dist', 'index.d.ts')
  })

  it('should bundle declare module from external .d.ts file', () => {
    const content = readDts('ts-vite-bundle-dts', 'dist', 'index.d.ts')
    expect(content).toContain("declare module 'axios'")
    expect(content).toContain('isNeedToken')
  })

  it('should re-export bundled types', () => {
    expectDtsContains('ts-vite-bundle-dts', 'dist/index.d.ts', 'export * from "axios"')
  })
})
