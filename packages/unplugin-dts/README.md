<h1 align="center">unplugin-dts</h1>

<p align="center">
  An unplugin that generates declaration files (<code>*.d.ts</code>) from <code>.ts(x)</code> or <code>.vue</code> source files when using <a href="https://vitejs.dev/guide/build.html#library-mode">library mode</a>.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vite-plugin-dts">
    <img src="https://img.shields.io/npm/v/vite-plugin-dts?color=orange&label=" alt="version" />
  </a>
  <a href="https://github.com/qmhc/vite-plugin-dts/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/vite-plugin-dts" alt="license" />
  </a>
</p>

## Installation

```sh
pnpm i -D unplugin-dts
```

## Quick Start

```ts
import dts from 'unplugin-dts/vite'

export default defineConfig({
  plugins: [dts()],
})
```

Supports Vite, Rollup, Rolldown, Webpack, Rspack and Esbuild.

## Documentation

- [Usage](../../docs/en/usage.md)
- [Options](../../docs/en/options.md)
- [FAQ](../../docs/en/faq.md)
- [Migration (v4 → v5)](../../docs/en/migration-v4-to-v5.md)

## Example

A real project using this plugin: [Vexip UI](https://github.com/vexip-ui/vexip-ui).

## License

MIT License.
