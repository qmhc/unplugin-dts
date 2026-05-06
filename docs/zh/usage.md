# 使用

**中文** | [English](../en/usage.md)

## 安装

```sh
pnpm i -D unplugin-dts
```

过往只在 Vite 中使用（不再推荐）：

```sh
pnpm i -D vite-plugin-dts
```

## 构建工具配置

### Vite

在 `vite.config.ts` 中：

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

在 `rollup.config.mjs` 中：

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

在 `rolldown.config.mjs` 中：

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

在 `webpack.config.js` 中：

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

在 `rspack.config.mjs` 中：

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

在你的构建脚本中：

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

## 打包类型

默认情况，生成的类型文件会跟随源文件的结构。

好在插件借助 [API Extractor](https://api-extractor.com/) 提供了汇总所有类型到一个文件的能力，只需安装 `@microsoft/api-extractor` 并指定 `bundleTypes: true`：

```sh
pnpm i -D @microsoft/api-extractor
```

```ts
export default defineConfig({
  plugins: [dts({ bundleTypes: true })],
})
```

## 配合 Vite 模板使用

如果你从 Vite 官方模板开始，你应该指定 `tsconfigPath`：

```ts
export default defineConfig({
  plugins: [dts({ tsconfigPath: './tsconfig.app.json' })],
})
```

## 配合 Vue 使用

如果你正在一个 **Vue 项目** 中使用它，你需要安装 `@vue/language-core` 作为一个必要依赖：

```sh
pnpm i -D @vue/language-core
```

当你没有显式指定 `processor` 选项时，插件会自动检测 `.vue` 文件并使用 `'vue'` 处理器。不过，仍然建议显式进行设置：

```ts
export default defineConfig({
  plugins: [dts({ processor: 'vue' })],
})
```
