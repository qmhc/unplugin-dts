# FAQ

**English** | [中文](../zh/faq.md)

Here are some frequently asked questions and their solutions.

## Type errors that are unable to infer types from packages in `node_modules`

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

## `Internal Error` occurs when using `bundleTypes: true`

Refer to this [issue](https://github.com/microsoft/rushstack/issues/3875). It's due to a limitation of `@microsoft/api-extractor` or the TypeScript resolver.

The main reason is that `baseUrl` is specified in `tsconfig.json` and non-standard paths are used directly when imported.

For example: `baseUrl: 'src'` is specified and importing from `<root>/src/components/index.ts` in `<root>/src/index.ts`, and `import 'components'` is used instead of `import './components'`.

Currently, you need to avoid the above situation, or use aliases instead (with the `paths` option).

Additionally, when using Vue generic components (`<script setup generic="...">`), the generated `.d.ts` files may contain unresolved internal types (such as `__VLS_EmitsToProps`) from `@vue/language-core`. Since these are not part of Vue's public API, `@microsoft/api-extractor` may fail with "Unable to follow symbol". The plugin automatically replaces these unresolved internal types with `{}` when `bundleTypes` is enabled, so generally no manual action is required.

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
