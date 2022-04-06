const imageElement = document.getElementById("dog-image");

//　サーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json(); //jsonとして結果の読み込み、thenに渡す
  })
  .then((data) => {
    imageElement.src = data.message; //画像を表示する
  });
