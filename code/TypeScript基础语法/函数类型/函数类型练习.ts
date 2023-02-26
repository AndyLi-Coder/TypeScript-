
type CalcType = (num1:number,num2:number) => number


// 函数定义

function calcNum(calcFn:CalcType) {
    const num1 = 10
    const num2 = 20
    const res = calcFn(num1,num2)
    return res
}

function addSum(num1:number,num2:number) {
    return num1 + num2
}

calcNum(addSum)


calcNum(function(num1,num2){
    return num1 * num2
})