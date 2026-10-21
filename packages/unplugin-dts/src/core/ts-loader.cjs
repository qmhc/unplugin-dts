const { createRequire } = require('node:module')

const require_ = createRequire(__filename)

function loadTs() {
  try {
    const ts = require_('typescript')
    if (typeof ts.createProgram === 'function') {
      return ts
    }
  } catch {
    // ignore
  }

  try {
    const ts = require_('@typescript/typescript6')
    if (typeof ts.createProgram === 'function') {
      return ts
    }
  } catch {
    // ignore
  }

  throw new Error(
    '[unplugin-dts] The installed "typescript" package does not provide the JavaScript Compiler API '
      + '(this happens with TypeScript 7+), and the fallback "@typescript/typescript6" was not found.\n'
      + 'Please install it alongside TypeScript 7:\n'
      + '  npm install -D @typescript/typescript6\n'
      + 'This allows TypeScript 7 to be used for compilation while keeping the JS API available for tooling.\n'
      + 'See: https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-beta/',
  )
}

module.exports = loadTs()
