import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from '@rspack/cli'
import { VueLoaderPlugin } from 'vue-loader'
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
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
    modules: ['node_modules', resolve(rootDir, 'node_modules')],
    alias: {
      '@': rootDir,
      '@components': resolve(rootDir, 'src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          experimentalInlineMatchResource: true,
        },
      },
      {
        test: /\.css$/,
        type: 'css',
      },
      {
        enforce: 'post',
        test: /\.jsx?$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'ecmascript',
                  jsx: true,
                },
              },
            },
          },
        ],
      },
      {
        enforce: 'post',
        test: /\.tsx?$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                  decorators: true,
                },
              },
            },
          },
        ],
      },
    ],
  },
  experiments: {
    css: true,
  },
  mode: 'production',
  plugins: [
    dts({
      processor: 'vue',
      outDirs: ['dist', 'types'],
      exclude: ['src/ignore'],
      staticImport: true,
      bundleTypes: true,
      compilerOptions: {
        declarationMap: true,
      },
    }),
    new VueLoaderPlugin(),
  ],
})
