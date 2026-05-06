# Options

**English** | [中文](../zh/options.md)

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
   * The name of the resolver
   *
   * The later resolver with the same name will overwrite the earlier
   */
  name: string,
  /**
   * Determine whether the resolver supports the file
   */
  supports: (id: string) => void | boolean,
  /**
   * Transform source to declaration files
   *
   * Note that the path of the returns should base on `outDir`, or relative path to `root`
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
   * Specify which (program) process you prefer.
   *
   * @default 'ts'
   */
  processor?: 'vue' | 'ts',

  /**
   * Specify root directory.
   *
   * The default is to use the root provided by the scaffold; if none is provided, it defaults to `process.cwd()`.
   */
  root?: string,

  /**
   * Output directory for declaration files.
   *
   * Can be a string, array of strings, object with `dir` and `moduleFormat`, or array of mixed types.
   *
   * When using object format with `moduleFormat: 'cjs'`, generates `.d.cts` files.
   * When using object format with `moduleFormat: 'esm'`, generates `.d.mts` files.
   *
   * The default is to use the out directory provided by the scaffold.
   *
   * @example
   * outDir: 'dist'
   * outDir: ['dist', 'types']
   * outDir: { dir: 'dist', moduleFormat: 'esm' }
   * outDir: ['dist', { dir: 'dist-cjs', moduleFormat: 'cjs' }]
   */
  outDir?: OutDirsOption,

  /**
   * Override root path of entry files (useful in monorepos).
   *
   * The output path of each file will be calculated based on the value provided.
   *
   * The default is the smallest public path for all source files.
   */
  entryRoot?: string,

  /**
   * Restrict declaration files output to `outDir`.
   *
   * If true, generated declaration files outside `outDir` will be ignored.
   *
   * @default true
   */
  strictOutput?: boolean,

  /**
   * Override compilerOptions.
   *
   * @default null
   */
  compilerOptions?: ts.CompilerOptions | null,

  /**
   * Specify tsconfig.json path.
   *
   * Plugin resolves `include` and `exclude` globs from tsconfig.json.
   *
   * If not specified, plugin will find config file from root.
   */
  tsconfigPath?: string,

  /**
   * Specify custom resolvers.
   *
   * @default []
   */
  resolvers?: Resolver[],

  /**
   * Parsing `paths` of tsconfig.json to aliases.
   *
   * Note that these aliases only use for declaration files.
   *
   * @default true
   * @remarks Only use first replacement of each path.
   */
  pathsToAliases?: boolean,

  /**
   * Set which paths should be excluded when transforming aliases.
   *
   * @default []
   */
  aliasesExclude?: (string | RegExp)[],

  /**
   * Whether to transform file names ending in '.vue.d.ts' to '.d.ts'.
   *
   * If there is a duplicate name after transform, it will fall back to the original name.
   *
   * @default false
   */
  cleanVueFileName?: boolean,

  /**
   * Whether to transform dynamic imports to static (eg `import('vue').DefineComponent` to `import { DefineComponent } from 'vue'`).
   *
   * Value is forced to `true` when `bundleTypes` is enabled.
   *
   * @default false
   */
  staticImport?: boolean,

  /**
   * Override `include` glob (relative to root).
   *
   * Defaults to `include` property of tsconfig.json (relative to tsconfig.json located).
   */
  include?: string | string[],

  /**
   * Override `exclude` glob.
   *
   * Defaults to `exclude` property of tsconfig.json or `'node_modules/**'` if not supplied.
   */
  exclude?: string | string[],

  /**
   * Whether to remove `import 'xxx'`.
   *
   * @default true
   */
  clearPureImport?: boolean,

  /**
   * Whether to generate types entry file(s).
   *
   * When `true`, uses package.json `types` property if it exists or `${outDir}/index.d.ts`.
   *
   * Value is forced to `true` when `bundleTypes` is enabled.
   *
   * @default false
   */
  insertTypesEntry?: boolean,

  /**
   * Rollup type declaration files after emitting them.
   *
   * Powered by `@microsoft/api-extractor` - time-intensive operation.
   *
   * @default false
   */
  bundleTypes?: boolean | {
    /**
     * Override the config of `@microsoft/api-extractor`.
     *
     * @default {}
     * @see https://api-extractor.com/pages/setup/configure_api_report/
     */
    extractorConfig?: BundleConfig,
    /**
     * Bundled packages for `@microsoft/api-extractor`.
     *
     * @default []
     * @see https://api-extractor.com/pages/configs/api-extractor_json/#bundledpackages
     */
    bundledPackages?: string[],
    /**
     * Override the invoke options of `@microsoft/api-extractor`.
     *
     * @default {}
     * @see https://api-extractor.com/pages/setup/invoking/#invoking-from-a-build-script
     */
    invokeOptions?: IExtractorInvokeOptions,
    /**
     * Specify a real api-extractor config file path.
     *
     * When invoking, the configuration will be merged in the order: internal config, file config, `extractorConfig`.
     *
     * @default './api-extractor.json'
     */
    configPath?: string,
  },

  /**
   * Whether to copy .d.ts source files to `outDir`.
   *
   * @default false

   */
  copyDtsFiles?: boolean,

  /**
   * Whether to emit declaration files only.
   *
   * When `true`, all the original outputs of vite (rollup) will be force removed.
   *
   * @default false
   */
  declarationOnly?: boolean,

  /**
   * Hook called after the runtime is created.
   *
   * @default () => {}
   */
  afterBootstrap?: (runtime: Runtime) => MaybePromise<void>,

  /**
   * Hook called after diagnostic is emitted.
   *
   * According to the `diagnostics.length`, you can judge whether there is any type error.
   *
   * @default () => {}
   */
  afterDiagnostic?: (diagnostics: readonly ts.Diagnostic[]) => MaybePromise<void>,

  /**
   * Hook called prior to writing each declaration file.
   *
   * This allows you to transform the path or content.
   *
   * The file will be skipped when the return value `false` or `Promise<false>`.
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
   * Hook called after rolling up declaration files.
   *
   * @default () => {}
   */
  afterRollup?: (result: ExtractorResult) => MaybePromise<void>,

  /**
   * Hook called after all declaration files are written.
   *
   * It will be received a map (path -> content) that records those emitted files.
   *
   * @default () => {}
   */
  afterBuild?: (emittedFiles: Map<string, string>) => MaybePromise<void>,
}
```
