// ストップウォッチの表示面
const display = document.getElementById("display")
// スタート・ストップボタン
const button = document.getElementById("button")

let count = 0

const countUp = function () {
  //count の更新
  count += 1
  // count を秒単位で表示
  display.textContent = count / 100
}

let id = null

button.onclick = function () {
  if (id === null) {
    // 10msごとに countUpを実行させる
    // id は setInterval(稼働中) の id
    id = setInterval(countUp, 10)
    // button 表示を stop に
    button.textContent = "stop"
  } else {
    // stop
    clearInterval(id)
    // if に利用するため id リセット
    id = null
    // button 表示を start に
    button.textContent = "start"
  }
}
