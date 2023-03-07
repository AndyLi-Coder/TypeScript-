class Point<Type = number> {
  x: Type
  y: Type
  constructor(x: Type, y: Type) {
    this.x = x
    this.y = y
  }
}

const p1 = new Point<number>(10, 20)
const p2 = new Point('123', '123')
export { }