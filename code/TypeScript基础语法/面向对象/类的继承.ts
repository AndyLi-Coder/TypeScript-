
class Person {
    name:string
    age:number
    constructor(name:string,age:number) {
        this.name = name
        this.age = age
    }
}

class Student extends Person {
    sudo:number
    constructor(name:string,age:number,sudo:number) {
        super(name,age)
        this.sudo = sudo
    }
}
const s1 = new Student('why',18,90)
console.log(s1.sudo)


export {}