type MapPerson<Type> = {
  // readonly 只读
  // ? 可选
  readonly [Propety in keyof Type]?: Type[Propety]
}

interface Person {
  name: string
  age: number
  height: number
  address: string
}

// 拷贝新的接口

type NewPerson = MapPerson<Person>

const p: NewPerson = {

}



export { }