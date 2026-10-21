import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import dts from '../../packages/unplugin-dts/dist/vite.mjs'

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: resolve(import.meta.dirname, 'tsconfig.json'),
      bundleTypes: true,
      entryRoot: '.',
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'BundleDtsTest',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['axios'],
    },
  },
})
