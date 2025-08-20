import { HelloWorld } from './components/HelloWorld'
import * as Components from '@/components'

import type { ReactDOM as MyReactDOM } from 'react'

export { HelloWorld }
export { Components }
export { App } from './App'
export { useCount } from '@/hooks/useCount'
export * from './modules'

export function test(_dom: MyReactDOM) {}

export default HelloWorld
