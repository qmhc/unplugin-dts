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

## Watch Mode

Keep source directories separate from bundler and declaration output directories. This is the
recommended layout for watch mode because a bundler can observe source-tree additions, deletions,
and renames without also watching generated files:

```text
project/
├── src/
│   └── index.ts
├── dist/
└── types/
```

Vite, Webpack, and Rspack can discover newly added files that match your TypeScript configuration
when the recursive source watch does not resolve into generated output. If an output directory is
the source directory, or a realpath/symlink makes it overlap existing sources, the plugin fails
closed: exact existing source files remain watched, but an unreferenced file addition may require a
watcher restart. This prevents generated files from creating a rebuild loop.

When Webpack or Rspack starts from a clean project and creates nested output directories, Watchpack
may perform one initial compensating rebuild. Generated output is ignored after that bootstrap, so
steady-state source additions, deletions, and renames do not form an output feedback loop.

After a source is deleted or renamed, the plugin removes declaration paths that it wrote during the
previous build but that are absent from the current complete output snapshot. Other files in the
output directory are left unchanged.

Pure Rollup watch cannot safely register a watched source directory that also contains its outputs
without help from the calling configuration. In that layout, an unreferenced new file may not
trigger a rebuild. Prefer moving sources into `src/`. If changing the layout is not possible,
configure all generated output directories as ignored before calling `rollup.watch` and explicitly
watch the type source directory:

```js
import { resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import dts from 'unplugin-dts/rollup'

const projectRoot = resolve(fileURLToPath(import.meta.url), '..')
const outputDir = resolve(projectRoot, 'dist')

const watchTypeRoot = {
  name: 'watch-type-root',
  buildStart() {
    if (this.meta.watchMode) this.addWatchFile(projectRoot)
  },
}

export default defineConfig({
  input: resolve(projectRoot, 'index.ts'),
  output: { dir: outputDir, format: 'es' },
  watch: {
    chokidar: {
      ignored: path => path === outputDir || path.startsWith(`${outputDir}${sep}`),
    },
  },
  plugins: [watchTypeRoot, typescript(), dts({ root: projectRoot })],
})
```

If declarations use a different directory, or you have multiple outputs, include every generated
directory in the ignored predicate. Rolldown currently does not discover unreferenced files created
after watch starts through a directory `addWatchFile`. Import or reference the new file from an
existing watched module, or restart the watcher after adding, deleting, or renaming such files.

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
