import { type BuildOptions, build } from 'esbuild'
import dts from '../../packages/unplugin-dts/src/esbuild'

const commonOptions: BuildOptions = {
  entryPoints: ['src/index.ts', 'src/main.ts'],
  bundle: true,
  sourcemap: true,
  minify: false,
  target: ['es2020'],
  platform: 'neutral',
  external: [],
  tsconfig: './tsconfig.json',
  plugins: [
    dts({
      outDirs: ['dist', 'types'],
      // include: ['src/index.ts'],
      exclude: ['src/ignore'],
      // aliasesExclude: [/^@components/],
      staticImport: true,
      // insertTypesEntry: true,
      bundleTypes: true,
      // declarationOnly: true,
      compilerOptions: {
        declarationMap: true,
      },
    }),
  ],
}

async function buildAll() {
  await build({
    ...commonOptions,
    format: 'esm',
    splitting: true,
    outdir: 'dist',
    outExtension: { '.js': '.mjs' },
  })

  await build({
    ...commonOptions,
    format: 'cjs',
    outdir: 'dist',
    outExtension: { '.js': '.cjs' },
  })
}

buildAll().catch(e => {
  console.error(e)
  process.exit(1)
})
