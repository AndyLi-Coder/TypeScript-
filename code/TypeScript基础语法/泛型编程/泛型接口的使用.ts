interface IPerson<Type = string> {
  name: Type
  age: number
  slogan: Type
}

const kunkun: IPerson<string> = {
  name: 'why',
  age: 18,
  slogan: '123'
}
const kunkun1: IPerson<number> = {
  name: 1,
  age: 18,
  slogan: 1
}
const kunkun2: IPerson = {
  name: '123',
  age: 18,
  slogan: '123'
}