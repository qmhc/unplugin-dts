import { resolve } from 'node:path'

import { defineConfig } from 'rolldown'
import vue from 'unplugin-vue/rolldown'
import vueJsx from 'unplugin-vue-jsx/rolldown'
import dts from '../../packages/unplugin-dts/dist/rolldown.cjs'

export default defineConfig({
  input: {
    index: './src/index.ts',
    main: './src/main.ts',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.vue', '.jsx', '.tsx'],
    alias: {
      '@': resolve(__dirname),
      '@components': resolve(__dirname, 'src/components'),
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
      processor: 'vue',
      outDirs: ['dist', 'types'],
      // include: ['src/index.ts'],
      exclude: ['src/ignore'],
      // aliasesExclude: [/^@components/],
      staticImport: true,
      insertTypesEntry: true,
      bundleTypes: true,
      // declarationOnly: true,
      compilerOptions: {
        declarationMap: true,
      },
    }),
    vue(),
    vueJsx(),
  ],
})
