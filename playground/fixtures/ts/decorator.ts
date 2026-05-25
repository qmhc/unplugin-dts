function first() {
  return (target: any, propertyKey: string) => {
    console.log(target, propertyKey)
  }
}

export class Decorator {
  @first()
  method() {
    console.log('method called')
  }
}
