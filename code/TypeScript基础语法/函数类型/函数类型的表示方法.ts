// 1.函数表达式
// (参数) => 返回值类型

type PrintType = (name) => string

const printName: PrintType = (name: string): string => {
    return '123'
}


// 2.函数调用签名
// type BarType = (num:number) => number
// const bar:(num:number) => number = (num:number):number => {
//     return 123
// }


interface IBar {
    name: string
    age: number
    // 函数可以调用：函数签名
    (num: number): number, 

    // 构造签名
    new (num:number) : number
}

const bar: IBar = (num1:number): number => {
    return 123
}

bar.name = 'aaa'
bar(123)


// 如果只是描述函数类型本身（函数的调用），使用函数类型表达式
// 如果在描述函数类型作为对象被调用，同时也有其他属性，使用函数签名

export { }