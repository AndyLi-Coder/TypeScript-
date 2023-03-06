
//  .定义类

// 定义父类

abstract class Shape {
    // getArea 方法只有声明没有实现，实现让其子类自己实现
    // 可以将getArea方法定义为抽象方法： 在其前面加上abstract
    // 抽象方法必须在抽象类中，类前面也加上abstract
    abstract getArea()
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super()
     }
    getArea() {
        return this.width * this.height
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super()
     }
    getArea() {
        return this.radius ** 2 * Math.PI
    }
}
class Triangle extends Shape {
    constructor(public width: number, public height: number) {
        super()
     }
    getArea() {
        return this.width * this.height / 2
    }
}
// 2.定义通用的函数
function clacArea(shape: Shape) {
    shape.getArea()
}

clacArea(new Rectangle(10, 20))
clacArea(new Circle(5))
clacArea(new Triangle(10, 20))


export { }