// 泛型就是类型参数化的一个过程

function computedValue<Type>(name: Type): Type {
  return name
}

// 完整的写法
const res1 = computedValue<string>('12313')
const res2 = computedValue<number>(111)
const res3 = computedValue<{ name: string }>({ name: '123' })

// 简写：会进行类型推导

const res4 = computedValue('12313')
const res5 = computedValue(111)
const res6 = computedValue({ name: '123' })



export { }