import minimist from 'minimist'
import { logger, release, run } from '@vexip-ui/scripts'
import { unpluginDir, vitePluginDir } from './constant'

const args = minimist<{
  d?: boolean,
  dry?: boolean,
  p?: string,
  preid?: string,
}>(process.argv.slice(2))

const isDryRun = args.dry || args.d
const preId = args.preid || args.p
const releaseType = (args._[0] || 'release') as 'major' | 'minor' | 'patch' | 'release'

async function main() {
  if (!['major', 'minor', 'patch', 'release'].includes(releaseType)) {
    throw new Error('Invalid release type, should be one of major, minor and patch.')
  }

  const success = await release({
    pkgDir: unpluginDir,
    isDryRun,
    preId,
    updateVersionByType: releaseType,
    runTest: () => run('pnpm', ['test']),
    runBuild: () => run('pnpm', ['build']),
    runChangelog: () => run('pnpm', ['changelog'], { cwd: unpluginDir }),
  })

  if (success) {
    await release({
      pkgDir: vitePluginDir,
      isDryRun,
      preId,
      updateVersionByType: releaseType,
      secondConfirm: false,
      gitCommitScope: 'vite-plugin-dts',
      runChangelog: () => run('pnpm', ['changelog'], { cwd: vitePluginDir }),
    })
  }
}

main().catch(error => {
  logger.error(error)
  process.exit(1)
})
