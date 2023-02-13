

// 定义一个元组类型
// 元组的数据结构可以存放不同的数据类型，取出来的item也有明确的类型
const info:[string,number,number] = ['coder',18,1.88]
// console.log(info(2))
const value = info[2]

// 在函数中使用元组类型是最多的（返回值）
function useState(initialState:number):[number,(newValue:number) => void] {
    let stateValue = initialState
    function setValue(newValue:number) {
        stateValue = newValue
    }
    return [stateValue,setValue]
}
const [count,setCount] = useState(10)
console.log(count)
setCount(10)
export {}