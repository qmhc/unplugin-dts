# 常见问题

**中文** | [English](../en/faq.md)

此处将收录一些常见的问题并提供一些解决方案。

## 打包时出现了无法从 `node_modules` 的包中推断类型的错误

这是 TypeScript 通过软链接 (pnpm) 读取 `node_modules` 中的类型时会出现的一个已知问题，可以参考这个 [issue](https://github.com/microsoft/TypeScript/issues/42873)，目前已有的一个解决方案是，在你的 `tsconfig.json` 中添加 `baseUrl`，以及在 `paths` 中添加这些包的路径：

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

参考这个 [issue](https://github.com/microsoft/rushstack/issues/3875)，这是由 `@microsoft/api-extractor` 或 TypeScript 解析器的一些限制导致的。

主要原因在于 `tsconfig.json` 中指定了 `baseUrl` 并且在引入时直接使用非标准路径。

例如：指定了 `baseUrl: 'src'` 并且在 `<root>/src/index.ts` 中引入 `<root>/src/components/index.ts` 时使用了 `import 'components'` 而不是 `import './components'`。

目前想要正常打包，需要规避上述情况，或使用别名（配合 `paths` 属性）代替。

此外，使用 Vue 泛型组件（`<script setup generic="...">`）时，生成的 `.d.ts` 文件可能包含来自 `@vue/language-core` 的未解析内部类型（如 `__VLS_EmitsToProps`）。这些类型不属于 Vue 的公开 API，`@microsoft/api-extractor` 可能会因此报错 "Unable to follow symbol"。插件在开启 `bundleTypes` 时会自动将这些未解析的内部类型替换为 `{}`，通常不需要手动处理。

## 打包时出现找不到模块的错误

这很有可能是因为你的默认 `tsconfig.json` 中未正确配置 `include`。

由于一些局限性，插件依赖最上层的 `tsconfig.json` 来解析需要包含的文件，所以你需要在最上层的 `tsconfig.json` 中指定正确的 `include`，或者通过插件的 `tsconfigPath` 选项指定一个包含了正确 `include` 的配置文件路径，例如在 Vite 初始模板中，该配置文件为 `tsconfig.app.json`。

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

## Monorepo 中内部包的类型未被内联

在 monorepo 中，如果 package A 依赖了内部未发布的 package B，生成的 `.d.ts` 文件中可能仍然包含 `import { ... } from 'packageB'`。发布之后，外部用户无法解析 package B，因为这个包并没有被发布。

### 推荐的变通方案

配置插件直接处理内部包的**源码**，而不是它的构建产物。这样 TypeScript 会把这些类型当作 package A 自己的代码一起生成声明文件。

**`vite.config.ts`**：

```ts
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      // 指向内部包的源码入口
      'packageB': resolve(__dirname, '../packageB/src/index.ts'),
    },
  },
  plugins: [
    dts({
      // 将内部包的源码目录也包含进来，使其一起生成声明文件
      include: ['src', '../packageB/src'],
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
    }),
  ],
})
```

**`tsconfig.app.json`**（或你实际使用的 tsconfig）：

```json
{
  "compilerOptions": {
    "paths": {
      "packageB": ["../packageB/src/index.ts"]
    }
  }
}
```

> 内部包的 `package.json` 需要有有效的 `version` 字段（即使设置了 `"private": true`），否则 workspace 的解析器可能无法定位到该包。

### 替代方案：使用 `bundleTypes.bundledPackages`

如果你已经在使用 `bundleTypes: true`，可以配置 `@microsoft/api-extractor` 内联指定的包：

```ts
dts({
  bundleTypes: {
    bundledPackages: ['packageB', '@scope/*'],
  },
})
```

但这个方案有两个局限：

1. 它会强制将所有声明文件**打包成单个文件**（每个入口一个），对多入口库不太友好。
2. `@microsoft/api-extractor` 对某些复杂类型（如跨文件重导出、Vue 特定类型）可能无法成功内联，并抛出 "Unable to follow symbol" 错误。

## 多入口场景下开启 `bundleTypes: true` 出现重复类型定义

当库存在多个入口（例如 `index` 和 `react`），且这些入口共用了一部分内部代码时，`bundleTypes: true` 是通过 `@microsoft/api-extractor` 为每个入口**单独打包**的，它会将所有依赖的类型内联到各自的 `.d.ts` 文件中。

这导致共享的类型（如 class、interface 等）被重复定义在多个入口的 `.d.ts` 里。对于普通类型，TypeScript 通常能兼容处理；但如果共享代码中导出了带 `private` 成员的 `class`，TypeScript 会将不同文件中的重复声明视为**不同的类型**，从而引发消费者端的类型不匹配错误。

这是 `@microsoft/api-extractor` 的底层架构限制——它是为单入口设计的 bundler，没有声明文件 chunk 的概念。

### 变通方案

对于共享内部代码较多的多入口库，建议**不要使用 `bundleTypes: true`**，改用插件默认行为（由 `tsc` 按原始模块结构输出声明文件）。这样共享模块会保留自己独立的 `.d.ts` 文件，各入口可以正常导入，不会出现重复定义。

如果确实需要每个入口只输出单个 `.d.ts` 文件，可以考虑调整代码结构，避免让共享代码直接从多个入口中导出；或者避免在共享模块中导出带 `private` 成员的 class。
