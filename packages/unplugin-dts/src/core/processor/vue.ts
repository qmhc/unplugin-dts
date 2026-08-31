import { dirname, parse as pathParse, relative } from 'node:path'

import {
  createVueLanguagePlugin,
  createParsedCommandLine as createVueParsedCommandLine,
  getDefaultCompilerOptions,
} from '@vue/language-core'

import { proxyCreateProgram } from '@volar/typescript'
import ts from '../ts-loader.cjs'
import { normalizePath, resolve, slash } from '../utils'

const internalSourceFiles = new WeakSet<ts.SourceFile>()
const programSourceFileReleasers = new WeakMap<ts.Program, (fileName: string) => void>()
interface VueLanguage {
  scripts: { delete(fileName: string): void },
}
const programLanguages = new WeakMap<ts.Program, VueLanguage>()
let activeLanguage: VueLanguage | undefined

export const needsModuleResolutionFallback = true

interface VueRootPathApi {
  parse: typeof import('node:path').parse,
  relative: typeof import('node:path').relative,
  resolve: typeof import('node:path').resolve,
}

export function groupVueRootNames(
  vueRootNames: readonly string[],
  projectDirectory: string,
  pathApi: VueRootPathApi = { parse: pathParse, relative, resolve },
) {
  projectDirectory = pathApi.resolve(projectDirectory)
  const projectVolume = pathApi.parse(projectDirectory).root
  const groups = new Map<string, string[]>()

  for (const rootName of vueRootNames) {
    const fileName = pathApi.resolve(projectDirectory, rootName)
    const fileVolume = pathApi.parse(fileName).root
    const directory = pathApi.relative(projectVolume, fileVolume) ? fileVolume : projectDirectory
    const files = groups.get(directory) ?? []
    files.push(fileName)
    groups.set(directory, files)
  }

  return [...groups].map(([directory, rootNames]) => ({ directory, rootNames }))
}

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

function prepareVueProgramOptions(options: ts.CreateProgramOptions) {
  const originalHost = options.host
  if (!originalHost) return { options }

  const vueRootNames = options.rootNames.filter(fileName => fileName.endsWith('.vue'))

  const projectDirectory =
    typeof options.options.configFilePath === 'string'
      ? dirname(options.options.configFilePath)
      : originalHost.getCurrentDirectory()
  const syntheticRoots = new Map<
    string,
    { fileName: string, text: string, sourceFile?: ts.SourceFile }
  >()
  for (const group of groupVueRootNames(vueRootNames, projectDirectory)) {
    let sequence = 0
    let syntheticFileName = resolve(group.directory, '__unplugin_dts_vue_root__.d.ts')
    while (originalHost.fileExists(syntheticFileName)) {
      syntheticFileName = resolve(group.directory, `__unplugin_dts_vue_root_${++sequence}__.d.ts`)
    }

    const text = group.rootNames
      .map(fileName => {
        const path = slash(relative(group.directory, fileName))
        const moduleName = path.startsWith('.') ? path : `./${path}`
        return `import ${JSON.stringify(moduleName)}`
      })
      .join('\n')
    const canonicalFileName = normalizePath(originalHost.getCanonicalFileName(syntheticFileName))
    syntheticRoots.set(canonicalFileName, { fileName: syntheticFileName, text })
  }

  const getSourceFile = originalHost.getSourceFile.bind(originalHost)
  const fileExists = originalHost.fileExists.bind(originalHost)
  const readFile = originalHost.readFile.bind(originalHost)
  const releasedSourceFiles = new Set<string>()
  const getCanonicalFileName = (fileName: string) =>
    normalizePath(originalHost.getCanonicalFileName(fileName))
  const getSyntheticRoot = (fileName: string) => syntheticRoots.get(getCanonicalFileName(fileName))
  const host: ts.CompilerHost = {
    ...originalHost,
    fileExists(fileName) {
      return !!getSyntheticRoot(fileName) || fileExists(fileName)
    },
    readFile(fileName) {
      return getSyntheticRoot(fileName)?.text ?? readFile(fileName)
    },
    getSourceFile(fileName, languageVersionOrOptions, onError, shouldCreateNewSourceFile) {
      if (releasedSourceFiles.has(getCanonicalFileName(fileName))) return undefined

      const syntheticRoot = getSyntheticRoot(fileName)
      if (!syntheticRoot) {
        return getSourceFile(fileName, languageVersionOrOptions, onError, shouldCreateNewSourceFile)
      }

      if (!syntheticRoot.sourceFile || shouldCreateNewSourceFile) {
        syntheticRoot.sourceFile = ts.createSourceFile(
          syntheticRoot.fileName,
          syntheticRoot.text,
          languageVersionOrOptions,
          true,
          ts.ScriptKind.TS,
        )
        internalSourceFiles.add(syntheticRoot.sourceFile)
      }
      return syntheticRoot.sourceFile
    },
  }

  const preparedOptions: ts.CreateProgramOptions = {
    ...options,
    host,
    rootNames: [...options.rootNames, ...[...syntheticRoots.values()].map(root => root.fileName)],
  }
  return {
    options: preparedOptions,
    releaseSourceFile(fileName: string) {
      const canonicalFileName = getCanonicalFileName(fileName)
      releasedSourceFiles.add(canonicalFileName)
      try {
        preparedOptions.host?.getSourceFile(fileName, ts.ScriptTarget.Latest)
      } finally {
        releasedSourceFiles.delete(canonicalFileName)
      }
    },
  }
}

/**
 * 通过仅存在于 CompilerHost 的声明 root 引入未引用 SFC。
 *
 * TypeScript 会在 rootNames 中保留任意扩展文件，却不会主动为它们创建 SourceFile；
 * 虚拟声明 root 让 Volar 继续使用自身的模块解析和 service-script 生成路径。
 */
const createVueProgram = proxyCreateProgram(ts, ts.createProgram, (ts, options) => {
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
  return {
    languagePlugins: [vueLanguagePlugin],
    setup(instance) {
      activeLanguage = instance
    },
  }
})

export const createProgram = ((options: ts.CreateProgramOptions) => {
  const prepared = prepareVueProgramOptions(options)
  const program = createVueProgram(prepared.options)
  if (activeLanguage) programLanguages.set(program, activeLanguage)
  if (prepared.releaseSourceFile) {
    programSourceFileReleasers.set(program, prepared.releaseSourceFile)
  }
  return program
}) as typeof ts.createProgram

export function isInternalSourceFile(sourceFile: ts.SourceFile) {
  return internalSourceFiles.has(sourceFile)
}

export function releaseSourceFile(program: ts.Program, fileName: string) {
  programLanguages.get(program)?.scripts.delete(fileName)
  programSourceFileReleasers.get(program)?.(fileName)
}
