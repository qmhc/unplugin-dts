# AGENTS.md

## 目标与边界

- 这是一个 `pnpm` monorepo，核心包是 `packages/unplugin-dts`，兼容包是 `packages/vite-plugin-dts`。
- `unplugin-dts` 是声明文件生成逻辑的唯一事实来源；`vite-plugin-dts` 只是对 `unplugin-dts/vite` 的兼容导出，不应发展出独立行为。
- 仓库的核心目标是：在 `Vite / Rollup / Rolldown / Webpack / Rspack / Esbuild` 下稳定生成 `.d.ts`，并正确处理多入口、别名、`bundleTypes`、Vue/Svelte/JSON、以及跨平台路径。

## 仓库速览

- `packages/unplugin-dts/src/index.ts`
  暴露 `createUnplugin(pluginFactory)` 的主入口。
- `packages/unplugin-dts/src/plugin.ts`
  适配各构建器生命周期，收集 entry / alias / outDir，并驱动 `Runtime`。
- `packages/unplugin-dts/src/core/runtime.ts`
  核心流水线：解析 tsconfig、创建 TS Program、筛选文件、执行 emit、写出声明、处理多 outDir、插入类型入口、可选调用 API Extractor。
- `packages/unplugin-dts/src/core/transform.ts`
  声明文件后处理：alias 改写、动态 `import()` 类型静态化、清理纯导入、清理 `.vue.d.ts` 文件名。
- `packages/unplugin-dts/src/core/processor/*`
  Program 创建策略。`vue.ts` 通过 `@vue/language-core` / `@volar/typescript` 处理 Vue SFC。
- `packages/unplugin-dts/src/core/resolvers/*`
  非标准源码入口的 resolver，如 `json`、`vue`、`svelte`。
- `packages/unplugin-dts/tests/*.spec.ts`
  单元测试，重点覆盖路径、alias、transform 和 utils。
- `packages/vite-plugin-dts/src/index.ts`
  兼容层，只做 re-export。
- `examples/*`
  各构建器/框架的集成夹具，不是业务示例应用。它们承担回归验证职责。
- `scripts/*`
  构建、发布、发版脚本。默认不要运行发布流程，除非用户明确要求。

## 生成物规则

- 不要手改任何生成物：
  - `packages/*/dist`
  - `examples/*/dist`
  - `examples/*/types`
  - `examples/*/docs/*.api.json`
- 这些目录只能通过构建命令重建。功能变更应修改 `src/`、测试或示例源码，而不是直接修补产物。

## 开发原则

- 一切工作从仓库根目录执行，统一使用 `pnpm`。
- 优先用定向命令，避免无差别跑全仓：
  - `pnpm --filter unplugin-dts test`
  - `pnpm -C examples/ts-vite build`
  - `pnpm -C examples/vue-vite build`
- 涉及共享行为时，把逻辑放进 `packages/unplugin-dts/src/plugin.ts` 或 `packages/unplugin-dts/src/core/*`，不要在每个 bundler 入口里重复实现。
- `packages/vite-plugin-dts` 必须保持“薄封装”；任何行为修改都应先落在 `unplugin-dts`。
- 仓库使用 ESM。新增 Node 内置模块导入时，优先使用 `node:` 前缀并保持与现有文件风格一致。
- 任何新增路径处理逻辑，都必须优先复用现有工具：
  - `normalizePath`
  - `resolve`
  - `ensureAbsolute`
  - `resolveConfigDir`
    不要引入新的随手拼路径逻辑，否则很容易重新制造 Windows 路径问题。
- 修改 `tsconfig` 解析、模块解析或别名处理时，要保持对 bundler 场景和 Node 场景的兼容。`Runtime` 中对 Vue 的 `setModuleResolution` 补丁是有意存在的，没有夹具验证不要删。
- 修改公开选项或产物行为时，必须同步：
  - `packages/unplugin-dts/src/types.ts`
  - `README.md`
  - `README.zh-CN.md`
  - 受影响的包内 README（如 `packages/unplugin-dts/README.md`、`packages/vite-plugin-dts/README.md`）

## 代码风格

- 遵循根目录现有约束：
  - 2 空格缩进
  - LF
  - UTF-8
  - `eslint.config.ts` flat config
