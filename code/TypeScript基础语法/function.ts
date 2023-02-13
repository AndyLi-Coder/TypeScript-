type lyricTyep = {
  name: string,
  time:number
}

function parseLyric(lyric:string):lyricTyep[] {
  let parseLyric: lyricTyep[] = []
  parseLyric.push({ name: '天空之外', time: 111 })
  return parseLyric
}

const lyricInfo = parseLyric('auyyawe')
for (const item of lyricInfo) {
  console.log(item.name,item.time)
}



// 匿名函数的参数类型一般不用写类型注解，会根据上下文来确定参数的类型
const names = ['a','b','cs']

names.forEach(function (item, index, arr) {
  console.log(item,index,arr)
})

export { }