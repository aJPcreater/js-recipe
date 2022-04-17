const breed = document.getElementById("breed")
const test = document.getElementById("test")
const many = document.getElementById("number")
const fink = document.getElementById("Find")
const dogs = document.getElementById("dogs")
const miku = ""
const images = document.getElementById("images")

// 処理系
// hound 犬一匹
fetch("http://dog.ceo/api/breed/hound/images/random")
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
