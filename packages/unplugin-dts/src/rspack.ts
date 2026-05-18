import { createRspackPlugin } from 'unplugin'
import { pluginFactory } from './plugin'

import type { RspackPluginInstance } from '@rspack/core'
import type { PluginOptions } from './types'

// Cast to prevent unplugin's bundled types from leaking into declaration files.
export default createRspackPlugin(pluginFactory) as (
  options?: PluginOptions
) => RspackPluginInstance
