"use strict";
/*
  以下の問題をJavaScriptので解いてください。

  必ず、
  1. 関数を定義
  2. 引数となる定数を定義
  3. 関数の引数に2で定義した定数を渡して、関数を呼び出す。その結果をconsole.logする
  の順番で記述してください。
*/
const formatPersonIntroduction = (person) => {
    return person.name + "は" + person.age + "歳です";
};
// 2. 引数となる定数を定義
const person = { name: "太郎", age: 20 };
// 3. 関数の引数に2で定義した定数を渡して、関数を呼び出す。その結果をconsole.logする
console.log(formatPersonIntroduction(person));
/*
  問題
*/
// 問題1: 引数として受け取った数値を2倍にして返す関数を作成して実行してください。
// 例) 引数: 2, 返り値: 4
const doubleNumber = (num) => num * 2;
const num = 2;
console.log(doubleNumber(num));
// 問題2: 最大値を返す関数を作成して実行してください。
// 例) 引数: [1, 3, 2, 5, 4], 返り値: 5
// ※ 引数の数は何個でも受け取れる様にしてください
// ※ Math.maxは使用しないでください
const maxNumber = (numbers) => {
    let maxNumber = numbers[0];
    for (const number of numbers) {
        if (maxNumber < number) {
            maxNumber = number;
        }
    }
    return maxNumber;
};
const numQ2 = [1, 3, 2, 5, 4];
console.log(maxNumber(numQ2));
// 問題3: 配列を引数として受け取り、偶数のみを返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [2, 4, 6]
const evenNumbers = (numbers) => numbers.filter((number) => number % 2 === 0);
const numQ3 = [1, 2, 3, 4, 5, 6];
console.log(evenNumbers(numQ3));
// 問題4: 配列内の重複を除去する関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 2, 4, 5, 6, 5, 6], 返り値: [1, 2, 3, 4, 5, 6]
const distinctNumbers = (numbers) => [...new Set(numbers)];
const numQ4 = [1, 2, 3, 2, 4, 5, 6, 5, 6];
console.log(distinctNumbers(numQ4));
// 問題5: テンプレートリテラルを使用して、引数で受け取った名前を元に「こんにちは、○○さん」と出力する関数を作成して実行してください。
// 例) 引数: '太郎', 出力: こんにちは、太郎さん
const greet = (userName) => console.log(`こんにちは、${userName}さん`);
const userName = "太郎";
greet(userName);
// 問題6: 配列を引数として受け取り、各要素を2倍にした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3], 返り値: [2, 4, 6]
const doubleNumbers = (numbers) => numbers.map((number) => number * 2);
const numQ6 = [1, 2, 3];
console.log(doubleNumbers(numQ6));
// 問題7: 文字列の配列を受け取り、index番号を付けたオブジェクトを返す関数を作成して実行してください。
// 例) 引数: ['a', 'b', 'c'], 返り値: [{ index: 0, value: 'a' }, { index: 1, value: 'b' }, { index: 2, value: 'c' }]
const createObject = (values) => values.map((value, index) => ({ index, value }));
const values = ['a', 'b', 'c'];
console.log(createObject(values));
const ageMatchPerson = (persons, age) => persons.find((person) => person.age === age);
const persons = [{ name: '太郎', age: 20 }, { name: '次郎', age: 30 }, { name: '三郎', age: 40 }];
const age = 30;
console.log(ageMatchPerson(persons, age));
// 問題9: 数字の配列を引数として受け取り、偶数のみをフィルタリングし、その後各要素を2倍にした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [4, 8, 12]
const doubleEvenNumbers = (numbers) => numbers.filter((number) => number % 2 === 0).map((number) => number * 2);
const numQ9 = [1, 2, 3, 4, 5, 6];
console.log(doubleEvenNumbers(numQ9));
// 問題10: 数字の配列を引数として受け取り、各要素に10を足し、その後偶数のみをフィルタリングし、最後に要素を昇順にソートした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [12, 14, 16]
const processedNumbers = (numbers) => numbers.map((number) => number + 10).filter((number) => number % 2 === 0).sort();
const numbersQ10 = [1, 2, 3, 4, 5, 6];
console.log(processedNumbers(numbersQ10));
//# sourceMappingURL=index.js.map