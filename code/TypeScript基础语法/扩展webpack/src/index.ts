
import { num } from './utils/math'
const message:string = 'hello world'


console.log(message);
console.log(num(10,20))



// lib.dom.d.ts

const h2El = document.createElement('h2')
h2El.textContent = 'Hello TypeScript'
document.body.append(h2El)