/*
  以下の問題をJavaScriptので解いてください。

  必ず、
  1. 関数を定義
  2. 引数となる定数を定義
  3. 関数の引数に2で定義した定数を渡して、関数を呼び出す。その結果をconsole.logする
  の順番で記述してください。
*/

/*
  例題
*/
// 問題: 以下のようなオブジェクトを受け取り、nameとageを返す関数を作成してください
// 例): 引数: { name: '太郎', age: 20 }, 返り値: '太郎は20歳です'

// 回答例:
// 1. 関数を定義
type Person = {
  name: String,
  age: number
}
const formatPersonIntroduction = (person: Person) => {
  return person.name + "は" + person.age + "歳です";
};

// 2. 引数となる定数を定義
const person: Person = { name: "太郎", age: 20 };

// 3. 関数の引数に2で定義した定数を渡して、関数を呼び出す。その結果をconsole.logする
console.log(formatPersonIntroduction(person));

/*
  問題
*/

// 問題1: 引数として受け取った数値を2倍にして返す関数を作成して実行してください。
// 例) 引数: 2, 返り値: 4
const doubleNumber = (num: number) => num * 2;

const num: number = 2;

console.log(doubleNumber(num));


// 問題2: 最大値を返す関数を作成して実行してください。
// 例) 引数: [1, 3, 2, 5, 4], 返り値: 5
// ※ 引数の数は何個でも受け取れる様にしてください
// ※ Math.maxは使用しないでください
const maxNumber = (numbers: number[]) => {
  let maxNumber: number = numbers[0];
  for (const number of numbers){
    if (maxNumber < number) {
      maxNumber = number;
    }
  }
  return maxNumber;
}

const numQ2: number[] = [1, 3, 2, 5, 4];

console.log(maxNumber(numQ2));


// 問題3: 配列を引数として受け取り、偶数のみを返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [2, 4, 6]
const evenNumbers = (numbers: number[]) => numbers.filter((number) => number % 2 === 0);

const numQ3: number[] = [1, 2, 3, 4, 5, 6];

console.log(evenNumbers(numQ3));


// 問題4: 配列内の重複を除去する関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 2, 4, 5, 6, 5, 6], 返り値: [1, 2, 3, 4, 5, 6]
const distinctNumbers = (numbers: number[]) => [...new Set(numbers)];

const numQ4: number[] = [1, 2, 3, 2, 4, 5, 6, 5, 6];

console.log(distinctNumbers(numQ4));


// 問題5: テンプレートリテラルを使用して、引数で受け取った名前を元に「こんにちは、○○さん」と出力する関数を作成して実行してください。
// 例) 引数: '太郎', 出力: こんにちは、太郎さん
const greet = (userName: string) => console.log(`こんにちは、${userName}さん`);

const userName: string = "太郎";

greet(userName);


// 問題6: 配列を引数として受け取り、各要素を2倍にした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3], 返り値: [2, 4, 6]
const doubleNumbers = (numbers: number[]) => numbers.map((number) => number * 2);

const numQ6: number[] = [1, 2, 3];

console.log(doubleNumbers(numQ6));


// 問題7: 文字列の配列を受け取り、index番号を付けたオブジェクトを返す関数を作成して実行してください。
// 例) 引数: ['a', 'b', 'c'], 返り値: [{ index: 0, value: 'a' }, { index: 1, value: 'b' }, { index: 2, value: 'c' }]
const createObject = (values: string[]) => values.map((value, index) => ({index, value}));

const values: string[] = ['a', 'b', 'c'];

console.log(createObject(values));


// 問題8: 名前と年齢オブジェクトの配列を受け取り、ageが第二引数で受け取った数字と一致するオブジェクトを返す関数を作成して実行してください。
// 例) 第一引数: [{ name: '太郎', age: 20 }, { name: '次郎', age: 30 }, { name: '三郎', age: 40 }]
//     第二引数: 30
//     返り値: { name: '次郎', age: 30 }
type PersonQ8 = {
  age: number,
  name: string
};

const ageMatchPerson = (persons: PersonQ8[], age: number) => persons.find((person) => person.age === age);

const persons: PersonQ8[] =  [{ name: '太郎', age: 20 }, { name: '次郎', age: 30 }, { name: '三郎', age: 40 }];
const age: number = 30;

console.log(ageMatchPerson(persons, age));


// 問題9: 数字の配列を引数として受け取り、偶数のみをフィルタリングし、その後各要素を2倍にした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [4, 8, 12]
const doubleEvenNumbers = (numbers: number[]) => numbers.filter((number) => number % 2 === 0).map((number) => number * 2);

const numQ9: number[] = [1, 2, 3, 4, 5, 6];

console.log(doubleEvenNumbers(numQ9));


// 問題10: 数字の配列を引数として受け取り、各要素に10を足し、その後偶数のみをフィルタリングし、最後に要素を昇順にソートした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [12, 14, 16]
const processedNumbers = (numbers: number[]) => numbers.map((number) => number + 10).filter((number) => number % 2 === 0).sort();

const numbersQ10: number[] = [1, 2, 3, 4, 5, 6];

console.log(processedNumbers(numbersQ10));
