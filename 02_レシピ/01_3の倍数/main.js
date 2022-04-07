// 引数numberを受け取る
const genkiFunction = function (number) {
  // 3の倍数で元気になる
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      console.log(i + "!!!!!!!")
    } else {
      console.log(i)
    }
  }
}
