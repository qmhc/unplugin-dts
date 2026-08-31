import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  renameSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, resolve, win32 } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, it, vi } from 'vitest'

import {
  Runtime,
  getRuntimeWatchTargets,
  isCanonicalPathEqualOrInside,
  rebuildRuntimeProgram,
} from '../src/core/runtime'
import { groupVueRootNames } from '../src/core/processor/vue'
import { normalizePath } from '../src/core/utils'

function emitDeclarations(program: ReturnType<Runtime['getProgram']>) {
  const declarations = new Map<string, string>()
  program.emit(
    undefined,
    (fileName, content) => declarations.set(normalizePath(fileName), content),
    undefined,
    true,
  )
  return [...declarations].sort(([left], [right]) => left.localeCompare(right))
}

describe('runtime tests', () => {
  let tempDir: string

  afterEach(() => {
    vi.unstubAllEnvs()
    if (tempDir) {
      rmSync(tempDir, { recursive: true, force: true })
    }
  })

  it('should group cross-volume Vue roots beside their own filesystem volume', () => {
    expect(
      groupVueRootNames(
        ['C:\\project\\src\\App.vue', 'D:\\shared\\External.vue'],
        'C:\\project',
        win32,
      ),
    ).toEqual([
      { directory: 'C:\\project', rootNames: ['C:\\project\\src\\App.vue'] },
      { directory: 'D:\\', rootNames: ['D:\\shared\\External.vue'] },
    ])
  })

  it('should compare descendants of filesystem roots without duplicating separators', () => {
    expect(isCanonicalPathEqualOrInside('/project/src', '/')).toBe(true)
    expect(isCanonicalPathEqualOrInside('C:/project/src', 'C:/')).toBe(true)
    expect(isCanonicalPathEqualOrInside('//server/share/project/src', '//server/share/')).toBe(true)
    expect(isCanonicalPathEqualOrInside('/other/src', '/project')).toBe(false)
  })

  it('should resolve paths relative to tsconfig dir when baseUrl is absent', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          paths: {
            '@/*': ['./src/*'],
          },
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'))
    writeFileSync(resolve(tempDir, 'src', 'index.ts'), 'export const foo = 1\n')
    writeFileSync(resolve(tempDir, 'src', 'helper.ts'), 'export const bar = 2\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      pathsToAliases: true,
    })

    const alias = (runtime as any).aliases.find((a: any) =>
      typeof a.find === 'string' ? a.find === '@/' : a.find.test('@/helper'),
    )

    expect(alias).toBeDefined()
    expect(normalizePath(alias!.replacement)).toBe(normalizePath(resolve(tempDir, 'src/$1')))
  })

  it('should resolve @/* alias when wildcard * path is also present', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          paths: {
            '*': ['./src/*'],
            '@/*': ['./src/*'],
          },
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'))
    writeFileSync(resolve(tempDir, 'src', 'index.ts'), 'export const foo = 1\n')
    writeFileSync(resolve(tempDir, 'src', 'helper.ts'), 'export const bar = 2\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      pathsToAliases: true,
    })

    const atAlias = (runtime as any).aliases.find((a: any) =>
      typeof a.find === 'string' ? a.find === '@/' : a.find.test('@/helper'),
    )

    expect(atAlias).toBeDefined()
    expect(normalizePath(atAlias!.replacement)).toBe(normalizePath(resolve(tempDir, 'src/$1')))
  })

  it('should include .vue files when using glob patterns with processor vue', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        include: ['src/**/*'],
        exclude: ['node_modules', 'dist'],
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          composite: true,
          moduleResolution: 'bundler',
          strict: true,
        },
      }),
    )

    mkdirSync(resolve(tempDir, 'src', 'components'), { recursive: true })
    writeFileSync(
      resolve(tempDir, 'src', 'main.ts'),
      `import App from './App.vue'\nexport { App }\n`,
    )
    writeFileSync(
      resolve(tempDir, 'src', 'App.vue'),
      `<template><HelloWorld /></template>\n<script setup lang="ts">\nimport HelloWorld from './components/HelloWorld.vue'\n</script>\n`,
    )
    writeFileSync(
      resolve(tempDir, 'src', 'components', 'HelloWorld.vue'),
      `<template><div>Hello</div></template>\n<script setup lang="ts">\nconst msg = 'Hello World'\n</script>\n`,
    )

    const runtime = await Runtime.toInstance({
      processor: 'vue',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      entries: {
        main: resolve(tempDir, 'src/main.ts'),
      },
    })

    const diagnostics = runtime.getDiagnostics()
    const ts6307 = diagnostics.filter((d: any) => {
      const msg = typeof d.messageText === 'string' ? d.messageText : d.messageText.messageText
      return msg.includes('not listed within the file list')
    })

    expect(ts6307).toHaveLength(0)
  })

  it('should keep Vue updates on a fresh Program boundary and refresh structural roots', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
    const sourceDirectory = resolve(tempDir, 'src')
    const appPath = resolve(sourceDirectory, 'App.vue')
    const createdPath = resolve(sourceDirectory, 'Created.vue')
    const renamedPath = resolve(sourceDirectory, 'Renamed.vue')
    const typesDirectory = resolve(tempDir, 'types')
    const secondaryTypesDirectory = resolve(tempDir, 'types-secondary')
    const occupiedVueRootPath = resolve(tempDir, '__unplugin_dts_vue_root__.d.ts')
    const virtualVueRootPath = resolve(tempDir, '__unplugin_dts_vue_root_1__.d.ts')
    mkdirSync(sourceDirectory)
    symlinkSync(
      resolve(dirname(fileURLToPath(import.meta.url)), '../../../playground/vue-vite/node_modules'),
      resolve(tempDir, 'node_modules'),
      process.platform === 'win32' ? 'junction' : 'dir',
    )

    const app = (
      type: 'string' | 'number',
      style: string,
      docs: string,
    ) => `<script setup lang="ts">
defineProps<{ msg: ${type} }>()
</script>
<template><div class="${style}">{{ msg }}</div></template>
<style scoped>.${style} { color: red; }</style>
<docs lang="md">${docs}</docs>
`
    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          strict: true,
          declarationMap: true,
        },
        include: ['src/**/*'],
      }),
    )
    writeFileSync(
      resolve(sourceDirectory, 'index.ts'),
      "export { default as App } from './App.vue'\n",
    )
    writeFileSync(appPath, app('string', 'first', 'docs-one'))
    writeFileSync(occupiedVueRootPath, 'export interface UserOwnedVueRoot {}\n')

    const runtime = await Runtime.toInstance({
      processor: 'vue',
      root: tempDir,
      outDirs: [typesDirectory, secondaryTypesDirectory],
      tsconfigPath: 'tsconfig.json',
    })
    const declarationFor = async (fileName: string) => {
      runtime.restoreRootFiles()
      runtime.clearTransformedFiles()
      await runtime.emitOutput()
      return readFileSync(resolve(typesDirectory, fileName), 'utf8')
    }
    const appSourceFile = runtime.getProgram().getSourceFile(normalizePath(appPath))!
    const initialHost = runtime.getHost()
    Object.assign(initialHost, { phase3HostMarker: true })

    expect(runtime.getProgram().getCompilerOptions().moduleResolution).toBeDefined()
    expect(runtime.getProgram().getRootFileNames()).toContain(normalizePath(virtualVueRootPath))
    expect(existsSync(virtualVueRootPath)).toBe(false)
    const watchTargets = getRuntimeWatchTargets(runtime)
    expect(watchTargets.directories).toContain(normalizePath(sourceDirectory))
    expect(watchTargets.directories).not.toContain(normalizePath(tempDir))
    expect(watchTargets.files).not.toContain(normalizePath(virtualVueRootPath))
    expect(await declarationFor('App.vue.d.ts')).toContain('msg: string')

    writeFileSync(appPath, app('number', 'first', 'docs-one'))
    rebuildRuntimeProgram(runtime, { fileName: appPath, event: 'update' })
    expect(runtime.getHost()).toBe(initialHost)
    expect(runtime.getHost()).toHaveProperty('phase3HostMarker', true)
    expect(runtime.getProgram().getSourceFile(normalizePath(appPath))).not.toBe(appSourceFile)
    const freshAfterUpdate = await Runtime.toInstance({
      processor: 'vue',
      root: tempDir,
      outDirs: [typesDirectory, secondaryTypesDirectory],
      tsconfigPath: 'tsconfig.json',
    })
    expect(emitDeclarations(runtime.getProgram())).toEqual(
      emitDeclarations(freshAfterUpdate.getProgram()),
    )
    expect(await declarationFor('App.vue.d.ts')).toContain('msg: number')

    writeFileSync(
      createdPath,
      '<script setup lang="ts">\ndefineProps<{ created: boolean }>()\n</script>\n',
    )
    rebuildRuntimeProgram(runtime, { fileName: createdPath, event: 'create' })
    expect(runtime.getHost()).toBe(initialHost)
    expect(runtime.getHost()).toHaveProperty('phase3HostMarker', true)
    expect(runtime.getProgram().getSourceFile(normalizePath(createdPath))).toBeDefined()
    expect(await declarationFor('Created.vue.d.ts')).toContain('created: boolean')
    expect(existsSync(resolve(secondaryTypesDirectory, 'Created.vue.d.ts'))).toBe(true)
    expect(existsSync(resolve(secondaryTypesDirectory, 'Created.vue.d.ts.map'))).toBe(true)

    renameSync(createdPath, renamedPath)
    rebuildRuntimeProgram(runtime, [
      { fileName: createdPath, event: 'delete' },
      { fileName: renamedPath, event: 'create' },
    ])
    expect(runtime.getHost()).toBe(initialHost)
    expect(runtime.getHost()).toHaveProperty('phase3HostMarker', true)
    expect(runtime.getProgram().getSourceFile(normalizePath(createdPath))).toBeUndefined()
    expect(runtime.getProgram().getSourceFile(normalizePath(renamedPath))).toBeDefined()
    expect(await declarationFor('Renamed.vue.d.ts')).toContain('created: boolean')
    for (const directory of [typesDirectory, secondaryTypesDirectory]) {
      expect(existsSync(resolve(directory, 'Created.vue.d.ts'))).toBe(false)
      expect(existsSync(resolve(directory, 'Created.vue.d.ts.map'))).toBe(false)
      expect(existsSync(resolve(directory, 'Renamed.vue.d.ts'))).toBe(true)
      expect(existsSync(resolve(directory, 'Renamed.vue.d.ts.map'))).toBe(true)
    }

    rmSync(renamedPath)
    rebuildRuntimeProgram(runtime, { fileName: renamedPath, event: 'delete' })
    expect(runtime.getHost()).toBe(initialHost)
    expect(runtime.getHost()).toHaveProperty('phase3HostMarker', true)
    expect(runtime.getProgram().getSourceFile(normalizePath(renamedPath))).toBeUndefined()
    runtime.restoreRootFiles()
    await runtime.emitOutput()
    for (const directory of [typesDirectory, secondaryTypesDirectory]) {
      expect(existsSync(resolve(directory, 'Renamed.vue.d.ts'))).toBe(false)
      expect(existsSync(resolve(directory, 'Renamed.vue.d.ts.map'))).toBe(false)
    }
  }, 10_000)

  it('should never copy the internal Vue root when the config includes the project root', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
    const sourceDirectory = resolve(tempDir, 'src')
    const typesDirectory = resolve(tempDir, 'types')
    const userRootName = '__unplugin_dts_vue_root__.d.ts'
    const internalRootName = '__unplugin_dts_vue_root_1__.d.ts'
    mkdirSync(sourceDirectory)
    symlinkSync(
      resolve(dirname(fileURLToPath(import.meta.url)), '../../../playground/vue-vite/node_modules'),
      resolve(tempDir, 'node_modules'),
      process.platform === 'win32' ? 'junction' : 'dir',
    )
    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: { target: 'ESNext', module: 'ESNext' },
        include: ['**/*'],
      }),
    )
    writeFileSync(
      resolve(sourceDirectory, 'App.vue'),
      '<script setup lang="ts">\ndefineProps<{ msg: string }>()\n</script>\n',
    )
    writeFileSync(resolve(tempDir, userRootName), 'export interface UserOwnedRoot {}\n')

    const runtime = await Runtime.toInstance({
      processor: 'vue',
      root: tempDir,
      outDirs: typesDirectory,
      tsconfigPath: 'tsconfig.json',
    })
    runtime.restoreRootFiles()
    const emittedFiles = await runtime.emitOutput({ copyDtsFiles: true })

    expect(readFileSync(resolve(typesDirectory, userRootName), 'utf8')).toContain('UserOwnedRoot')
    expect(existsSync(resolve(typesDirectory, internalRootName))).toBe(false)
    expect([...emittedFiles.keys()].some(fileName => fileName.endsWith(internalRootName))).toBe(
      false,
    )
  })

  it('should release Vue files that leave a stable import graph without a delete event', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
    const sourceDirectory = resolve(tempDir, 'src')
    const appPath = resolve(sourceDirectory, 'App.vue')
    const firstPath = resolve(sourceDirectory, 'Comp1.vue')
    const secondPath = resolve(sourceDirectory, 'Comp2.vue')
    mkdirSync(sourceDirectory)
    symlinkSync(
      resolve(dirname(fileURLToPath(import.meta.url)), '../../../playground/vue-vite/node_modules'),
      resolve(tempDir, 'node_modules'),
      process.platform === 'win32' ? 'junction' : 'dir',
    )
    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          strict: true,
        },
        files: ['src/App.vue'],
      }),
    )
    writeFileSync(firstPath, '<script lang="ts">\nexport interface First {}\n</script>\n')
    writeFileSync(secondPath, '<script lang="ts">\nexport interface Second {}\n</script>\n')
    writeFileSync(
      appPath,
      '<script setup lang="ts">\nimport type { First } from "./Comp1.vue"\ndefineProps<First>()\n</script>\n',
    )

    const runtime = await Runtime.toInstance({
      processor: 'vue',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
    })
    const initialHost = runtime.getHost()
    expect(runtime.getProgram().getSourceFile(normalizePath(firstPath))).toBeDefined()
    expect(runtime.getProgram().getSourceFile(normalizePath(secondPath))).toBeUndefined()

    writeFileSync(
      appPath,
      '<script setup lang="ts">\nimport type { Second } from "./Comp2.vue"\ndefineProps<Second>()\n</script>\n',
    )
    rebuildRuntimeProgram(runtime, { fileName: appPath, event: 'update' })

    expect(runtime.getHost()).toBe(initialHost)
    expect(runtime.getProgram().getSourceFile(normalizePath(firstPath))).toBeUndefined()
    expect(runtime.getProgram().getSourceFile(normalizePath(secondPath))).toBeDefined()
    expect(runtime.getDiagnostics()).toEqual([])
  })

  it('should refresh Vue imports reached only from a TypeScript root', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
    const sourceDirectory = resolve(tempDir, 'src')
    const indexPath = resolve(sourceDirectory, 'index.ts')
    const firstPath = resolve(sourceDirectory, 'Comp1.vue')
    const secondPath = resolve(sourceDirectory, 'Comp2.vue')
    mkdirSync(sourceDirectory)
    symlinkSync(
      resolve(dirname(fileURLToPath(import.meta.url)), '../../../playground/vue-vite/node_modules'),
      resolve(tempDir, 'node_modules'),
      process.platform === 'win32' ? 'junction' : 'dir',
    )
    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          strict: true,
          declaration: true,
        },
        files: ['src/index.ts'],
      }),
    )
    writeFileSync(
      firstPath,
      '<script lang="ts">\nexport interface Value { first: true }\n</script>\n',
    )
    writeFileSync(
      secondPath,
      '<script lang="ts">\nexport interface Value { second: true }\n</script>\n',
    )
    writeFileSync(
      indexPath,
      "import type { Value } from './Comp1.vue'\nexport type Current = Value\n",
    )

    const runtime = await Runtime.toInstance({
      processor: 'vue',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
    })
    const initialProgram = runtime.getProgram()
    const initialHost = runtime.getHost()
    expect(initialProgram.getSourceFile(normalizePath(firstPath))).toBeDefined()
    expect(initialProgram.getSourceFile(normalizePath(secondPath))).toBeUndefined()
    expect(initialProgram.getCompilerOptions().moduleResolution).toBeDefined()
    expect(runtime.getDiagnostics()).toEqual([])

    writeFileSync(
      indexPath,
      "import type { Value } from './Comp2.vue'\nexport type Current = Value\n",
    )
    rebuildRuntimeProgram(runtime, { fileName: indexPath, event: 'update' })

    expect(runtime.getHost()).toBe(initialHost)
    expect(runtime.getProgram()).not.toBe(initialProgram)
    expect(initialProgram.getSourceFile(normalizePath(firstPath))).toBeDefined()
    expect(runtime.getProgram().getSourceFile(normalizePath(firstPath))).toBeUndefined()
    expect(runtime.getProgram().getSourceFile(normalizePath(secondPath))).toBeDefined()
    expect(runtime.getDiagnostics()).toEqual([])

    const incrementalDeclarations = emitDeclarations(runtime.getProgram())
    const freshRuntime = await Runtime.toInstance({
      processor: 'vue',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
    })
    expect(incrementalDeclarations).toEqual(emitDeclarations(freshRuntime.getProgram()))
    expect(
      incrementalDeclarations.some(
        ([fileName, content]) => fileName.endsWith('index.d.ts') && content.includes('Comp2.vue'),
      ),
    ).toBe(true)
    expect(
      incrementalDeclarations.some(
        ([fileName, content]) =>
          fileName.endsWith('Comp2.vue.d.ts') &&
          content.includes('DefineComponent') &&
          !content.includes('__VLS_export: any'),
      ),
    ).toBe(true)
  })

  it('should forward aliasesExclude to Runtime', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {},
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'), { recursive: true })
    writeFileSync(resolve(tempDir, 'src', 'index.ts'), 'export const foo = 1\n')

    const aliasesExclude = [/^@gafe\//]
    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      aliasesExclude,
    })

    expect((runtime as any).aliasesExclude).toEqual(aliasesExclude)
  })

  it('should reuse unchanged SourceFile identities for leaf and dependency updates', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
    mkdirSync(resolve(tempDir, 'src'))
    const indexPath = resolve(tempDir, 'src/index.ts')
    const commonPath = resolve(tempDir, 'src/common.ts')
    const leafPath = resolve(tempDir, 'src/leaf.ts')

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({ compilerOptions: { strict: true }, include: ['src/**/*'] }),
    )
    writeFileSync(indexPath, "export { common } from './common'\nexport { leaf } from './leaf'\n")
    writeFileSync(commonPath, "export const common = 'before'\n")
    writeFileSync(leafPath, "export const leaf = 'before'\n")

    const runtime = await Runtime.toInstance({
      processor: 'ts',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
    })
    expect(getRuntimeWatchTargets(runtime).directories).toContain(
      normalizePath(resolve(tempDir, 'src')),
    )
    const initialProgram = runtime.getProgram()
    const initialIndex = initialProgram.getSourceFile(normalizePath(indexPath))!
    const initialCommon = initialProgram.getSourceFile(normalizePath(commonPath))!
    const initialLeaf = initialProgram.getSourceFile(normalizePath(leafPath))!

    writeFileSync(leafPath, "export const leaf = 'after'\n")
    rebuildRuntimeProgram(runtime, { fileName: leafPath, event: 'update' })

    const leafProgram = runtime.getProgram()
    expect(leafProgram.getSourceFile(normalizePath(indexPath))).toBe(initialIndex)
    expect(leafProgram.getSourceFile(normalizePath(commonPath))).toBe(initialCommon)
    expect(leafProgram.getSourceFile(normalizePath(leafPath))).not.toBe(initialLeaf)

    const leafAfterFirstUpdate = leafProgram.getSourceFile(normalizePath(leafPath))!
    const declarationsBeforeCommonUpdate = emitDeclarations(leafProgram)
    writeFileSync(commonPath, "export const common = 'after'\n")
    rebuildRuntimeProgram(runtime, { fileName: commonPath, event: 'update' })

    expect(runtime.getProgram().getSourceFile(normalizePath(commonPath))).not.toBe(initialCommon)
    expect(runtime.getProgram().getSourceFile(normalizePath(leafPath))).toBe(leafAfterFirstUpdate)

    const incrementalDeclarations = emitDeclarations(runtime.getProgram())
    const freshRuntime = await Runtime.toInstance({
      processor: 'ts',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
    })
    const freshDeclarations = emitDeclarations(freshRuntime.getProgram())
    expect(incrementalDeclarations).toEqual(freshDeclarations)
    expect(incrementalDeclarations).not.toEqual(declarationsBeforeCommonUpdate)
  })

  it('should distinguish exact and recursive watches around output overlaps', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
    const sourceDirectory = resolve(tempDir, 'src')
    const sourcePath = resolve(sourceDirectory, 'index.ts')
    mkdirSync(sourceDirectory)
    writeFileSync(resolve(tempDir, 'tsconfig.json'), JSON.stringify({ files: ['src/index.ts'] }))
    writeFileSync(sourcePath, 'export const value = true\n')

    const runtime = await Runtime.toInstance({
      processor: 'ts',
      root: tempDir,
      outDirs: resolve(tempDir, 'types'),
      tsconfigPath: 'tsconfig.json',
    })

    const watchTargets = getRuntimeWatchTargets(runtime)
    expect(watchTargets.files).toContain(normalizePath(sourcePath))
    expect(watchTargets.directories).toContain(normalizePath(sourceDirectory))
    expect(watchTargets.contextDirectories).toContain(normalizePath(sourceDirectory))
    const overlappingRuntime = await Runtime.toInstance({
      processor: 'ts',
      root: tempDir,
      outDirs: tempDir,
      tsconfigPath: 'tsconfig.json',
    })
    const overlappingTargets = getRuntimeWatchTargets(overlappingRuntime)
    expect(overlappingTargets.directories).not.toContain(normalizePath(sourceDirectory))
    expect(overlappingTargets.contextDirectories).not.toContain(normalizePath(sourceDirectory))

    const rootSourcePath = resolve(tempDir, 'index.ts')
    writeFileSync(resolve(tempDir, 'tsconfig.json'), JSON.stringify({ include: ['*.ts'] }))
    writeFileSync(rootSourcePath, 'export const rootValue = true\n')

    const ancestorRuntime = await Runtime.toInstance({
      processor: 'ts',
      root: tempDir,
      outDirs: resolve(tempDir, 'dist'),
      tsconfigPath: 'tsconfig.json',
    })
    const ancestorTargets = getRuntimeWatchTargets(ancestorRuntime)

    expect(ancestorTargets.files).toContain(normalizePath(rootSourcePath))
    expect(ancestorTargets.directories).toContain(normalizePath(tempDir))
    expect(ancestorTargets.contextDirectories).not.toContain(normalizePath(tempDir))
  })

  it('should refresh complete diagnostics after incremental rebuilds', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
    const sourcePath = resolve(tempDir, 'index.ts')
    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({ compilerOptions: { strict: true }, include: ['index.ts'] }),
    )
    writeFileSync(sourcePath, "export const value: string = 'valid'\n")

    const runtime = await Runtime.toInstance({
      processor: 'ts',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      logger: { info() {}, warn() {}, error() {} },
    })
    const freshDiagnosticCodes = async () => {
      const freshRuntime = await Runtime.toInstance({
        processor: 'ts',
        root: tempDir,
        tsconfigPath: 'tsconfig.json',
        logger: { info() {}, warn() {}, error() {} },
      })
      return freshRuntime
        .getDiagnostics()
        .map(diagnostic => diagnostic.code)
        .sort((left, right) => left - right)
    }

    writeFileSync(sourcePath, 'export const value: string = 1\n')
    rebuildRuntimeProgram(runtime, { fileName: sourcePath, event: 'update' })
    let diagnosticCodes = runtime
      .getDiagnostics()
      .map(diagnostic => diagnostic.code)
      .sort((left, right) => left - right)
    expect(diagnosticCodes).toEqual(await freshDiagnosticCodes())
    expect(diagnosticCodes).toContain(2322)

    writeFileSync(sourcePath, "export const value: string = 'fixed'\n")
    rebuildRuntimeProgram(runtime, { fileName: sourcePath, event: 'update' })
    diagnosticCodes = runtime
      .getDiagnostics()
      .map(diagnostic => diagnostic.code)
      .sort((left, right) => left - right)
    expect(diagnosticCodes).toEqual(await freshDiagnosticCodes())
    expect(diagnosticCodes).not.toContain(2322)
  })

  it('should use fresh fallback for root-set and tsconfig changes', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
    mkdirSync(resolve(tempDir, 'src'))
    mkdirSync(resolve(tempDir, 'extra'))
    const configPath = resolve(tempDir, 'tsconfig.json')
    const initialPath = resolve(tempDir, 'src/index.ts')
    const addedPath = resolve(tempDir, 'src/added.ts')
    const extraPath = resolve(tempDir, 'extra/extra.ts')

    writeFileSync(
      configPath,
      JSON.stringify({
        compilerOptions: { paths: { '@/*': ['./src/*'] } },
        include: ['src/**/*'],
      }),
    )
    writeFileSync(initialPath, 'export const initial = true\n')
    writeFileSync(extraPath, 'export const extra = true\n')

    const runtime = await Runtime.toInstance({
      processor: 'ts',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      pathsToAliases: true,
    })
    let previousHost = runtime.getHost()
    let previousInitialSource = runtime.getProgram().getSourceFile(normalizePath(initialPath))!

    writeFileSync(addedPath, 'export const added = true\n')
    rebuildRuntimeProgram(runtime, { fileName: addedPath, event: 'create' })
    expect(runtime.getHost()).not.toBe(previousHost)
    expect(runtime.getProgram().getSourceFile(normalizePath(initialPath))).not.toBe(
      previousInitialSource,
    )
    expect(runtime.getProgram().getSourceFile(normalizePath(addedPath))).toBeDefined()

    previousHost = runtime.getHost()
    previousInitialSource = runtime.getProgram().getSourceFile(normalizePath(initialPath))!
    rmSync(addedPath)
    rebuildRuntimeProgram(runtime, { fileName: addedPath, event: 'delete' })
    expect(runtime.getHost()).not.toBe(previousHost)
    expect(runtime.getProgram().getSourceFile(normalizePath(initialPath))).not.toBe(
      previousInitialSource,
    )
    expect(runtime.getProgram().getSourceFile(normalizePath(addedPath))).toBeUndefined()

    previousHost = runtime.getHost()
    writeFileSync(
      configPath,
      JSON.stringify({
        compilerOptions: { baseUrl: '.', paths: { '#/*': ['./extra/*'] } },
        files: ['extra/extra.ts'],
        exclude: ['src/**/*'],
      }),
    )
    rebuildRuntimeProgram(runtime, { fileName: configPath, event: 'update' })

    expect(runtime.getHost()).not.toBe(previousHost)
    expect(runtime.getProgram().getSourceFile(normalizePath(initialPath))).toBeUndefined()
    expect(runtime.getProgram().getSourceFile(normalizePath(extraPath))).toBeDefined()
    expect(
      (runtime as any).aliases.some((alias: any) =>
        typeof alias.find === 'string' ? alias.find === '#/' : alias.find.test('#/extra'),
      ),
    ).toBe(true)
  })

  it('should reuse an updated external declaration and watch it', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
    mkdirSync(resolve(tempDir, 'src'))
    mkdirSync(resolve(tempDir, 'external'))
    const sourcePath = resolve(tempDir, 'src/index.ts')
    const declarationPath = resolve(tempDir, 'external/types.d.ts')

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({ compilerOptions: { strict: true }, include: ['src/**/*'] }),
    )
    writeFileSync(
      sourcePath,
      "import type { External } from '../external/types'\nexport type Value = External\n",
    )
    writeFileSync(declarationPath, 'export interface External { value: string }\n')

    const runtime = await Runtime.toInstance({
      processor: 'ts',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
    })
    const initialProgram = runtime.getProgram()
    const initialSource = initialProgram.getSourceFile(normalizePath(sourcePath))!
    const initialDeclaration = initialProgram.getSourceFile(normalizePath(declarationPath))!
    expect(getRuntimeWatchTargets(runtime).files).toContain(normalizePath(declarationPath))

    writeFileSync(declarationPath, 'export interface External { value: number }\n')
    rebuildRuntimeProgram(runtime, { fileName: declarationPath, event: 'update' })

    expect(runtime.getProgram().getSourceFile(normalizePath(sourcePath))).toBe(initialSource)
    expect(runtime.getProgram().getSourceFile(normalizePath(declarationPath))).not.toBe(
      initialDeclaration,
    )
  })

  it('should use fresh fallback for JSON and custom resolver updates', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
    mkdirSync(resolve(tempDir, 'src'))
    const sourcePath = resolve(tempDir, 'src/index.ts')
    const jsonPath = resolve(tempDir, 'src/data.json')
    const customPath = resolve(tempDir, 'src/schema.grammar')

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: { moduleResolution: 'bundler', resolveJsonModule: true },
        include: ['src/**/*'],
      }),
    )
    writeFileSync(sourcePath, "import data from './data.json'\nexport { data }\n")
    writeFileSync(jsonPath, '{"value":"before"}\n')
    writeFileSync(customPath, 'before\n')

    const runtime = await Runtime.toInstance({
      processor: 'ts',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      resolvers: [
        {
          name: 'grammar',
          supports: id => id.endsWith('.grammar'),
          transform: () => [],
        },
      ],
    })
    const createFreshRuntime = () =>
      Runtime.toInstance({
        processor: 'ts',
        root: tempDir,
        tsconfigPath: 'tsconfig.json',
        resolvers: [
          {
            name: 'grammar',
            supports: id => id.endsWith('.grammar'),
            transform: () => [],
          },
        ],
      })
    let previousHost = runtime.getHost()
    let previousSource = runtime.getProgram().getSourceFile(normalizePath(sourcePath))!

    writeFileSync(jsonPath, '{"value":"after"}\n')
    rebuildRuntimeProgram(runtime, { fileName: jsonPath, event: 'update' })
    expect(runtime.getHost()).not.toBe(previousHost)
    expect(runtime.getProgram().getSourceFile(normalizePath(sourcePath))).not.toBe(previousSource)
    expect(runtime.getProgram().getSourceFile(normalizePath(jsonPath))?.text).toContain('after')
    expect(emitDeclarations(runtime.getProgram())).toEqual(
      emitDeclarations((await createFreshRuntime()).getProgram()),
    )

    previousHost = runtime.getHost()
    previousSource = runtime.getProgram().getSourceFile(normalizePath(sourcePath))!
    writeFileSync(customPath, 'after\n')
    rebuildRuntimeProgram(runtime, { fileName: customPath, event: 'update' })
    expect(runtime.getHost()).not.toBe(previousHost)
    expect(runtime.getProgram().getSourceFile(normalizePath(sourcePath))).not.toBe(previousSource)
    expect(emitDeclarations(runtime.getProgram())).toEqual(
      emitDeclarations((await createFreshRuntime()).getProgram()),
    )
  })

  it('should fall back to a fresh Program when the internal cache switch is disabled', async () => {
    vi.stubEnv('DTS_DISABLE_SOURCE_FILE_CACHE', '1')
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
    const sourcePath = resolve(tempDir, 'index.ts')
    const unchangedPath = resolve(tempDir, 'unchanged.ts')
    writeFileSync(resolve(tempDir, 'tsconfig.json'), JSON.stringify({ include: ['*.ts'] }))
    writeFileSync(sourcePath, "export const value = 'before'\n")
    writeFileSync(unchangedPath, 'export const unchanged = true\n')

    const runtime = await Runtime.toInstance({
      processor: 'ts',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
    })
    const previousHost = runtime.getHost()
    const previousSourceFile = runtime.getProgram().getSourceFile(normalizePath(sourcePath))!
    const previousUnchangedSourceFile = runtime
      .getProgram()
      .getSourceFile(normalizePath(unchangedPath))!
    const previousDeclarations = emitDeclarations(runtime.getProgram())

    writeFileSync(sourcePath, "export const value = 'after'\n")
    rebuildRuntimeProgram(runtime, { fileName: sourcePath, event: 'update' })

    expect(runtime.getProgram().getSourceFile(normalizePath(sourcePath))).not.toBe(
      previousSourceFile,
    )
    expect(runtime.getHost()).toBe(previousHost)
    expect(runtime.getProgram().getSourceFile(normalizePath(unchangedPath))).not.toBe(
      previousUnchangedSourceFile,
    )
    const freshRuntime = await Runtime.toInstance({
      processor: 'ts',
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
    })
    const rebuiltDeclarations = emitDeclarations(runtime.getProgram())
    expect(rebuiltDeclarations).toEqual(emitDeclarations(freshRuntime.getProgram()))
    expect(rebuiltDeclarations).not.toEqual(previousDeclarations)
  })

  it('should use baseUrl when explicitly set', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          baseUrl: './lib',
          paths: {
            '@/*': ['./src/*'],
          },
        },
        include: ['lib/src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'lib', 'src'), { recursive: true })
    writeFileSync(resolve(tempDir, 'lib', 'src', 'index.ts'), 'export const foo = 1\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      pathsToAliases: true,
    })

    const alias = (runtime as any).aliases.find((a: any) =>
      typeof a.find === 'string' ? a.find === '@/' : a.find.test('@/helper'),
    )

    expect(alias).toBeDefined()
    expect(normalizePath(alias!.replacement)).toBe(normalizePath(resolve(tempDir, 'lib/src/$1')))
  })

  it('should not create self-referencing synthetic entry when entry dts path equals types path', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          allowImportingTsExtensions: true,
          strict: true,
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'), { recursive: true })
    writeFileSync(
      resolve(tempDir, 'src', 'index.ts'),
      `export { setupCounter } from './counter.ts'\n`,
    )
    writeFileSync(
      resolve(tempDir, 'src', 'counter.ts'),
      `export function setupCounter(element: HTMLButtonElement) {}\n`,
    )

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      entries: {
        index: resolve(tempDir, 'src/index.ts'),
      },
    })

    // Simulate a rebuild by re-transforming the entry file
    await runtime.transform(resolve(tempDir, 'src/index.ts'), '')

    const emittedFiles = await runtime.emitOutput({
      insertTypesEntry: true,
      bundleTypes: false,
    })

    const indexDtsPath = resolve(tempDir, 'dist/index.d.ts')
    const content = emittedFiles.get(normalizePath(indexDtsPath))

    // The entry declaration itself should be preserved, not replaced by a
    // self-referencing synthetic entry like `export * from './index'`.
    expect(content).toContain('setupCounter')
    expect(content).not.toContain("export * from './index'")
  })

  it('should emit to dist/index.d.ts not dist/src/index.d.ts when rootDir is not explicitly set', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          strict: true,
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'), { recursive: true })
    writeFileSync(resolve(tempDir, 'src', 'index.ts'), 'export const foo = 1\n')
    writeFileSync(resolve(tempDir, 'src', 'helper.ts'), 'export const bar = 2\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      entries: {
        index: resolve(tempDir, 'src/index.ts'),
      },
    })

    const srcDir = normalizePath(resolve(tempDir, 'src'))
    expect(normalizePath((runtime as any).publicRoot)).toBe(srcDir)
    expect(normalizePath((runtime as any).entryRoot)).toBe(srcDir)

    await runtime.transform(resolve(tempDir, 'src/index.ts'), '')
    const emittedFiles = await runtime.emitOutput({ insertTypesEntry: false })

    const indexDts = normalizePath(resolve(tempDir, 'dist/index.d.ts'))
    const srcIndexDts = normalizePath(resolve(tempDir, 'dist/src/index.d.ts'))

    expect(emittedFiles.has(indexDts)).toBe(true)
    expect(emittedFiles.has(srcIndexDts)).toBe(false)
  })

  it('should use explicit rootDir as the default entryRoot', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          rootDir: '.',
          strict: true,
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'), { recursive: true })
    writeFileSync(resolve(tempDir, 'src', 'index.ts'), 'export const foo = 1\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      entries: {
        index: resolve(tempDir, 'src/index.ts'),
      },
    })

    const rootDir = normalizePath(tempDir)
    expect(normalizePath((runtime as any).publicRoot)).toBe(rootDir)
    expect(normalizePath((runtime as any).entryRoot)).toBe(rootDir)

    await runtime.transform(resolve(tempDir, 'src/index.ts'), '')
    const emittedFiles = await runtime.emitOutput({ insertTypesEntry: false })

    const indexDts = normalizePath(resolve(tempDir, 'dist/index.d.ts'))
    const srcIndexDts = normalizePath(resolve(tempDir, 'dist/src/index.d.ts'))

    expect(emittedFiles.has(indexDts)).toBe(false)
    expect(emittedFiles.has(srcIndexDts)).toBe(true)
  })

  it('should add .js extension to synthetic entry imports for nodenext compatibility', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'package.json'),
      JSON.stringify({
        name: 'test',
        types: 'dist/main.d.ts',
      }),
    )

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          strict: true,
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'), { recursive: true })
    writeFileSync(resolve(tempDir, 'src', 'index.ts'), 'export const foo = 1\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      entries: {
        index: resolve(tempDir, 'src/index.ts'),
      },
    })

    await runtime.transform(resolve(tempDir, 'src/index.ts'), '')

    const emittedFiles = await runtime.emitOutput({
      insertTypesEntry: true,
      bundleTypes: false,
    })

    const mainDtsPath = resolve(tempDir, 'dist/main.d.ts')
    const content = emittedFiles.get(normalizePath(mainDtsPath))

    expect(content).toContain("export * from './index.js'")
  })

  it('should bundle nested multiple entries back to their entry declaration paths', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'package.json'),
      JSON.stringify({
        name: 'test',
        version: '1.0.0',
      }),
    )

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          strict: true,
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'), { recursive: true })
    writeFileSync(resolve(tempDir, 'src', 'button.ts'), 'export const button = "button"\n')
    writeFileSync(resolve(tempDir, 'src', 'input.ts'), 'export const input = "input"\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      entries: {
        'components/button': resolve(tempDir, 'src/button.ts'),
        'fields/input': resolve(tempDir, 'src/input.ts'),
      },
    })

    await runtime.transform(resolve(tempDir, 'src/button.ts'), '')
    await runtime.transform(resolve(tempDir, 'src/input.ts'), '')

    const emittedFiles = await runtime.emitOutput({ bundleTypes: true })

    const buttonDtsPath = normalizePath(resolve(tempDir, 'dist/components/button.d.ts'))
    const inputDtsPath = normalizePath(resolve(tempDir, 'dist/fields/input.d.ts'))

    const buttonContent = emittedFiles.get(buttonDtsPath) ?? readFileSync(buttonDtsPath, 'utf-8')
    const inputContent = emittedFiles.get(inputDtsPath) ?? readFileSync(inputDtsPath, 'utf-8')

    expect(buttonContent).toContain('button')
    expect(inputContent).toContain('input')
    expect(buttonContent).not.toContain("export * from '../button.js'")
    expect(inputContent).not.toContain("export * from '../input.js'")
    expect(existsSync(resolve(tempDir, 'dist/button.d.ts'))).toBe(false)
    expect(existsSync(resolve(tempDir, 'dist/input.d.ts'))).toBe(false)
  }, 15_000)

  it('should bundle multiple entries when declarations are missing or empty', async () => {
    tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))

    writeFileSync(
      resolve(tempDir, 'package.json'),
      JSON.stringify({
        name: 'test',
        version: '1.0.0',
      }),
    )

    writeFileSync(
      resolve(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          strict: true,
        },
        include: ['src/**/*'],
      }),
    )

    mkdirSync(resolve(tempDir, 'src'), { recursive: true })
    writeFileSync(
      resolve(tempDir, 'src', 'index.ts'),
      'export const value = "value"\ndeclare global { interface Window { value: string } }\n',
    )
    writeFileSync(resolve(tempDir, 'src', 'side-effect.ts'), "import './internal'\n")
    writeFileSync(resolve(tempDir, 'src', 'empty-module.ts'), "import './internal'\nexport {}\n")
    writeFileSync(resolve(tempDir, 'src', 'internal.ts'), 'console.log("internal")\n')
    writeFileSync(resolve(tempDir, 'src', 'excluded.ts'), 'console.log("excluded")\n')

    const runtime = await Runtime.toInstance({
      root: tempDir,
      tsconfigPath: 'tsconfig.json',
      include: ['src/index.ts', 'src/side-effect.ts', 'src/empty-module.ts'],
      entries: {
        index: resolve(tempDir, 'src/index.ts'),
        'side-effect': resolve(tempDir, 'src/side-effect.ts'),
        'empty-module': resolve(tempDir, 'src/empty-module.ts'),
        excluded: resolve(tempDir, 'src/excluded.ts'),
      },
    })

    await runtime.transform(resolve(tempDir, 'src/index.ts'), '')
    await runtime.transform(resolve(tempDir, 'src/side-effect.ts'), '')
    await runtime.transform(resolve(tempDir, 'src/empty-module.ts'), '')
    await runtime.transform(resolve(tempDir, 'src/excluded.ts'), '')

    const emittedFiles = await runtime.emitOutput({ bundleTypes: true })

    const indexDtsPath = normalizePath(resolve(tempDir, 'dist/index.d.ts'))
    const sideEffectDtsPath = normalizePath(resolve(tempDir, 'dist/side-effect.d.ts'))
    const emptyModuleDtsPath = normalizePath(resolve(tempDir, 'dist/empty-module.d.ts'))
    const excludedDtsPath = normalizePath(resolve(tempDir, 'dist/excluded.d.ts'))

    expect(emittedFiles.get(indexDtsPath)).toContain('value')
    expect(emittedFiles.get(sideEffectDtsPath)).toMatch(/export\s*\{\s*\}/)
    expect(emittedFiles.get(emptyModuleDtsPath)).toMatch(/export\s*\{\s*\}/)
    expect(emittedFiles.get(excludedDtsPath)).toMatch(/export\s*\{\s*\}/)
    expect(emittedFiles.get(sideEffectDtsPath)).not.toContain('declare global')
    expect(emittedFiles.get(emptyModuleDtsPath)).not.toContain('declare global')
    expect(emittedFiles.get(excludedDtsPath)).not.toContain('declare global')
  }, 15_000)
})
