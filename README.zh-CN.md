<h1 align="center">unplugin-dts</h1>

<p align="center">
  一款用于在 <a href="https://cn.vitejs.dev/guide/build.html#library-mode">库模式</a> 中从 <code>.ts(x)</code> 或 <code>.vue</code> 源文件生成类型文件（<code>*.d.ts</code>）的 Unplugin 插件。
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

> 它始于 vite-plugin-dts，在用 unplugin 重写后，它变得更加通用了。

**中文** | [English](./README.md)

## 安装

```sh
pnpm i -D unplugin-dts
```

只在 Vite 中使用（不再推荐）：

```sh
pnpm i -D vite-plugin-dts
```

## 快速开始

```ts
import dts from 'unplugin-dts/vite'

export default defineConfig({
  plugins: [dts()],
})
```

支持 Vite、Rollup、Rolldown、Webpack、Rspack 和 Esbuild。详细的构建工具配置请查看[使用文档](./docs/zh/usage.md)。

## 文档

- [使用](./docs/zh/usage.md) - 安装与各构建工具配置
- [选项](./docs/zh/options.md) - 完整的插件选项参考
- [常见问题](./docs/zh/faq.md) - 常见问题与解决方案
- [迁移指南 (v4 → v5)](./docs/zh/migration-v4-to-v5.md) - 从 vite-plugin-dts v4 迁移

## 贡献者

感谢他们的所做的一切贡献！

<a href="https://github.com/qmhc/vite-plugin-dts/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=qmhc/vite-plugin-dts" alt="contributors" />
</a>

## 示例

克隆项目然后执行下列命令：

```sh
pnpm run test:ts
```

然后检查 `examples/ts/types` 目录。

`examples` 目录下同样有 Vue 和 React 的案例。

一个使用该插件的真实项目：[Vexip UI](https://github.com/vexip-ui/vexip-ui)。

## 授权

MIT 授权。
