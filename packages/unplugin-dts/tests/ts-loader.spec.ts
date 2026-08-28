import { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { afterEach, describe, expect, it } from 'vitest'

const require = createRequire(import.meta.url)

describe('TypeScript loader', () => {
  let tempDir: string

  afterEach(() => {
    if (tempDir) rmSync(tempDir, { recursive: true, force: true })
  })

  it('uses the TypeScript 6 compatibility package when TypeScript 7 has no Compiler API', () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-ts-loader-'))
    const loaderPath = resolve(tempDir, 'ts-loader.cjs')
    const typescriptDirectory = resolve(tempDir, 'node_modules/typescript')
    const fallbackDirectory = resolve(tempDir, 'node_modules/@typescript/typescript6')
    mkdirSync(typescriptDirectory, { recursive: true })
    mkdirSync(fallbackDirectory, { recursive: true })
    copyFileSync(
      resolve(dirname(fileURLToPath(import.meta.url)), '../src/core/ts-loader.cjs'),
      loaderPath,
    )
    writeFileSync(
      resolve(typescriptDirectory, 'index.js'),
      "module.exports = { version: '7.0.0' }\n",
    )
    writeFileSync(
      resolve(fallbackDirectory, 'index.js'),
      `module.exports = require(${JSON.stringify(require.resolve('typescript-v6'))})\n`,
    )

    const loaded = require(loaderPath)

    expect(loaded.version).toBe(require('typescript-v6').version)
    expect(loaded.ModuleResolutionKind.Bundler).toBeTypeOf('number')
  })
})
