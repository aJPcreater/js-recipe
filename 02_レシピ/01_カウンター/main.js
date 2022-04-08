// display カウンター描画
const display = document.getElementById("display")
// plus-button １カウント増やすボタン
const plusButton = document.getElementById("plus-button")
// minus-button １カウント減らすボタン
const minusButton = document.getElementById("minus-button")
// double-button 2倍にするボタン
const doubleButton = document.getElementById("double-button")

let count = 0

plusButton.onclick = function () {
  // カウント上昇+1
  count += 1
  // 上昇後の count に書き換え
  display.textContent = count
}

minusButton.onclick = function () {
  // カウント減少-1
  count -= 1
  // 減少後の count に書き換え
  display.textContent = count
}

doubleButton.onclick = function () {
  // カウント*2
  count *= 2
  // 倍増後の count に書き換え
  display.textContent = count
}
