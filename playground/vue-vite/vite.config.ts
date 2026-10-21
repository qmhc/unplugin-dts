import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from 'unplugin-vue/vite'
import vueJsx from 'unplugin-vue-jsx/vite'
import dts from '../../packages/unplugin-dts/dist/vite.mjs'

export default defineConfig({
  resolve: {
    // alias: {
    //   '@': resolve(import.meta.dirname),
    //   '@components': resolve(import.meta.dirname, 'src/components')
    // }
    alias: [
      {
        find: /@\//,
        replacement: resolve(import.meta.dirname) + '/',
      },
      { find: '@components', replacement: resolve(import.meta.dirname, 'src/components') },
    ],
  },
  build: {
    // watch: {},
    lib: {
      entry: [
        resolve(import.meta.dirname, 'src/index.ts'),
        resolve(import.meta.dirname, 'src/main.ts'),
      ],
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
      bundleTypes:
        process.env.BUNDLE_TYPES === 'false'
          ? false
          : {
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
