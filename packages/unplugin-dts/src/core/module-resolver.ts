import { isAbsolute } from 'node:path'

import ts from './ts-loader.cjs'
import { fullRelativeRE, normalizePath } from './utils'

/** 只判断 paths 的作用范围，目标选择交给 TypeScript。 */
function matchesPath(pattern: string, specifier: string) {
  const index = pattern.indexOf('*')
  if (index < 0) return pattern === specifier
  return (
    specifier.length >= pattern.length - 1 &&
    specifier.startsWith(pattern.slice(0, index)) &&
    specifier.endsWith(pattern.slice(index + 1))
  )
}

/**
 * 将源码中的模块解析结果关联到本轮声明产物。
 * 缓存限于本轮 emit，避免 watch 重建后保留旧目标或 package.json 条件。
 */
export function createDeclarationModuleResolver(
  program: ts.Program,
  host: ts.CompilerHost,
  declarations: ReadonlyMap<string, string>,
  declarationSources: ReadonlyMap<string, readonly string[]>,
  pathsToAliases: boolean,
  importsToAlias: boolean,
) {
  const options = program.getCompilerOptions()
  const patterns = Object.keys(options.paths ?? {})
  const checker = program.getTypeChecker()
  const sourceDeclarations = new Map<string, string>()
  const sourceReferences = new Map<ts.SourceFile, Map<string, ts.SourceFile>>()
  const cache = ts.createModuleResolutionCache(host.getCurrentDirectory(), normalizePath, options)
  // # 引用也可能先命中 paths；单独探测以保持两个开关互相独立。
  const pathsOptions = { ...options, resolvePackageJsonImports: false }
  const pathsCache = ts.createModuleResolutionCache(
    host.getCurrentDirectory(),
    normalizePath,
    pathsOptions,
  )

  for (const [declaration, sources] of declarationSources) {
    if (!declarations.has(declaration)) continue
    for (const source of sources) sourceDeclarations.set(normalizePath(source), declaration)
  }

  const getMode = (source: ts.SourceFile, node: ts.StringLiteralLike) =>
    program.getModeForUsageLocation?.(source, node) ?? source.impliedNodeFormat
  const referenceKey = (specifier: string, mode: ts.ResolutionMode) => `${mode}:${specifier}`
  const isCandidate = (specifier: string) =>
    !fullRelativeRE.test(specifier) &&
    !isAbsolute(specifier) &&
    (specifier.startsWith('#') || patterns.some(pattern => matchesPath(pattern, specifier)))

  const getReferences = (source: ts.SourceFile) => {
    let references = sourceReferences.get(source)
    if (references) return references
    references = new Map<string, ts.SourceFile>()
    sourceReferences.set(source, references)

    const visit = (node: ts.Node) => {
      if (ts.isStringLiteralLike(node) && isCandidate(node.text)) {
        const target = checker.getSymbolAtLocation(node)?.getDeclarations()?.find(ts.isSourceFile)
        if (target && !program.isSourceFileFromExternalLibrary(target)) {
          references.set(referenceKey(node.text, getMode(source, node)), target)
        }
      }
      node.forEachChild(visit)
    }
    visit(source)
    return references
  }

  return (declaration: string, node: ts.StringLiteral) => {
    const specifier = node.text
    if (!isCandidate(specifier)) return
    const matchesPaths = patterns.some(pattern => matchesPath(pattern, specifier))
    if (!(pathsToAliases && matchesPaths) && !(importsToAlias && specifier.startsWith('#'))) {
      return
    }

    const source = declarationSources
      .get(declaration)
      ?.map(path => program.getSourceFile(path))
      .find((file): file is ts.SourceFile => !!file)
    if (!source) return

    const mode = getMode(source, node)
    const originalTarget = getReferences(source).get(referenceKey(specifier, mode))
    const resolved = originalTarget
      ? undefined
      : ts.resolveModuleName(specifier, source.fileName, options, host, cache, undefined, mode)
        .resolvedModule
    if (resolved?.isExternalLibraryImport) return
    const target = originalTarget?.fileName ?? resolved?.resolvedFileName
    if (!target) return

    let usesPaths = matchesPaths
    if (matchesPaths && specifier.startsWith('#')) {
      const pathTarget = ts.resolveModuleName(
        specifier,
        source.fileName,
        pathsOptions,
        host,
        pathsCache,
        undefined,
        mode,
      ).resolvedModule?.resolvedFileName
      usesPaths = !!pathTarget && normalizePath(pathTarget) === normalizePath(target)
    }
    if (usesPaths ? !pathsToAliases : !importsToAlias || !specifier.startsWith('#')) return

    return sourceDeclarations.get(normalizePath(target))
  }
}
