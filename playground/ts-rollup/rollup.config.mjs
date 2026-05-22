import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'rollup'
import alias from '@rollup/plugin-alias'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import dts from '../../packages/unplugin-dts/dist/rollup.mjs'

const rootDir = resolve(fileURLToPath(import.meta.url), '..')

export default defineConfig({
  input: {
    index: './src/index.ts',
    main: './src/main.ts',
  },
  output: [
    {
      dir: 'dist',
      exports: 'named',
      format: 'esm',
    },
  ],
  plugins: [
    alias({
      entries: {
        '@': resolve(rootDir, 'src'),
      },
    }),
    typescript(),
    json(),
    dts({
      outDirs: ['dist', 'types'],
      // include: ['src/index.ts'],
      exclude: ['src/ignore'],
      // aliasesExclude: [/^@components/],
      staticImport: true,
      // insertTypesEntry: true,
      // bundleTypes: true,
      // declarationOnly: true,
      compilerOptions: {
        declarationMap: true,
      },
    }),
  ],
})
