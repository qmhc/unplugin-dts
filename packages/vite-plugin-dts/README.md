<h1 align="center">vite-plugin-dts</h1>

<p align="center">
(Do not recommend anymore, please use <code>unplugin-dts</code> instead)
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vite-plugin-dts">
    <img src="https://img.shields.io/npm/v/vite-plugin-dts?color=orange&label=" alt="version" />
  </a>
  <a href="https://github.com/qmhc/vite-plugin-dts/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/vite-plugin-dts" alt="license" />
  </a>
</p>

## Install

```sh
pnpm i -D vite-plugin-dts
```

## Usage

In `vite.config.ts`:

```ts
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLib',
      formats: ['es'],
      fileName: 'my-lib',
    },
  },
  plugins: [dts()],
})
```

By default, the generated declaration files are following the source structure.

Fortunately, with the help of [API Extractor](https://api-extractor.com/), the plugin can bundle all types into a single file. You just need to install `@microsoft/api-extractor` and set `bundleTypes: true`:

```ts
export default defineConfig({
  plugins: [dts({ bundleTypes: true })],
})
```

If you start with official Vite template, you should specify the `tsconfigPath`:

```ts
export default defineConfig({
  plugins: [dts({ tsconfigPath: './tsconfig.app.json' })],
})
```

## Documentation

For full documentation, please refer to [unplugin-dts](../../docs/en/usage.md).

## Example

A real project using this plugin: [Vexip UI](https://github.com/vexip-ui/vexip-ui).

## License

MIT License.
