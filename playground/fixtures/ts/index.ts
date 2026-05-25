// === JSON Import ===
import data from './data.json'

// === Path Alias & Type-only Import ===
import type { TestBase } from '@/test'

// === Dynamic Import Types ===
export const dy: import('./dynamic').DynamicImportType = { a: 1 }
export const dy1: import('./dynamic2').DynamicImportType2 = { a: 1 }

// === Interface & Re-exports ===
export interface Test extends TestBase {
  count: number,
}
export { testFn } from './comment'

// === Decorators ===
export { Decorator } from './decorator'

// === JS + JSDoc ===
export { addOne, add, jsdoc } from '@/js-test.js'

// === ES Built-in Types ===
export { ESClass } from './es-class'

// === Manual d.ts Pair ===
export { manualDts } from './manual-dts'

// === Generics & Utility Classes ===
export { ParametersTest, test, method } from './test'

// === Type Re-exports ===
export { data }
export default data
export type { User as MyUser } from './types'
export type { AliasType } from '@alias/type'
export type * from './namespace'
export type * from './modules'

// === Module Augmentation ===
declare module '@/test' {
  interface TestBase {
    name: string,
    mail?: string,
  }
}

// === Enums ===
export { Status, Color } from './enum'

// === Type Aliases & Unions ===
export type { ID, Point, Shape, StatusUnion } from './type-aliases'

// === Utility Types ===
export type { PartialPerson, PickName, OmitEmail, ReadonlyPerson } from './utility-types'

// === Function Overloads ===
export { createElement } from './function-overloads'

// === Advanced Types ===
export type { IsString, EventMap, EventName, EventPayload, Greeting } from './advanced-types'
