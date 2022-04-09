// 現在の数字の表示
const display = document.getElementById("display")

// 数字キー
const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const zero = document.getElementById("0")

// 演算子キー
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const equal = document.getElementById("equal")

// 表示用
let face = ""
// 文字列で数字を集める用
let back = ""
// 項保存用
let firstNumber = ""
let secondNumber = ""
// 演算子内計算用
let thirdNumber = ""
// 演算子保存用
let operator = ""
// 演算子多重表示防止変数
let block = 0
// イコール後のバグ防止
let eqVal = 0

// 数字キー
one.onclick = function () {
  if (eqVal === 1) {
    face = ""
    console.log(eqVal)
    eqVal = 0
  }
  back += "1"
  face += "1"
  console.log(eqVal)
  display.textContent = face
}
two.onclick = function () {
  if (eqVal === 1) {
    face = ""
    display.textContent = 0
    eqVal = 0
  }
  back += "2"
  face += "2"
  display.textContent = face
}
three.onclick = function () {
  if (eqVal === 1) {
    face = ""
    display.textContent = 0
    eqVal = 0
  }
  back += "3"
  face += "3"
  display.textContent = face
}
four.onclick = function () {
  if (eqVal === 1) {
    face = ""
    display.textContent = 0
    eqVal = 0
  }
  back += "4"
  face += "4"
  display.textContent = face
}
five.onclick = function () {
  if (eqVal === 1) {
    face = ""
    display.textContent = 0
    eqVal = 0
  }
  back += "5"
  face += "5"
  display.textContent = face
}
six.onclick = function () {
  if (eqVal === 1) {
    face = ""
    display.textContent = 0
    eqVal = 0
  }
  back += "6"
  face += "6"
  display.textContent = face
}
seven.onclick = function () {
  if (eqVal === 1) {
    face = ""
    display.textContent = 0
    eqVal = 0
  }
  back += "7"
  face += "7"
  display.textContent = face
}
eight.onclick = function () {
  if (eqVal === 1) {
    face = ""
    display.textContent = 0
    eqVal = 0
  }
  back += "8"
  face += "8"
  display.textContent = face
}
nine.onclick = function () {
  if (eqVal === 1) {
    face = ""
    display.textContent = 0
    eqVal = 0
  }
  back += "9"
  face += "9"
  display.textContent = face
}
zero.onclick = function () {
  if (eqVal === 1) {
    face = ""
    display.textContent = 0
    eqVal = 0
  }
  back += "0"
  face += "0"
  display.textContent = face
}

// ここから演算用script
// plus関数
plus.onclick = function () {
  if (operator !== "") {
    operator()
  } else {
    plusCalculate()
  }
  operator = plusCalculate
  if (block === 0) {
    face += "+"
  }
  display.textContent = face
}

// minus 関数
minus.onclick = function () {
  if (operator !== "") {
    operator()
  } else {
    minusCalculate()
  }
  operator = minusCalculate
  if (block === 0) {
    face += "-"
  }
  display.textContent = face
}

// multiply 関数
multiply.onclick = function () {
  if (operator !== "") {
    operator()
  } else {
    multiplyCalculate()
  }
  operator = multiplyCalculate
  if (block === 0) {
    face += "×"
  }
  display.textContent = face
}

// divide 関数
divide.onclick = function () {
  if (operator !== "") {
    operator()
  } else {
    divideCalculate()
  }
  operator = divideCalculate
  if (block === 0) {
    face += "÷"
  }
  display.textContent = face
}

// equal 関数
equal.onclick = function () {
  if (operator !== "") {
    operator()
  }
  // 各変数初期化
  operator = ""
  display.textContent = face
  eqVal = 1
  firstNumber = ""
  if (firstNumber === "") {
    firstNumber = ""
    face = ""
  }
}

// ここから計算定義
// 足し算計算
const plusCalculate = function () {
  if (firstNumber === "") {
    firstNumber = Number(back)
  } else {
    if (back === "") {
      // 演算子表示ロック
      block = 1
    } else {
      // 計算フェーズ
      console.log(firstNumber)
      secondNumber = Number(back)
      thirdNumber = firstNumber + secondNumber
      console.log(thirdNumber)
      firstNumber = thirdNumber
      //表示更新
      face = thirdNumber
      // 演算内用変数初期化
      secondNumber = ""
      thirdNumber = ""
      // 演算子ロック解除
      block = 0
    }
  }
  // 数字を文字列で集める変数の初期化
  back = ""
  // 表示させる
  display.textContent = face
}

// 引き算計算
const minusCalculate = function () {
  if (firstNumber === "") {
    firstNumber = Number(back)
  } else {
    if (back === "") {
      // 演算子表示ロック
      block = 1
    } else {
      // 計算フェーズ
      console.log(firstNumber)
      secondNumber = Number(back)
      thirdNumber = firstNumber - secondNumber
      console.log(thirdNumber)
      firstNumber = thirdNumber
      //表示更新
      face = thirdNumber
      // 演算内用変数初期化
      secondNumber = ""
      thirdNumber = ""
      // 演算子ロック解除
      block = 0
    }
  }
  // 数字を文字列で集める変数の初期化
  back = ""
  // 表示させる
  display.textContent = face
}

// 掛け算計算
const multiplyCalculate = function () {
  if (firstNumber === "") {
    firstNumber = Number(back)
  } else {
    if (back === "") {
      // 演算子表示ロック
      block = 1
    } else {
      // 計算フェーズ
      console.log(firstNumber)
      secondNumber = Number(back)
      thirdNumber = firstNumber * secondNumber
      console.log(thirdNumber)
      firstNumber = thirdNumber
      //表示更新
      face = thirdNumber
      // 演算内用変数初期化
      secondNumber = ""
      thirdNumber = ""
      // 演算子ロック解除
      block = 0
    }
  }
  // 数字を文字列で集める変数の初期化
  back = ""
  // 表示させる
  display.textContent = face
}

// 割り算計算
const divideCalculate = function () {
  if (firstNumber === "") {
    firstNumber = Number(back)
  } else {
    if (back === "") {
      // 演算子表示ロック
      block = 1
    } else {
      // 計算フェーズ
      console.log(firstNumber)
      secondNumber = Number(back)
      console.log(secondNumber)
      thirdNumber = firstNumber / secondNumber
      console.log(thirdNumber)
      firstNumber = thirdNumber
      //表示更新
      face = thirdNumber
      // 演算内用変数初期化
      secondNumber = ""
      thirdNumber = ""
      // 演算子ロック解除
      block = 0
    }
  }
  // 数字を文字列で集める変数の初期化
  back = ""
  // 表示させる
  display.textContent = face
}
