"use strict";
// // 生命一个变量
// // let a: number;
// // a = 10;
// // a = 'hello';
// // function sum(a, b) {
// //   return a + b;
// // }
// function sum(a: number, b: number): number {
//   return a + b;
// }
// let result = sum(123, 456);
// console.log(result);
console.log("nihao");
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
// object 表示一个对象
var a;
a = {};
a = function () { };
// {}用来指定对象中可以包含那些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性后边加？，表示属性是可选的
var b;
b = { name: '孙悟空', age: 18 };
// [propName: string]: any 表示类型的属性
var c;
c = { name: '猪八戒', age: 18, gender: '男' };
var d;
d = 123;
var f;
f = 'string';
var g;
g = true;
g = false;
