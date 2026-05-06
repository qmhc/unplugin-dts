# Migration Guide: vite-plugin-dts v4 → v5 / unplugin-dts v1

**English** | [中文](../zh/migration-v4-to-v5.md)

v5 is a major architectural upgrade. The core logic has been extracted into `unplugin-dts`, while `vite-plugin-dts` has become a thin compatibility layer that simply re-exports `unplugin-dts/vite`. At the same time, the plugin officially supports Rollup, Rolldown, Webpack, Rspack, and Esbuild.

> If you are using Vite only, you can continue using `vite-plugin-dts`. Its public API is highly compatible with v4. However, it is recommended to use `unplugin-dts` directly for new projects.

---

## Table of Contents

- [Package Installation Changes](#package-installation-changes)
- [Bundler Import Paths](#bundler-import-paths)
- [Breaking Changes](#breaking-changes)
  - [`rollupTypes` → `bundleTypes`](#rolluptypes--bundletypes)
  - [Flattening of `rollupConfig` / `rollupOptions` / `bundledPackages`](#flattening-of-rollupconfig--rollupoptions--bundledpackages)
  - [`outDir` → `outDirs`](#outdir--outdirs)
  - [Removal of `logLevel`](#removal-of-loglevel)
- [New Options and Capabilities](#new-options-and-capabilities)
  - [Multi-Bundler Support](#multi-bundler-support)
  - [`processor`: Explicit TS/Vue Program Processor](#processor-explicit-tsvue-program-processor)
  - [`aliases`: Custom Path Aliases](#aliases-custom-path-aliases)
  - [`afterBootstrap` Hook](#afterbootstrap-hook)
  - [`bundleTypes.configPath`](#bundletypesconfigpath)
  - [`outDirs` Supports `moduleFormat`](#outdirs-supports-moduleformat)
- [Behavioral Changes](#behavioral-changes)
  - [`declarationOnly` and esbuild](#declarationonly-and-esbuild)
  - [Automatic Vue File Detection](#automatic-vue-file-detection)
  - [Renamed Trigger Condition for `insertTypesEntry` / `staticImport`](#renamed-trigger-condition-for-inserttypesentry--staticimport)
- [Dependency Changes](#dependency-changes)
- [Types and Exports](#types-and-exports)
- [Quick Reference Table](#quick-reference-table)

---

## Package Installation Changes

| Scenario                                       | v4                                  | v5                                   |
| ---------------------------------------------- | ----------------------------------- | ------------------------------------ |
| Vite (compatibility)                           | `pnpm i -D vite-plugin-dts`         | `pnpm i -D vite-plugin-dts`          |
| Vite (recommended)                             | —                                   | `pnpm i -D unplugin-dts`             |
| Rollup / Rolldown / Webpack / Rspack / Esbuild | `vite-plugin-dts` (limited support) | `pnpm i -D unplugin-dts`             |
| Using `bundleTypes`                            | Built-in API Extractor              | `pnpm i -D @microsoft/api-extractor` |
| Vue projects                                   | Built-in Vue language core          | `pnpm i -D @vue/language-core`       |

> **Note**: Both `@microsoft/api-extractor` and `@vue/language-core` are `peerDependencies` (`optional: true`) in v5. Please install them manually when needed.

---

## Bundler Import Paths

```ts
// ========== Vite ==========
// v4
import dts from 'vite-plugin-dts'

// v5 (compatible, still works)
import dts from 'vite-plugin-dts'

// v5 (recommended)
import dts from 'unplugin-dts/vite'

// ========== Rollup ==========
// v4 (only supported via vite-plugin-dts Rollup compatibility mode)
import dts from 'vite-plugin-dts'

// v5
import dts from 'unplugin-dts/rollup'

// ========== Rolldown (new) ==========
import dts from 'unplugin-dts/rolldown'

// ========== Webpack (new) ==========
import dts from 'unplugin-dts/webpack'

// ========== Rspack (new) ==========
import dts from 'unplugin-dts/rspack'

// ========== Esbuild (new) ==========
import dts from 'unplugin-dts/esbuild'
```

---

## Breaking Changes

### `rollupTypes` → `bundleTypes`

This is the most significant naming change. All API Extractor related configurations have been consolidated under `bundleTypes`.

```ts
import { defineConfig } from 'vite'

// v4
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
        extractorConfig: { /* ... */ },      // formerly rollupConfig
        invokeOptions: { /* ... */ },        // formerly rollupOptions
        configPath: './api-extractor.json',  // new
      },
    }),
  ],
})

// Boolean shorthand still works
export default defineConfig({
  plugins: [dts({ bundleTypes: true })],
})
```

### Flattening of `rollupConfig` / `rollupOptions` / `bundledPackages`

| v4                | v5                                  |
| ----------------- | ----------------------------------- |
| `rollupTypes`     | `bundleTypes` (`boolean \| object`) |
| `bundledPackages` | `bundleTypes.bundledPackages`       |
| `rollupConfig`    | `bundleTypes.extractorConfig`       |
| `rollupOptions`   | `bundleTypes.invokeOptions`         |

> Type hint: The type of `bundleTypes.extractorConfig` has also been renamed from `RollupConfig` to `BundleConfig`, with the omission of internal fields like `extends`, `projectFolder`, `mainEntryPointFilePath`, and `bundledPackages`.

### `outDir` → `outDirs`

v5 renames `outDir` to `outDirs` and supports richer output configurations: strings, arrays, `OutDirConfig` objects, or mixed arrays.

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

// v5 (string, equivalent)
export default defineConfig({
  plugins: [
    dts({
      outDirs: 'dist',
    }),
  ],
})

// v5 (multiple directories + module format, new capability)
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

### Removal of `logLevel`

The `logLevel` option from v4 has been removed. v5 no longer depends on Vite's `LogLevel` type; log output is managed internally by the plugin. To control logging, please use your bundler's own log level or environment variables (e.g., `DEBUG=unplugin-dts`).

---

## New Options and Capabilities

### Multi-Bundler Support

This is the core upgrade in v5. The same configuration works seamlessly across 6 bundlers:

- `unplugin-dts/vite`
- `unplugin-dts/rollup`
- `unplugin-dts/rolldown`
- `unplugin-dts/webpack`
- `unplugin-dts/rspack`
- `unplugin-dts/esbuild`

The plugin automatically infers `root` and `outDirs` from each bundler's `entry`, `output.path`, `outdir`, `build.outDir`, etc., reducing duplicate configuration.

### `processor`: Explicit TS/Vue Program Processor

v5 introduces the `processor` option to control how the TypeScript Program is created:

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    dts({
      processor: 'vue',  // or 'ts' (default)
    }),
  ],
})
```

- When not specified, the plugin automatically scans source files for `.vue` files. If found, it automatically uses the `'vue'` processor.
- For pure TypeScript projects, keep the default `'ts'`.
- **Note for Vue projects**: v5 requires installing `@vue/language-core` separately.

### `aliases`: Custom Path Aliases

In addition to automatically resolving aliases from `tsconfig.json` `paths`, v5 allows passing custom aliases directly:

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    dts({
      aliases: [
        { find: /^@\//, replacement: './src/' },
        { find: 'old-pkg', replacement: 'new-pkg' },
      ],
      // Or object form
      // aliases: { '@/*': './src/*', 'old-pkg': 'new-pkg' }
    }),
  ],
})
```

### `afterBootstrap` Hook

Called after the Runtime (TS Program, resolvers, aliases, etc.) is created, but before type checking and emit:

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    dts({
      afterBootstrap(runtime) {
        // Access the runtime for advanced customization
        console.info(runtime.getRootFiles())
      },
    }),
  ],
})
```

### `bundleTypes.configPath`

v5's `bundleTypes` adds `configPath`, allowing you to specify a real `api-extractor.json` config file path:

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

Config merge priority: **internal defaults** → **`configPath` file config** → **`extractorConfig` manual config**.

### `outDirs` Supports `moduleFormat`

Using the `OutDirConfig` object, you can specify a module format for each output directory, automatically generating `.d.cts` or `.d.mts`:

```ts
export interface OutDirConfig {
  dir: string,
  moduleFormat?: 'cjs' | 'esm',  // defaults to .d.ts if unspecified
}
```

---

## Behavioral Changes

### `declarationOnly` and esbuild

In v4, `declarationOnly: true` forcefully removes all build artifacts (Vite/Rollup only).

In v5, this behavior remains the same, but **esbuild is excluded** — enabling `declarationOnly` in esbuild will not remove original outputs, because esbuild's plugin lifecycle and bundling mechanism differ from Rollup-based tools.

### Automatic Vue File Detection

v5 automatically detects whether `.vue` files exist in your source. If they do, but `processor` is explicitly set to `'ts'`, the plugin prints a warning:

```text
Detected .vue files but processor is set to "ts". Vue declaration files may not be generated correctly. Consider using processor: "vue".
```

It is recommended to explicitly configure `processor: 'vue'` for Vue projects.

### Renamed Trigger Condition for `insertTypesEntry` / `staticImport`

In v4, when `rollupTypes: true`, `insertTypesEntry` and `staticImport` were forced to `true`.

In v5, the trigger condition has been renamed to when `bundleTypes` is enabled (boolean or object form).

### `copyDtsFiles` Defaults Vary by Bundler

In v4, `copyDtsFiles` defaulted to `false` for all bundlers.

In v5, the defaults are:

| Bundler                                        | Default |
| ---------------------------------------------- | ------- |
| Vite                                           | `false` |
| Rollup / Rolldown / Webpack / Rspack / Esbuild | `true`  |

If you notice `.d.ts` source files not being copied or being copied unexpectedly after migration, please specify this option explicitly.

### `declarationMap` Support

v5 removes the internal `forceDtsEmit` behavior, which means when `declarationMap: true` is set in `tsconfig.json`, the plugin correctly generates `.d.ts.map` source map files (which may have been forcibly overridden in v4).

---

## Dependency Changes

| Dependency                 | v4                | v5                            |
| -------------------------- | ----------------- | ----------------------------- |
| `@microsoft/api-extractor` | Direct dependency | `peerDependencies` (optional) |
| `@vue/language-core`       | Direct dependency | `peerDependencies` (optional) |
| `@volar/typescript`        | Direct dependency | Direct dependency             |
| `unplugin`                 | None              | Direct dependency (core)      |

**Migration suggestions**:

```sh
# If using bundleTypes
pnpm i -D @microsoft/api-extractor

# If using Vue
pnpm i -D @vue/language-core
```

---

## Types and Exports

```ts
// v4
import dts, { type PluginOptions, editSourceMapDir } from 'vite-plugin-dts'

// v5 (vite-plugin-dts compatibility layer, still works)
import dts, { type PluginOptions, editSourceMapDir } from 'vite-plugin-dts'

// v5 (unplugin-dts, recommended)
import dts from 'unplugin-dts/vite'
import { type PluginOptions, editSourceMapDir } from 'unplugin-dts'

export { type PluginOptions, editSourceMapDir }
```

- `editSourceMapDir` signature remains unchanged: `(content: string, fromDir: string, toDir: string) => string`
- `Resolver` type remains unchanged (`name`, `supports`, `transform`)
- `PluginOptions` inheritance has been adjusted, but user-facing fields remain largely consistent

---

## Quick Reference Table

| Option                | v4                | v5                            | Notes                                                    |
| --------------------- | ----------------- | ----------------------------- | -------------------------------------------------------- |
| Import path           | `vite-plugin-dts` | `unplugin-dts/<framework>`    | Vite still supports `vite-plugin-dts`                    |
| `rollupTypes`         | ✅                | ❌                            | Renamed to `bundleTypes`                                 |
| `bundleTypes`         | ❌                | ✅                            | Supports `boolean \| object`                             |
| `bundledPackages`     | Top-level         | `bundleTypes.bundledPackages` | Moved into nested config                                 |
| `rollupConfig`        | Top-level         | `bundleTypes.extractorConfig` | Moved into nested config; type renamed to `BundleConfig` |
| `rollupOptions`       | Top-level         | `bundleTypes.invokeOptions`   | Moved into nested config                                 |
| `outDir`              | ✅                | ❌                            | Renamed to `outDirs`                                     |
| `outDirs`             | ❌                | ✅                            | Supports `moduleFormat`                                  |
| `logLevel`            | ✅                | ❌                            | Removed                                                  |
| `processor`           | ❌                | ✅                            | `'ts' \| 'vue'`, auto-detected                           |
| `aliases`             | ❌                | ✅                            | Custom aliases                                           |
| `afterBootstrap`      | ❌                | ✅                            | Hook after Runtime creation                              |
| `beforeWriteFile`     | ✅                | ✅                            | No changes                                               |
| `afterDiagnostic`     | ✅                | ✅                            | No changes                                               |
| `afterRollup`         | ✅                | ✅                            | No changes                                               |
| `afterBuild`          | ✅                | ✅                            | No changes                                               |
| `declarationOnly`     | ✅                | ✅                            | No longer removes original outputs in esbuild            |
| `insertTypesEntry`    | ✅                | ✅                            | Trigger renamed from `rollupTypes` to `bundleTypes`      |
| `staticImport`        | ✅                | ✅                            | Trigger renamed from `rollupTypes` to `bundleTypes`      |
| `strictOutput`        | ✅                | ✅                            | No changes                                               |
| `copyDtsFiles`        | ✅                | ✅                            | No changes                                               |
| `cleanVueFileName`    | ✅                | ✅                            | No changes                                               |
| `clearPureImport`     | ✅                | ✅                            | No changes                                               |
| `pathsToAliases`      | ✅                | ✅                            | No changes                                               |
| `aliasesExclude`      | ✅                | ✅                            | No changes                                               |
| `resolvers`           | ✅                | ✅                            | No changes                                               |
| `entryRoot`           | ✅                | ✅                            | No changes                                               |
| `tsconfigPath`        | ✅                | ✅                            | No changes                                               |
| `compilerOptions`     | ✅                | ✅                            | No changes                                               |
| `include` / `exclude` | ✅                | ✅                            | No changes                                               |
| `root`                | ✅                | ✅                            | No changes                                               |

---

## Minimal Migration Examples

### Vite Project (Renaming Options Only)

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts' // or 'unplugin-dts/vite'

export default defineConfig({
  plugins: [
    dts({
      // Before (v4)
      // rollupTypes: true,
      // rollupConfig: { ... },
      // rollupOptions: { ... },
      // outDir: 'dist',

      // After (v5)
      bundleTypes: {
        extractorConfig: { /* ... */ },   // formerly rollupConfig
        invokeOptions: { /* ... */ },     // formerly rollupOptions
      },
      outDirs: 'dist',
      // logLevel removed, no need to configure
    }),
  ],
})
```

### Rollup Project (Migrating to unplugin)

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

For further questions, please refer to the full configuration in [README.md](../README.md) and [README.zh-CN.md](../README.zh-CN.md).
