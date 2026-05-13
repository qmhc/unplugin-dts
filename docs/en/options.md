# Options

**English** | [中文](../zh/options.md)

## Core Options

### `processor`

- **Type:** `'vue' | 'ts'`
- **Default:** `'ts'` (with auto-detection)

Specify which processor to use.

When not explicitly set, the plugin performs cascading auto-detection:

1. Checks if any bundler entry file ends with `.vue`.
2. Checks if the `include` glob contains `.vue`.
3. Checks if the resolved `tsconfig.json` has `.vue` in `include` or `files`.
4. Scans the `root` directory (one level deep, skipping `node_modules` and dot-prefixed dirs) for `.vue` files.

If any check matches, `'vue'` is used; otherwise `'ts'`. If you explicitly set `'ts'` but Vue files are detected, a warning will be logged because Vue declarations may not generate correctly.

### `root`

- **Type:** `string`
- **Default:** `process.cwd()` (overridden by bundler config)

Specify the root directory. The plugin tries to infer it from the bundler before falling back to `process.cwd()`:

- **Vite:** `config.root`
- **Webpack / Rspack:** `compiler.context`
- **Esbuild:** `absWorkingDir`
- **Rollup / Rolldown:** no override, uses `process.cwd()`

### `outDirs`

- **Type:** `string | OutDirConfig | (string | OutDirConfig)[]`
- **Default:** Inferred from bundler config, or `dist` if nothing else is found.

Output directory for declaration files. Can be a string, an array of strings, an `OutDirConfig` object, or a mixed array.

When `outDirs` is not provided, the plugin infers it from:

- **Vite:** `config.build.outDir`
- **Webpack / Rspack:** `compiler.options.output.path`
- **Esbuild:** `outdir`
- **Rollup / Rolldown:** falls back to tsconfig `outDir` or `'dist'`

`moduleFormat` controls the declaration file extension:

| `moduleFormat` | Extension | Source Map Extension |
| -------------- | --------- | -------------------- |
| `'cjs'`        | `.d.cts`  | `.d.cts.map`         |
| `'esm'`        | `.d.mts`  | `.d.mts.map`         |
| `undefined`    | `.d.ts`   | `.d.ts.map`          |

```ts
// Simple string
outDirs: 'dist'

// Array of strings
outDirs: ['dist', 'types']

// Object with module format
outDirs: { dir: 'dist', moduleFormat: 'esm' }

// Mixed array
outDirs: [
  'dist',
  { dir: 'dist-cjs', moduleFormat: 'cjs' },
  { dir: 'dist-esm', moduleFormat: 'esm' }
]
```

### `entryRoot`

- **Type:** `string`
- **Default:** The longest common directory prefix of all source files.

Override the root path of entry files. Useful in monorepos. The output path of each file inside `outDir` is computed as `relative(entryRoot, sourceFile)`.

The default is calculated as the longest shared directory ancestor among all emitted source files. If `compilerOptions.rootDir` is set in tsconfig, it takes precedence.

### `tsconfigPath`

- **Type:** `string`
- **Default:** Searched upward from `root` via `ts.findConfigFile`.

Specify the path to `tsconfig.json`. When using the Vue processor, the config is parsed by the Vue language core.

### `compilerOptions`

- **Type:** `ts.CompilerOptions | null`
- **Default:** `null`

Override TypeScript compiler options. These override tsconfig, but plugin-enforced settings (`declaration`, `emitDeclarationOnly`, `noEmit`, etc.) take final precedence.

### `include`

- **Type:** `string | string[]`
- **Default:** The `include` property from `tsconfig.json` (relative to the directory where `tsconfig.json` is located).

Override the `include` glob (relative to `root`).

### `exclude`

- **Type:** `string | string[]`
- **Default:** The `exclude` property from `tsconfig.json`, or `'node_modules/**'` if not supplied.

Override the `exclude` glob.

### `resolvers`

- **Type:** `Resolver[]`
- **Default:** `[]`

Specify custom resolvers for transforming source files into declaration files.

The built-in resolver chain is prepended automatically in this order: JSON → Vue → Svelte → custom. `parseResolvers` deduplicates by `name` (later overwrites earlier). During transformation, the **first resolver whose `supports(id)` returns truthy** is used.

