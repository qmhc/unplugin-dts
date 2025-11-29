import {
  createParsedCommandLine,
  createVueLanguagePlugin,
  getDefaultCompilerOptions,
} from '@vue/language-core'

import { proxyCreateProgram } from '@volar/typescript'
import ts from 'typescript'
import { slash } from '../utils'

export { createParsedCommandLine } from './ts'

export const createProgram = proxyCreateProgram(ts, ts.createProgram, (ts, options) => {
  const { configFilePath } = options.options
  const vueOptions =
    typeof configFilePath === 'string'
      ? createParsedCommandLine(ts, ts.sys, slash(configFilePath)).vueOptions
      : getDefaultCompilerOptions()

  const vueLanguagePlugin = createVueLanguagePlugin<string>(
    ts,
    options.options,
    vueOptions,
    id => id,
  )
  return { languagePlugins: [vueLanguagePlugin] }
})
