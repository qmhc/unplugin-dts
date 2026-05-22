import { resolve } from 'node:path'

import { defineConfig } from 'rolldown'
import dts from '../../packages/unplugin-dts/dist/rolldown.cjs'

export default defineConfig({
  input: {
    index: './src/index.ts',
    main: './src/main.ts',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  output: [
    {
      dir: 'dist',
      exports: 'named',
      format: 'esm',
    },
  ],
  plugins: [
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
