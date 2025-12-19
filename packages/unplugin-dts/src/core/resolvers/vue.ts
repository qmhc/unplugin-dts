import { base64VLQEncode } from '../utils'

import type { Resolver } from './types'

interface SourceMap {
  sources: string[],
  mappings: string,
}

const vueRE = /\.vue$/

export function VueResolver(): Resolver {
  return {
    name: 'vue',
    supports(id) {
      return vueRE.test(id)
    },
    transform({ id, code, program }) {
      const sourceFile =
        program.getSourceFile(id) ||
        program.getSourceFile(id + '.ts') ||
        program.getSourceFile(id + '.js') ||
        program.getSourceFile(id + '.tsx') ||
        program.getSourceFile(id + '.jsx')

      if (!sourceFile) return { outputs: [] }

      const outputs: { path: string, content: string }[] = []

      const { emitSkipped, diagnostics } = program.emit(
        sourceFile,
        (path, content) => {
          outputs.push({ path, content })
        },
        undefined,
        true,
      )

      if (!program.getCompilerOptions().declarationMap) {
        return { outputs, emitSkipped, diagnostics }
      }

      const [beforeScript] = code.split(/\s*<script.*>/)
      const beforeLines = beforeScript.split('\n').length

      for (const output of outputs) {
        if (output.path.endsWith('.map')) {
          try {
            const sourceMap: SourceMap = JSON.parse(output.content)

            sourceMap.sources = sourceMap.sources.map(source =>
              source.replace(/\.vue\.ts$/, '.vue'),
            )

            if (beforeScript && beforeScript !== code && beforeLines) {
              sourceMap.mappings = `${base64VLQEncode([0, 0, beforeLines, 0])};${
                sourceMap.mappings
              }`
            }

            output.content = JSON.stringify(sourceMap)
          } catch (e) {}
        }
      }

      return { outputs, emitSkipped, diagnostics }
    },
  }
}
