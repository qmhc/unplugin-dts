import { createUnplugin } from 'unplugin'
import { pluginFactory } from './plugin'

const plugin = /* #__PURE__ */ createUnplugin(pluginFactory)

export default plugin
export { editSourceMapDir } from './core/utils'

export type * from './types'
