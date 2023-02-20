interface IPerson {
    name: string
    age: number
    friend?: {
        name: string
    }
}

const people: IPerson = {
    name: 'why',
    age: 18
}


// 访问属性：使用可选连   ?.
console.log(people.friend?.name);


// 属性赋值

// 使用类型缩小
if (people.friend) {
    people.friend.name = 'james'
}


// 使用非空类型断言(有点危险，只有确定属性存在的时候可使用类型断言 )

// 非空断言使用的是 !,  表示确定某个标识符是有值的，跳过TS编译阶段对它的检测

people.friend!.name = 'curry'





export { }