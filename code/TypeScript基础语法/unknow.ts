function foo(): string {
  return 'foo'
}
function bar(): string {
  return 'bar'
}


const flag = true

let result: unknown

if (flag) {
  result =  foo()
} else {
  result = bar()
}
// unknown 类型下进行任何操作都是违法的
// 必须要进行类型校验（类型缩小）
if (typeof result === 'string') {
  console.log(result.length)
}
