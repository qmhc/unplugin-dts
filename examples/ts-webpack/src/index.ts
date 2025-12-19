import data from './data.json'

import type { TestBase } from '@/test'

export const dy: import('./dynamic').DynamicImportType = { a: 1 }
export const dy1: import('./dynamic2').DynamicImportType2 = { a: 1 }

export interface Test extends TestBase {
  count: number,
}

export { testFn } from './comment'
export { Decorator } from './decorator'
export { addOne, add, jsdoc } from '@/js-test.js'
export { ESClass } from './es-class'
export { manualDts } from './manual-dts'

export { ParametersTest, test, method } from './test'

export { data }
export default data

export type { User as MyUser } from './types'
export type { AliasType } from '@alias/type'

export type * from './namespace'
export type * from './modules'

declare module '@/test' {
  interface TestBase {
    name: string,
    mail?: string,
  }
}
