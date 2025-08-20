import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

import { hasExportDefault, normalizeGlob, transformCode } from '../src/core/transform'
import { parseTsAliases } from '../src/core/utils'

import type { Alias } from 'vite'

describe('transform tests', () => {
  it('test: normalizeGlob', () => {
    expect(normalizeGlob('')).toEqual('/**')
    expect(normalizeGlob('/')).toEqual('/**')
    expect(normalizeGlob('.')).toEqual('./**')
    expect(normalizeGlob('..')).toEqual('../**')
    expect(normalizeGlob('../..')).toEqual('../../**')
    expect(normalizeGlob('a/b')).toEqual('a/b/**')
    expect(normalizeGlob('a/b/')).toEqual('a/b/**')
    expect(normalizeGlob('a/.b')).toEqual('a/.b')
    expect(normalizeGlob('a/b.c')).toEqual('a/b.c')
    expect(normalizeGlob('**/*')).toEqual('**/*')
    expect(normalizeGlob('a/b*')).toEqual('a/b*/**')
    expect(normalizeGlob('a/*')).toEqual('a/*')
    expect(normalizeGlob('a/**')).toEqual('a/**')
  })

  it('test: transformCode (dynamic imports to static)', () => {
    const options = (content: string) => ({
      content,
      filePath: '',
      aliases: [],
      aliasesExclude: [],
      staticImport: true,
      clearPureImport: false,
      cleanVueFileName: false,
    })

    expect(
      transformCode(options('let data: import("vexip-ui/lib/tree").InitDataOptions[];')).content,
    ).toEqual("import { InitDataOptions } from 'vexip-ui/lib/tree';\nlet data: InitDataOptions[];")

    expect(
      transformCode(
        options(
          'declare const _default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin>;\nexport default _default;\n',
        ),
      ).content,
    ).toEqual(
      "import { DefineComponent, ComponentOptionsMixin } from 'vue';\ndeclare const _default: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin>;\nexport default _default;\n",
    )

    expect(
      transformCode(
        options('let a: A<B<C> & {} & {} & import("vue").ComponentCustomProperties) | null>;'),
      ).content,
    ).toEqual(
      "import { ComponentCustomProperties } from 'vue';\nlet a: A<B<C> & {} & {} & ComponentCustomProperties) | null>;",
    )

    expect(
      transformCode(
        options(
          'declare const _default: import("./Service").ServiceConstructor<import("./Service").default>;',
        ),
      ).content,
    ).toEqual(
      "import { ServiceConstructor, default as __DTS_DEFAULT_0__ } from './Service';\ndeclare const _default: ServiceConstructor<__DTS_DEFAULT_0__>;",
    )

    expect(
      transformCode(options('import { Type } from "./test";\nconst test: import("./test").Test;'))
        .content,
    ).toEqual("import { Type, Test } from './test';\nconst test: Test;")

    expect(
      transformCode(options("const a: import('foo').A<{ b: import('foo').B<import('foo').C> }>"))
        .content,
    ).toEqual("import { A, B, C } from 'foo';\nconst a: A<{ b: B<C> }>")

    expect(
      transformCode(options("function d(param: import('foo').E): import('foo').F")).content,
    ).toEqual("import { E, F } from 'foo';\nfunction d(param: E): F")
  })

  it('test: transformCode (process aliases)', () => {
    const aliases: Alias[] = [
      // '@/*' -> '/*'
      { find: /^@\/(?!\.{1,2}\/)([^*]+)/, replacement: resolve(__dirname, '../$1') },
      // '@components/*' -> '/src/components/*'
      {
        find: /^@components\/(?!\.{1,2}\/)([^*]+)/,
        replacement: resolve(__dirname, '../src/components/$1'),
      },
      // '~/*' -> '/src/*'
      { find: /^~\//, replacement: resolve(__dirname, '../src/') },
      // '$src/*' -> '/src/*'
      { find: '$src', replacement: resolve(__dirname, '../src') },
      // '*' -> '/tests/__fixtures__/*' (needs real path here to test if local file exists)
      {
        find: /^(?!\.{1,2}\/)([^*]+)$/,
        replacement: resolve(__dirname, '../tests/__fixtures__/$1'),
      },
    ]
    const filePath = resolve(__dirname, '../src/index.ts')

    const options = (
      content: string,
      optFilePath: string = filePath,
      optAliases: Alias[] = aliases,
    ) => ({
      content,
      filePath: optFilePath,
      aliases: optAliases,
      aliasesExclude: [],
      staticImport: false,
      clearPureImport: false,
      cleanVueFileName: false,
    })

    const tests: Array<{
      description: string,
      content: string,
      output: string,
      filePath?: string,
      aliases?: Alias[]
    }> = [
      {
        description: 'type import alias at root level',
        content: 'import type { TestBase } from "@/src/test";',
        output: "import { TestBase } from './test';\n",
      },
      {
        description: 'dynamic import inside subfolder with alias at root level',
        content: 'import("@/components/test").Test;',
        output: "import('../components/test').Test;",
      },
      {
        // https://github.com/qmhc/vite-plugin-dts/issues/330
        description: 'wildcard alias at root level with relative import',
        filePath: './src/components/Sample/index.ts',
        content: 'import { Sample } from "./Sample";',
        output: "import { Sample } from './Sample';\n",
      },
      {
        description: 'wildcard alias at root level with relative import and dot in name',
        filePath: './src/components/Sample/index.ts',
        content: 'import { Sample } from "./test.data";',
        output: "import { Sample } from './test.data';\n",
      },
      {
        description: 'wildcard alias at root level with relative parent import and dot in name',
        filePath: './src/components/Sample/index.ts',
        content: 'import { Sample } from "../test.data";',
        output: "import { Sample } from '../test.data';\n",
      },
      {
        description: 'wildcard alias at root level with relative import and dot in name',
        filePath: './src/components/Sample/index.ts',
        content: 'import { Sample } from "utils/test.data";',
        output: "import { Sample } from '../../../tests/__fixtures__/utils/test.data';\n",
      },
      {
        description: 'import inside folder with named alias at subfolder',
        content: 'import type { TestBase } from "@/components/test";',
        output: "import { TestBase } from '../components/test';\n",
      },
      {
        description: 'dynamic import inside subfolder with alias at root level',
        content: 'import("@/components/test").Test;\n',
        output: "import('../components/test').Test;\n",
      },
      {
        description: 'named alias in subfolder with default import',
        content: 'import VContainer from "@components/layout/container/VContainer.vue";',
        output:
          "import { default as VContainer } from './components/layout/container/VContainer.vue';\n",
      },
      {
        description: 'alias at root level with tilde and no asterisk',
        content: 'import { TestBase } from "~/test";',
        output: "import { TestBase } from './test';\n",
      },
      {
        description: 'named alias at root with tilde and no asterisk',
        content: 'import type { TestBase } from "$src/test";',
        output: "import { TestBase } from './test';\n",
      },
      {
        description: 'type imports with alias at root level',
        content: "const a: import('~/test').A<{ b: import('~/test').B<import('~/test').C> }>",
        output: "const a: import('./test').A<{ b: import('./test').B<import('./test').C> }>",
      },
      {
        description: 'function param and return type imports with alias at root level',
        content: "function d(param: import('~/test').E): import('~/test').F",
        output: "function d(param: import('./test').E): import('./test').F",
      },
      {
        description: 'import inside subfolder with alias at root level',
        content: 'import { NestedBase } from "@/test/nested";',
        output: "import { NestedBase } from '../test/nested';\n",
      },
      {
        description: 'alias at root level, file nested',
        filePath: './src/child/folder/test.ts',
        content: 'import { utilFunction } from "@/utils/test";',
        output: "import { utilFunction } from '../../../utils/test';\n",
      },
      {
        description: 'wildcard alias at root, relative import',
        filePath: './tests/__fixtures__/index.ts',
        content: 'import { TestBase } from "resolvePath";',
        output: "import { TestBase } from './resolvePath';\n",
      },
      {
        description: 'wildcard alias at root, import is likely installed dependency',
        content: 'import { nothingReal } from "someDependency";',
        output: "import { nothingReal } from 'someDependency';\n",
      },
      {
        description: 'alias in namespace import',
        content: 'import * as Components from "@/test/components";\n',
        output: "import * as Components from '../test/components';\n"
      }
    ]

    tests.forEach(({ description, content, filePath, aliases, output }) => {
      expect(transformCode(options(content, filePath, aliases)).content, description).toEqual(
        output,
      )
    })
  })

  it('test: transformCode (integration test)', () => {
    const tsPaths = {
      '@/*': ['src/*'],
      '@components/*': ['src/components/*'],
      '@src': ['src'],
      '*': ['tests/__fixtures__/*'],
    }

    const aliases = parseTsAliases(resolve(__dirname, '..'), tsPaths)

    const options = (content: string) => ({
      content,
      filePath: resolve(__dirname, '../src/index.ts'),
      aliases,
      aliasesExclude: [],
      staticImport: true,
      clearPureImport: true,
      cleanVueFileName: true,
    })

    expect(transformCode(options('import { TestBase } from "@/test";')).content).toEqual(
      "import { TestBase } from './test';\n",
    )

    expect(transformCode(options('import { TestNested } from "@/nested/test";')).content).toEqual(
      "import { TestNested } from './nested/test';\n",
    )

    expect(transformCode(options('import { TestBase } from "./test";')).content).toEqual(
      "import { TestBase } from './test';\n",
    )

    expect(transformCode(options('import { TestBase } from "resolvePath";')).content).toEqual(
      "import { TestBase } from '../tests/__fixtures__/resolvePath';\n",
    )

    expect(transformCode(options('import { TestBase } from "test.resolvePath";')).content).toEqual(
      "import { TestBase } from '../tests/__fixtures__/test.resolvePath';\n",
    )

    expect(transformCode(options('import { TestBase } from "./test.path";')).content).toEqual(
      "import { TestBase } from './test.path';\n",
    )

    expect(transformCode(options('import { TestBase } from "../test.path";')).content).toEqual(
      "import { TestBase } from '../test.path';\n",
    )

    expect(
      transformCode(options('import { someFutureImport } from "installedDependency";')).content,
    ).toEqual("import { someFutureImport } from 'installedDependency';\n")
  })

  it('test: transformCode (remove pure imports)', () => {
    const options = (content: string) => ({
      content,
      filePath: '',
      aliases: [],
      aliasesExclude: [],
      staticImport: false,
      clearPureImport: true,
      cleanVueFileName: false,
    })

    expect(transformCode(options('import "@/themes/common.scss";')).content).toEqual('')
    expect(
      transformCode(options('import "@/themes/common.scss";\nimport type { Ref } from "vue";'))
        .content,
    ).toEqual("import { Ref } from 'vue';\n")
    expect(
      transformCode(options("{ 'database-import': import('vue').FunctionalComponent }")).content,
    ).toEqual("{ 'database-import': import('vue').FunctionalComponent }")
  })

  it('test: transformCode (clean .vue)', () => {
    const options = (content: string) => ({
      content,
      filePath: '',
      aliases: [],
      aliasesExclude: [],
      staticImport: false,
      clearPureImport: false,
      cleanVueFileName: true,
    })

    expect(transformCode(options('import { App } from "./App.vue";')).content).toEqual(
      "import { App } from './App';\n",
    )
    expect(
      transformCode(options('import { App } "./App.vue";\nimport { foo } from "./foo.vue";'))
        .content,
    ).toEqual("import { App } from './App';\nimport { foo } from './foo';\n")
    expect(transformCode(options("export * from './abc.vue'")).content).toEqual(
      "export * from './abc'",
    )
    expect(
      transformCode(options("const foo: import('./foo.vue').Foo<import('./baz.vue').Baz[]>"))
        .content,
    ).toEqual("const foo: import('./foo').Foo<import('./baz').Baz[]>")
  })

  it('test: hasExportDefault', () => {
    expect(hasExportDefault("export { sdk as default } from './sdk'")).toBe(true)
    expect(hasExportDefault("export { foo, sdk as default } from './sdk'")).toBe(true)
    expect(hasExportDefault("export { sdk as default, baz } from './sdk'")).toBe(true)
    expect(hasExportDefault("export { foo, sdk as default, baz } from './sdk'")).toBe(true)
    expect(hasExportDefault("export { foo as sdk, sdk as default, baz } from './sdk'")).toBe(true)
    expect(hasExportDefault('export { sdk as default } from "./sdk"')).toBe(true)
    expect(hasExportDefault("export {sdk as default} from './sdk'")).toBe(true)
    expect(hasExportDefault("export{sdk as default}from'./sdk'")).toBe(true)
    expect(hasExportDefault("export { sdk  as  default } from './sdk'")).toBe(true)
    expect(hasExportDefault("export { sdk } from './sdk'")).toBe(false)
    expect(hasExportDefault("export { foo, sdk } from './sdk'")).toBe(false)
    expect(hasExportDefault("export { foo as baz, sdk } from './sdk'")).toBe(false)
    expect(hasExportDefault("export { default } from './sdk'")).toBe(true)
    expect(hasExportDefault("export { sdk, default } from './sdk'")).toBe(true)
    expect(hasExportDefault("export { sdk, default as baz } from './sdk'")).toBe(false)
    expect(hasExportDefault('export default class Test {}')).toBe(true)
    expect(hasExportDefault('export class Test {}')).toBe(false)
    expect(hasExportDefault('export default function test() {}')).toBe(true)
    expect(hasExportDefault('export function test() {}')).toBe(false)
    expect(hasExportDefault('const a = 1\nexport default a')).toBe(true)
    expect(hasExportDefault('const a = 1\nexport { a }')).toBe(false)
    expect(hasExportDefault('const a = 1\nexport { a as default }')).toBe(true)
  })
})
