import { beforeAll, describe, expect, it } from 'vitest'

import {
  buildExample,
  expectDtsContains,
  expectFileExists,
  expectFileToMatchSnapshot,
  readDts,
} from '../test-utils'

describe('ts-rollup', () => {
  beforeAll(async () => {
    await buildExample('ts-rollup')
  })

  it('should generate dist/index.d.ts', () => {
    expectFileExists('ts-rollup', 'dist', 'index.d.ts')
  })

  it('should generate dist/main.d.ts', () => {
    expectFileExists('ts-rollup', 'dist', 'main.d.ts')
  })

  it('should generate types/index.d.ts', () => {
    expectFileExists('ts-rollup', 'types', 'index.d.ts')
  })

  it('should contain valid export keywords in dist/index.d.ts', () => {
    expectDtsContains('ts-rollup', 'dist/index.d.ts', 'export')
  })

  it('should match snapshot for dist/index.d.ts', () => {
    expectFileToMatchSnapshot('ts-rollup', 'dist', 'index.d.ts')
  })

  it('should match snapshot for dist/main.d.ts', () => {
    expectFileToMatchSnapshot('ts-rollup', 'dist', 'main.d.ts')
  })

  it('should transform dynamic import types to static imports', () => {
    const content = readDts('ts-rollup', 'dist', 'index.d.ts')
    expect(content).toContain('import { DynamicImportType }')
    expect(content).not.toContain("import('./dynamic')")
  })

  it('should generate decorator class declaration', () => {
    expectDtsContains('ts-rollup', 'dist/decorator.d.ts', 'export declare class Decorator')
  })

  it('should generate enum declarations', () => {
    expectDtsContains('ts-rollup', 'dist/enum.d.ts', 'enum Status')
    expectDtsContains('ts-rollup', 'dist/enum.d.ts', 'enum Color')
  })

  it('should generate type alias declarations', () => {
    expectDtsContains('ts-rollup', 'dist/type-aliases.d.ts', 'type ID')
    expectDtsContains('ts-rollup', 'dist/type-aliases.d.ts', 'type Shape')
  })

  it('should preserve module augmentation', () => {
    expectDtsContains('ts-rollup', 'dist/index.d.ts', 'declare module')
  })

  it('should handle function overloads', () => {
    expectDtsContains('ts-rollup', 'dist/function-overloads.d.ts', 'createElement(tag:')
  })
})
