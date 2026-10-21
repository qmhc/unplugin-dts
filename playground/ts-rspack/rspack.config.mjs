import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from '@rspack/cli'
import dts from '../../packages/unplugin-dts/dist/rspack.mjs'

const rootDir = resolve(fileURLToPath(import.meta.url), '..')

export default defineConfig({
  entry: {
    index: './src/index.ts',
    main: './src/main.ts',
  },
  output: {
    path: resolve(rootDir, 'dist'),
    filename: (data) => {
      return `${data.runtime || data.chunk?.name || 'index'}.js`
    },
    library: 'Test',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': resolve(rootDir, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'ecmascript',
                },
              },
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  decorators: true,
                },
              },
            },
          },
        ],
      },
    ],
  },
  mode: 'production',
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
