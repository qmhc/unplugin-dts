import factory from '@vexip-ui/eslint-config'

export default [
  ...factory({ ignores: ['**/types', '**/README*.md', '**/docs/**/*.md'] }),
  {
    files: ['examples/**'],
    rules: {
      'no-console': 'off',
    },
  },
]
