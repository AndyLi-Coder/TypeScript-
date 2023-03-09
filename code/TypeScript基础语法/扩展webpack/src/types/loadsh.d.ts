
declare module 'loadsh' {
  export function join(...arg: any[]): any
}

declare const names: string
declare const age: number
declare const height: number

declare class Person {
  name: string
  age: number
  constructor(name: string, age: number)
}

// 声明文件模块
declare module '*.png'
declare module '*.jpg'
declare module '*.vue'

declare namespace $ {
  export function ajax(setConfig: any): any
}