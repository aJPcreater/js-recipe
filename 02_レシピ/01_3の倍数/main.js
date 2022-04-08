// i は繰り返してプラスする変数
let i = 1
// l は上限値の設定用変数
let l = 0
// id はタイマー削除用変数
let id = 0

// 引数numberを受け取る関数
const genkiFunction = function (number) {
  id = setInterval(countUp, 1000)
  // l は上限の値設定に用いた
  l = number + 1
}

// countUp するタイマー関数
const countUp = function () {
  if (i !== l) {
    genki()
    i++
  } else {
    clearInterval(id)
  }
}

// 3の倍数と3がつくと元気になる関数
const genki = function () {
  if (i % 3 === 0 || i.toString().includes("3")) {
    console.log(i + "!!!!!!!")
  } else {
    console.log(i)
  }
}

// FizzBuzzを表示する関数
const fizzBuzz = function (fizzbuzz) {
  for (let i = 1; i <= fizzbuzz; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}
