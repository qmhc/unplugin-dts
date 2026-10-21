declare module 'foo' {
  import type { ReactDOM } from 'react'

  type Foo = {
    bar: ReactDOM,
  }

  export = Foo
}
