const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const nextQuiz = document.getElementById("next-quiz")
const feedback = document.getElementById("feedback")
const quizText = document.getElementById("quiz-text")
let quizCount = 0

// nextQuiz でページ遷移
nextQuiz.onclick = function () {
  quizCount += 1
  console.log(quizCount)

  if (quizCount === 1) {
    quizText.textContent = "二問目"
    choice1.textContent = "あ"
    choice2.textContent = "い"
    choice3.textContent = "う"
    nextQuiz.classList.remove("show")
    nextQuiz.classList.add("hidden")
    feedback.textContent = ""
  } else {
    quizText.textContent = "三問目"
    choice1.textContent = "う"
    choice2.textContent = "い"
    choice3.textContent = "あ"
    nextQuiz.classList.remove("show")
    nextQuiz.classList.add("hidden")
    feedback.textContent = ""
  }
}

choice1.onclick = function () {
  if (quizCount === 0) {
    feedback.textContent = "残念！１"
  } else if (quizCount === 1) {
    feedback.textContent = "残念！１"
  } else {
    feedback.textContent = "残念！１"
  }
}

choice2.onclick = function () {
  if (quizCount === 0) {
    feedback.textContent = "正解"
    nextQuiz.classList.remove("hidden")
    nextQuiz.classList.add("show")
  } else if (quizCount === 1) {
    feedback.textContent = "正解"
    nextQuiz.classList.remove("hidden")
    nextQuiz.classList.add("show")
  } else {
    feedback.textContent = "正解"
  }
  nextQuiz.classList.add("success")
}

choice3.onclick = function () {
  if (quizCount === 0) {
    feedback.textContent = "残念！１"
  } else if (quizCount === 1) {
    feedback.textContent = "残念！１"
  } else {
    feedback.textContent = "残念！１"
  }
}
