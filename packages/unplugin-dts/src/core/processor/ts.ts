import { dirname } from 'node:path'

import ts from '../ts-loader.cjs'
import { ensureAbsolute, normalizePath } from '../utils'

import type { SourceFileCacheStats, VersionedCompilerHost } from './index'

interface SourceFileCacheEntry {
  version: number,
  content: string,
  languageKey: string,
  scriptKind: ts.ScriptKind,
  sourceFile: ts.SourceFile,
}

function getScriptKind(fileName: string) {
  if (/\.tsx$/i.test(fileName)) return ts.ScriptKind.TSX
  if (/\.[cm]?jsx?$/i.test(fileName)) return ts.ScriptKind.JS
  if (/\.json$/i.test(fileName)) return ts.ScriptKind.JSON
  return ts.ScriptKind.TS
}

function getLanguageKey(value: ts.ScriptTarget | ts.CreateSourceFileOptions) {
  if (typeof value === 'number') return `target:${value}`

  // TypeScript may recreate setExternalModuleIndicator between Programs even when
  // compiler options are unchanged. Its semantics stay fixed for this host lifetime;
  // compiler-option changes replace the complete host through a fresh rebuild.
  return [
    'options',
    value.languageVersion,
    value.impliedNodeFormat ?? '',
    value.jsDocParsingMode ?? '',
    value.setExternalModuleIndicator ? 'external' : 'default',
  ].join('|')
}

/**
 * 为纯 TypeScript Program 提供单版本 SourceFile 缓存。
 *
 * 每个 canonical path 只保留当前版本，避免 watch 期间累积旧 AST；调用方在收到
 * 文件变更后先失效对应路径，再把旧 Program 交给 TypeScript 进行结构复用。
 */
export function createCompilerHost(options: ts.CompilerOptions): VersionedCompilerHost {
  const host = ts.createCompilerHost(options)
  const cache = new Map<string, SourceFileCacheEntry>()
  const versions = new Map<string, number>()
  const stats: SourceFileCacheStats = { entries: 0, hits: 0, misses: 0, invalidations: 0 }
  const getCanonicalPath = (fileName: string) => {
    const absolute = ensureAbsolute(fileName, host.getCurrentDirectory())
    return normalizePath(host.getCanonicalFileName(absolute))
  }
  const getSourceFile = host.getSourceFile.bind(host)

  host.getSourceFile = (fileName, languageVersionOrOptions, onError, shouldCreateNewSourceFile) => {
    const path = getCanonicalPath(fileName)
    const version = versions.get(path) ?? 0
    const languageKey = getLanguageKey(languageVersionOrOptions)
    const scriptKind = getScriptKind(fileName)
    const cached = cache.get(path)

    if (
      !shouldCreateNewSourceFile &&
      cached?.version === version &&
      cached.languageKey === languageKey &&
      cached.scriptKind === scriptKind
    ) {
      stats.hits++
      return cached.sourceFile
    }

    stats.misses++
    const sourceFile = getSourceFile(
      fileName,
      languageVersionOrOptions,
      onError,
      shouldCreateNewSourceFile,
    )

    if (sourceFile) {
      cache.set(path, {
        version,
        content: sourceFile.text,
        languageKey,
        scriptKind,
        sourceFile,
      })
      stats.entries = cache.size
    } else {
      cache.delete(path)
      stats.entries = cache.size
    }

    return sourceFile
  }

  return Object.assign(host, {
    invalidateSourceFile(fileName: string) {
      const path = getCanonicalPath(fileName)
      versions.set(path, (versions.get(path) ?? 0) + 1)
      cache.delete(path)
      stats.entries = cache.size
      stats.invalidations++
    },
    getSourceFileCacheStats() {
      return { ...stats }
    },
  })
}

export function createParsedCommandLine(
  _ts: typeof ts,
  host: ts.ParseConfigHost,
  configPath: string,
) {
  const config = ts.readJsonConfigFile(configPath, host.readFile)
  return ts.parseJsonSourceFileConfigFileContent(config, host, dirname(configPath), {}, configPath)
}

export const createProgram = ts.createProgram
