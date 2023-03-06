class Person {
    // 私有属性  一般以_开头命名
    private _name: string
    private _age: number
    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }

    running() {
        console.log('this._name', this._name)
    }


    // setter/getter :对属性的访问进行拦截操作
    set name(newValue: string) {
        this._name = newValue
    }
    get name(): string {
        return this._name
    }

    set age(newValue: number) {
        if (newValue >= 0 && newValue < 200) {
            this._age = newValue
        }
    }
    get age(): number {
        return this._age
    }
}

const p = new Person('wang',18)
p._name = '1231'
p.name = '11111'
console.log(p.name)

p.age = 100
p.age = -10
console.log(p.age) // 100