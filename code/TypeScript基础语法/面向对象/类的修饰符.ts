class Person {
    // pubulic  成员属性默认是public
    // private   只有在类的内部可进行访问
    // protected  只有在类的内部或者子类中可进行访问
    name: string
    private age: number
    protected height: number
    constructor(name: string, age: number, height: number) {
        this.name = name
        this.age = age
        this.height = height
    }
    eating() {
        console.log(this.name + 'name')
        console.log(this.age + 'age')
    }
}

const p1 = new Person('why', 18, 188)
p1.age = 19
p1.name = '1'

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