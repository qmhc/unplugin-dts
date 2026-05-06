# 迁移指南：vite-plugin-dts v4 → v5 / unplugin-dts v1

**中文** | [English](../en/migration-v4-to-v5.md)

v5 是一次重大架构升级。核心逻辑被提取到 `unplugin-dts` 中，`vite-plugin-dts` 退化为仅对 `unplugin-dts/vite` 的薄兼容导出。与此同时，插件正式支持 Rollup、Rolldown、Webpack、Rspack 和 Esbuild。

> 如果你只在 Vite 中使用，可以继续保留 `vite-plugin-dts`，它的公开 API 与 v4 高度兼容。但建议未来新项目直接使用 `unplugin-dts`。

---

## 目录

- [安装包的变化](#安装包的变化)
- [构建工具导入路径](#构建工具导入路径)
- [Breaking Changes（必改）](#breaking-changes必改)
  - [`rollupTypes` → `bundleTypes`](#rolluptypes--bundletypes)
  - [`rollupConfig` / `rollupOptions` / `bundledPackages` 扁平化](#rollupconfig--rollupoptions--bundledpackages-扁平化)
  - [`outDir` → `outDirs`](#outdir--outdirs)
  - [`logLevel` 移除](#loglevel-移除)
- [新增选项与能力](#新增选项与能力)
  - [多构建工具支持](#多构建工具支持)
  - [`processor`：显式指定 TS/Vue Program 处理器](#processor显式指定-tsvue-program-处理器)
  - [`aliases`：自定义路径别名](#aliases自定义路径别名)
  - [`afterBootstrap` 钩子](#afterbootstrap-钩子)
  - [`bundleTypes.configPath`](#bundletypesconfigpath)
  - [`outDirs` 支持 `moduleFormat`](#outdirs-支持-moduleformat)
- [行为变更](#行为变更)
  - [`declarationOnly` 与 esbuild](#declarationonly-与-esbuild)
  - [Vue 文件自动检测](#vue-文件自动检测)
  - [`insertTypesEntry` / `staticImport` 强制的触发条件更名](#inserttypesentry--staticimport-强制的触发条件更名)
- [依赖变化](#依赖变化)
- [类型与导出](#类型与导出)
- [快速对照表](#快速对照表)

---

## 安装包的变化

| 场景                                           | v4                            | v5                                   |
| ---------------------------------------------- | ----------------------------- | ------------------------------------ |
| Vite（兼容）                                   | `pnpm i -D vite-plugin-dts`   | `pnpm i -D vite-plugin-dts`          |
| Vite（推荐）                                   | —                             | `pnpm i -D unplugin-dts`             |
| Rollup / Rolldown / Webpack / Rspack / Esbuild | `vite-plugin-dts`（有限支持） | `pnpm i -D unplugin-dts`             |
| 使用 `bundleTypes`                             | 已内置 API Extractor          | `pnpm i -D @microsoft/api-extractor` |
| Vue 项目                                       | 已内置 Vue 语言核心           | `pnpm i -D @vue/language-core`       |

> **注意**：`@microsoft/api-extractor` 和 `@vue/language-core` 在 v5 中都是 `peerDependencies`（`optional: true`），需要使用时请手动安装。

---

## 构建工具导入路径

```ts
// ========== Vite ==========
// v4
import dts from 'vite-plugin-dts'

// v5（兼容，继续可用）
import dts from 'vite-plugin-dts'

// v5（推荐）
import dts from 'unplugin-dts/vite'

// ========== Rollup ==========
// v4（只能走 vite-plugin-dts 的 Rollup 兼容模式）
import dts from 'vite-plugin-dts'

// v5
import dts from 'unplugin-dts/rollup'

// ========== Rolldown（新增）==========
import dts from 'unplugin-dts/rolldown'

// ========== Webpack（新增）==========
import dts from 'unplugin-dts/webpack'

// ========== Rspack（新增）==========
import dts from 'unplugin-dts/rspack'

// ========== Esbuild（新增）==========
import dts from 'unplugin-dts/esbuild'
```

---

## Breaking Changes（必改）

### `rollupTypes` → `bundleTypes`

这是最大的命名变更。所有与 API Extractor 相关的配置被统一收拢到 `bundleTypes` 下。

```ts
// v4
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      bundledPackages: ['vue'],
      rollupConfig: { /* ... */ },
      rollupOptions: { /* ... */ },
    }),
  ],
})

// v5
export default defineConfig({
  plugins: [
    dts({
      bundleTypes: {
        bundledPackages: ['vue'],
        extractorConfig: { /* ... */ },      // 原 rollupConfig
        invokeOptions: { /* ... */ },        // 原 rollupOptions
        configPath: './api-extractor.json',  // 新增
      },
    }),
  ],
})

// 若只需布尔开关，仍可简写
export default defineConfig({
  plugins: [dts({ bundleTypes: true })],
})
```

### `rollupConfig` / `rollupOptions` / `bundledPackages` 扁平化

| v4                | v5                                       |
| ----------------- | ---------------------------------------- |
| `rollupTypes`     | `bundleTypes`（`boolean &#124; object`） |
| `bundledPackages` | `bundleTypes.bundledPackages`            |
| `rollupConfig`    | `bundleTypes.extractorConfig`            |
| `rollupOptions`   | `bundleTypes.invokeOptions`              |

> 类型提示：`bundleTypes.extractorConfig` 的类型也从 `RollupConfig` 改名为 `BundleConfig`，移除了 `extends`、`projectFolder`、`mainEntryPointFilePath`、`bundledPackages` 这几个内部字段的 Omit。

### `outDir` → `outDirs`

v5 将 `outDir` 重命名为 `outDirs`，并支持更丰富的输出配置：字符串、数组、`OutDirConfig` 对象或混合数组。

```ts
import { defineConfig } from 'vite'

// v4
export default defineConfig({
  plugins: [
    dts({
      outDir: 'dist',
    }),
  ],
})

// v5（字符串，等效）
export default defineConfig({
  plugins: [
    dts({
      outDirs: 'dist',
    }),
  ],
})

// v5（多目录 + 模块格式，新增能力）
export default defineConfig({
  plugins: [
    dts({
      outDirs: [
        'dist',                                       // .d.ts
        { dir: 'dist-cjs', moduleFormat: 'cjs' },     // .d.cts
        { dir: 'dist-esm', moduleFormat: 'esm' },     // .d.mts
      ],
    }),
  ],
})
```

### `logLevel` 移除

v4 中的 `logLevel` 选项被移除。v5 不再依赖 Vite 的 `LogLevel` 类型，日志输出由插件内部统一管理。如需控制日志，请通过构建工具自身的日志级别或环境变量（如 `DEBUG=unplugin-dts`）进行调节。

---

## 新增选项与能力

### 多构建工具支持

这是 v5 最核心的升级。同一套配置可无缝运行在 6 种构建工具上：

- `unplugin-dts/vite`
- `unplugin-dts/rollup`
- `unplugin-dts/rolldown`
- `unplugin-dts/webpack`
- `unplugin-dts/rspack`
- `unplugin-dts/esbuild`

插件会自动从各构建工具的 `entry` / `output.path` / `outdir` / `build.outDir` 等配置中推断 `root` 和 `outDirs`，减少重复配置。

### `processor`：显式指定 TS/Vue Program 处理器

v5 引入 `processor` 选项，用于控制 TypeScript Program 的创建方式：

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    dts({
      processor: 'vue',  // 或 'ts'（默认值）
    }),
  ],
})
```

- 当不指定时，插件会自动扫描源码中是否包含 `.vue` 文件；若包含，则自动使用 `'vue'` 处理器。
- 对于纯 TypeScript 项目，保持默认 `'ts'` 即可。
- **Vue 项目注意**：v5 要求额外安装 `@vue/language-core` 作为依赖。

### `aliases`：自定义路径别名

除了自动从 `tsconfig.json` 的 `paths` 解析别名外，v5 允许直接传入自定义别名：

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    dts({
      aliases: [
        { find: /^@\//, replacement: './src/' },
        { find: 'old-pkg', replacement: 'new-pkg' },
      ],
      // 或对象形式
      // aliases: { '@/*': './src/*', 'old-pkg': 'new-pkg' }
    }),
  ],
})
```

### `afterBootstrap` 钩子

在 Runtime（TS Program、解析器、别名等）创建完成后、实际类型检查与 emit 之前调用：

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    dts({
      afterBootstrap(runtime) {
        // 可在此访问 runtime，进行高级定制
        console.info(runtime.getRootFiles())
      },
    }),
  ],
})
```

### `bundleTypes.configPath`

v5 的 `bundleTypes` 新增 `configPath`，允许指定一个真实的 `api-extractor.json` 配置文件路径：

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    dts({
      bundleTypes: {
        configPath: './config/api-extractor.json',
      },
    }),
  ],
})
```

配置合并优先级：**内部默认配置** → **`configPath` 文件配置** → **`extractorConfig` 手动配置**。

### `outDirs` 支持 `moduleFormat`

通过 `OutDirConfig` 对象，可以为不同输出目录指定模块格式，从而自动生成 `.d.cts` 或 `.d.mts`：

```ts
export interface OutDirConfig {
  dir: string,
  moduleFormat?: 'cjs' | 'esm',  // 未指定则生成 .d.ts
}
```

---

## 行为变更

### `declarationOnly` 与 esbuild

v4 中，`declarationOnly: true` 会强制删除所有构建产物（仅限 Vite/Rollup 场景）。

v5 中，该行为保持不变，但 **esbuild 除外**——在 esbuild 中开启 `declarationOnly` 不会删除原始输出，因为 esbuild 的插件生命周期与打包机制不同于 Rollup 系。

### Vue 文件自动检测

v5 默认会自动检测源码中是否存在 `.vue` 文件。若存在，但 `processor` 被显式设为 `'ts'`，插件会打印警告：

```text
Detected .vue files but processor is set to "ts". Vue declaration files may not be generated correctly. Consider using processor: "vue".
```

建议 Vue 项目显式配置 `processor: 'vue'`。

### `insertTypesEntry` / `staticImport` 强制的触发条件更名

v4 中，当 `rollupTypes: true` 时，`insertTypesEntry` 和 `staticImport` 会被强制设为 `true`。

v5 中，触发条件改为 `bundleTypes` 启用时（无论布尔值还是对象形式）。

### `copyDtsFiles` 默认值因构建工具而异

v4 中，`copyDtsFiles` 对所有构建工具默认均为 `false`。

v5 中，默认值变为：

| 构建工具                                       | 默认值  |
| ---------------------------------------------- | ------- |
| Vite                                           | `false` |
| Rollup / Rolldown / Webpack / Rspack / Esbuild | `true`  |

若迁移后发现有 `.d.ts` 源文件未被复制或意外被复制，请显式指定该选项。

### `declarationMap` 支持

v5 移除了内部的 `forceDtsEmit` 行为，这意味着当 `tsconfig.json` 中开启 `declarationMap: true` 时，插件会正确生成 `.d.ts.map` 源映射文件（v4 中可能被强制覆盖而失效）。

---

## 依赖变化

| 依赖                       | v4       | v5                             |
| -------------------------- | -------- | ------------------------------ |
| `@microsoft/api-extractor` | 直接依赖 | `peerDependencies`（optional） |
| `@vue/language-core`       | 直接依赖 | `peerDependencies`（optional） |
| `@volar/typescript`        | 直接依赖 | 直接依赖                       |
| `unplugin`                 | 无       | 直接依赖（核心）               |

**迁移建议**：

```sh
# 若使用 bundleTypes
pnpm i -D @microsoft/api-extractor

# 若使用 Vue
pnpm i -D @vue/language-core
```

---

## 类型与导出

```ts
// v4
import dts, { type PluginOptions, editSourceMapDir } from 'vite-plugin-dts'

// v5（vite-plugin-dts 兼容层，仍然可用）
import dts, { type PluginOptions, editSourceMapDir } from 'vite-plugin-dts'

// v5（unplugin-dts，推荐）
import dts from 'unplugin-dts/vite'
import { type PluginOptions, editSourceMapDir } from 'unplugin-dts'

export { type PluginOptions, editSourceMapDir }
```

- `editSourceMapDir` 的函数签名未变：`(content: string, fromDir: string, toDir: string) => string`
- `Resolver` 类型未变（`name`、`supports`、`transform`）
- `PluginOptions` 继承关系调整，但面向用户的字段基本保持一致

---

## 快速对照表

| 选项                  | v4                | v5                            | 备注                                            |
| --------------------- | ----------------- | ----------------------------- | ----------------------------------------------- |
| 导入路径              | `vite-plugin-dts` | `unplugin-dts/<framework>`    | Vite 仍可用 `vite-plugin-dts`                   |
| `rollupTypes`         | ✅                | ❌                            | 更名为 `bundleTypes`                            |
| `bundleTypes`         | ❌                | ✅                            | 支持 `boolean &#124; object`                    |
| `bundledPackages`     | 顶层              | `bundleTypes.bundledPackages` | 嵌套下移                                        |
| `rollupConfig`        | 顶层              | `bundleTypes.extractorConfig` | 嵌套下移，类型名改为 `BundleConfig`             |
| `rollupOptions`       | 顶层              | `bundleTypes.invokeOptions`   | 嵌套下移                                        |
| `outDir`              | ✅                | ❌                            | 更名为 `outDirs`                                |
| `outDirs`             | ❌                | ✅                            | 支持 `moduleFormat`                             |
| `logLevel`            | ✅                | ❌                            | 已移除                                          |
| `processor`           | ❌                | ✅                            | `'ts' &#124; 'vue'`，自动检测                   |
| `aliases`             | ❌                | ✅                            | 自定义别名                                      |
| `afterBootstrap`      | ❌                | ✅                            | Runtime 创建后钩子                              |
| `beforeWriteFile`     | ✅                | ✅                            | 无变化                                          |
| `afterDiagnostic`     | ✅                | ✅                            | 无变化                                          |
| `afterRollup`         | ✅                | ✅                            | 无变化                                          |
| `afterBuild`          | ✅                | ✅                            | 无变化                                          |
| `declarationOnly`     | ✅                | ✅                            | esbuild 下不再删除原始输出                      |
| `insertTypesEntry`    | ✅                | ✅                            | 强制触发条件由 `rollupTypes` 改为 `bundleTypes` |
| `staticImport`        | ✅                | ✅                            | 强制触发条件由 `rollupTypes` 改为 `bundleTypes` |
| `strictOutput`        | ✅                | ✅                            | 无变化                                          |
| `copyDtsFiles`        | ✅                | ✅                            | 无变化                                          |
| `cleanVueFileName`    | ✅                | ✅                            | 无变化                                          |
| `clearPureImport`     | ✅                | ✅                            | 无变化                                          |
| `pathsToAliases`      | ✅                | ✅                            | 无变化                                          |
| `aliasesExclude`      | ✅                | ✅                            | 无变化                                          |
| `resolvers`           | ✅                | ✅                            | 无变化                                          |
| `entryRoot`           | ✅                | ✅                            | 无变化                                          |
| `tsconfigPath`        | ✅                | ✅                            | 无变化                                          |
| `compilerOptions`     | ✅                | ✅                            | 无变化                                          |
| `include` / `exclude` | ✅                | ✅                            | 无变化                                          |
| `root`                | ✅                | ✅                            | 无变化                                          |

---

## 最小迁移示例

### Vite 项目（仅重命名配置）

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts' // 或 'unplugin-dts/vite'

export default defineConfig({
  plugins: [
    dts({
      // 修改前（v4）
      // rollupTypes: true,
      // rollupConfig: { ... },
      // rollupOptions: { ... },
      // outDir: 'dist',

      // 修改后（v5）
      bundleTypes: {
        extractorConfig: { /* ... */ },   // 原 rollupConfig
        invokeOptions: { /* ... */ },     // 原 rollupOptions
      },
      outDirs: 'dist',
      // logLevel 已移除，无需配置
    }),
  ],
})
```

### Rollup 项目（迁移到 unplugin）

```ts
// rollup.config.mjs
import typescript from '@rollup/plugin-typescript'
import dts from 'unplugin-dts/rollup'

export default {
  input: './src/index.ts',
  output: { dir: 'dist', format: 'esm' },
  plugins: [
    typescript(),
    dts({
      bundleTypes: true,
      outDirs: 'dist',
    }),
  ],
}
```

---

如有其他疑问，欢迎查阅 [README.md](../README.md) 和 [README.zh-CN.md](../README.zh-CN.md) 中的完整配置说明。
