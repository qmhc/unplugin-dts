# 常见问题

**中文** | [English](../en/faq.md)

此处将收录一些常见的问题并提供一些解决方案。

## 打包时出现了无法从 `node_modules` 的包中推断类型的错误

这是 TypeScript 通过软链接 (pnpm) 读取 `node_modules` 中过的类型时会出现的一个已知的问题，可以参考这个 [issue](https://github.com/microsoft/TypeScript/issues/42873)，目前已有的一个解决方案，在你的 `tsconfig.json` 中添加 `baseUrl` 以及在 `paths` 添加这些包的路径：

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

## 在 `bundleTypes: true` 时出现 `Internal Error`

参考这个 [issue](https://github.com/microsoft/rushstack/issues/3875)，这是由于 `@microsoft/api-extractor` 或者是 TypeScript 解析器的一些限制导致的。

主要原因在于 `tsconfig.json` 中指定了 `baseUrl` 并且在引入时直接使用非标准路径。

例如：指定了 `baseUrl: 'src'` 并且在 `<root>/src/index.ts` 中引入 `<root>/src/components/index.ts` 时使用了 `import 'components'` 而不是 `import './components'`。

目前想要正常打包，需要规避上述情况，或使用别名代替（配合 `paths` 属性）。

此外，使用 Vue 泛型组件（`<script setup generic="...">`）时，生成的 `.d.ts` 文件可能包含来自 `@vue/language-core` 的未解析内部类型（如 `__VLS_EmitsToProps`）。这些类型不属于 Vue 的公开 API，`@microsoft/api-extractor` 可能会因此报错 "Unable to follow symbol"。插件在开启 `bundleTypes` 时会自动将这些未解析的内部类型替换为 `{}`，通常不需要手动处理。

## 打包时出现找不到模块的错误

这很有可能是因为在你的默认 `tsconfig.json` 中未有正确配置 `include` 导致的。

由于一些局限性，插件依赖最上层的 `tsconfig.json` 来解析需要包含的文件，所以你需要在最上层的 `tsconfig.json` 中指定正确的 `include`，或者通过插件的 `tsconfigPath` 选项指定一个包含了正确 `include` 的配置文件路径，例如在 Vite 初始模板中它是 `tsconfig.app.json`。

可以参考这个 [评论](https://github.com/qmhc/vite-plugin-dts/issues/343#issuecomment-2198111439).

## Vue 组件的 emit 类型被推断为 `any` 或缺失

当使用接口重载形式的 `defineEmits`（例如 `defineEmits<Events>()`）且事件数量超过 8 个时，由于 Vue language tools 中 `__VLS_ConstructorOverloads` 类型的限制，emit 类型可能会被推断为 `[x: string]: any`。

作为变通方案，可以使用对象形式的 `defineEmits`：

```ts
defineEmits<{
  click: [id: number],
  submit: [value: string],
  // ...更多事件
}>()
```
