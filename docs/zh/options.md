# 选项

**中文** | [English](../en/options.md)

## 核心配置

### `processor`

- **类型：** `'vue' | 'ts'`
- **默认值：** `'ts'`（带自动检测）

指定使用哪种处理程序。

未显式设置时，插件会按以下优先级进行自动检测：

1. 检查是否有 bundler 入口文件以 `.vue` 结尾。
2. 检查 `include` glob 中是否包含 `.vue`。
3. 检查解析到的 `tsconfig.json` 的 `include` 或 `files` 中是否包含 `.vue`。
4. 扫描 `root` 目录（一层深度，跳过 `node_modules` 和点号开头的目录）是否存在 `.vue` 文件。

只要任一条件满足，就使用 `'vue'`；否则使用 `'ts'`。如果你显式设为 `'ts'` 但检测到了 Vue 文件，插件会输出警告，因为此时 Vue 类型可能无法正确生成。

### `root`

- **类型：** `string`
- **默认值：** `process.cwd()`（会被 bundler 配置覆盖）

指定根目录。插件会优先按以下规则从各构建工具推断，回退到 `process.cwd()`：

- **Vite：** `config.root`
- **Webpack / Rspack：** `compiler.context`
- **Esbuild：** `absWorkingDir`
- **Rollup / Rolldown：** 不覆盖，使用 `process.cwd()`

### `outDirs`

- **类型：** `string | OutDirConfig | (string | OutDirConfig)[]`
- **默认值：** 从 bundler 配置推断；若都未提供，则回退到 `dist`。

类型文件的输出目录。可以是字符串、字符串数组、`OutDirConfig` 对象，或混合数组。

未提供时，插件按以下规则推断：

- **Vite：** `config.build.outDir`
- **Webpack / Rspack：** `compiler.options.output.path`
- **Esbuild：** `outdir`
- **Rollup / Rolldown：** 回退到 tsconfig 的 `outDir` 或 `'dist'`

`moduleFormat` 控制生成文件的扩展名：

| `moduleFormat` | 声明文件扩展名 | Source Map 扩展名 |
| -------------- | -------------- | ----------------- |
| `'cjs'`        | `.d.cts`       | `.d.cts.map`      |
| `'esm'`        | `.d.mts`       | `.d.mts.map`      |
| `undefined`    | `.d.ts`        | `.d.ts.map`       |

```ts
// 简单字符串
outDirs: 'dist'

// 字符串数组
outDirs: ['dist', 'types']

// 带模块格式的对象
outDirs: { dir: 'dist', moduleFormat: 'esm' }

// 混合数组
outDirs: [
  'dist',
  { dir: 'dist-cjs', moduleFormat: 'cjs' },
  { dir: 'dist-esm', moduleFormat: 'esm' }
]
```

### `entryRoot`

- **类型：** `string`
- **默认值：** 所有源文件的最长公共目录前缀。

手动设置入口文件的根路径。在 monorepo 中很有用。每个文件在 `outDir` 内的输出路径按 `relative(entryRoot, sourceFile)` 计算。

默认值的计算方式是：在所有待输出源文件中，取它们目录路径的最长公共祖先。如果 tsconfig 中设置了 `compilerOptions.rootDir`，则以它为准。

### `tsconfigPath`

- **类型：** `string`
- **默认值：** 从 `root` 开始向上搜索（`ts.findConfigFile`）。

指定 `tsconfig.json` 的路径。使用 Vue 处理程序时，配置通过 Vue language core 解析。

### `compilerOptions`

- **类型：** `ts.CompilerOptions | null`
- **默认值：** `null`

覆写 TypeScript 编译器选项。优先级高于 tsconfig，但插件会强制覆写部分关键选项（如 `declaration`、`emitDeclarationOnly`、`noEmit` 等）。

### `include`

- **类型：** `string | string[]`
- **默认值：** `tsconfig.json` 中的 `include` 属性（相对于 `tsconfig.json` 所在目录）。

手动设置包含路径的 glob（相对于 `root`）。

### `exclude`

- **类型：** `string | string[]`
- **默认值：** `tsconfig.json` 中的 `exclude` 属性，未设置时为 `'node_modules/**'`。

手动设置排除路径的 glob。

### `resolvers`

- **类型：** `Resolver[]`
- **默认值：** `[]`

指定自定义解析器，用于将源文件转换为类型声明文件。

内置解析器链会自动前置，顺序为：JSON → Vue → Svelte → 自定义。`parseResolvers` 按 `name` 去重（后者覆盖前者）。执行转换时，**第一个使 `supports(id)` 返回真值的解析器**会被采用。

