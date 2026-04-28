import { resolve } from 'node:path'
import { glob } from 'node:fs/promises'
import { readFile, readdir, writeFile } from 'node:fs/promises'

import { execa } from 'execa'
import { logger } from '@vexip-ui/scripts'
import { pkgsDir, rootDir } from './constant'

const bin = (name: string) => resolve(rootDir, 'node_modules/.bin/' + name)

async function main() {
  const packages = await readdir(pkgsDir)

  for (const pkgName of packages) {
    const pkgRoot = resolve(pkgsDir, pkgName)

    await execa(
      bin('unbuild'),
      [],
      { cwd: pkgRoot, stdio: 'inherit' },
    )
  
    await patchCommomJs(resolve(pkgRoot, 'dist/index.cjs'))
    await patchAllESModules(pkgRoot)
  }
}

async function patchCommomJs(indexPath: string) {
  let indexCodes = await readFile(indexPath, 'utf-8')

  const moduleExportsLine = 'module.exports = __toCommonJS(src_exports);'

  if (indexCodes.includes(moduleExportsLine)) {
    const name = 'dtsPlugin'

    indexCodes = indexCodes.replace(
      moduleExportsLine,
      `module.exports = ${name};\n${name}['default'] = ${name};`,
    )

    await writeFile(indexPath, indexCodes)
  }
}

const cjsBridge = `
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
`

async function patchESModule(indexPath: string) {
  let indexCodes = await readFile(indexPath, 'utf-8')
  if (indexCodes.includes('__cjs_url__')) return
  indexCodes = cjsBridge + indexCodes

  await writeFile(indexPath, indexCodes)
}

async function patchAllESModules(pkgRoot: string) {
  const distDir = resolve(pkgRoot, 'dist')
  const mjsFiles: string[] = []

  try {
    for await (const entry of glob('**/*.mjs', { cwd: distDir })) {
      mjsFiles.push(resolve(distDir, entry))
    }
  } catch {
    return
  }

  for (const filePath of mjsFiles) {
    await patchESModule(filePath)
  }
}

main().catch(error => {
  logger.error(error)
  process.exit(1)
})