Resolver outputs should use paths based on `outDir` or relative to `root`. See [Resolver](#resolver) for the full type definition.

---

## Alias & Path

### `pathsToAliases`

- **Type:** `boolean`
- **Default:** `true`

Parse the `paths` option from `tsconfig.json` into aliases for declaration file transformation.

The `baseUrl` is resolved from `compilerOptions.baseUrl`; if absent, it falls back to the directory of `tsconfig.json` (for TS 5.4+ compatibility), or `root`. Each path key is converted to a RegExp for matching.

> **Known Limitations**
> Only the first replacement string of each path is used. So `"@/*": ["src/*", "lib/*"]` will only produce the alias for `src/*`.

### `aliases`

- **Type:** `AliasOptions`

Specify additional alias mappings for declaration files. These are merged with tsconfig-derived aliases (when `pathsToAliases` is true), and **custom aliases take precedence** because they are placed earlier in the resolution array.

```ts
type AliasOptions =
  | { find: string | RegExp, replacement: string }[]
  | { [find: string]: string }
```

### `aliasesExclude`

- **Type:** `(string | RegExp)[]`
- **Default:** `[]`

Exclude specific aliases from transformation. The exclusion matches the alias **`find` pattern**, not the resolved file path:

- If `find` is a RegExp: compares `find.toString()` against the exclude pattern.
- If the exclude is a RegExp: tests `find.match(exclude)`.
- If both are strings: exact match.

---

## Output Control

### `strictOutput`

- **Type:** `boolean`
- **Default:** `true`

Restrict declaration file output to `outDir`. If `true`, generated files whose path does not start with the normalized `outDir` are skipped with a warning.

### `copyDtsFiles`

- **Type:** `boolean`
- **Default:** `false` for Vite, `true` for all other bundlers.

Whether to copy existing `.d.ts` source files (those that TypeScript already knows about in the program) into the output directory.

In Vite, this defaults to `false` because Vite's own pipeline usually handles `.d.ts` assets. In Webpack, Rspack, Rollup, Rolldown, and Esbuild, it defaults to `true` so that handwritten declaration files are preserved in the output.

### `cleanVueFileName`

- **Type:** `boolean`
- **Default:** `false`

Whether to transform file names ending in `.vue.d.ts` (or `.vue.d.cts` / `.vue.d.mts`) to `.d.ts` (or `.d.cts` / `.d.mts`).

If another file has already been emitted to the cleaned path, the original name is kept to avoid overwriting. Import paths inside declarations are also cleaned: `import('./Foo.vue')` becomes `import('./Foo')`.

### `staticImport`

- **Type:** `boolean`
- **Default:** `false`

Transform dynamic `import()` type references into static top-level imports:

```ts
// Before
import('vue').DefineComponent

// After
import { DefineComponent } from 'vue'
```

This option handles nested generics and synthesizes default import names (`__DTS_DEFAULT_N__`). Only transforms `ImportTypeNode` in type positions; runtime `import()` expressions are not affected. Forced to `true` when `bundleTypes` is enabled.

### `clearPureImport`

- **Type:** `boolean`
- **Default:** `true`

Remove side-effect-only imports (`import 'xxx'`) from generated declaration files. Does **not** remove imports with an import clause such as `import { foo } from 'bar'` or `import type { Foo } from 'bar'`.

### `insertTypesEntry`

- **Type:** `boolean`
- **Default:** `false`

Generate a types entry file after emitting declarations. Forced to `true` when `bundleTypes` is enabled.

For a single entry, the plugin resolves the output path from `package.json` (`publishConfig.types` → `types` → `typings` → `exports`) or falls back to `${outDir}/index.d.ts`. If the resolved path does not end with `.d.ts`, it is auto-corrected with a warning.

For multiple entries, `${outDir}/${entryName}.d.ts` is generated for each entry, re-exporting the source module.

### `declarationOnly`

- **Type:** `boolean`
- **Default:** `false`

Emit declaration files only and remove all original JS/CSS/asset outputs:

- **Vite / Rollup / Rolldown:** deletes all assets from the `generateBundle` hook.
- **Webpack:** clears the entire `compilation.assets` object.
- **Rspack:** deletes all assets in the `processAssets` hook.
- **Esbuild:** **no-op** — original outputs are preserved.

---

## Bundling

### `bundleTypes`

- **Type:** `boolean | BundleTypesOptions`
- **Default:** `false`

Rollup type declaration files into a single file per entry using `@microsoft/api-extractor`. This is a time-intensive operation.

When configured as an object:

#### `bundleTypes.extractorConfig`

- **Type:** `BundleConfig`
- **Default:** `{}`

Override the config of `@microsoft/api-extractor`. See [Configure API Extractor](https://api-extractor.com/pages/setup/configure_api_report/).

#### `bundleTypes.bundledPackages`

- **Type:** `string[]`
- **Default:** `[]`

Packages whose types should be inlined into the rolled-up output. See [bundledPackages](https://api-extractor.com/pages/configs/api-extractor_json/#bundledpackages).

#### `bundleTypes.invokeOptions`

- **Type:** `IExtractorInvokeOptions`
- **Default:** `{}`

Override the invocation options of `@microsoft/api-extractor`. See [Invoking from a build script](https://api-extractor.com/pages/setup/invoking/#invoking-from-a-build-script).

#### `bundleTypes.configPath`

- **Type:** `string`
- **Default:** `'./api-extractor.json'`

Specify an external api-extractor config file. The configuration is merged in this order (deep merge, later overrides earlier):

1. **Internal base config** — sets `dtsRollup.enabled: true`, disables report generation, configures `mainEntryPointFilePath`, etc.
2. **File config** — loaded from `configPath`.
3. **`extractorConfig`** — your inline overrides.

After bundling succeeds, all emitted files that were not bundled are deleted and empty directories are cleaned up. `declare module` blocks collected during transform are appended to each rolled-up file.

---

## Hooks

### `beforeWriteFile`

- **Type:**

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

- **Default:** `() => {}`

Called before each declaration file (and its source map) is written to disk. This hook runs after path extension conversion but before the `strictOutput` check.

- Return `false` or `Promise<false>` to skip the file entirely.
- Return `{ filePath, content }` to override the path and/or content. Use `??` semantics for `content`: `null` or `undefined` falls back to the original content.

### `afterRollup`

- **Type:** `(result: ExtractorResult) => MaybePromise<void>`
- **Default:** `() => {}`

Called after each entry is successfully bundled by `@microsoft/api-extractor`. If bundling fails (e.g., "Unable to follow symbol"), this hook is **not** called — the plugin throws first.

### `afterBootstrap`

- **Type:** `(runtime: Runtime) => MaybePromise<void>`
- **Default:** `() => {}`

Called immediately after the `Runtime` instance is created in `buildStart`. At this point the Runtime has initialized `program`, `host`, `diagnostics`, and `aliases`, but `outputFiles` is still empty; no emission has occurred yet.

### `afterDiagnostic`

- **Type:** `(diagnostics: readonly ts.Diagnostic[]) => MaybePromise<void>`
- **Default:** `() => {}`

Called after TypeScript diagnostics are collected and before files are emitted. The array contains declaration, semantic, and syntactic diagnostics. Resolver emit failures are also appended.

### `afterBuild`

- **Type:** `(emittedFiles: Map<string, string>) => MaybePromise<void>`
- **Default:** `() => {}`

Called after all declaration files are written. The map contains `path → content` for every successfully written file, including emitted declarations, types entry files, and rolled-up bundled files.

It **excludes** files skipped by `beforeWriteFile` (`false`), files blocked by `strictOutput`, non-bundled files deleted during `bundleTypes` cleanup, and files written to secondary `outDirs`.

---

## Type Reference

### `OutDirConfig`

```ts
export interface OutDirConfig {
  /** Output directory path */
  dir: string,
  /**
   * Module format
   * - 'cjs': generates .d.cts files
   * - 'esm': generates .d.mts files
   * - undefined: generates .d.ts files (default)
   */
  moduleFormat?: 'cjs' | 'esm',
}
```

### `Resolver`

```ts
export interface Resolver {
  /**
   * The name of the resolver.
   * A later resolver with the same name will overwrite the earlier one.
   */
  name: string,
  /** Determine whether the resolver supports the file */
  supports: (id: string) => void | boolean,
  /**
   * Transform source files into declaration files.
   * Note that the returned paths should be based on `outDir`, or relative to `root`.
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
