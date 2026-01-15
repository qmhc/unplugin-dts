import {
  resolve as _resolve,
  dirname,
  isAbsolute,
  normalize,
  posix,
  relative,
  sep,
} from 'node:path'
import { existsSync, lstatSync, readdirSync, rmdirSync } from 'node:fs'
import { createRequire } from 'node:module'

import ts from 'typescript'
import debug from 'debug'
import { getPackageInfoSync, resolveModule } from 'local-pkg'

import type { CompilerOptions } from 'typescript'
import type { Alias } from 'vite'
import type { ModuleFormat, NormalizedOutDir, OutDirConfig, OutDirsOption } from './types'

export type MaybePromise<T> = T | Promise<T>

export const handleDebug = debug('dts-debug')

export const defaultIndex = 'index.d.ts'

export function noop(): any
export function noop(..._args: any[]): any
export function noop() {}

export const jsRE = /\.([cm])?jsx?$/
export const tsRE = /\.([cm])?tsx?$/
export const dtsRE = /\.d\.([cm])?tsx?$/
export const tjsRE = /\.([cm])?([jt])sx?$/
export const mtjsRE = /\.m([jt])sx?$/
export const ctjsRE = /\.c([jt])sx?$/
export const fullRelativeRE = /^\.\.?\//

export const globSignRE = /[-^$*+?.()|[\]{}]/g

export function getJsExtPrefix(file: string) {
  return mtjsRE.test(file) ? 'm' : ctjsRE.test(file) ? 'c' : ''
}

export function tsToDts(path: string) {
  return `${path.replace(tsRE, '')}.d.ts`
}

/**
 * 将 TypeScript 文件路径转换为指定后缀的声明文件路径
 *
 * @param path - TypeScript 文件路径
 * @param dtsExtension - 目标声明文件后缀
 * @returns 转换后的声明文件路径
 */
export function tsToDtsWithExtension(
  path: string,
  dtsExtension: '.d.ts' | '.d.cts' | '.d.mts' = '.d.ts',
): string {
  return `${path.replace(tsRE, '')}${dtsExtension}`
}

const windowsSlashRE = /\\+/g

export function slash(p: string): string {
  return p.replace(windowsSlashRE, '/')
}

export function resolveConfigDir(path: string, configDir: string) {
  return path.startsWith('${configDir}') ? path.replace('${configDir}', configDir) : path
}

export function normalizePath(id: string): string {
  return posix.normalize(slash(id))
}

export function resolve(...paths: string[]) {
  return normalizePath(_resolve(...paths))
}

