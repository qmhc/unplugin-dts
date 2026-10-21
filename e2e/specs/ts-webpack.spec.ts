import { beforeAll, describe, expect, it } from 'vitest'

import {
  buildExample,
  expectDtsContains,
  expectFileExists,
  expectFileToMatchSnapshot,
  readDts,
} from '../test-utils'

describe('ts-webpack', () => {
  beforeAll(async () => {
    await buildExample('ts-webpack')
  })

  it('should generate dist/index.d.ts', () => {
    expectFileExists('ts-webpack', 'dist', 'index.d.ts')
  })

  it('should generate dist/main.d.ts', () => {
    expectFileExists('ts-webpack', 'dist', 'main.d.ts')
  })

  it('should generate types/index.d.ts', () => {
    expectFileExists('ts-webpack', 'types', 'index.d.ts')
  })

  it('should contain valid export keywords in dist/index.d.ts', () => {
    expectDtsContains('ts-webpack', 'dist/index.d.ts', 'export')
  })

  it('should match snapshot for dist/index.d.ts', () => {
    expectFileToMatchSnapshot('ts-webpack', 'dist', 'index.d.ts')
  })

  it('should match snapshot for dist/main.d.ts', () => {
    expectFileToMatchSnapshot('ts-webpack', 'dist', 'main.d.ts')
  })

  it('should transform dynamic import types to static imports', () => {
    const content = readDts('ts-webpack', 'dist', 'index.d.ts')
    expect(content).toContain('import { DynamicImportType }')
    expect(content).not.toContain("import('./dynamic')")
  })

  it('should generate decorator class declaration', () => {
    expectDtsContains('ts-webpack', 'dist/decorator.d.ts', 'export declare class Decorator')
  })

  it('should generate enum declarations', () => {
    expectDtsContains('ts-webpack', 'dist/enum.d.ts', 'enum Status')
    expectDtsContains('ts-webpack', 'dist/enum.d.ts', 'enum Color')
  })

  it('should generate type alias declarations', () => {
    expectDtsContains('ts-webpack', 'dist/type-aliases.d.ts', 'type ID')
    expectDtsContains('ts-webpack', 'dist/type-aliases.d.ts', 'type Shape')
  })

  it('should preserve module augmentation', () => {
    expectDtsContains('ts-webpack', 'dist/index.d.ts', 'declare module')
  })

  it('should handle function overloads', () => {
    expectDtsContains('ts-webpack', 'dist/function-overloads.d.ts', 'createElement(tag:')
  })
})
