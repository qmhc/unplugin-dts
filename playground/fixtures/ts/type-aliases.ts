export type ID = string | number

export type Point = {
  x: number,
  y: number,
}

export type Shape = Point & { z: number }

export type StatusUnion = 'idle' | 'loading' | 'done'
