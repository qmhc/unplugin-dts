import { beforeAll, describe, expect, it } from 'vitest'

import {
  buildExample,
  expectDtsContains,
  expectFileExists,
  expectFileToMatchSnapshot,
  readDts,
} from '../test-utils'

describe('ts-rolldown', () => {
  beforeAll(async () => {
    await buildExample('ts-rolldown')
  })

  it('should generate dist/index.d.ts', () => {
    expectFileExists('ts-rolldown', 'dist', 'index.d.ts')
  })

  it('should generate dist/main.d.ts', () => {
    expectFileExists('ts-rolldown', 'dist', 'main.d.ts')
  })

  it('should generate types/index.d.ts', () => {
    expectFileExists('ts-rolldown', 'types', 'index.d.ts')
  })

  it('should contain valid export keywords in dist/index.d.ts', () => {
    expectDtsContains('ts-rolldown', 'dist/index.d.ts', 'export')
  })

  it('should match snapshot for dist/index.d.ts', () => {
    expectFileToMatchSnapshot('ts-rolldown', 'dist', 'index.d.ts')
  })

  it('should match snapshot for dist/main.d.ts', () => {
    expectFileToMatchSnapshot('ts-rolldown', 'dist', 'main.d.ts')
  })

  it('should transform dynamic import types to static imports', () => {
    const content = readDts('ts-rolldown', 'dist', 'index.d.ts')
    expect(content).toContain('import { DynamicImportType }')
    expect(content).not.toContain("import('./dynamic')")
  })

  it('should generate decorator class declaration', () => {
    expectDtsContains('ts-rolldown', 'dist/decorator.d.ts', 'export declare class Decorator')
  })

  it('should generate enum declarations', () => {
    expectDtsContains('ts-rolldown', 'dist/enum.d.ts', 'enum Status')
    expectDtsContains('ts-rolldown', 'dist/enum.d.ts', 'enum Color')
  })

  it('should generate type alias declarations', () => {
    expectDtsContains('ts-rolldown', 'dist/type-aliases.d.ts', 'type ID')
    expectDtsContains('ts-rolldown', 'dist/type-aliases.d.ts', 'type Shape')
  })

  it('should preserve module augmentation', () => {
    expectDtsContains('ts-rolldown', 'dist/index.d.ts', 'declare module')
  })

  it('should handle function overloads', () => {
    expectDtsContains('ts-rolldown', 'dist/function-overloads.d.ts', 'createElement(tag:')
  })
})
