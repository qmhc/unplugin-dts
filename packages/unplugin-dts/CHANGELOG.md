# [1.0.0-beta.7](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2026-04-28)

### Bug Fixes

- aliases in namespace imports ([#418](https://github.com/qmhc/vite-plugin-dts/issues/418)) ([#443](https://github.com/qmhc/vite-plugin-dts/issues/443)) ([3ca6044](https://github.com/qmhc/vite-plugin-dts/commit/3ca6044e537ace29378be8775f083f5858e5e300))
- ensure parse default out dir from scaffold ([46cfca4](https://github.com/qmhc/vite-plugin-dts/commit/46cfca427d0cae2e41071f32001921ffb8a31a43))
- **plugin:** allow custom resolver files to pass through transform ([63dc649](https://github.com/qmhc/vite-plugin-dts/commit/63dc6490d5cb2cc9ac3aa26fb2876f89bd5c8754)), closes [#444](https://github.com/qmhc/vite-plugin-dts/issues/444)
- **plugin:** auto-detect Vue files and auto-set processor ([802d243](https://github.com/qmhc/vite-plugin-dts/commit/802d24346bb2d7e67f173ff7000d4955b7f30a7d)), closes [#454](https://github.com/qmhc/vite-plugin-dts/issues/454)
- resolve tsconfig globs relative to tsconfig dir ([#455](https://github.com/qmhc/vite-plugin-dts/issues/455)) ([8df62f1](https://github.com/qmhc/vite-plugin-dts/commit/8df62f1bf38fb42c1748174f3de85f2a1131a554))
- stricter strategy for skipping insert index ([8c30eb2](https://github.com/qmhc/vite-plugin-dts/commit/8c30eb259ec8ad2866f617958388937c1652c32b)), closes [#415](https://github.com/qmhc/vite-plugin-dts/issues/415)
- **unplugin-dts:** publicRoot mismatch of TS 6.0 rootDir ([b0a695e](https://github.com/qmhc/vite-plugin-dts/commit/b0a695e648703bc814e15167583569d99d3f9fdd)), closes [#467](https://github.com/qmhc/vite-plugin-dts/issues/467)
- **unplugin-dts:** remove forceDtsEmit to support declarationMap ([f417ffe](https://github.com/qmhc/vite-plugin-dts/commit/f417ffec770d887b03993f553532418c6203561b)), closes [#449](https://github.com/qmhc/vite-plugin-dts/issues/449)
- **unplugin-dts:** resolve API Extractor failure with Vue internal types in bundleTypes ([e6c4eea](https://github.com/qmhc/vite-plugin-dts/commit/e6c4eea548b1aea3fa2d12e20f53f7d496f5bd78)), closes [#456](https://github.com/qmhc/vite-plugin-dts/issues/456)
- **unplugin-dts:** resolve tsconfig paths without baseUrl relative to config dir ([051f2ea](https://github.com/qmhc/vite-plugin-dts/commit/051f2ea40bdb6e3cd7c27519a2e66b3aea5dad06)), closes [#458](https://github.com/qmhc/vite-plugin-dts/issues/458)
- use native createParsedCommandLine ([1070f46](https://github.com/qmhc/vite-plugin-dts/commit/1070f46811243ebf2b7c6f4d30a6bdf3e2dbd07a)), closes [#446](https://github.com/qmhc/vite-plugin-dts/issues/446) [#448](https://github.com/qmhc/vite-plugin-dts/issues/448) [#451](https://github.com/qmhc/vite-plugin-dts/issues/451)

### Features

- auto fallback to @typescript/typescript6 for TS 7+ compatibility ([d150536](https://github.com/qmhc/vite-plugin-dts/commit/d150536e11eca7039e5baee05f8b1b17778782c0)), closes [#465](https://github.com/qmhc/vite-plugin-dts/issues/465)
- supports specify module format for output ([a917f3c](https://github.com/qmhc/vite-plugin-dts/commit/a917f3cc395a4bc78cc94f64d71b43baa4e6ecd0))

# [1.0.0-beta.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2025-07-31)

### Bug Fixes

- should collect indentifier module declaration ([79e5440](https://github.com/qmhc/vite-plugin-dts/commit/79e544069a6d0f0c19137b2b10b703d78a678311)), closes [#419](https://github.com/qmhc/vite-plugin-dts/issues/419)
- should exclude outDirs by default ([6d953f4](https://github.com/qmhc/vite-plugin-dts/commit/6d953f44149462dc477356a3fdda14ee117b8d37)), closes [#415](https://github.com/qmhc/vite-plugin-dts/issues/415)

### Features

- add afterBootstrap hook ([b191904](https://github.com/qmhc/vite-plugin-dts/commit/b191904ad77cbe0a6bd98bee06276ca1392af9df)), closes [#326](https://github.com/qmhc/vite-plugin-dts/issues/326)

# [1.0.0-beta.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2025-07-30)

### Bug Fixes

- deep merge bundleTypes.extractorConfig ([e305f33](https://github.com/qmhc/vite-plugin-dts/commit/e305f336b109e124c814fcf3cc9172e2a7c376ba)), closes [#438](https://github.com/qmhc/vite-plugin-dts/issues/438)

### Features

- add processor option for program creation ([d98261b](https://github.com/qmhc/vite-plugin-dts/commit/d98261b190ca99bf6387c8c72ddeaeb3b6ac8c51)), closes [#436](https://github.com/qmhc/vite-plugin-dts/issues/436)
- supports specify real config file for bundling types ([aab0d1b](https://github.com/qmhc/vite-plugin-dts/commit/aab0d1b7d506e2ce97d2d583810f3ddee7b168a8))

### BREAKING CHANGES

- The plugin will no longer heuristically
  detect Vue dependencies to determine whether to use
  `@vue/language-core` for creating the program. You now
  need to explicitly specify the `processor` option to tell
  the plugin which method to use for program creation.

# [1.0.0-beta.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2025-07-13)

### Bug Fixes

- should dynamic load api-extractor when bundling ([4ad5a76](https://github.com/qmhc/vite-plugin-dts/commit/4ad5a76e9847ab1d080d78f160e1c0dffd138911)), closes [#435](https://github.com/qmhc/vite-plugin-dts/issues/435)

# [1.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2025-07-07)

### Bug Fixes

- correctly filter path with parenthesis ([5e7e469](https://github.com/qmhc/vite-plugin-dts/commit/5e7e469d43b81e4832b5ea03b0faa8ec08b6ede1)), closes [#430](https://github.com/qmhc/vite-plugin-dts/issues/430)

### Features

- extract vue language dependency ([6dea0c4](https://github.com/qmhc/vite-plugin-dts/commit/6dea0c49279ba8eb0b46c7480e62f50958f5bf39)), closes [#433](https://github.com/qmhc/vite-plugin-dts/issues/433)

# [1.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2025-06-18)

### Bug Fixes

- correctly use resolve method ([337e43e](https://github.com/qmhc/vite-plugin-dts/commit/337e43e286cc255b255fdec6a0f0822fe3ef6034))

# [1.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2025-06-16)

### Bug Fixes

- correct package.json exports field to fix FalseESM issue ([#431](https://github.com/qmhc/vite-plugin-dts/issues/431)) ([ee407a5](https://github.com/qmhc/vite-plugin-dts/commit/ee407a5a1c5c8a7480bb1e70f624b8ff88dd91d1))

# [1.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v4.5.4...v1.0.0-beta.0) (2025-05-18)

### Code Refactoring

- switch to use unplugin & adjust options ([#426](https://github.com/qmhc/vite-plugin-dts/issues/426)) ([dfe2a9b](https://github.com/qmhc/vite-plugin-dts/commit/dfe2a9bcdeb2a93078da95f22cd06065bccef1a5))

### BREAKING CHANGES

- `rollupTypes` -> `bundleTypes`, `bundledPackages` -> `bundleTypes.bundledPackages`, `rollupConfig` -> `bundleTypes.extractorConfig`, `rollupOptions` -> `bundleTypes.invokeOptions`, `logLevel` removed, `@microsoft/api-extractor` now is a peer dependency.
