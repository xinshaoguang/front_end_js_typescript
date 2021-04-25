// object 表示一个对象
let a: object;
a = {};
a = function () {};

// {}用来指定对象中可以包含那些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性后边加？，表示属性是可选的

let b: { name: string; age: number };
b = { name: '孙悟空', age: 18 };

// [propName: string]: any 表示类型的属性
let c: { name: string; [propName: string]: any };
c = { name: '猪八戒', age: 18, gender: '男' };

let d: number;
d = 123;
let f: string;
f = 'string';

let g: boolean;
g = true;

g = false;
