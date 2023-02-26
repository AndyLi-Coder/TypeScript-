// 1.别名type类型可以使用的范围更广，interface接口类型只能用来声明对象
type MyNumer = string | number;
interface MyNumber1 {
  x: number;
  y: number;
}
// 2.声明对象时，interface可以多次声明，type不允许两个相同的名称，只允许声明一次
interface PointType {
  x: number;
  y: number;
}
interface PointType {
  z: number;
}

// type PointType1 = number | string
// type PointType1 = number | string

// 3. interface 支持继承
interface IPerson {
  name: string;
  age: number;
}
interface IKun extends IPerson {
  height: number;
}

const ikun: IKun = {
  name: "123",
  age: 18,
  height: 1.99,
};

export {};
