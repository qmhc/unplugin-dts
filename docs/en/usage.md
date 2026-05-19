# Usage

**English** | [中文](../zh/usage.md)

## Installation

Requires **Node.js >= 20**.

```sh
pnpm i -D unplugin-dts
```

Previously only for Vite (not recommended):

```sh
pnpm i -D vite-plugin-dts
```

## Bundler Setup

### Vite

In `vite.config.ts`:

```ts
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'unplugin-dts/vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLib',
      formats: ['es'],
      fileName: 'my-lib',
    },
  },
  plugins: [dts()],
})
```

### Rollup

In `rollup.config.mjs`:

```ts
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import dts from 'unplugin-dts/rollup'

export default defineConfig({
  input: {
    index: './src/index.ts',
  },
  output: [
    {
      dir: 'dist',
      exports: 'named',
      format: 'esm',
    },
  ],
  plugins: [typescript(), dts()],
})
```

### Rolldown

In `rolldown.config.mjs`:

```ts
import { defineConfig } from 'rolldown'
import dts from 'unplugin-dts/rolldown'

export default defineConfig({
  input: {
    index: './src/index.ts',
  },
  output: [
    {
      dir: 'dist',
      exports: 'named',
      format: 'esm',
    },
  ],
  plugins: [dts()],
})
```

### Webpack

In `webpack.config.js`:

```ts
import { resolve } from 'node:path'

import dts from 'unplugin-dts/webpack'

export default {
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [dts()],
}
```

### Rspack

In `rspack.config.mjs`:

```ts
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from '@rspack/cli'
import dts from 'unplugin-dts/rspack'

const rootDir = resolve(fileURLToPath(import.meta.url), '..')

export default defineConfig({
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: resolve(rootDir, 'dist'),
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
  plugins: [dts()],
})
```

### Esbuild

In your build script:

```ts
import { build } from 'esbuild'
import dts from 'unplugin-dts/esbuild'

await build({
  entryPoints: ['src/index.ts'],
  format: 'esm',
  outdir: 'dist',
  bundle: true,
  plugins: [dts()],
})
```

## Bundling Types

By default, the generated declaration files follow the source structure.

With the help of [API Extractor](https://api-extractor.com/), the plugin can bundle all types into a single file. You just need to install `@microsoft/api-extractor` and set `bundleTypes: true`:

```sh
pnpm i -D @microsoft/api-extractor
```

```ts
export default defineConfig({
  plugins: [dts({ bundleTypes: true })],
})
```

## Using with Vite Templates

If you are using the official Vite template, you should specify `tsconfigPath`:

```ts
export default defineConfig({
  plugins: [dts({ tsconfigPath: './tsconfig.app.json' })],
})
```

## Using with Vue

If you are using the plugin in a **Vue project**, you need to install `@vue/language-core` as a peer dependency:

```sh
pnpm i -D @vue/language-core
```

The plugin will automatically detect `.vue` files and use the `'vue'` processor when you don't explicitly specify the `processor` option. However, it is still recommended to explicitly set it:

```ts
export default defineConfig({
  plugins: [dts({ processor: 'vue' })],
})
```
