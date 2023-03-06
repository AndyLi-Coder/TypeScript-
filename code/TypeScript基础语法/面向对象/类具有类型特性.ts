class Person {

}

/**
 * 
 * 1.类可以创建对应的实例对象
 * 2.类可以作为这个实例的类型
 * 3.类可以作为一个构造签名的函数
 *  */

const name: string = '123'

const p: Person = new Person()

function factory(ctor: new () => void) {

}

const f = factory(Person)


export { }