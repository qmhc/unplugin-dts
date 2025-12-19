import type ts from 'typescript'
import type { MaybePromise } from '../utils'

export interface ResolverTransformOutput {
  path: string,
  content: string,
}

export interface Resolver {
  /**
   * The name of the resolver
   *
   * The later resolver with the same name will overwrite the earlier
   */
  name: string,
  /**
   * Determine whether the resolver supports the file
   */
  supports: (id: string) => void | boolean,
  /**
   * Transform source to declaration files
   *
   * Note that the path of the returns should base on `outDir`, or relative path to `root`
   */
  transform: (payload: {
    id: string,
    code: string,
    root: string,
    outDir: string,
    host: ts.CompilerHost,
    program: ts.Program,
  }) => MaybePromise<
    | ResolverTransformOutput[]
    | {
      outputs: ResolverTransformOutput[],
      emitSkipped?: boolean,
      diagnostics?: readonly ts.Diagnostic[],
    }
  >,
}
