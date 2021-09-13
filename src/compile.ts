import { transferSetupPosition } from './transform'

const exportDefaultClassRE = /(?:(?:^|\n|;)\s*)export\s+default\s+class\s+([\w$]+)/

let index = 1
let compiler: typeof import('@vue/compiler-sfc')

function requireCompiler() {
  if (!compiler) {
    try {
      compiler = require('@vue/compiler-sfc')
    } catch (e) {
      throw new Error('@vue/compiler-sfc is not present in the dependency tree.\n')
    }
  }

  return compiler
}

export function compileVueCode(code: string) {
  const { parse, compileScript, rewriteDefault } = requireCompiler()
  const { descriptor } = parse(code)
  const { script, scriptSetup } = descriptor

  let content: string | null = null
  let isTs = false
  let isJs = false

  if (script || scriptSetup) {
    if (scriptSetup) {
      const compiled = compileScript(descriptor, {
        id: `${index++}`
      })

      const classMatch = compiled.content.match(exportDefaultClassRE)

      if (classMatch) {
        content =
          compiled.content.replace(exportDefaultClassRE, `\nclass $1`) +
          `\nconst _sfc_main = ${classMatch[1]}`

        if (/export\s+default/.test(content)) {
          content = rewriteDefault(compiled.content, `_sfc_main`)
        }
      } else {
        content = rewriteDefault(compiled.content, `_sfc_main`)
      }

      content = transferSetupPosition(content)
      content += '\nexport default _sfc_main\n'

      if (scriptSetup.lang === 'ts') {
        isTs = true
      } else if (!scriptSetup.lang || scriptSetup.lang === 'js') {
        isJs = true
      }
    } else if (script && script.content) {
      content = script.content

      if (script.lang === 'ts') {
        isTs = true
      } else if (!script.lang || script.lang === 'js') {
        isJs = true
      }
    }
  }

  return { content, isTs, isJs }
}
