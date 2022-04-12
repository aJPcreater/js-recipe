const imageElement = document.getElementById("dog-image")

// 処理系
// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })
