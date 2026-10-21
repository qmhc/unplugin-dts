import { beforeAll, describe, expect, it } from 'vitest'

import {
  buildExample,
  expectDtsContains,
  expectDtsNotContains,
  expectFileExists,
  expectFileToMatchSnapshot,
  readDts,
} from '../test-utils'

describe('vue-rolldown', () => {
  beforeAll(async () => {
    await buildExample('vue-rolldown')
  })

  it('should generate dist/index.d.ts', () => {
    expectFileExists('vue-rolldown', 'dist', 'index.d.ts')
  })

  it('should generate dist/main.d.ts', () => {
    expectFileExists('vue-rolldown', 'dist', 'main.d.ts')
  })

  it('should generate types/index.d.ts', () => {
    expectFileExists('vue-rolldown', 'types', 'index.d.ts')
  })

  it('should not contain .vue imports in dist/index.d.ts', () => {
    expectDtsNotContains('vue-rolldown', 'dist/index.d.ts', "from './App.vue'")
    expectDtsNotContains('vue-rolldown', 'dist/index.d.ts', 'from "./App.vue"')
  })

  it('should match snapshot for dist/index.d.ts', () => {
    expectFileToMatchSnapshot('vue-rolldown', 'dist', 'index.d.ts')
  })

  it('should match snapshot for dist/main.d.ts', () => {
    expectFileToMatchSnapshot('vue-rolldown', 'dist', 'main.d.ts')
  })

  it('should clean .vue imports in d.ts', () => {
    const content = readDts('vue-rolldown', 'dist', 'index.d.ts')
    expect(content).not.toMatch(/from\s+['"]\.\/.*\.vue['"]/)
  })

  it('should generate d.ts for generic component', () => {
    expectDtsContains('vue-rolldown', 'dist/index.d.ts', 'export declare const GenericProps')
  })

  it('should generate d.ts for TSX component', () => {
    expectDtsContains('vue-rolldown', 'dist/index.d.ts', 'export declare const TsxTest')
  })
})
