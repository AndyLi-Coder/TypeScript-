
// 1.编写函数重载签名

function add(arg1: number, arg2: number): number
function add(arg1: string, arg2: string): string

// 2.编写通用函数
function add(arg1: any, arg2: any) {
    return arg1 + arg2
}


add(10, 20)
add('111', '222')

// 通用函数不能被调用
// add({name:'12313'},123)
export { }