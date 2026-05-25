export interface Person {
  name: string,
  age: number,
  email: string,
}

export type PartialPerson = Partial<Person>

export type PickName = Pick<Person, 'name'>

export type OmitEmail = Omit<Person, 'email'>

export type ReadonlyPerson = Readonly<Person>
