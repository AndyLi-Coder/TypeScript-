interface ILength {
  length: number
}

// 类型丢失，没有保留参数的类型
function getLength(arg: ILength) {
  return arg.length
}

const length1 = getLength('1231')
const length2 = getLength(['123', 'asda', '231'])
const length3 = getLength({ length: 10 })



// 传入的内容必须带有length属性，且保留参数的类型

// Type相当于是一个变量，记录本次调用的类型，所以在这个执行过程中，一直保留了参数的类型

function getInfo<Type extends ILength>(info: Type): Type {
  return info
}

const info1 = getInfo('1231')
const info2 = getInfo(['123', 'asda', '231'])
const info3 = getInfo({ length: 10 })



export { }