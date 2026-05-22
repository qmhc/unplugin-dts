export interface TestBase {
  name: string,
}

/**
 * Comment
 */
export interface Component {
  name: string,
  type: string,
}

export const test: TestBase = {
  name: 'test',
}

export const CONSTANT = ['one', 'two'] as const

export interface WithConstant {
  constant: (typeof CONSTANT)[number],
}

export function method(arg: string) {
  console.log(arg)
}

export interface FnMap {
  [key: string]: () => void,
}

export class ParametersTest<T extends FnMap> {
  public emit<K extends keyof T>(...values: Parameters<T[K]>) {
    console.log(values)
  }
}
