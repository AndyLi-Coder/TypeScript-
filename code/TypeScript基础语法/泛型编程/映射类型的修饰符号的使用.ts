type MapPerson<Type> = {
  // + 只读
  // - 删除原有属性的修饰符
  -readonly [Propety in keyof Type]-?: Type[Propety]
}

interface Person {
  name: string
  age?: number
  readonly height: number
  address?: string
}

// 拷贝新的接口

type NewPerson = MapPerson<Person>

const p: NewPerson = {

}



export { }