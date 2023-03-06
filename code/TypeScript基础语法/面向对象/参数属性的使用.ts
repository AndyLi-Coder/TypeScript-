class Person {
    /*   name: string
      age: number
      height: number */
    constructor(public name: string, private age: number, readonly height: number) {
        /*   this.name = name
          this.age = age
          this.height = height */
    }
}
const p = new Person('why', 18, 150)
console.log(p.name)
// p.age = 10
p.height


export { }