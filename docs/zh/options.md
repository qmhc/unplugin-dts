# 选项

**中文** | [English](../en/options.md)

```ts
import type ts from 'typescript'
import type { IExtractorConfigPrepareOptions, IExtractorInvokeOptions } from '@microsoft/api-extractor'

type MaybePromise<T> = T | Promise<T>

export type ModuleFormat = 'cjs' | 'esm'

export interface OutDirConfig {
  dir: string,
  moduleFormat?: ModuleFormat,
}

export type OutDirsOption = string | OutDirConfig | (string | OutDirConfig)[]

export type BundleConfig = Omit<
  IExtractorConfigPrepareOptions['configObject'],
  'extends' | 'projectFolder' | 'mainEntryPointFilePath' | 'bundledPackages'
>

export interface ResolverTransformOutput {
  path: string,
  content: string,
}

export interface Resolver {
  /**
   * 解析器的名称
   *
   * 靠后的同名解析器将会覆盖靠前的
   */
  name: string,
  /**
   * 判断解析器是否支持该文件
   */
  supports: (id: string) => void | boolean,
  /**
   * 将源文件转换为类型文件
   *
   * 注意，返回的文件的路径应该基于 `outDir`，或者相对于 `root`
   */
  transform: (payload: {
    id: string,
    code: string,
    root: string,
    outDir: string,
    host: ts.CompilerHost,
    program: ts.Program,
  }) => MaybePromise<ResolverTransformOutput[] | {
    outputs: ResolverTransformOutput[],
    emitSkipped?: boolean,
    diagnostics?: readonly ts.Diagnostic[],
  }>,
}

export interface PluginOptions {
  /**
   * 指定使用哪种处理程序
   *
   * @default 'ts'
   */
  processor?: 'vue' | 'ts',

  /**
   * 指定根目录
   *
   * 默认使用脚手架提供的根目录，如果没提供则为 `process.cwd()`
   */
  root?: string,

  /**
   * 指定输出目录
   *
   * 可以是字符串、字符串数组、包含 `dir` 和 `moduleFormat` 的对象，或混合类型的数组
   *
   * 使用对象格式并设置 `moduleFormat: 'cjs'` 时，生成 `.d.cts` 文件
   * 使用对象格式并设置 `moduleFormat: 'esm'` 时，生成 `.d.mts` 文件
   *
   * 默认使用脚手架提供的输出目录
   *
   * @example
   * outDirs: 'dist'
   * outDirs: ['dist', 'types']
   * outDirs: { dir: 'dist', moduleFormat: 'esm' }
   * outDirs: ['dist', { dir: 'dist-cjs', moduleFormat: 'cjs' }]
   */
  outDirs?: OutDirsOption,

  /**
   * 用于手动设置入口文件的根路径（通常用在 monorepo）
   *
   * 在计算每个文件的输出路径时将基于该路径
   *
   * 默认为所有源文件的最小公共路径
   */
  entryRoot?: string,

  /**
   * 限制类型文件生成在 `outDir` 内
   *
   * 如果为 `true`，生成在 `outDir` 外的文件将被忽略
   *
   * @default true
   */
  strictOutput?: boolean,

  /**
   * 覆写 CompilerOptions
   *
   * @default null
   */
  compilerOptions?: ts.CompilerOptions | null,

  /**
   * 指定 tsconfig.json 的路径
   *
   * 插件会解析 tsconfig.json 的 include 和 exclude 选项
   *
   * 未指定时插件默认从根目录开始寻找配置文件
   */
  tsconfigPath?: string,

  /**
   * 指定自定义的解析器
   *
   * @default []
   */
  resolvers?: Resolver[],

  /**
   * 解析 tsconfig.json 的 `paths` 作为别名
   *
   * 注意，这些别名仅用在类型文件中使用
   *
   * @default true
   * @remarks 只使用每个路径的第一个替换
   */
  pathsToAliases?: boolean,

  /**
   * 设置在转换别名时哪些路径需要排除
   *
   * @default []
   */
  aliasesExclude?: (string | RegExp)[],

  /**
   * 是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
   *
   * 如果转换后出现重名，将会回退到原来的名字。
   *
   * @default false
   */
  cleanVueFileName?: boolean,

  /**
   * 是否将动态引入转换为静态（例如：`import('vue').DefineComponent` 转换为 `import { DefineComponent } from 'vue'`）
   *
   * 开启 `bundleTypes` 时强制为 `true`
   *
   * @default false
   */
  staticImport?: boolean,

  /**
   * 手动设置包含路径的 glob（相对于 root）
   *
   * 默认基于 tsconfig.json 的 `include` 选项（相对于 tsconfig.json 所在目录）
   */
  include?: string | string[],

  /**
   * 手动设置排除路径的 glob
   *
   * 默认基于 tsconfig.json 的 `exclude` 选线，未设置时为 `'node_modules/**'`
   */
  exclude?: string | string[],

  /**
   * 是否移除 `import 'xxx'`
   *
   * @default true
   */
  clearPureImport?: boolean,

  /**
   * 是否生成类型入口文件
   *
   * 当为 `true` 时会基于 package.json 的 `types` 字段生成，或者 `${outDir}/index.d.ts`
   *
   * 当开启 `bundleTypes` 时强制为 `true`
   *
   * @default false
   */
  insertTypesEntry?: boolean,

  /**
   * 设置是否将发出的类型文件打包进单个文件
   *
   * 基于 `@microsoft/api-extractor`，过程将会消耗一些时间
   *
   * @default false
   */
  bundleTypes?: boolean | {
    /**
     * 覆写 `@microsoft/api-extractor` 的配置
     *
     * @default {}
     * @see https://api-extractor.com/pages/setup/configure_api_report/
     */
    extractorConfig?: BundleConfig,
    /**
     * 设置 `@microsoft/api-extractor` 的 `bundledPackages` 选项
     *
     * @default []
     * @see https://api-extractor.com/pages/configs/api-extractor_json/#bundledpackages
     */
    bundledPackages?: string[],
    /**
     * 覆写 `@microsoft/api-extractor` 的调用选项
     *
     * @default {}
     * @see https://api-extractor.com/pages/setup/invoking/#invoking-from-a-build-script
     */
    invokeOptions?: IExtractorInvokeOptions,
    /**
     * 指定一个真实的 api-extractor 配置文件路径
     *
     * 调用时将会按照内部配置、文件配置、`extractorConfig` 的顺序合并
     *
     * @default './api-extractor.json'
     */
    configPath?: string,
  },

  /**
   * 是否将源码里的 .d.ts 文件复制到 `outDir`
   *
   * @default false

   */
  copyDtsFiles?: boolean,

  /**
   * 是否只生成类型文件
   *
   * 当为 `true` 时会强制删除所有 Vite（Rollup）的原始产物
   *
   * @default false
   */
  declarationOnly?: boolean,

  /**
   * 运行时创建完毕后的钩子
   *
   * @default () => {}
   */
  afterBootstrap?: (runtime: Runtime) => MaybePromise<void>,

  /**
   * 获取诊断信息后的钩子
   *
   * 可以根据 `diagnostics.length` 来判断有误类型错误
   *
   * @default () => {}
   */
  afterDiagnostic?: (diagnostics: readonly ts.Diagnostic[]) => MaybePromise<void>,

  /**
   * 类型声明文件被写入前的钩子
   *
   * 可以在钩子里转换文件路径和文件内容
   *
   * 当返回 `false` 或 `Promise<false>` 时会跳过该文件
   *
   * @default () => {}
   */
  beforeWriteFile?: (
    filePath: string,
    content: string
  ) => MaybePromise<
    | void
    | false
    | {
      filePath?: string,
      content?: string,
    }
  >,

  /**
   * 类型文件被打包进单个文件后的钩子
   *
   * @default () => {}
   */
  afterRollup?: (result: ExtractorResult) => MaybePromise<void>,

  /**
   * 在所有类型文件被写入后的钩子
   *
   * 它会接收一个记录了那些最终被写入的文件的映射（path -> content）
   *
   * @default () => {}
   */
  afterBuild?: (emittedFiles: Map<string, string>) => MaybePromise<void>,
}
```
