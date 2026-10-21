import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['e2e/specs/**/*.spec.ts'],
    testTimeout: 60_000,
    hookTimeout: 60_000,
    maxWorkers: 2,
    minWorkers: 1,
    pool: 'forks',
  },
})