- 不要新增遗留式 `.eslintrc*` 配置。
- 如果需要调整 Vitest 多项目配置，优先收敛到 `vitest.config.ts` 的 `test.projects`，不要继续扩展 `vitest.workspace.ts`。
- 不要为了“简化”而把已有的细粒度类型改成 `any`。
- 保持适配层薄、核心逻辑集中、测试可直接指向 bug。

## 常用命令

- 安装依赖：`pnpm install`
- 根目录 lint：`pnpm lint`
- 根目录测试：`pnpm test`
- 构建所有包：`pnpm build`
- 本地 stub 开发：`pnpm dev`
- 仅测核心包：`pnpm --filter unplugin-dts test`
- 运行某个示例构建：
  - `pnpm -C examples/ts-vite build`
  - `pnpm -C examples/vue-vite build`
  - `pnpm -C examples/vue-rspack build`
  - `pnpm -C examples/ts-rollup build`
  - `pnpm -C examples/ts-rolldown build`
  - `pnpm -C examples/ts-webpack build`
  - `pnpm -C examples/ts-esbuild build`
  - `pnpm -C examples/svelte-vite build`

## 按改动类型执行

### 1. 改 `transform.ts`、alias、路径映射、`.vue` 文件名清理

- 先补或改 `packages/unplugin-dts/tests/transform.spec.ts`
- 必要时补 `packages/unplugin-dts/tests/utils.spec.ts`
- 至少跑：`pnpm --filter unplugin-dts test`
- 如果改动涉及 Vite/Vue 产物路径，再跑一个对应示例构建

### 2. 改 `runtime.ts`、emit、`bundleTypes`、多 `outDir`、类型入口写入

- 优先补核心测试
- 至少跑：
  - `pnpm --filter unplugin-dts test`
  - 一个 TS 示例构建，如 `pnpm -C examples/ts-vite build`
- 如果触及 `bundleTypes` 或 API Extractor 集成，再补一个启用了 `bundleTypes` 的示例验证，如 `examples/ts-vite` 或 `examples/vue-vite`

### 3. 改 Vue/Svelte/JSON resolver 或 processor

- 补对应测试或最小夹具
- Vue 改动至少验证一个 Vue 示例：
  - `pnpm -C examples/vue-vite build`
  - 或 `pnpm -C examples/vue-rspack build`
  - 或 `pnpm -C examples/vue-rolldown build`
- Svelte 改动至少验证：`pnpm -C examples/svelte-vite build`

### 4. 改 bundler 适配层

- Vite / Rollup / Rolldown / Webpack / Rspack / Esbuild 的入口文件应保持很薄。
- 若某个适配器必须新增逻辑，先判断是否应沉到共享层。
- 至少跑被改 bundler 的示例构建；如果改的是共享生命周期钩子，补跑一个非同 bundler 的示例做交叉验证。

### 5. 改公开 API、导出、README、包元数据

- 同步文档与类型定义
- 变更 `exports`、入口文件、构建产物布局时，最终至少跑一次：`pnpm build`

### 6. 改发版脚本

- 默认不要执行 `release` 或 `publish:*`
- 只有在用户明确要求时才运行，并优先使用 dry-run

## 最小验证矩阵

- 只改测试或文档：
  - 通常不必全量构建；确认引用路径、命令和文件名准确即可
- 改核心 transform / utils：
  - `pnpm --filter unplugin-dts test`
- 改 emit / 输出布局：
  - `pnpm --filter unplugin-dts test`
  - `pnpm -C examples/ts-vite build`
- 改 Vue 支持：
  - `pnpm --filter unplugin-dts test`
  - `pnpm -C examples/vue-vite build`
- 改 bundler 适配：
  - 跑对应 bundler 示例
- 改公共包输出或根脚本：
  - `pnpm build`

## 提交前检查

- 确认没有手改生成物
- 确认测试覆盖了新分支或回归点
- 确认 README / 类型 / 示例配置已经同步
- 确认新增逻辑没有绕开现有路径规范化工具
- 确认 `vite-plugin-dts` 没有与 `unplugin-dts` 产生行为漂移
