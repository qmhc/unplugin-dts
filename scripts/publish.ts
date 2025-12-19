import minimist from 'minimist'
import { getPkgInfo, logger, publish } from '@vexip-ui/scripts'
import { unpluginDir, vitePluginDir } from './constant'

const args = minimist<{
  d?: boolean,
  dry?: boolean,
  t?: string,
  tag?: string,
}>(process.argv.slice(2))

const ref = args._[0] as string
const isDryRun = args.dry || args.d

let releaseTag = args.tag || args.t

async function main() {
  const pkgRoot = ref.startsWith('vite-plugin-dts') ? vitePluginDir : unpluginDir

  if (!releaseTag) {
    const { pkg } = getPkgInfo(pkgRoot)

    releaseTag = pkg.version?.split('-')[1]?.split('.')[0]
  }

  // should be remove when v1 released
  if (!ref.startsWith('vite-plugin-dts')) {
    releaseTag = undefined
  }

  await publish({
    pkgDir: pkgRoot,
    isDryRun,
    releaseTag,
  })
}

main().catch(error => {
  logger.error(error)
  process.exit(1)
})
