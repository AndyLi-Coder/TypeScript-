 
 
// 索引签名的案例

interface ICollection {
    [index: number]: string
    length:number
}

function printCollection(collection: ICollection)  {
    for(let i = 0; i < collection.length; i++) {
        const item = collection[i]
        console.log(item)
    }
}


const array: string[] = ['abc','nba','cba']
const tuple:[string,string] = ['why','18']
printCollection(array)
printCollection(tuple)




export { }