interface IPerson {
    name: string
    age: number
}
interface IKun extends IPerson {
    slogan: string
}
const person: IKun = {
    name: 'why',
    age: 18,
    slogan: '你干嘛'
}

export { }