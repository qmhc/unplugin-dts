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

Requires **Node.js >= 20**.

```sh
pnpm i -D unplugin-dts
```

Previous only for Vite (not recommend):

```sh
pnpm i -D vite-plugin-dts
```

## Quick Start

```ts
import dts from 'unplugin-dts/vite'

export default defineConfig({
  plugins: [dts()],
})
```

Supports Vite, Rollup, Rolldown, Webpack, Rspack and Esbuild. See [Usage](./docs/en/usage.md) for detailed bundler setup.

## Documentation

- [Usage](./docs/en/usage.md) - Installation and bundler configuration
- [Options](./docs/en/options.md) - Full plugin options reference
- [FAQ](./docs/en/faq.md) - Frequently asked questions and solutions
- [Migration (v4 → v5)](./docs/en/migration-v4-to-v5.md) - Migrating from vite-plugin-dts v4

## Contributors

Thanks for all the contributions!

<a href="https://github.com/qmhc/vite-plugin-dts/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=qmhc/vite-plugin-dts" alt="contributors" />
</a>

A real project using this plugin: [Vexip UI](https://github.com/vexip-ui/vexip-ui).

## License

MIT License.
