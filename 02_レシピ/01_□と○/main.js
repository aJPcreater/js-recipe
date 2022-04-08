// 図形の表示
const figure = document.getElementById("figure")

let s = 0
figure.onclick = function () {
  s += 1
  switch (s) {
    case 0:
      figure.classList.add("square")
      figure.classList.remove("triangle")
      break
    case 1:
      figure.classList.add("rounded")
      break
    case 2:
      figure.classList.add("triangle")
      figure.classList.remove("square")
      figure.classList.remove("rounded")
      s -= 3
      break

    default:
      console.log("管理者用 : 発生し得ないexception")
  }
}