解析器返回的路径应基于 `outDir` 或相对于 `root`。完整类型定义请参考 [Resolver](#resolver)。

---

## 别名与路径

### `pathsToAliases`

- **类型：** `boolean`
- **默认值：** `true`

解析 `tsconfig.json` 中的 `paths` 作为别名。

`baseUrl` 优先取自 `compilerOptions.baseUrl`；若未设置，则回退到 `tsconfig.json` 所在目录（兼容 TS 5.4+）或 `root`。每个路径键会被转为正则表达式用于匹配。

> **已知限制**
> 只使用每个路径的第一个替换字符串。例如 `"@/*": ["src/*", "lib/*"]` 只会为 `src/*` 生成别名。

### `aliases`

- **类型：** `AliasOptions`

为类型文件指定额外的别名映射。这些别名会与 `pathsToAliases` 解析出的别名合并，且**自定义别名优先级更高**，因为它们在解析数组中排在前面。

```ts
type AliasOptions =
  | { find: string | RegExp, replacement: string }[]
  | { [find: string]: string }
```

### `aliasesExclude`

- **类型：** `(string | RegExp)[]`
- **默认值：** `[]`

设置在转换别名时需要排除的项。排除规则匹配的是别名的 **`find` 模式**，而不是解析后的文件路径：

- 若 `find` 是正则：比较 `find.toString()` 与排除项。
- 若排除项是正则：测试 `find.match(排除项)`。
- 若两者都是字符串：精确匹配。

---

## 输出控制

### `strictOutput`

- **类型：** `boolean`
- **默认值：** `true`

将类型文件输出限制在 `outDir` 内。为 `true` 时，若目标文件目录路径不以规范化后的 `outDir` 开头，则跳过该文件并输出警告。

### `copyDtsFiles`

- **类型：** `boolean`
- **默认值：** Vite 下为 `false`，其他构建工具下为 `true`。

是否将源码中已有的 `.d.ts` 文件（TypeScript 程序已识别的文件）复制到输出目录。

在 Vite 中默认为 `false`，因为 Vite 自身的构建管线通常会处理 `.d.ts` 资源。在 Webpack、Rspack、Rollup、Rolldown 和 Esbuild 中默认为 `true`，以保证手写的声明文件能被保留到产物中。

### `cleanVueFileName`

- **类型：** `boolean`
- **默认值：** `false`

是否将 `.vue.d.ts`（以及 `.vue.d.cts` / `.vue.d.mts`）文件名转换为 `.d.ts`（以及 `.d.cts` / `.d.mts`）。

如果清理后的路径已经被其他文件占用，则回退到原始名称以避免覆盖。声明文件内的 import 路径也会被同步清理：`import('./Foo.vue')` 会变为 `import('./Foo')`。

### `staticImport`

- **类型：** `boolean`
- **默认值：** `false`

将动态的 `import()` 类型引用转换为静态顶层引入：

```ts
// 转换前
import('vue').DefineComponent

// 转换后
import { DefineComponent } from 'vue'
```

支持嵌套泛型，并会为默认引入合成名称（`__DTS_DEFAULT_N__`）。仅转换类型位置上的 `ImportTypeNode`，不影响运行时的 `import()` 表达式。开启 `bundleTypes` 时强制为 `true`。

### `clearPureImport`

- **类型：** `boolean`
- **默认值：** `true`

从生成的类型文件中移除副作用引入（`import 'xxx'`）。**不会**移除带有引入子句的语句，例如 `import { foo } from 'bar'` 或 `import type { Foo } from 'bar'`。

### `insertTypesEntry`

- **类型：** `boolean`
- **默认值：** `false`

在发出声明文件后生成类型入口文件。开启 `bundleTypes` 时强制为 `true`。

单入口时，按 `package.json` 的 `publishConfig.types` → `types` → `typings` → `exports` 链查找，回退到 `${outDir}/index.d.ts`。若解析到的路径不以 `.d.ts` 结尾，会自动修正并发出警告。

多入口时，为每个入口生成 `${outDir}/${entryName}.d.ts`，内容为重导出源模块。

### `declarationOnly`

- **类型：** `boolean`
- **默认值：** `false`

仅生成类型文件，并删除所有原始 JS/CSS/资源产物：

- **Vite / Rollup / Rolldown：** 在 `generateBundle` 钩子中删除所有资源。
- **Webpack：** 清空整个 `compilation.assets`。
- **Rspack：** 在 `processAssets` 钩子中删除所有资源。
- **Esbuild：** **无操作**——原始产物会被保留。

---

## 类型打包

### `bundleTypes`

- **类型：** `boolean | BundleTypesOptions`
- **默认值：** `false`

使用 `@microsoft/api-extractor` 将类型文件按入口打包为单个文件。该过程比较耗时。

配置为对象时，支持以下选项：

#### `bundleTypes.extractorConfig`

- **类型：** `BundleConfig`
- **默认值：** `{}`

覆写 `@microsoft/api-extractor` 的配置。详见 [Configure API Extractor](https://api-extractor.com/pages/setup/configure_api_report/)。

#### `bundleTypes.bundledPackages`

- **类型：** `string[]`
- **默认值：** `[]`

类型将被内联到打包产物中的包的列表。详见 [bundledPackages](https://api-extractor.com/pages/configs/api-extractor_json/#bundledpackages)。

#### `bundleTypes.invokeOptions`

- **类型：** `IExtractorInvokeOptions`
- **默认值：** `{}`

覆写 `@microsoft/api-extractor` 的调用选项。详见 [Invoking from a build script](https://api-extractor.com/pages/setup/invoking/#invoking-from-a-build-script)。

#### `bundleTypes.configPath`

- **类型：** `string`
- **默认值：** `'./api-extractor.json'`

指定外部 api-extractor 配置文件。配置按以下顺序进行深合并（后者覆盖前者）：

1. **内部基础配置** — 启用 `dtsRollup.enabled: true`、禁用报告生成、设置 `mainEntryPointFilePath` 等。
2. **文件配置** — 从 `configPath` 加载。
3. **`extractorConfig`** — 你的内联覆写。

打包成功后，所有未被纳入最终产物的中间文件会被删除，空目录也会被清理。转换阶段收集到的 `declare module` 块会追加到每个打包后的文件中。

---

## 钩子

### `beforeWriteFile`

- **类型：**

```ts
(
  filePath: string,
  content: string,
) => MaybePromise<
  | void
  | false
  | { filePath?: string, content?: string }
>
```

- **默认值：** `() => {}`

在每个声明文件（及其 source map）写入磁盘前调用。该钩子在路径扩展名转换之后、`strictOutput` 检查之前执行。

- 返回 `false` 或 `Promise<false>` 可完全跳过该文件。
- 返回 `{ filePath, content }` 可覆写路径和/或内容。`content` 采用 `??` 语义，`null` 或 `undefined` 会回退到原始内容。

### `afterRollup`

- **类型：** `(result: ExtractorResult) => MaybePromise<void>`
- **默认值：** `() => {}`

在每个入口被 `@microsoft/api-extractor` 成功打包后调用。如果打包失败（例如 "Unable to follow symbol"），该钩子**不会被调用**——插件会先抛出错误。

### `afterBootstrap`

- **类型：** `(runtime: Runtime) => MaybePromise<void>`
- **默认值：** `() => {}`

在 `buildStart` 中 `Runtime` 实例创建完成后立即调用。此时 Runtime 已初始化 `program`、`host`、`diagnostics` 和 `aliases`，但 `outputFiles` 仍为空，尚未开始生成文件。

### `afterDiagnostic`

- **类型：** `(diagnostics: readonly ts.Diagnostic[]) => MaybePromise<void>`
- **默认值：** `() => {}`

在 TypeScript 诊断信息收集完成后、文件发出前调用。数组包含声明、语义和语法诊断。解析器发出失败时，相关错误也会被追加。

### `afterBuild`

- **类型：** `(emittedFiles: Map<string, string>) => MaybePromise<void>`
- **默认值：** `() => {}`

在所有类型文件写入完成后调用。映射中包含所有成功写入的文件的路径与内容，包括声明文件、类型入口文件和打包产物。

**不包含**被 `beforeWriteFile` 跳过（返回 `false`）、被 `strictOutput` 拦截的文件，以及在 `bundleTypes` 清理阶段被删除的中间文件。写入次级 `outDirs` 的文件也不会被记录。

---

## 类型参考

### `OutDirConfig`

```ts
export interface OutDirConfig {
  /** 输出目录路径 */
  dir: string,
  /**
   * 模块格式
   * - 'cjs'：生成 .d.cts 文件
   * - 'esm'：生成 .d.mts 文件
   * - undefined：生成 .d.ts 文件（默认）
   */
  moduleFormat?: 'cjs' | 'esm',
}
```

### `Resolver`

```ts
export interface Resolver {
  /**
   * 解析器的名称。
   * 靠后的同名解析器将会覆盖靠前的。
   */
  name: string,
  /** 判断解析器是否支持该文件 */
  supports: (id: string) => void | boolean,
  /**
   * 将源文件转换为类型声明文件。
   * 注意，返回的文件路径应该基于 `outDir`，或者相对于 `root`。
   */
  transform: (payload: {
    id: string,
    code: string,
    root: string,
    outDir: string,
    host: ts.CompilerHost,
    program: ts.Program,
  }) => MaybePromise<
    | ResolverTransformOutput[]
    | {
      outputs: ResolverTransformOutput[],
      emitSkipped?: boolean,
      diagnostics?: readonly ts.Diagnostic[],
    }
  >,
}
```

### `ResolverTransformOutput`

```ts
export interface ResolverTransformOutput {
  path: string,
  content: string,
}
```
