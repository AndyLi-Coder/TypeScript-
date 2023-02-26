// typeof ：使用最多

function printId(id: number | string) {
    if (typeof id === 'string') {
        console.log(id.length, id.split(''))
    } else {
        console.log(id)
    }
}

// === 

type DirectionType = 'left' | 'right' | 'top' | 'bottom'

function switchDirection(direction: DirectionType) {
    if (direction === 'left') {
        console.log('向左移动')
    } else if (direction === 'right') {
        console.log('向右移动')
    } else if (direction === 'top') {
        console.log('向上移动')
    } else if (direction === 'bottom') {
        console.log('向下移动')
    }
}


//instanceof 

function printDate(date: string | Date) {
    // 判断date是不是Date的实例
    if (date instanceof Date) {
        console.log(date.getTime())
    } else {
        console.log(date)
    }

    // 
    /*   if(typeof date === 'string') {
          console.log(date)
      }else {
          console.log(date.getDate())
      } */
}


// in    判断是否有某一个属性


interface ISwim {
    swim: () => void
}
interface IRun {
    run: () => void
}



const dog: ISwim = {
    swim: function () { }
}
const fish: IRun = {
    run: function () { }
}


function move(animal: ISwim | IRun) {
    // 判断 属性‘swim’ 是否在dog上
    if ('swim' in animal) {
        animal.swim()
    } else {
        animal.run()
    }

}


move(dog)
move(fish)

