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

console.log('Hello TypeScript!')
