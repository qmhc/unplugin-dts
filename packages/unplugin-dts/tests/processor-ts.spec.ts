import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve } from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'

import { createCompilerHost } from '../src/core/processor/ts'
import ts from '../src/core/ts-loader.cjs'

describe('TypeScript processor host', () => {
  let tempDir: string

  afterEach(() => {
    if (tempDir) rmSync(tempDir, { recursive: true, force: true })
  })

  it('keeps one SourceFile per version and parse key', () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-ts-host-'))
    const sourcePath = resolve(tempDir, 'index.ts')
    writeFileSync(sourcePath, "export const value = 'before'\n")

    const host = createCompilerHost({ target: ts.ScriptTarget.ESNext })
    const first = host.getSourceFile(sourcePath, ts.ScriptTarget.ESNext)!
    const reused = host.getSourceFile(sourcePath, ts.ScriptTarget.ESNext)!
    const optionsFirst = host.getSourceFile(sourcePath, {
      languageVersion: ts.ScriptTarget.ESNext,
      setExternalModuleIndicator() {},
    })!
    const optionsReused = host.getSourceFile(sourcePath, {
      languageVersion: ts.ScriptTarget.ESNext,
      setExternalModuleIndicator() {},
    })!
    const differentTarget = host.getSourceFile(sourcePath, ts.ScriptTarget.ES2020)!
    const forced = host.getSourceFile(sourcePath, ts.ScriptTarget.ES2020, undefined, true)!

    expect(reused).toBe(first)
    expect(optionsFirst).not.toBe(first)
    expect(optionsReused).toBe(optionsFirst)
    expect(differentTarget).not.toBe(first)
    expect(forced).not.toBe(differentTarget)
    expect(host.getSourceFileCacheStats().entries).toBe(1)

    writeFileSync(sourcePath, "export const value = 'after'\n")
    host.invalidateSourceFile(sourcePath)
    const changed = host.getSourceFile(sourcePath, ts.ScriptTarget.ESNext)!

    expect(changed).not.toBe(differentTarget)
    expect(changed.text).toContain("'after'")

    for (let version = 0; version < 3; version++) {
      writeFileSync(sourcePath, `export const value = ${version}\n`)
      host.invalidateSourceFile(sourcePath)
      host.getSourceFile(sourcePath, ts.ScriptTarget.ESNext)
      expect(host.getSourceFileCacheStats().entries).toBe(1)
    }

    expect(host.getSourceFileCacheStats().entries).toBe(1)
  })
})
