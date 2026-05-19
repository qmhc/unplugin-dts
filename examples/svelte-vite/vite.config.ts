import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { existsSync, readdirSync, rmSync } from 'node:fs'

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import dts from '../../packages/unplugin-dts/src/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

emptyDir(resolve(__dirname, 'dist'))
emptyDir(resolve(__dirname, 'types'))

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: [resolve(__dirname, 'src/main.ts')],
      name: 'Test',
      formats: ['es'],
    },
  },
  plugins: [
    svelte(),
    // @ts-ignore
    dts({
      outDirs: ['dist', 'types'],
      staticImport: true,
      bundleTypes: true,
      insertTypesEntry: true,
    }),
  ],
})

function emptyDir(dir: string) {
  if (!existsSync(dir)) {
    return
  }

  for (const file of readdirSync(dir)) {
    rmSync(resolve(dir, file), { recursive: true, force: true })
  }
}