export function isNativeObj<T extends Record<string, any> = Record<string, any>>(
  value: unknown,
): value is T {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export function isRegExp(value: unknown): value is RegExp {
  return Object.prototype.toString.call(value) === '[object RegExp]'
}

export function isPromise(value: unknown): value is Promise<any> {
  return (
    !!value &&
    (typeof value === 'function' || typeof value === 'object') &&
    typeof (value as any).then === 'function'
  )
}

export async function unwrapPromise<T>(maybePromise: T | Promise<T>) {
  return isPromise(maybePromise) ? await maybePromise : maybePromise
}

export function mergeObjects<T extends Record<string, any>, U extends Record<string, any>>(
  sourceObj: T,
  targetObj: U,
) {
  const loop: Array<{
    source: Record<string, any>,
    target: Record<string, any>,
    // merged: Record<string, any>
  }> = [
    {
      source: sourceObj,
      target: targetObj,
      // merged: mergedObj
    },
  ]

  while (loop.length) {
    const { source, target } = loop.pop()!

    Object.keys(target).forEach(key => {
      if (isNativeObj(target[key])) {
        if (!isNativeObj(source[key])) {
          source[key] = {}
        }

        loop.push({
          source: source[key],
          target: target[key],
        })
      } else if (Array.isArray(target[key])) {
        if (!Array.isArray(source[key])) {
          source[key] = []
        }

        loop.push({
          source: source[key],
          target: target[key],
        })
      } else {
        source[key] = target[key]
      }
    })
  }

  return sourceObj as T & U
}

export function ensureAbsolute(path: string, root: string) {
  return normalizePath(path ? (isAbsolute(path) ? path : resolve(root, path)) : root)
}

export function ensureArray<T>(value: T | T[]) {
  return Array.isArray(value) ? value : value ? [value] : []
}

export async function runParallel<T>(
  maxConcurrency: number,
  source: T[],
  iteratorFn: (item: T, source: T[]) => Promise<any>,
) {
  const ret: Promise<any>[] = []
  const executing: Promise<any>[] = []

  for (const item of source) {
    const p = Promise.resolve().then(() => iteratorFn(item, source))

    ret.push(p)

    if (maxConcurrency <= source.length) {
      const e: Promise<any> = p.then(() => executing.splice(executing.indexOf(e), 1))

      executing.push(e)

      if (executing.length >= maxConcurrency) {
        await Promise.race(executing)
      }
    }
  }

  return Promise.all(ret)
}

const speRE = /[\\/]/

export function queryPublicPath(paths: string[]) {
  if (paths.length === 0) {
    return ''
  } else if (paths.length === 1) {
    return dirname(paths[0])
  }

  let publicPath = normalize(dirname(paths[0])) + sep
  let publicUnits = publicPath.split(speRE)
  let index = publicUnits.length - 1

  for (const path of paths.slice(1)) {
    if (!index) {
      return publicPath
    }

    const dirPath = normalize(dirname(path)) + sep

    if (dirPath.startsWith(publicPath)) {
      continue
    }

    const units = dirPath.split(speRE)

    if (units.length < index) {
      publicPath = dirPath
      publicUnits = units
      continue
    }

    for (let i = 0; i <= index; ++i) {
      if (publicUnits[i] !== units[i]) {
        if (!i) {
          return ''
        }

        index = i - 1
        publicUnits = publicUnits.slice(0, index + 1)
        publicPath = publicUnits.join(sep) + sep
        break
      }
    }
  }

  return publicPath.slice(0, -1)
}

export function removeDirIfEmpty(dir: string) {
  if (!existsSync(dir)) {
    return
  }

  let onlyHasDir = true

  for (const file of readdirSync(dir)) {
    const abs = resolve(dir, file)

    if (lstatSync(abs).isDirectory()) {
      if (!removeDirIfEmpty(abs)) {
        onlyHasDir = false
      }
    } else {
      onlyHasDir = false
    }
  }

  if (onlyHasDir) {
    rmdirSync(dir)
  }

  return onlyHasDir
}

export function getTsConfig(
  tsConfigPath: string,
  readFileSync: (filePath: string, encoding?: string | undefined) => string | undefined,
) {
  const baseConfig = ts.readConfigFile(tsConfigPath, readFileSync).config ?? {}

  // #95 Should parse include or exclude from the base config when they are missing from
  // the inheriting config. If the inherit config doesn't have `include` or `exclude` field,
  // should get them from the parent config.
  const tsConfig: {
    compilerOptions: CompilerOptions,
    include?: string[],
    exclude?: string[],
    extends?: string | string[],
  } = {
    ...baseConfig,
    compilerOptions: {},
  }

  if (tsConfig.extends) {
    ensureArray(tsConfig.extends).forEach((configPath: string) => {
      const config = getTsConfig(ensureAbsolute(configPath, dirname(tsConfigPath)), readFileSync)

      // #171 Need to collect the full `compilerOptions` for `@microsoft/api-extractor`
      Object.assign(tsConfig.compilerOptions, config.compilerOptions)
      if (!tsConfig.include) {
        tsConfig.include = config.include
      }

      if (!tsConfig.exclude) {
        tsConfig.exclude = config.exclude
      }
    })
  }

  Object.assign(tsConfig.compilerOptions, baseConfig.compilerOptions)

  return tsConfig
}

export function getTsLibFolder() {
  const libFolder = tryGetPackageInfo('typescript')?.rootPath

  return libFolder && normalizePath(libFolder)
}

/**
 * @see https://github.com/mozilla/source-map/blob/master/lib/base64-vlq.js
 */

const BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('')

function base64Encode(number: number) {
  if (number >= 0 && number < BASE64_ALPHABET.length) {
    return BASE64_ALPHABET[number]
  }

  throw new TypeError('Base64 integer must be between 0 and 63: ' + number)
}

const VLQ_BASE_SHIFT = 5
const VLQ_BASE = 1 << VLQ_BASE_SHIFT
const VLQ_BASE_MASK = VLQ_BASE - 1
const VLQ_CONTINUATION_BIT = VLQ_BASE

function toVLQSigned(number: number) {
  return number < 0 ? (-number << 1) + 1 : (number << 1) + 0
}

export function base64VLQEncode(numbers: number[]) {
  let encoded = ''

  for (const number of numbers) {
    let vlq = toVLQSigned(number)
    let digit: number

    do {
      digit = vlq & VLQ_BASE_MASK
      vlq >>>= VLQ_BASE_SHIFT

      if (vlq > 0) {
        digit |= VLQ_CONTINUATION_BIT
      }

      encoded += base64Encode(digit)
    } while (vlq > 0)
  }

  return encoded
}

const pkgPathCache = new Map<string, string | undefined>()

export function tryGetPkgPath(beginPath: string) {
  beginPath = normalizePath(beginPath)

  if (pkgPathCache.has(beginPath)) {
    return pkgPathCache.get(beginPath)
  }

  const pkgPath = resolve(beginPath, 'package.json')

  if (existsSync(pkgPath)) {
    pkgPathCache.set(beginPath, pkgPath)

    return pkgPath
  }

  const parentDir = normalizePath(dirname(beginPath))

  if (!parentDir || parentDir === beginPath) {
    pkgPathCache.set(beginPath, undefined)

    return
  }

  return tryGetPkgPath(parentDir)
}

type CapitalCase<T extends string> = T extends `${infer First} ${infer Rest}`
  ? CapitalCase<`${First}-${Rest}`>
  : T extends `${infer First}-${infer Rest}`
    ? `${Capitalize<First>}${CapitalCase<Rest>}`
    : Capitalize<T>

export function toCapitalCase<T extends string>(value: T) {
  value = value.trim().replace(/\s+/g, '-') as T
  value = value.replace(/-+(\w)/g, (_, char) => (char ? char.toUpperCase() : '')) as T

  return (value.charAt(0).toLocaleUpperCase() + value.slice(1)).replace(
    /[^\w]/g,
    '',
  ) as CapitalCase<T>
}

export function findTypesPath(...pkgs: Record<any, any>[]) {
  let path: string

  for (const pkg of pkgs) {
    if (typeof pkg !== 'object') continue

    path =
      pkg.types ||
      pkg.typings ||
      pkg.exports?.types ||
      pkg.exports?.['.']?.types ||
      pkg.exports?.['./']?.types

    if (path) return path
  }
}

export function setModuleResolution(options: CompilerOptions) {
  if (options.moduleResolution) return

  const module =
    typeof options.module === 'number'
      ? options.module
      : (options.target ?? ts.ScriptTarget.ES5 >= 2)
        ? ts.ModuleKind.ES2015
        : ts.ModuleKind.CommonJS

  let moduleResolution: ts.ModuleResolutionKind

  switch (module) {
    case ts.ModuleKind.CommonJS:
      moduleResolution = ts.ModuleResolutionKind.Node10
      break
    case ts.ModuleKind.Node16:
      moduleResolution = ts.ModuleResolutionKind.Node16
      break
    case ts.ModuleKind.NodeNext:
      moduleResolution = ts.ModuleResolutionKind.NodeNext
      break
    default:
      moduleResolution = ts.version.startsWith('5')
        ? ts.ModuleResolutionKind.Bundler
        : ts.ModuleResolutionKind.Classic
      break
  }

  options.moduleResolution = moduleResolution
}

export function editSourceMapDir(content: string, fromDir: string, toDir: string) {
  const relativeOutDir = relative(fromDir, toDir)

  if (relativeOutDir) {
    try {
      const sourceMap: { sources: string[] } = JSON.parse(content)

      sourceMap.sources = sourceMap.sources.map(source => {
        return normalizePath(relative(relativeOutDir, source))
      })

      return JSON.stringify(sourceMap)
    } catch (e) {
      return false
    }
  }

  return true
}

const regexpSymbolRE = /([$.\\+?()[\]!<=|{}^,])/g
const asteriskRE = /[*]+/g

export function parseTsAliases(basePath: string, paths: ts.MapLike<string[]>) {
  const result: Alias[] = []

  for (const [pathWithAsterisk, replacements] of Object.entries(paths)) {
    const find = new RegExp(
      `^${pathWithAsterisk.replace(regexpSymbolRE, '\\$1').replace(asteriskRE, '(?!\\.{1,2}\\/)([^*]+)')}$`,
    )

    let index = 1

    result.push({
      find,
      replacement: ensureAbsolute(
        replacements[0].replace(asteriskRE, () => `$${index++}`),
        basePath,
      ),
    })
  }

  return result
}

const rootAsteriskImportRE = /^(?!\.{1,2}\/)([^*]+)$/
export function isAliasGlobal(alias: Alias) {
  return alias.find.toString() === rootAsteriskImportRE.toString()
}

export function importResolves(path: string) {
  const files = [
    // js
    '.js',
    '.jsx',
    '.mjs',
    '.cjs',
    // ts
    '.ts',
    '.tsx',
    '.mts',
    '.cts',
    '.d.ts',
    // json
    '.json',
    // vue
    '.vue',
    '.vue.d.ts',
    // svelte
    '.svelte',
  ]

  for (const ext of files) {
    if (existsSync(path + ext)) {
      return true
    }
  }
  return false
}

export function tryGetPackageInfo(name: string) {
  if (process.versions.pnp) {
    const targetRequire = createRequire(import.meta.url)

    try {
      return getPackageInfoSync(
        targetRequire.resolve(`${name}/package.json`, { paths: [process.cwd()] }),
      )
    } catch (e) {}
  }

  try {
    return (getPackageInfoSync(name) ??
      getPackageInfoSync(name, { paths: [resolveModule(name) || process.cwd()] })) as {
      name: string,
      version: string | undefined,
      rootPath: string,
      packageJsonPath: string,
      packageJson: any,
    }
  } catch (e) {}
}

/**
 * 根据模块格式获取声明文件后缀
 *
 * @param moduleFormat - 模块格式 ('cjs' | 'esm' | undefined)
 * @returns 对应的声明文件后缀
 */
export function getDtsExtension(
  moduleFormat: ModuleFormat | undefined,
): '.d.ts' | '.d.cts' | '.d.mts' {
  switch (moduleFormat) {
    case 'cjs':
      return '.d.cts'
    case 'esm':
      return '.d.mts'
    default:
      return '.d.ts'
  }
}

/**
 * 根据模块格式获取 Source Map 文件后缀
 *
 * @param moduleFormat - 模块格式 ('cjs' | 'esm' | undefined)
 * @returns 对应的 Source Map 文件后缀
 */
export function getMapExtension(
  moduleFormat: ModuleFormat | undefined,
): '.d.ts.map' | '.d.cts.map' | '.d.mts.map' {
  switch (moduleFormat) {
    case 'cjs':
      return '.d.cts.map'
    case 'esm':
      return '.d.mts.map'
    default:
      return '.d.ts.map'
  }
}

/**
 * 判断是否为 OutDirConfig 对象
 */
function isOutDirConfig(value: unknown): value is OutDirConfig {
  return isNativeObj(value) && typeof (value as OutDirConfig).dir === 'string'
}

/**
 * 标准化单个输出目录配置
 */
function normalizeOutDirItem(item: string | OutDirConfig, root: string): NormalizedOutDir {
  if (typeof item === 'string') {
    return {
      dir: ensureAbsolute(item, root),
      moduleFormat: undefined,
      dtsExtension: '.d.ts',
      mapExtension: '.d.ts.map',
    }
  }

  const moduleFormat = item.moduleFormat
  return {
    dir: ensureAbsolute(item.dir || '', root),
    moduleFormat,
    dtsExtension: getDtsExtension(moduleFormat),
    mapExtension: getMapExtension(moduleFormat),
  }
}

/**
 * 标准化 outDirs 配置
 *
 * 将各种输入格式标准化为 NormalizedOutDir[]
 *
 * @param outDirs - 用户配置的 outDirs
 * @param root - 项目根目录
 * @param defaultDir - 默认输出目录
 * @returns 标准化后的输出目录配置数组
 */
export function normalizeOutDirs(
  outDirs: OutDirsOption | undefined,
  root: string,
  defaultDir: string,
): NormalizedOutDir[] {
  // 未提供配置时使用默认目录
  if (outDirs === undefined || outDirs === null) {
    return [normalizeOutDirItem(defaultDir, root)]
  }

  // 单个字符串
  if (typeof outDirs === 'string') {
    return [normalizeOutDirItem(outDirs, root)]
  }

  // 单个 OutDirConfig 对象
  if (isOutDirConfig(outDirs)) {
    return [normalizeOutDirItem(outDirs, root)]
  }

  // 数组（可能是 string[]、OutDirConfig[] 或混合数组）
  if (Array.isArray(outDirs)) {
    if (outDirs.length === 0) {
      return [normalizeOutDirItem(defaultDir, root)]
    }
    return outDirs.map(item => normalizeOutDirItem(item, root))
  }

  // 兜底：使用默认目录
  return [normalizeOutDirItem(defaultDir, root)]
}

/**
 * 转换文件路径的后缀
 *
 * 将 .d.ts 路径转换为目标后缀（.d.cts 或 .d.mts）
 *
 * @param filePath - 原始文件路径
 * @param targetExtension - 目标后缀
 * @returns 转换后的文件路径
 */
export function transformDtsPath(
  filePath: string,
  targetExtension: '.d.ts' | '.d.cts' | '.d.mts',
): string {
  // 如果目标后缀是 .d.ts，无需转换
  if (targetExtension === '.d.ts') {
    return filePath
  }

  // 处理 .d.ts.map 文件
  if (filePath.endsWith('.d.ts.map')) {
    const mapExtension = targetExtension === '.d.cts' ? '.d.cts.map' : '.d.mts.map'
    return filePath.slice(0, -9) + mapExtension
  }

  // 处理 .d.ts 文件
  if (filePath.endsWith('.d.ts')) {
    return filePath.slice(0, -5) + targetExtension
  }

  // 其他情况返回原路径
  return filePath
}

/**
 * 清理 Vue 声明文件名，移除 .vue 部分
 *
 * 支持所有声明文件后缀：
 * - .vue.d.ts → .d.ts
 * - .vue.d.cts → .d.cts
 * - .vue.d.mts → .d.mts
 *
 * @param filePath - 原始文件路径
 * @returns 清理后的文件路径
 */
export function cleanVueDtsFileName(filePath: string): string {
  return filePath
    .replace('.vue.d.ts', '.d.ts')
    .replace('.vue.d.cts', '.d.cts')
    .replace('.vue.d.mts', '.d.mts')
}

/**
 * 转换声明文件内容中的 sourceMappingURL 注释后缀
 *
 * 将 `//# sourceMappingURL=xxx.d.ts.map` 转换为对应的后缀
 *
 * @param content - 声明文件内容
 * @param targetMapExtension - 目标 source map 后缀
 * @returns 转换后的文件内容
 */
export function transformSourceMappingURL(
  content: string,
  targetMapExtension: '.d.ts.map' | '.d.cts.map' | '.d.mts.map',
): string {
  // 如果目标后缀是 .d.ts.map，无需转换
  if (targetMapExtension === '.d.ts.map') {
    return content
  }

  // 匹配 sourceMappingURL 注释中的 .d.ts.map 后缀
  // 格式: //# sourceMappingURL=filename.d.ts.map
  return content.replace(
    /\/\/# sourceMappingURL=(.+)\.d\.ts\.map$/m,
    `//# sourceMappingURL=$1${targetMapExtension}`,
  )
}
