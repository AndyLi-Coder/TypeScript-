

// 传入的属性必须是对象中的属性 keyof


function getObjectPropety<o, k extends keyof o>(obj: o, key: k) {
    return obj[key]
}

const info = {
    name: 'why',   
    age: 18,
    slogan: '123'
} 
const name = getObjectPropety(info, 'adress')
const name1 = getObjectPropety(info, 'name')

export { }