import { fileURLToPath } from 'node:url'

import { build } from 'vite'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

await build({ root: rootDir })
