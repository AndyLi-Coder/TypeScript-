// 映射类型不用interface定义
type MapPerson<Type> = {
  //使用索引签名的格式
  [Propety in keyof Type]: Type[Propety]
}

interface Person {
  name: string
  age: string
}
// 拷贝新的

// interface NewPerson {
//   name: string
//   age: number
// }


// 使用映射类型进行拷贝

type NewPerson = MapPerson<Person>

export { }