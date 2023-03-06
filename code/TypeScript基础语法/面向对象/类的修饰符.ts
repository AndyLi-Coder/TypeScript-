class Person {
    // pubulic  成员属性默认是public
    // private   只有在类的内部可进行访问
    // protected  只有在类的内部或者子类中可进行访问
    // readonly   只读属性不能进行写入操作
    name: string
    private age: number
    protected height: number
    readonly weight: number
    constructor(name: string, age: number, height: number, weight: number) {
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
    }
    eating() {
        console.log(this.name + 'name')
        console.log(this.age + 'age')
    }
}

const p1 = new Person('why', 18, 188,150)
p1.age = 19
p1.name = '1'
p1.weight = 150

// 子类中访问height
class Student extends Person {
    constructor(name: string, age: number, height: number) {
        super(name, age, height)
    }
    studying() {
        console.log(this.height + 'height')
    }
}



export { }