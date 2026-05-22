import { resolve } from 'node:path'
import { existsSync, readdirSync, rmSync } from 'node:fs'

import { defineConfig } from 'vite'
import dts from '../../packages/unplugin-dts/dist/vite.mjs'

emptyDir(resolve(import.meta.dirname, 'dist'))
emptyDir(resolve(import.meta.dirname, 'types'))

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: [
        resolve(import.meta.dirname, 'src/index.ts'),
        resolve(import.meta.dirname, 'src/main.ts'),
      ],
      name: 'ts-test',
      formats: ['es'],
    },
  },
  plugins: [
    // @ts-ignore
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

function emptyDir(dir: string) {
  if (!existsSync(dir)) {
    return
  }

  for (const file of readdirSync(dir)) {
    rmSync(resolve(dir, file), { recursive: true, force: true })
  }
}
