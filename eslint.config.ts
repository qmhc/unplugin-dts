import factory from '@vexip-ui/eslint-config'

export default [
  ...factory({
    ignores: [
      '**/types',
      '**/README*.md',
      '**/docs/**/*.md',
      'playground/ts-rolldown/*.js',
      'playground/vue-rolldown/*.js',
    ],
  }),
  {
    files: ['playground/**'],
    rules: {
      'no-console': 'off',
    },
  },
]
