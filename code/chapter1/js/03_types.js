"use strict";
// // let a:number
// //也可以直接使用字面量进行类型赋值
// let a: 10;
// a = 10;
// // a = 11;//相当于常量赋值不能更改
// // 可以使用 | 连接多个类型（联合类型）
// let b: 'male' | 'female';
// b = 'male';
// b = 'female';
// let c: boolean | string;
// c = true;
// c = 'hello';
// // any 表示是任意类型，一个 变量设置类型为any后相当于该变量关闭了TS变量类型检测
// // let d: any;
// // a = 10;
// let d;
// d = 10;
// d = 'hello';
// //类型断言
// //
// let s;
// s = d as string;
// s = <string>d;
// // void表示没有返回值
// function fn(): void {}
// // never 表示永远没有返回值
// function fn2(): never {
//   throw new Error('报错了');
// }
