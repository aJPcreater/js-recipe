let text_form = document.getElementById("text_form")
let output = document.getElementById("output")

text_form.addEventListener("keypress", test_ivent)

function test_ivent(e) {
  if (e.keyCode === 13) {
    output.innerHTML = text_form.value
    return false
  }
}
