import { beforeAll, describe, expect, it } from 'vitest'

import {
  buildExample,
  expectDtsContains,
  expectFileExists,
  expectFileToMatchSnapshot,
  readDts,
} from '../test-utils'

describe('ts-esbuild', () => {
  beforeAll(async () => {
    await buildExample('ts-esbuild')
  })

  it('should generate dist/index.d.ts', () => {
    expectFileExists('ts-esbuild', 'dist', 'index.d.ts')
  })

  it('should generate dist/main.d.ts', () => {
    expectFileExists('ts-esbuild', 'dist', 'main.d.ts')
  })

  it('should generate types/index.d.ts', () => {
    expectFileExists('ts-esbuild', 'types', 'index.d.ts')
  })

  it('should contain valid export keywords in dist/index.d.ts', () => {
    expectDtsContains('ts-esbuild', 'dist/index.d.ts', 'export')
  })

  it('should match snapshot for dist/index.d.ts', () => {
    expectFileToMatchSnapshot('ts-esbuild', 'dist', 'index.d.ts')
  })

  it('should match snapshot for dist/main.d.ts', () => {
    expectFileToMatchSnapshot('ts-esbuild', 'dist', 'main.d.ts')
  })

  it('should transform dynamic import types to static imports', () => {
    const content = readDts('ts-esbuild', 'dist', 'index.d.ts')
    expect(content).toContain('declare interface DynamicImportType')
    expect(content).not.toContain("import('./dynamic')")
  })

  it('should generate decorator class declaration', () => {
    expectDtsContains('ts-esbuild', 'dist/index.d.ts', 'export declare class Decorator')
  })

  it('should generate enum declarations', () => {
    expectDtsContains('ts-esbuild', 'dist/index.d.ts', 'enum Status')
    expectDtsContains('ts-esbuild', 'dist/index.d.ts', 'enum Color')
  })

  it('should generate type alias declarations', () => {
    expectDtsContains('ts-esbuild', 'dist/index.d.ts', 'type ID')
    expectDtsContains('ts-esbuild', 'dist/index.d.ts', 'type Shape')
  })

  it('should preserve module augmentation', () => {
    expectDtsContains('ts-esbuild', 'dist/index.d.ts', 'declare module')
  })

  it('should handle function overloads', () => {
    expectDtsContains('ts-esbuild', 'dist/index.d.ts', 'createElement(tag:')
  })
})
