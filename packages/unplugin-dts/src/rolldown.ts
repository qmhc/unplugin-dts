import { createRolldownPlugin } from 'unplugin'
import { pluginFactory } from './plugin'

import type { Plugin } from 'rolldown'
import type { PluginOptions } from './types'

export default createRolldownPlugin(pluginFactory) as (options?: PluginOptions) => Plugin<any>
