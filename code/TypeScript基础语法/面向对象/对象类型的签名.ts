interface ICollection {
  // 索引签名
  // 通过string的类型，获取值为number的值
  [index: string]: number
  length: number
}


const names: string[] = ['ada', 'qweq', 'qweq']
console.log(names[0])
console.log(names[1])
console.log(names[2])

function itereatorCollection(collection: ICollection) {
  console.log(names[0])
  console.log(names[1])
}


itereatorCollection(names)

const tuple: [string, number] = ['eqeqe', 123]

itereatorCollection(tuple)


const info = { name: 121, age: 18, length: 20 }
itereatorCollection(info)

export { }