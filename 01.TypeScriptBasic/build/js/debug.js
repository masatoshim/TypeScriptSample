"use strict";
// 10-1-1. 型アノテーションの基本
// 変数
let age = 30;
// 定数
const DEBUG = true;
// 関数
function getTriangleArea(base, height) {
    return base * height / 2;
}
console.log(getTriangleArea(1, 2));
// クラス
class Person {
    constructor() {
        this.name = '';
        this.age = 0;
    }
    toString() {
        return `Person: ${this.name} ${this.age}`;
    }
}
// 10-1-2. TypeScriptのデータ型
// 論理型
let flag = false;
// 数値型
let pi = 3.14159265359;
// 文字列型
let title = '速習Reacct';
// 配列型
let languages = ['javaScript', 'PHP', 'Python', 'Ruby'];
// タプル型
let person = ['sato', 50, false];
// 連想配列
let address = {
    'sato': 'aaaaaa',
    'kato': 'bbbbbb',
};
// オブジェクト型
let member = {
    name: 'sato',
    age: 50,
    married: false
};
member = {
    name: 'sato',
    age: 50,
};
let data = [
    [10, 11, 12],
    [20, 21, 22],
    [30, 31, 32],
];
function circle(radius = 1) {
    return (radius ** 2) * Math.PI;
}
// 10-1-3. TypeScript固有の特殊な型
// void型
function greet(name) {
    console.log(`こんにちは、${name}さん！`);
}
// never型
function myFunc() {
    throw new Error('Error is occured!!');
}
// 10-1-4. 複数の型を組み合わせる「複合型」
let age2;
age2 = '30歳';
age2 = 30;
let list = ['sato', 50, 'male'];
function circle2(radius) {
    if (radius < 0)
        return false;
    return (radius ** 2) * Math.PI;
}
let list2 = ['React', 'Vue', 'Angular'];
let s = new Set([1, 2, 3]);
let m = new Map([
    ['React', 50],
    ['Vue', 30],
    ['Angular', 10],
]);
let b = {
    title: 'React',
    price: 500,
    download: true,
};
;
console.log('Hello TypeScript!');
//# sourceMappingURL=debug.js.map