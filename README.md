<h1 align="center">unplugin-dts</h1>

<p align="center">
  An unplugin that generates declaration files (<code>*.d.ts</code>) from <code>.ts(x)</code> or <code>.vue</code> source files when using <a href="https://vitejs.dev/guide/build.html#library-mode">library mode</a>.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/unplugin-dts">
    <img src="https://img.shields.io/npm/v/unplugin-dts?color=orange&label=unplugin-dts" alt="version" />
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-dts">
    <img src="https://img.shields.io/npm/v/vite-plugin-dts?color=blue&label=vite-plugin-dts" alt="version" />
  </a>
  <a href="https://github.com/qmhc/unplugin-dts/blob/main/packages/unplugin-dts/LICENSE">
    <img src="https://img.shields.io/npm/l/unplugin-dts" alt="license" />
  </a>
</p>

> It evolved from vite-plugin-dts, and after being rewritten with unplugin, it has become more versatile.

**English** | [中文](./README.zh-CN.md)

## Installation

```sh
pnpm i -D unplugin-dts@latest
```

Previous only for vite (do not recommend):

```sh
pnpm i -D vite-plugin-dts
```

## Usage

<details>
  <summary>Vite</summary>

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
    }
  },
  plugins: [dts()],
})
```

</details>
<details>
  <summary>Rollup</summary>

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

</details>
<details>
  <summary>Rolldown</summary>

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

</details>
<details>
  <summary>Webpack</summary>

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

</details>
<details>
  <summary>Rspack</summary>

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

</details>
<details>
  <summary>Esbuild</summary>

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

</details>

<br />

By default, the generated declaration files are following the source structure.

Fortunately, with the help of [API Extractor](https://api-extractor.com/), the plugin can bundle all types into a single file. You just need to install `@microsoft/api-extractor` and set `bundleTypes: true`:

```sh
pnpm i -D @microsoft/api-extractor
```

```ts
{
  plugins: [dts({ bundleTypes: true })]
}
```

If you start with official Vite template, you should specify the `tsconfigPath`:

```ts
{
  plugins: [dts({ tsconfigPath: './tsconfig.app.json' })]
}
```

One more, if you are using it in a **Vue project**, you need to install `@vue/language-core` as a peer dependency, and specify `processor` to `'vue'` for the plugin:

```sh
pnpm i -D @vue/language-core
```

```ts
{
  plugins: [dts({ processor: 'vue' })]
}
```

## FAQ

Here are some FAQ's and solutions.

### Type errors that are unable to infer types from packages in `node_modules`

This is an existing [TypeScript issue](https://github.com/microsoft/TypeScript/issues/42873) where TypeScript infers types from packages located in `node_modules` through soft links (pnpm). A workaround is to add `baseUrl` to your `tsconfig.json` and specify the `paths` for these packages:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "third-lib": ["node_modules/third-lib"]
    }
  }
}
```

### `Internal Error` occurs when using `bundleTypes: true`

Refer to this [issue](https://github.com/microsoft/rushstack/issues/3875), it's due to a limitation of `@microsoft/api-extractor` or TypeScript resolver.

The main reason is that `baseUrl` is specified in `tsconfig.json` and non-standard paths are used directly when imported.

For example: `baseUrl: 'src'` is specified and importing from `<root>/src/components/index.ts` in `<root>/src/index.ts`, and `import 'components'` is used instead of `import './components'`.

Currently, you need to avoid the above situation, or use aliases instead (with the `paths` option).

### Get module not found errors during build

This is likely due to incorrect configuration of the `include` property in your default `tsconfig.json`.

Due to some limitations, the plugin relies on the top-level `tsconfig.json` to resolve the files to include. Therefore, you need to specify the correct `include` property in the top-level `tsconfig.json`, or you can specify a configuration file path with the correct `include` property using the `tsconfigPath` option of the plugin. For example, in the Vite initial template, it is `tsconfig.app.json`.

You can refer to this [comment](https://github.com/qmhc/vite-plugin-dts/issues/343#issuecomment-2198111439).

## Options

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
  content: string
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
    program: ts.Program
  }) => MaybePromise<ResolverTransformOutput[] | {
    outputs: ResolverTransformOutput[],
    emitSkipped?: boolean,
    diagnostics?: readonly ts.Diagnostic[]
  }>
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
   * Value is forced to `true` when `rollupTypes` is `true`.
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
    invokeOptions?: IExtractorInvokeOptions,
    /**
     * Specify a real api-extractor config file path.
     *
     * When invoking, the configuration will be merged in the order: internal config, file config, `extractorConfig`.
     *
     * @default './api-extractor.json'
     */
    configPath?: string
  },

  /**
   * Whether to copy .d.ts source files to `outDir`.
   *
   * @default false
   * @remarks Before 2.0, the default was `true`.
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
      content?: string
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
  afterBuild?: (emittedFiles: Map<string, string>) => MaybePromise<void>
}
```

## Contributors

Thanks for all the contributions!

<a href="https://github.com/qmhc/vite-plugin-dts/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=qmhc/vite-plugin-dts" alt="contributors" />
</a>

## Example

Clone and run the following script (see demo series scripts in root `package.json`):

```sh
pnpm run demo:ts-rollup
pnpm run demo:react-vite
pnpm run demo:vue-rspack
```

Then check `examples/*/types`.

There are also many cases under `examples`.

A real project using this plugin: [Vexip UI](https://github.com/vexip-ui/vexip-ui).

## License

MIT License.
