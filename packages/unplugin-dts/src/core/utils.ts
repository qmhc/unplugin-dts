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
