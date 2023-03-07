type Person = {
  // ?可选属性  
  // readonly 只读属性
  name?: string
  readonly age: number
}

type IKun = {
  name: string
  age: number
}


const p: Person = {
  age: 18
}
p.age = 20

export { }