// 字面量类型的基本使用
const name: 'why' = 'why'
let age: 18 = 18

// 将多个字面量类型联合起来

type Direction = 'left' | 'right' | 'top' | 'bottom'
const d1: Direction = 'left'



// 字面量类型的简单使用

type MethodType = 'get' | 'post'

function request(url: string, method: MethodType) {

}


// request('xxxx','post')

/* const info = {
    url: 'xxx',
    method: 'post'
} */

// 这种做法是错误的，因为info.method获取的 是一个string类型
// request(info.url, info.method)


// 解决方案一：使用类型断言 

// request(info.url,info.method as 'post')


// 解决方案二：直接让info对象类型变成一个字面量类型

/* const info:{url:string,method:'post'}  = {
    url:'xxx',
    method:'post'
} */
const info = {
    url: 'xxx',
    method: 'post'
} as const


request(info.url, info.method)




export { }