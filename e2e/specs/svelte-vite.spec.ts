import { beforeAll, describe, it } from 'vitest'

import {
  buildExample,
  expectDtsContains,
  expectFileExists,
  expectFileToMatchSnapshot,
} from '../test-utils'

describe('svelte-vite', () => {
  beforeAll(async () => {
    await buildExample('svelte-vite')
  })

  it('should generate dist/index.d.ts', () => {
    expectFileExists('svelte-vite', 'dist', 'index.d.ts')
  })

  it('should generate types/index.d.ts', () => {
    expectFileExists('svelte-vite', 'types', 'index.d.ts')
  })

  it('should contain valid export keywords in dist/index.d.ts', () => {
    expectDtsContains('svelte-vite', 'dist/index.d.ts', 'export')
  })

  it('should match snapshot for dist/index.d.ts', () => {
    expectFileToMatchSnapshot('svelte-vite', 'dist', 'index.d.ts')
  })
})
