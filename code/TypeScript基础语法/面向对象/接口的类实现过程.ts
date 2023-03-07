interface IKun {
    name: string
    age: number
    slogan: string
    playBasketball: () => void
}

const ikun1: IKun = {
    name: 'why',
    age: 18,
    slogan: '你干嘛',
    playBasketball: function () { },
}

interface IRun {
    running: () => void
}

// 接口可以被类实现

class Person implements IKun,IRun {
    name: string
    age: number
    slogan: string
    /* constructor(public name: string, public age: number, public slogan: string) {

    } */
    playBasketball() {}
    running() { }
}

const ikun2 = new Person()
const ikun3 = new Person()
const ikun4 = new Person()

export { }
