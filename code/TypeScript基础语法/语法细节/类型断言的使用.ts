// 常规做法
/* const imgEl = document.querySelector('.img')
if(imgEl !== null) {
    imgEl.src = 'xxx'
    imgEl.alt = 'xxx'
} */
// 使用类型断言 （主要的用法）方便之后的使用
const imgEl = document.querySelector('.img') as HTMLImageElement
imgEl.src = 'xxx'
imgEl.alt = 'xxx'


// 类型断言规则
// TS 只允许类型断言转换为 更具体或者不具体的类型版本、,防止不可能的强制转换
   
const age: number = 18

// 错误的做法 （防止不可能的强制转换）
// const age2 = age as string

// TS类型检测是正确的，但是这种做法不太正确
const age3 = age as any
const age4 = age3 as string

console.log(age4.length)
export { }