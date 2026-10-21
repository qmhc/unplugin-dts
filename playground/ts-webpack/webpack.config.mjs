import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)
const dts = require('../../packages/unplugin-dts/dist/webpack.cjs')

export default {
  entry: {
    index: './src/index.ts',
    main: './src/main.ts',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: (data) => {
      return `${data.runtime || data.chunk?.name || 'index'}.js`
    },
    library: 'Test',
  },
  resolve: {
    symlinks: false,
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: resolve(__dirname, 'tsconfig.json'),
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'production',
  plugins: [
    dts({
      outDirs: ['dist', 'types'],
      exclude: ['src/ignore'],
      staticImport: true,
      compilerOptions: {
        declarationMap: true,
      },
    }),
  ],
}
