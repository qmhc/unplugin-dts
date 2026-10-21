import { beforeAll, describe, expect, it } from 'vitest'

import {
  buildExample,
  expectDtsContains,
  expectDtsNotContains,
  expectFileExists,
  expectFileToMatchSnapshot,
  readDts,
} from '../test-utils'

describe('vue-vite', () => {
  beforeAll(async () => {
    await buildExample('vue-vite')
  })

  it('should generate dist/index.d.ts', () => {
    expectFileExists('vue-vite', 'dist', 'index.d.ts')
  })

  it('should generate dist/main.d.ts', () => {
    expectFileExists('vue-vite', 'dist', 'main.d.ts')
  })

  it('should generate types/index.d.ts', () => {
    expectFileExists('vue-vite', 'types', 'index.d.ts')
  })

  it('should not contain .vue imports in dist/index.d.ts', () => {
    expectDtsNotContains('vue-vite', 'dist/index.d.ts', "from './App.vue'")
    expectDtsNotContains('vue-vite', 'dist/index.d.ts', 'from "./App.vue"')
  })

  it('should generate docs/vue-example.api.json', () => {
    expectFileExists('vue-vite', 'docs', 'vue-example.api.json')
  })

  it('should match snapshot for dist/index.d.ts', () => {
    expectFileToMatchSnapshot('vue-vite', 'dist', 'index.d.ts')
  })

  it('should match snapshot for dist/main.d.ts', () => {
    expectFileToMatchSnapshot('vue-vite', 'dist', 'main.d.ts')
  })

  it('should clean .vue imports in d.ts', () => {
    const content = readDts('vue-vite', 'dist', 'index.d.ts')
    expect(content).not.toMatch(/from\s+['"]\.\/.*\.vue['"]/)
  })

  it('should generate d.ts for generic component', () => {
    expectDtsContains('vue-vite', 'dist/index.d.ts', 'export declare const GenericProps')
  })

  it('should generate d.ts for TSX component', () => {
    expectDtsContains('vue-vite', 'dist/index.d.ts', 'export declare const TsxTest')
  })
})

describe('vue-vite with bundleTypes=false', () => {
  beforeAll(async () => {
    await buildExample('vue-vite', { BUNDLE_TYPES: 'false' })
  })

  it('should generate dist/index.d.ts', () => {
    expectFileExists('vue-vite', 'dist', 'index.d.ts')
  })

  it('should generate dist/main.d.ts', () => {
    expectFileExists('vue-vite', 'dist', 'main.d.ts')
  })

  it('should generate types/index.d.ts', () => {
    expectFileExists('vue-vite', 'types', 'index.d.ts')
  })

  it('should generate independent .vue.d.ts files', () => {
    expectFileExists('vue-vite', 'dist', 'components/Setup.vue.d.ts')
    expectFileExists('vue-vite', 'dist', 'components/GenericProps.vue.d.ts')
    expectFileExists('vue-vite', 'dist', 'components/TypeProps.vue.d.ts')
  })

  it('should generate independent .tsx.d.ts and .jsx.d.ts files', () => {
    expectFileExists('vue-vite', 'dist', 'components/TsxTest.d.ts')
    expectFileExists('vue-vite', 'dist', 'components/JsxTest.d.ts')
  })

  it('should copy dts files via copyDtsFiles', () => {
    expectFileExists('vue-vite', 'dist', 'shims-vue.d.ts')
  })

  it('should generate src/*.d.ts files', () => {
    expectFileExists('vue-vite', 'dist', 'src/decorator.d.ts')
    expectFileExists('vue-vite', 'dist', 'src/types.d.ts')
  })

  it('should mirror independent files in types outDir', () => {
    expectFileExists('vue-vite', 'types', 'components/Setup.vue.d.ts')
    expectFileExists('vue-vite', 'types', 'src/decorator.d.ts')
  })
})
