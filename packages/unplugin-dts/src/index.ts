import { createUnplugin } from 'unplugin'
import { pluginFactory } from './plugin'

import type { PluginInstance } from './types'

const plugin = /* #__PURE__ */ createUnplugin(pluginFactory)

// Cast to prevent unplugin's bundled types from leaking into declaration files.
export default plugin as PluginInstance
export { editSourceMapDir } from './core/utils'

export type * from './types'
