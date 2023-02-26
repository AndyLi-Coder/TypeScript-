// 在设置配置选项（编译选项compilerOptions，noImplicitThis 设置为true的时候，不允许模糊的this存在）

// 对象中的this 
const obj = {
    name: 'why',
    studying: function () {
        console.log(this.name)
    }
}

obj.studying()


// 普通的函数

// 在noImplicitThis 为true的情况下，必须指定this的类型
function foo(this: { name: string }, info: { name: string }) {
    console.log(this)
}
foo.call({ name: 'why' }, { name: 'curry' })

export { }