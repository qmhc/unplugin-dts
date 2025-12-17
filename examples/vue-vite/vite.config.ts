import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from 'unplugin-vue/vite'
import vueJsx from 'unplugin-vue-jsx/vite'
import dts from '../../packages/unplugin-dts/src/vite'

export default defineConfig({
  resolve: {
    // alias: {
    //   '@': resolve(__dirname),
    //   '@components': resolve(__dirname, 'src/components')
    // }
    alias: [
      {
        find: /@\//,
        replacement: resolve(__dirname) + '/',
      },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
    ],
  },
  build: {
    // watch: {},
    lib: {
      entry: [resolve(__dirname, 'src/index.ts'), resolve(__dirname, 'src/main.ts')],
      name: 'Test',
      formats: ['es'],
      // fileName: 'test'
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
  plugins: [
    // @ts-ignore
    dts({
      tsconfigPath: resolve('./tsconfig/tsconfig.app.json'),
      processor: 'vue',
      copyDtsFiles: true,
      outDirs: [
        'dist',
        'types',
        // 'types/inner'
      ],
      // include: ['src/index.ts'],
      exclude: ['src/ignore'],
      // staticImport: true,
      insertTypesEntry: true,
      // bundleTypes: true,
      bundleTypes: {
        extractorConfig: {
          docModel: {
            enabled: true,
            apiJsonFilePath: '<projectFolder>/docs/<unscopedPackageName>.api.json',
          },
        },
      },
      compilerOptions: {
        declarationMap: true,
      },
    }),
    vue() as any,
    vueJsx(),
  ],
})
