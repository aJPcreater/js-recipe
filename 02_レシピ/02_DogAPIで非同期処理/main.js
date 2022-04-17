const breed = document.getElementById("breed")
const test = document.getElementById("test")
const many = document.getElementById("number")
const fink = document.getElementById("Find")
const dogs = document.getElementById("dogs")
const miku = ""
const images = document.getElementById("images")

// 処理系
fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    miku.textContent = Object.keys(data.message)
    for (let value of Object.keys(data.message)) {
      console.log(value)
      let newOne = document.createElement("option")
      newOne.textContent = value
      breed.append(newOne)
      console.log(breed)
    }
  })
// hound 犬
fetch("https://dog.ceo/api/breed/hound/images")
  .then((res) => {
    console.log("accessLog")
    console.log(res.ok)
    console.log(Promise.resolve(res))
    return res.json()
  })
  .then((data) => {
    console.log(data)
    dogs.src = data.message
    console.log(data.message)
  })
// hound 犬一匹
fetch("http://dog.ceo/api/breed/hound/images/random", { mode: "no-cors" })
  .then((res) => {
    console.log("accessLog")
    console.log(res.ok)
    console.log(Promise.resolve(res))
    console.log(res.json())
    return res.json()
  })
  .then((data) => {
    console.log(data)
    dogs.src = data.message
    console.log(data.message)
  })
// find on click.
fink.onclick = function (one, two) {
  const vip = breed.value
  console.log("find!")
  console.log(many.value)

  const newTwo = document.createElement("img")
  console.log("for")
  console.log(vip)
  console.log("http://dog.ceo/api/breed/" + vip + "/images/random")
  fetch("http://dog.ceo/api/breed/affenpinscher/images/random", {
    mode: "no-cors",
  })
    .then((res) => {
      console.log("accessLog")
      console.log(res.ok)
      return Promise.resolve(res)
    })
    .then((data) => {
      console.log(data)
      dogs.src = data.message
      console.log(data.message)
    })
  images.append(newTwo)
}
