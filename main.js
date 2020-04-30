"use strict";

console.log("Hello World from main.js");

// 変数の定義
let price = 150;
console.log(price * 100);

// 四則演算
price = 400;
console.log(price * 100);
price += 400;
console.log(price * 100);
price++;
console.log(price * 100);

// データ型
console.log(typeof "hello");
console.log(typeof 3);
console.log(typeof true);
console.log(typeof undifined);
console.log(typeof null);

// 文字列と数値
console.log("5" * "3");
console.log("5" - "3");
console.log("5" + "3");
console.log(5 + 3);
console.log(parseInt("5", 10) + 3);

// 比較演算子
const num = 1200;
console.log(num > 1000);
console.log(num < 1000);
console.log(num >= 1000);
console.log(num <= 1000);
console.log(num === 1000);
console.log(num !== 1000);
console.log(Boolean(0));
console.log(Boolean("Hello"));

// if文
const score = 80;
if (score > 80) {
  console.log("Great!");
} else if (score < 80) {
  console.log("Bad");
} else {
  console.log("80!");
}

// 条件演算子
const test = 80;
test > 80 ? console.log("good") : console.log("Bad");

// 論理演算子
const score1 = 50;
const name1 = "kake";

if (score1 >= 50) {
  if (name1 === "kake") {
    console.log("good job");
  }
}
// これを簡略化
if (score1 >= 50 && name1 === "kake") {
  console.log("good job");
}

// ちなみに
// &&はAND
// ||はOR
// ！はNOT
// の論理演算子

// 条件分岐
const signal = "green";
switch (signal) {
  case "red":
    console.log("stop!");
    break;
  case "yellow":
    console.log("caution!");
    break;
  case "blue":
  case "green":
    console.log("ok!");
    break;
  default:
    console.log("wrong!");
}

// for文・テンプレートリテラル
for (let i = 0; i < 10; i++) {
  console.log(`hello${i}`);
}

// ループ処理(Do While)

let hp = 100;
do {
  console.log(`${hp}left!`);
  hp -= 15;
} while (hp > 0);

// ループのスキップ
for (let i = 0; i < 10; i++) {
  if (i % 3 === 0) {
    continue;
    // break;
  }
  console.log(i);
}

// function
function ad(message = "hi") {
  //仮引数
  console.log("-------------");
  console.log(`----${message}----`);
  console.log("-------------");
}

ad("hello"); //実引数
ad();

// 関数宣言
function sum(a, b, c) {
  return a + b + c;
}

const total1 = sum(1, 1, 1) + sum(3, 3, 3);
console.log(total1);

// 関数式(無名関数)
const sum2 = function (a, b, c) {
  return a + b + c;
};
const total2 = sum2(1, 1, 1) + sum2(3, 3, 3);
console.log(total2);

// アロー関数（引数複数）
const sum3 = (a, b, c) => a + b + c;

const total3 = sum3(1, 1, 1) + sum3(3, 3, 3);
console.log(total3);

// アロー関数（引数１つ）
const double = (a) => a * 2;

console.log(double(12));
