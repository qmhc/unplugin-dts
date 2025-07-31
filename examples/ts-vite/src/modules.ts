declare module 'tslib' {
  export type Test = { newField: string }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toChildSnapshot: (filename: string, name: string) => R
    }
  }
}

export {}
