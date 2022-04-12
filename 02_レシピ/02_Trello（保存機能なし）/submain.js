const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

inputElement.addEventListener("keypress", ill)

function ill(e) {
  if (e.keyCode === 13) {
    // card を作成
    const card = createCard(inputElement.value)
    container.append(card)

    // 入力欄を空にする
    inputElement.value = ""

    return false
  }
}

addButton.onclick = function () {
  // card を作成
  const card = createCard(inputElement.value)
  container.append(card)

  //入力欄を空にする
  inputElement.value = ""
}

// 共通の処理：テキストからカードを作成する
const createCard = function (text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  //テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタン を作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタン を押したときの処理を登録
  deleteButton.onclick = function () {
    // card を削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}
