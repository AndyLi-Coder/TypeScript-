// 简单的对象类型
const info: {
  name: string,
  age: number
} = {
  name: 'wangsan',
  age:18
}


// 对象类型和函数的结合使用
type pointType = {
  x: number
  y: number
  z?:number // 可选类型
}
function printCoordinate(point: pointType) {
  console.log('x轴的坐标',point.x)
  console.log('y轴的坐标',point.y)
}
// printCoordinate(123)
printCoordinate({x:12,y:1314})