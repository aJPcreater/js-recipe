const inputElement = document.getElementsByClassName("input-todo")
const container = document.getElementsByClassName("cards-container")
const addButton = document.getElementsByClassName("input-button")
const moreContainer = document.getElementById("more-container")

// 追加ボタン でカード追加
addButton.onclick = function () {
  // card を作成
  const card = createCard(inputElement.value)
  container.append(card)

  //入力欄を空にする
  inputElement.value = ""
}

// enter でカード追加：012数字分岐
inputElement[0].addEventListener("keypress", ent0)
function ent0(e) {
  if (e.keyCode === 13) {
    cardCreater(0)
  }
}
inputElement[1].addEventListener("keypress", ent1)
function ent1(e) {
  if (e.keyCode === 13) {
    cardCreater(1)
  }
}
inputElement[2].addEventListener("keypress", ent2)
function ent2(e) {
  if (e.keyCode === 13) {
    cardCreater(2)
  }
}
// 数字分岐内共通処理
const cardCreater = function (i) {
  // card を作成
  const card = createCard(inputElement[i].value)
  container[i].append(card)

  // 入力欄を空にする
  inputElement[i].value = ""
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

// .list-container を追加する
moreContainer.onclick = function () {
  const listContainer = document.createElement("div")
  listContainer.className = "list-container"
  listContainer.id = "3"

  const listHeader = document.createElement("div")
  listHeader.className = "list-header"

  const cardsContainer = document.createElement("div")
  cardsContainer.className = "cards-container"

  const listFooter = document.createElement("div")
  listFooter.className = "list-Footer"

  const inputContainer = document.createElement("div")
  inputContainer.className = "input-container"

  const inputButton = document.createElement("div")
  inputButton.className = "input-button"

  listFooter.append(inputContainer, inputButton)
  listContainer.append(listHeader, cardsContainer, listFooter)
}
