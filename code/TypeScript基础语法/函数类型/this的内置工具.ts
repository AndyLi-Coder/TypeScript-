function foo(this: { name: string }, info: { name: string }) {
    console.log(this, info)
}

// 定义函数的类型
// type FooType = (this:{name:string},info:{name:string}) => void


// 获取函数foo的类型

type FooType = typeof foo


// 1.ThisParameterType: 获取FooType中的this类型

type FooThisType = ThisParameterType<FooType>



// 2.OmitThisParameter: 删除this类型，获取剩余的参数类型
type PureFooType = OmitThisParameter<FooType>



// 3.ThisType


interface IState {
    name: string
    age: number
}
interface IStore {
    state: IState,
    eating: () => void
    running: () => void
}

/* const store: IStore = {
    state: {
        name: "why",
        age: 18,
    },
    eating: function (this:IState) {
        console.log(this.name)
    },
    running: function (this:IState) {
        console.log(this.age)
    }
} */
const store: IStore & ThisType<IState> = {
    state: {
        name: "why",
        age: 18,
    },
    eating: function () {
        console.log(this.name)
    },
    running: function () {
        console.log(this.age)
    }
}

store.eating.call(store.state)


export { }

