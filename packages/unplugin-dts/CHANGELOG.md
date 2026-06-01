## [1.0.2](https://github.com/qmhc/unplugin-dts/compare/v1.0.0-beta.7...v1.0.2) (2026-06-01)

### Bug Fixes

- avoid self-referencing synthetic entry when entry dts path equals types path ([f08ae3e](https://github.com/qmhc/unplugin-dts/commit/f08ae3ec690156be02fb55ca231fa014880e906b)), closes [#420](https://github.com/qmhc/unplugin-dts/issues/420)
- include .vue files when resolving tsconfig include patterns ([d4e41d2](https://github.com/qmhc/unplugin-dts/commit/d4e41d26f825fe6ef6ca682bf36be2687992e20e)), closes [#469](https://github.com/qmhc/unplugin-dts/issues/469)
- loop through all aliases so wildcard _ does not block @/_ resolution ([#477](https://github.com/qmhc/unplugin-dts/issues/477)) ([57b6278](https://github.com/qmhc/unplugin-dts/commit/57b6278f69d4fd057a2658ccaea6ff45166f8405))
- **plugin:** re-emit declarations when non-type files change in watch mode ([a6bc975](https://github.com/qmhc/unplugin-dts/commit/a6bc975a106f73dd41edea49bf4208d5d1b9b623)), closes [#335](https://github.com/qmhc/unplugin-dts/issues/335)
- **rolldown:** correct exported type for Rolldown plugin ([6e0c0d2](https://github.com/qmhc/unplugin-dts/commit/6e0c0d2aec8d971a28530b649b0d822004f27bd8)), closes [#470](https://github.com/qmhc/unplugin-dts/issues/470)
- **unplugin-dts:** add .js extension to synthetic entry imports for nodenext ([fff6ee3](https://github.com/qmhc/unplugin-dts/commit/fff6ee3ce4c6bf50cda5dcef4ef550256c1d69ca)), closes [#417](https://github.com/qmhc/unplugin-dts/issues/417)
- **unplugin-dts:** avoid leaking optional peer types into declaration files ([e0eda08](https://github.com/qmhc/unplugin-dts/commit/e0eda08c3efe59e5fdc3b6bbf1b3c9da1a8a0ae6)), closes [#476](https://github.com/qmhc/unplugin-dts/issues/476)
- **unplugin-dts:** fix getResolvedModule error when bundling dts files outside src ([89a12db](https://github.com/qmhc/unplugin-dts/commit/89a12dba6e23b220d598beca20356c54376f4f50)), closes [#401](https://github.com/qmhc/unplugin-dts/issues/401)
- **unplugin-dts:** forward aliasesExclude to Runtime ([739db62](https://github.com/qmhc/unplugin-dts/commit/739db6209ff21d7b3d6ca0c5b394b474ce85c641)), closes [#472](https://github.com/qmhc/unplugin-dts/issues/472)

## [1.0.1](https://github.com/qmhc/unplugin-dts/compare/v1.0.0-beta.7...v1.0.1) (2026-05-19)

### Bug Fixes

- include .vue files when resolving tsconfig include patterns ([d4e41d2](https://github.com/qmhc/unplugin-dts/commit/d4e41d26f825fe6ef6ca682bf36be2687992e20e)), closes [#469](https://github.com/qmhc/unplugin-dts/issues/469)
- **rolldown:** correct exported type for Rolldown plugin ([6e0c0d2](https://github.com/qmhc/unplugin-dts/commit/6e0c0d2aec8d971a28530b649b0d822004f27bd8)), closes [#470](https://github.com/qmhc/unplugin-dts/issues/470)
- **unplugin-dts:** avoid leaking optional peer types into declaration files ([e0eda08](https://github.com/qmhc/unplugin-dts/commit/e0eda08c3efe59e5fdc3b6bbf1b3c9da1a8a0ae6)), closes [#476](https://github.com/qmhc/unplugin-dts/issues/476)
- **unplugin-dts:** forward aliasesExclude to Runtime ([739db62](https://github.com/qmhc/unplugin-dts/commit/739db6209ff21d7b3d6ca0c5b394b474ce85c641)), closes [#472](https://github.com/qmhc/unplugin-dts/issues/472)

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.7...v1.0.0) (2026-04-30)

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
