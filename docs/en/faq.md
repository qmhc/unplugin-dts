# FAQ

**English** | [中文](../zh/faq.md)

Here are some frequently asked questions and their solutions.

## Unable to infer types from packages in `node_modules`

This is an existing [TypeScript issue](https://github.com/microsoft/TypeScript/issues/42873) where TypeScript is unable to infer types from packages located in `node_modules` through soft links (pnpm). A workaround is to add `baseUrl` to your `tsconfig.json` and specify the `paths` for these packages:

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

## `Internal Error` occurs when using `bundleTypes: true`

Refer to this [issue](https://github.com/microsoft/rushstack/issues/3875). It's due to a limitation of `@microsoft/api-extractor` or the TypeScript resolver.

The main reason is that `baseUrl` is specified in `tsconfig.json` and non-standard paths are used directly in imports.

For example, if `baseUrl: 'src'` is specified, importing from `<root>/src/components/index.ts` in `<root>/src/index.ts` using `import 'components'` instead of `import './components'` will trigger this issue.

Currently, you need to avoid the situation described above, or use aliases via the `paths` option instead.

Additionally, when using Vue generic components (`<script setup generic="...">`), the generated `.d.ts` files may contain unresolved internal types (such as `__VLS_EmitsToProps`) from `@vue/language-core`. Since these are not part of Vue's public API, `@microsoft/api-extractor` may fail with "Unable to follow symbol". The plugin automatically replaces these unresolved internal types with `{}` when `bundleTypes` is enabled, so manual intervention is generally not required.

## Get module not found errors during build

This is likely due to incorrect configuration of the `include` property in your default `tsconfig.json`.

Due to some limitations, the plugin relies on the top-level `tsconfig.json` to resolve the files to include. Therefore, you need to specify the correct `include` property in the top-level `tsconfig.json`, or you can specify a configuration file path with the correct `include` property using the `tsconfigPath` option of the plugin. For example, in the Vite initial template, it is `tsconfig.app.json`.

You can refer to this [comment](https://github.com/qmhc/vite-plugin-dts/issues/343#issuecomment-2198111439).

## Vue component emit types are inferred as `any` or missing

When using `defineEmits` with interface overloads (e.g. `defineEmits<Events>()`) and the number of emits exceeds 8, Vue language tools may infer emit types as `[x: string]: any` due to a limitation in the `__VLS_ConstructorOverloads` type.

As a workaround, use the object-style `defineEmits` instead:

```ts
defineEmits<{
  click: [id: number],
  submit: [value: string],
  // ...more events
}>()
```

## Types from internal monorepo packages are not inlined

In a monorepo, when package A depends on an internal/unpublished package B, the generated `.d.ts` files of package A may still contain `import { ... } from 'packageB'`. After publishing, consumers won't be able to resolve package B since it is not published.

### Recommended workaround

Configure the plugin to directly process the **source code** of the internal package instead of its build outputs. This way, TypeScript emits the types as if they belong to package A itself.

**`vite.config.ts`**:

```ts
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      // Point to the source entry of the internal package
      'packageB': resolve(__dirname, '../packageB/src/index.ts'),
    },
  },
  plugins: [
    dts({
      // Include the internal package's source files so they are emitted together
      include: ['src', '../packageB/src'],
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
    }),
  ],
})
```

**`tsconfig.app.json`** (or your active tsconfig):

```json
{
  "compilerOptions": {
    "paths": {
      "packageB": ["../packageB/src/index.ts"]
    }
  }
}
```

> Ensure the internal package's `package.json` includes a valid `version` field (even if `"private": true`), otherwise the workspace resolver may fail to locate the package.

### Alternative: using `bundleTypes.bundledPackages`

If you are already using `bundleTypes: true`, you can ask `@microsoft/api-extractor` to inline specific packages:

```ts
dts({
  bundleTypes: {
    bundledPackages: ['packageB', '@scope/*'],
  },
})
```

However, this has two limitations:

1. It forces all declarations into a **single rolled-up file** per entry, which is not ideal for libraries with multiple entries.
2. `@microsoft/api-extractor` may fail to inline certain complex types (e.g., cross-file re-exports, Vue-specific types) and throw an "Unable to follow symbol" error.
