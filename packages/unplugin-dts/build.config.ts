import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/esbuild',
    'src/rolldown',
    'src/rollup',
    'src/rspack',
    'src/vite',
    'src/webpack',
    {
      input: 'src/core/providers/api-extractor-worker',
      name: 'api-extractor-worker',
      declaration: false,
    },
  ],
  externals: ['esbuild', 'rolldown', 'rollup', 'rspack', 'typescript', 'vite', 'webpack'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
