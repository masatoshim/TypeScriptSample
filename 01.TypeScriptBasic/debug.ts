// 10-1-1. 型アノテーションの基本

// 変数
let age: number = 30;

// 定数
const DEBUG: boolean = true;

// 関数
function getTriangleArea(base: number, height: number) : number {
  return base * height /2;
}

// クラス
class Person {
  name: string = '';
  age: number = 0;

  toString() : string {
    return `Person: ${this.name} ${this.age}`;
  }
}

// 10-1-2. TypeScriptのデータ型

// 論理型
let flag: boolean = false;

// 数値型
let pi: number = 3.14159265359;

// 文字列型
let title: string = '速習Reacct';

// 配列型
let languages: string[] = ['javaScript', 'PHP', 'Python', 'Ruby'];

// タプル型
let person: [string, number, boolean] = ['sato', 50, false];

// 連想配列
let address: {[index: string]: string;} = {
  'sato': 'aaaaaa',
  'kato': 'bbbbbb',
};

// オブジェクト型
let member: {
  name: string,
  age: number,
  married?: boolean
} = {
  name: 'sato',
  age: 50,
  married: false
};
member = {
  name: 'sato',
  age: 50,
};

let data: number[][] = [
  [10, 11, 12],
  [20, 21, 22],
  [30, 31, 32],
];

function circle(radius?: number = 1) {
  return (radius ** 2) * Math.PI;
}

// 10-1-3. TypeScript固有の特殊な型

// void型
function greet(name: string): void {
  console.log(`こんにちは、${name}さん！`);
}

// never型
function myFunc(): never {
  throw new Error('Error is occured!!');
}

// 10-1-4. 複数の型を組み合わせる「複合型」

let age2: string | number;
age2 = '30歳';
age2 = 30;

let list: (string|number)[] = ['sato', 50, 'male'];

function circle2(radius: number): number | boolean {
  if (radius < 0) return false;
  return (radius ** 2) * Math.PI;
}

let list2: Array<string> = ['React', 'Vue', 'Angular'];

let s = new Set<number>([1, 2, 3]);

let m = new Map<string, number>([
  ['React', 50],
  ['Vue', 30],
  ['Angular', 10],
]);

type BookType = {
  title: string,
  price: number,
  download: boolean,
};

let b: BookType = {
  title: 'React',
  price: 500,
  download: true,
};

interface BookType2 {
  title: string,
  price: number,
  download: boolean,
};


console.log('Hello TypeScript!')
