const boxes = document.querySelectorAll(".box")
const turn = document.querySelector(".turn")
const button = document.querySelector("button")
const board = document.querySelector(".board")
let turnPlayer = "red"

const select = e => {
  e.target.style.backgroundColor = turnPlayer
  e.target.removeEventListener("click", select)
  if (turnPlayer === "red") {
    turnPlayer = "blue"
  } else {
    turnPlayer = "red"
  }
  turn.innerText = turnPlayer.charAt(0).toUpperCase() + turnPlayer.slice(1)
}

boxes.forEach(box => {
  box.addEventListener("click", select)
})

button.addEventListener("click", e => {
  boxes.forEach(box => {
    box.style.backgroundColor = "gray"
    box.addEventListener("click", select)
  })
  turnPlayer = "red"
  turn.innerText = "Red"
})