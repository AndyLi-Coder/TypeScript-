import { num } from "./utils/math";


// 导入的是类型，推荐在导入的类型前面加上type
import type { Person, IDType } from './utils/type'


console.log(num(10, 20))

const person: Person = {
  name: '131',
  age: 18
}

const id: IDType = '123'