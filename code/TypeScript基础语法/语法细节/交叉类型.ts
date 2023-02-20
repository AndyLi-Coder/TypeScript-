// 类型合并：满足两种或者两种以上的类型
interface IKun {
    name: string
    age: number
}
interface ICoder {
    name: string
    code: () => void
}
type PersonType = IKun & ICoder
const person: PersonType = {
    name: '123',
    age: 18,
    code: function () {
        console.log('123')
    }
}
export { }