# AGENTS.md

## 目标与边界

- pnpm monorepo（workspace: `examples/**`、`packages/**`）
- 核心包 `packages/unplugin-dts`，兼容包 `packages/vite-plugin-dts`
- `vite-plugin-dts` 禁止新增 transform/emit 逻辑，只做 `unplugin-dts/vite` 的 re-export
- 目标：在 Vite / Rollup / Rolldown / Webpack / Rspack / Esbuild 下稳定生成 `.d.ts`

## 禁止项

- 禁止手改生成物：`packages/*/dist`、`examples/*/dist`、`examples/*/types`、`examples/*/docs/*.api.json`
- 禁止在 bundler 入口（`esbuild.ts`、`rolldown.ts`、`rollup.ts`、`rspack.ts`、`vite.ts`、`webpack.ts`）新增逻辑；新增逻辑沉到 `plugin.ts` 或 `core/*`
- 禁止新增遗留式 `.eslintrc*` 配置
- 禁止为简化把细粒度类型改成 `any`
- 禁止删除 `Runtime` 中 Vue 的 `setModuleResolution` 补丁（无夹具验证时）
- 禁止引入新的随手拼路径逻辑

## 强制规范

- 工作从仓库根目录执行，统一使用 `pnpm`
- 仓库使用 ESM；新增 Node 内置模块导入优先使用 `node:` 前缀
- 新增路径处理必须复用 `packages/unplugin-dts/src/core/utils.ts` 中的工具：`normalizePath`、`resolve`、`ensureAbsolute`、`resolveConfigDir`
- 修改 `tsconfig` 解析、模块解析或别名处理时，保持 bundler 场景与 Node 场景兼容
- 修改公开选项时，同步：
  - `packages/unplugin-dts/src/types.ts`
  - `docs/en/options.md`
  - `docs/zh/options.md`
- 修改产物行为时，同步受影响的 README（`README.md`、`README.zh-CN.md`、各包内 README）及 `docs/en/usage.md`、`docs/zh/usage.md`

## 代码风格

- 2 空格缩进，LF，UTF-8
- 使用根目录 `eslint.config.ts` flat config
- lint-staged 配置位于 `.husky/.lintstagedrc`；`*.md` 走 prettier，`*.ts/js/tsx/vue` 走 prettier + eslint --fix

## 改动类型与验证矩阵

| 改动范围                                                   | 同步/约束要求                                                                            | 验证命令                                                                                                                                          |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| transform.ts / alias / 路径映射 / `.vue.d.ts` 文件名清理   | 补/改 `packages/unplugin-dts/tests/transform.spec.ts`，必要时补 `tests/utils.spec.ts`    | `pnpm --filter unplugin-dts test`；涉及 Vite/Vue 产物路径时补跑对应示例                                                                           |
| runtime.ts / emit / bundleTypes / 多 outDir / 类型入口写入 | 补核心测试                                                                               | `pnpm --filter unplugin-dts test` + `pnpm -C examples/ts-vite build`；触及 bundleTypes 时补跑启用 bundleTypes 的示例（如 `ts-vite` / `vue-vite`） |
| Vue / Svelte / JSON resolver 或 processor                  | 补对应测试或最小夹具                                                                     | Vue: `pnpm -C examples/vue-vite build`（或 `vue-rspack` / `vue-rolldown`）；Svelte: `pnpm -C examples/svelte-vite build`                          |
| bundler 适配层                                             | 新增逻辑先判断是否应沉到共享层；共享生命周期钩子改动需交叉验证                           | 跑对应 bundler 示例；共享层改动补跑一个非同类 bundler 示例                                                                                        |
| 公开 API / 选项 / 产物行为                                 | 同步类型定义 + 选项文档（`docs/en/options.md`、`docs/zh/options.md`）+ 相关 README/usage | `pnpm build`                                                                                                                                      |
| 发版脚本                                                   | 默认禁止执行 `release` 或 `publish:*`；用户明确要求时优先 dry-run                        | —                                                                                                                                                 |

## 全局命令

| 用途           | 命令           |
| -------------- | -------------- |
| 安装依赖       | `pnpm install` |
| 根目录 lint    | `pnpm lint`    |
| 根目录测试     | `pnpm test`    |
| 构建所有包     | `pnpm build`   |
| 本地 stub 开发 | `pnpm dev`     |
