# [1.0.0-beta.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2025-07-13)


### Bug Fixes

* should dynamic load api-extractor when bundling ([4ad5a76](https://github.com/qmhc/vite-plugin-dts/commit/4ad5a76e9847ab1d080d78f160e1c0dffd138911)), closes [#435](https://github.com/qmhc/vite-plugin-dts/issues/435)



# [1.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2025-07-07)


### Bug Fixes

* correctly filter path with parenthesis ([5e7e469](https://github.com/qmhc/vite-plugin-dts/commit/5e7e469d43b81e4832b5ea03b0faa8ec08b6ede1)), closes [#430](https://github.com/qmhc/vite-plugin-dts/issues/430)


### Features

* extract vue language dependency ([6dea0c4](https://github.com/qmhc/vite-plugin-dts/commit/6dea0c49279ba8eb0b46c7480e62f50958f5bf39)), closes [#433](https://github.com/qmhc/vite-plugin-dts/issues/433)



# [1.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2025-06-18)


### Bug Fixes

* correctly use resolve method ([337e43e](https://github.com/qmhc/vite-plugin-dts/commit/337e43e286cc255b255fdec6a0f0822fe3ef6034))



# [1.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2025-06-16)


### Bug Fixes

* correct package.json exports field to fix FalseESM issue ([#431](https://github.com/qmhc/vite-plugin-dts/issues/431)) ([ee407a5](https://github.com/qmhc/vite-plugin-dts/commit/ee407a5a1c5c8a7480bb1e70f624b8ff88dd91d1))



# [1.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v4.5.4...v1.0.0-beta.0) (2025-05-18)


### Code Refactoring

* switch to use unplugin & adjust options ([#426](https://github.com/qmhc/vite-plugin-dts/issues/426)) ([dfe2a9b](https://github.com/qmhc/vite-plugin-dts/commit/dfe2a9bcdeb2a93078da95f22cd06065bccef1a5))


### BREAKING CHANGES

* `rollupTypes` -> `bundleTypes`, `bundledPackages` -> `bundleTypes.bundledPackages`, `rollupConfig` -> `bundleTypes.extractorConfig`, `rollupOptions` -> `bundleTypes.invokeOptions`, `logLevel` removed, `@microsoft/api-extractor` now is a peer dependency.



