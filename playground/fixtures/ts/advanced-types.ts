export type IsString<T> = T extends string ? true : false

export type EventMap = {
  click: { x: number, y: number },
  scroll: { top: number },
}

export type EventName = keyof EventMap

export type EventPayload<T extends EventName> = EventMap[T]

export type Greeting<T extends string> = `hello-${T}`
