import type ts from 'typescript'
import type {
  ExtractorResult,
  IExtractorConfigPrepareOptions,
  IExtractorInvokeOptions,
} from '@microsoft/api-extractor'
import type { MaybePromise } from './utils'
import type { Resolver } from './resolvers'

export interface Logger {
  info: (msg: string) => void,
  warn: (msg: string) => void,
  error: (msg: string) => void
}

export type BundleConfig = Omit<
  IExtractorConfigPrepareOptions['configObject'],
  'projectFolder' | 'mainEntryPointFilePath' | 'bundledPackages'
>

export type AliasOptions = {
  find: string | RegExp,
  replacement: string }[] | { [find: string]: string }

export interface CreateRuntimeOptions {
  /**
   * Specify which (program) process you prefer.
   *
   * @default 'ts'
   */
  processor?: 'vue' | 'ts',
  /**
   * Specify root directory.
   *
   * Defaults to the 'root' of the Vite config, or `process.cwd()` if using Rollup.
   */
  root: string,
  /**
   * Output directory for declaration files.
   *
   * Can be an array to output to multiple directories.
   *
   * Defaults to 'build.outDir' of the Vite config, or `outDir` of tsconfig.json if using Rollup.
   */
  outDirs?: string | string[],
  /**
   * Override root path of entry files (useful in monorepos).
   *
   * The output path of each file will be calculated based on the value provided.
   *
   * The default is the smallest public path for all source files.
   */
  entryRoot?: string,
  /**
   * Specify tsconfig.json path.
   *
   * Plugin resolves `include` and `exclude` globs from tsconfig.json.
   *
   * If not specified, plugin will find config file from root.
   */
  tsconfigPath?: string,
  /**
   * Override compilerOptions.
   *
   * @default null
   */
  compilerOptions?: ts.CompilerOptions | null,
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
   * Specify custom resolvers.
   *
   * @default []
   */
  resolvers?: Resolver[],
  aliases?: AliasOptions,
  /**
   * Set which paths should be excluded when transforming aliases.
   *
   * @default []
   */
  aliasesExclude?: (string | RegExp)[],

  // Should be internal for custom
  entries?: Record<string, string>,
  libName?: string,
  indexName?: string,
  logger?: Logger
}

export interface EmitOptions {
  /**
   * Restrict declaration files output to `outDir`.
   *
   * If true, generated declaration files outside `outDir` will be ignored.
   *
   * @default true
   */
  strictOutput?: boolean,
  /**
   * Whether to copy .d.ts source files to `outDir`.
   *
   * @default false
   * @remarks Before 2.0, the default was `true`.
   */
  copyDtsFiles?: boolean,
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
   * Value is forced to `true` when `rollupTypes` is `true`.
   *
   * @default false
   */
  staticImport?: boolean,
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
   * Value is forced to `true` when `rollupTypes` is `true`.
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
    invokeOptions?: IExtractorInvokeOptions
  },
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
      content?: string
    }
  >,
  /**
   * Hook called after rolling up declaration files.
   *
   * @default () => {}
   */
  afterRollup?: (result: ExtractorResult) => MaybePromise<void>,

  // Should be internal for custom
  logPrefix?: string
}
