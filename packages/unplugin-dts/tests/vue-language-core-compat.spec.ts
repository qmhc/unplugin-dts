import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve } from 'node:path'
import { afterEach, describe, expect, it, vi } from 'vitest'

const versions = [
  {
    label: '3.1.5',
    moduleId: '@vue/language-core',
  },
  {
    label: '3.3.3',
    moduleId: 'vue-language-core-3-3',
  },
] as const

async function loadRuntime(moduleId: string) {
  vi.resetModules()
  vi.doUnmock('@vue/language-core')

  if (moduleId !== '@vue/language-core') {
    vi.doMock('@vue/language-core', async () => await import(moduleId))
  }

  const mod = await import('../src/core/runtime')
  return mod.Runtime
}

function createVueFixture(root: string) {
  writeFileSync(
    resolve(root, 'package.json'),
    JSON.stringify({
      name: 'vue-language-core-compat',
      version: '1.0.0',
      types: 'dist/index.d.ts',
    }),
  )
  writeFileSync(
    resolve(root, 'tsconfig.json'),
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

  mkdirSync(resolve(root, 'src'), { recursive: true })
  writeFileSync(
    resolve(root, 'src', 'main.ts'),
    `import { notify } from './notification'

export { default as App } from './App.vue'
export const notifyFn = notify.fn
`,
  )
  writeFileSync(
    resolve(root, 'src', 'notification.ts'),
    `import Notification from './notification.vue'

export const notify = {
  fn(props: InstanceType<typeof Notification>['$props']): void {
    void props.title
  },
}
`,
  )
  writeFileSync(
    resolve(root, 'src', 'notification.vue'),
    `<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div>{{ title }}</div>
</template>
`,
  )
  writeFileSync(
    resolve(root, 'src', 'App.vue'),
    `<script setup lang="ts" generic="T extends string">
defineProps<{ msg: T }>()
</script>

<template>
  <div>{{ msg }}</div>
</template>
`,
  )
}

describe('vue language core compatibility', () => {
  let tempDir: string

  afterEach(() => {
    vi.resetModules()
    vi.doUnmock('@vue/language-core')

    if (tempDir) {
      rmSync(tempDir, { recursive: true, force: true })
    }
  })

  for (const version of versions) {
    it(`should emit Vue declarations with @vue/language-core ${version.label}`, async () => {
      tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
      createVueFixture(tempDir)

      const Runtime = await loadRuntime(version.moduleId)
      const runtime = await Runtime.toInstance({
        processor: 'vue',
        root: tempDir,
        tsconfigPath: 'tsconfig.json',
        entries: {
          index: resolve(tempDir, 'src/main.ts'),
        },
      })

      await runtime.transform(resolve(tempDir, 'src/main.ts'), '')
      await runtime.emitOutput({ insertTypesEntry: true })

      const appDts = readFileSync(resolve(tempDir, 'dist/App.vue.d.ts'), 'utf-8')
      const entryDts = readFileSync(resolve(tempDir, 'dist/index.d.ts'), 'utf-8')

      expect({
        version: version.label,
        appDts,
        entryDts,
      }).toMatchSnapshot()
    })

    it(`should bundle Vue declarations with @vue/language-core ${version.label}`, async () => {
      tempDir = mkdtempSync(resolve(tmpdir(), 'unplugin-dts-'))
      createVueFixture(tempDir)

      const Runtime = await loadRuntime(version.moduleId)
      const runtime = await Runtime.toInstance({
        processor: 'vue',
        root: tempDir,
        tsconfigPath: 'tsconfig.json',
        entries: {
          index: resolve(tempDir, 'src/main.ts'),
        },
      })

      await runtime.transform(resolve(tempDir, 'src/main.ts'), '')
      await runtime.emitOutput({ bundleTypes: true })

      const bundledDts = readFileSync(resolve(tempDir, 'dist/index.d.ts'), 'utf-8')

      expect({
        version: version.label,
        bundledDts,
      }).toMatchSnapshot()
    }, 20_000)
  }
})
