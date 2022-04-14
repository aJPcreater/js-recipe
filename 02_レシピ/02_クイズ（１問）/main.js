const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const feedback = document.getElementById("feedback")
const quizChoices = document.getElementById("quiz-choices")

// 選択肢
const choice1 = document.createElement("button")
const choice2 = document.createElement("button")
const choice3 = document.createElement("button")
const choice4 = document.createElement("button")

// クイズの内容
const quiz = {
  text: "「Deco*27」読み方は？",
  image: "http://studionas.org/uploads/2015/03/deco_main2.png",
  choices: [
    {
      text: "デコ掛けるにじゅうなな",
      feedback: "残念！「*」が演算子であることは合ってるよ！",
    },
    {
      text: "デコメ",
      feedback: "残念！２７も読みます！",
    },
    {
      text: "デコニーナ",
      feedback: "正解！「２７」はニーナと読むみたいです",
    },
    {
      text: "デコサンキュー",
      feedback: "残念！２７をサンキューと読む天才ここにあらわる",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = quiz.image

  // 選択肢（ボタン）の中身を表示

  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text

  //
  quizChoices.append(choice1, choice2, choice3, choice4)
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  // 0番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2番目の選択肢を選択
  choose(2)
}
choice4.onclick = function () {
  // 3番目の選択肢を選択
  choose(3)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する。
reloadQuiz()
