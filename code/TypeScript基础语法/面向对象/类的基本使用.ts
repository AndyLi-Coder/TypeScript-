
class Person {
    name:string
    age:number 
    constructor(name:string,age:number) {
        this.name = name
        this.age = age
    }
    eating() {
        console.log(this.name + 'eating')
    }
    running() {
        console.log(this.age + 'running')
    }
}


const p1  =new Person('why',18)
const p2 = new Person('curry',18)
console.log(p1.name,p2.age)



export {}