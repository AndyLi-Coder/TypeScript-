

// 1.TS中当一个函数没有返回值的时候，它的类型就是void
// 2.如果返回值是void类型，返回值也可以是undefined（TS语法允许可以这样操作）
// void 类型也可以省略，没有返回值默认是void
function sum(num1: number, num2: number):void{
  console.log(num1 + num2)
  return undefined
 }
function sum1(num1: number, num2: number){
  console.log(num1 + num2)
}
 

// 应用场景:用来指定函数类型的返回值是void

type LyricType = { name: string, time: number }
// parseLyric函数的数据类型是：(lyric:string) => LyricType[]
function parseLyric(lyric: string): LyricType[] {
  const lyricInfo: LyricType[] = []
  // 解析
  return lyricInfo
}
parseLyric('123')

type FooType = () => void
// const foo = () => { }
// const foo: () => void = () => { }
const foo: FooType = () => { }


// 举例

// 1.定义要求传入的函数类型
type ExecFnType = (...agrs: any[]) => void

// 2.定义一个函数，传入一个函数，并且传入的该函数类型是：ExecFnType
function delayExecFn(fn: ExecFnType) {
  setTimeout(() => {
    fn('x轴的坐标',18)
  })
}

// 3.调用函数，且传入一个匿名函数 
delayExecFn((name, age) => {
  console.log(name,age)
})

export { }