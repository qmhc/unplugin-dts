# 使用

**中文** | [English](../en/usage.md)

## 安装

需要 **Node.js >= 20**。

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

## Watch 模式

推荐将源码目录与 bundler、声明文件的输出目录分开。这样构建工具可以监听源码树中的新增、
删除和重命名，又不会同时监听生成文件：

```text
project/
├── src/
│   └── index.ts
├── dist/
└── types/
```

当递归源码监听不会解析到生成输出时，Vite、Webpack 和 Rspack 可以发现符合 TypeScript
配置的新文件。如果输出目录就是源码目录，或者 realpath/symlink 使它与已有源码重叠，插件会
采用 fail-close：继续精确监听已有源码，但新增未引用文件后可能需要重启 watcher。这可以避免
生成文件形成重新构建循环。

当 Webpack 或 Rspack 从干净项目启动并创建嵌套输出目录时，Watchpack 可能执行一次初始补偿
构建。bootstrap 完成后生成输出会被忽略，因此稳态下的源码新增、删除和重命名不会形成输出
反馈循环。

源码删除或重命名后，插件会清理上一轮由自身写出、但已不在当前完整输出快照中的声明路径；
输出目录中的其他文件不会被清理。

纯 Rollup watch 无法在没有调用方配合的情况下安全监听同时包含输出的源码目录。这种布局下，
新增但未被引用的文件可能不会触发重新构建。优先将源码移入 `src/`。如果暂时不能调整布局，
请在调用 `rollup.watch` 前忽略所有生成目录，并显式监听类型源码目录：

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

如果声明文件使用不同目录，或配置了多个输出目录，需要在 ignored 判断中覆盖每一个生成目录。
Rolldown 当前无法通过目录 `addWatchFile` 发现 watch 启动后创建的未引用文件。请从已有的受监听
模块中导入或引用新文件，或者在新增、删除、重命名这类文件后重启 watcher。

## 打包类型

默认情况下，生成的类型文件会跟随源文件的结构。

插件借助 [API Extractor](https://api-extractor.com/) 提供了将所有类型汇总到单个文件的能力，你只需安装 `@microsoft/api-extractor` 并指定 `bundleTypes: true`：

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

如果你正在 **Vue 项目** 中使用，你需要安装 `@vue/language-core` 作为必要依赖：

```sh
pnpm i -D @vue/language-core
```

当你没有显式指定 `processor` 选项时，插件会自动检测 `.vue` 文件并使用 `'vue'` 处理器。不过，仍然建议显式设置：

```ts
export default defineConfig({
  plugins: [dts({ processor: 'vue' })],
})
```
