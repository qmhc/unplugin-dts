import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { expect } from 'vitest'

import { execa } from 'execa'

const PLAYGROUND_ROOT = resolve(import.meta.dirname, '../playground')

export async function buildExample(name: string, env?: Record<string, string>) {
  await execa('pnpm', ['run', 'clean'], {
    cwd: resolve(PLAYGROUND_ROOT, name),
    stdio: 'pipe',
  })
  await execa('pnpm', ['run', 'build'], {
    cwd: resolve(PLAYGROUND_ROOT, name),
    stdio: 'pipe',
    env: { ...process.env, ...env, DEBUG: 'dts-debug' },
  })
}

export function readDts(example: string, ...paths: string[]) {
  return readFileSync(resolve(PLAYGROUND_ROOT, example, ...paths), 'utf-8')
}

export function expectFileExists(example: string, ...paths: string[]) {
  expect(existsSync(resolve(PLAYGROUND_ROOT, example, ...paths))).toBe(true)
}

export function expectDtsContains(example: string, relPath: string, text: string) {
  expect(readDts(example, relPath)).toContain(text)
}

export function expectDtsNotContains(example: string, relPath: string, text: string) {
  expect(readDts(example, relPath)).not.toContain(text)
}

export function expectFileToMatchSnapshot(example: string, ...paths: string[]) {
  expect(readDts(example, ...paths)).toMatchSnapshot()
}
