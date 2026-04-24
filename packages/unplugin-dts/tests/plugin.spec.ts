import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { relative, resolve } from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'

import { pluginFactory } from '../src/plugin'

describe('plugin tests', () => {
  let tempDir: string

  afterEach(() => {
    if (tempDir) {
      rmSync(tempDir, { recursive: true, force: true })
    }
  })

  it('should allow custom resolver files to pass through transform', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {},
        include: ['**/*'],
      }),
    )

    writeFileSync(resolve(tempDir, 'index.ts'), 'export const foo = 1\n')
    writeFileSync(resolve(tempDir, 'syntax.grammar'), 'export const parser = {}\n')

    let runtime: any

    const plugin = pluginFactory(
      {
        root: tempDir,
        tsconfigPath: 'tsconfig.json',
        resolvers: [
          {
            name: 'grammar-resolver',
            supports: (id: string) => id.endsWith('.grammar'),
            transform: ({ id, root }) => {
              return [
                {
                  path: relative(root, `${id}.d.ts`),
                  content: 'export declare const parser: any;\n',
                },
              ]
            },
          },
        ],
        afterBootstrap: (r: any) => {
          runtime = r
        },
      },
      { framework: 'vite' },
    )

    await (plugin as any).buildStart.call({ addWatchFile: () => {} })

    await (plugin as any).transform('export const parser = {}', resolve(tempDir, 'syntax.grammar'))

    expect(runtime.outputFiles.has(resolve(tempDir, 'syntax.grammar.d.ts'))).toBe(true)
    expect(runtime.outputFiles.get(resolve(tempDir, 'syntax.grammar.d.ts'))).toBe(
      'export declare const parser: any;\n',
    )
  })
})
