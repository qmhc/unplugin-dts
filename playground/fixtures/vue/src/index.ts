import './ignore'

// === Options API ===
import JsTest from '@/components/JsTest.vue'
import NoDirectExport from '@/components/NoDirectExport.vue'

// === <script setup> ===
import Setup from '@/components/Setup.vue'

import TypeProps from '@/components/TypeProps.vue'
import GenericProps from '@/components/GenericProps.vue'
import BothScripts from '@/components/BothScripts.vue'
import MinimalSetup from '@/components/MinimalSetup.vue'

// === JSX / TSX ===
import JsxTest from '@/components/JsxTest.jsx'
import TsxTest from '@/components/TsxTest'
import JsxLangTest from '@/components/JsxLangTest.vue'
import TsxLangTest from '@/components/TsxLangTest.vue'

// === Special Cases ===
import NoScript from '@/components/NoScript.vue'

// === Props Externalization ===
import OutsideProps from '@/components/outside-props'
import OutsideTsProps from '@/components/outside-ts-props'

import CssVar from '../components/CssVar.vue'
import JsSetup from '../components/JsSetup.vue'
import DefaultImport from '@components/DefaultImport.vue'

// === Types & Decorators ===
export { Decorator } from './decorator'
export type { User } from './types'
export type { DtsType } from './dts-types'
export type * from './modules'
export type { AliasType } from '$alias/type'

export const user: import('@/src/types').User = {
  id: '',
  name: '',
}

export {
  DefaultImport,
  JsTest,
  NoDirectExport,
  Setup,
  JsSetup,
  TypeProps,
  GenericProps,
  BothScripts,
  MinimalSetup,
  JsxTest,
  TsxTest,
  JsxLangTest,
  TsxLangTest,
  NoScript,
  CssVar,
  OutsideProps,
  OutsideTsProps,
}

export default DefaultImport
