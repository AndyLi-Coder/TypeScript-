// 联合类型的基本使用
/* let foo: number | string = '123'
foo = 1 */


function printId(id:number | string) {
    // 在使用联合类型的时候，要注意进行类型缩小
    if(typeof id === 'string'){
        console.log(id.length)
    }else{
        console.log(id)
    }
}