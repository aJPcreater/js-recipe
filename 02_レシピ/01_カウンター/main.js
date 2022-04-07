// display カウンター描画
const display = document.getElementById("display")
// plus-button カウント増やすボタン
const plusButton = document.getElementById("plus-button")

let count = 0

plusButton.onclick = function () {
  // カウント上昇+1
  count += 1
  // 上昇後の count に書き換え
  display.textContent = count
}
