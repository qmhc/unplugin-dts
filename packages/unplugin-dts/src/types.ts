import type ts from 'typescript'

import type {
  CreateRuntimeOptions,
  EmitOptions,
  MaybePromise,
  Resolver,
  RollupConfig,
  Runtime,
} from './core'

export type { Resolver, RollupConfig, Runtime }

export interface PluginOptions
  extends Omit<
    Partial<CreateRuntimeOptions>,
      'entries' | 'libName' | 'indexName' | 'logger'
  >,
  Omit<EmitOptions, 'logPrefix'> {
  /**
   * Whether to emit declaration files only.
   *
   * When `true`, all the original outputs will be force removed, except esbuild.
   *
   * @default false
   */
  declarationOnly?: boolean,
  /**
   * Hook called after the runtime is created.
   *
   * @default () => {}
   */
  afterBootstrap?: (runtime: Runtime) => MaybePromise<void>,
  /**
   * Hook called after diagnostic is emitted.
   *
   * According to the `diagnostics.length`, you can judge whether there is any type error.
   *
   * @default () => {}
   */
  afterDiagnostic?: (diagnostics: readonly ts.Diagnostic[]) => MaybePromise<void>,
  /**
   * Hook called after all declaration files are written.
   *
   * It will be received a map (path -> content) that records those emitted files.
   *
   * @default () => {}
   */
  afterBuild?: (emittedFiles: Map<string, string>) => MaybePromise<void>
}
