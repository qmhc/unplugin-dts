import { dirname } from 'node:path'

import {
  createVueLanguagePlugin,
  createParsedCommandLine as createVueParsedCommandLine,
  getDefaultCompilerOptions,
} from '@vue/language-core'

import { proxyCreateProgram } from '@volar/typescript'
import ts from '../ts-loader.cjs'
import { slash } from '../utils'

export function createParsedCommandLine(
  _ts: typeof ts,
  host: ts.ParseConfigHost,
  configPath: string,
) {
  // Use @vue/language-core to parse vueCompilerOptions, but its readDirectory
  // returns [] which breaks glob expansion. We combine it with native TS parsing
  // that adds .vue to supported extensions so include patterns work correctly.
  const vueResult = createVueParsedCommandLine(_ts, host, slash(configPath))

  const config = _ts.readJsonConfigFile(configPath, host.readFile)
  const vueHost: ts.ParseConfigHost = {
    ...host,
    readDirectory(rootDir, extensions, excludes, includes, depth) {
      const extendedExtensions = extensions ? [...extensions, '.vue'] : extensions
      return host.readDirectory(rootDir, extendedExtensions, excludes, includes, depth)
    },
  }
  const parsed = _ts.parseJsonSourceFileConfigFileContent(
    config,
    vueHost,
    dirname(configPath),
    {},
    configPath,
  )

  return {
    ...parsed,
    vueOptions: vueResult.vueOptions,
  }
}

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
