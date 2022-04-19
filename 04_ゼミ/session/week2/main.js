const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  console.log(memoInput.value)

  // textContent メモを記憶するHTML要素
  const textContent = document.createElement("div")
  // メモの内容を追加
  textContent.textContent = memoInput.value
  // memoInput 初期化
  memoInput.value = ""

  // deleteButton 削除ボタン
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  textContent.append(deleteButton)
  // deleteButton の削除機能
  deleteButton.onclick = function () {
    textContent.remove()
  }
  // memoContainer に textContent を追加
  memoContainer.append(textContent)
}
