const boxes = document.querySelectorAll(".box")
const button = document.querySelector("button")
const board = document.querySelector(".board")
const gameStatus = document.querySelector(".game-status")
const tl = document.querySelector(".tl")
const tc = document.querySelector(".tc")
const tr = document.querySelector(".tr")
const cl = document.querySelector(".cl")
const cc = document.querySelector(".cc")
const cr = document.querySelector(".cr")
const bl = document.querySelector(".bl")
const bc = document.querySelector(".bc")
const br = document.querySelector(".br")
const tops = [tl, tc, tr]
const centerRow = [cl, cc, cr]
const bottom = [bl, bc, br]
const left = [tl, cl, bl]
const centerColumn = [tc, cc, bc]
const right = [tr, cr, br]
const diagonal1 = [tl, cc, br]
const diagonal2 = [tr, cc, bl]
const threes = [tops, centerRow, bottom, left, centerColumn, right, diagonal1, diagonal2]
let turnPlayer = "red"
let gameOver = false
let boxesSelected = 0

const select = e => {
  e.target.style.backgroundColor = turnPlayer
  threes.forEach(three => {
    const allThree = []
    three.forEach(square => {
      allThree.push(square.style.backgroundColor)
    })
    const turnPlayerMarker = [turnPlayer, turnPlayer, turnPlayer]
    let won = true
    for (let i = 0; i < allThree.length; i++){
      if (allThree[i] !== turnPlayerMarker[i]) {
        won = false
      }
    }
    if (won === true) {
      gameOver = true
      board.style.display = "none"
      gameStatus.innerHTML = `${turnPlayer.charAt(0).toUpperCase() + turnPlayer.slice(1)} wins!`
    }
  })
  e.target.removeEventListener("click", select)
  boxesSelected++
  if (boxesSelected === 9 && gameOver === false) {
    gameOver = true
    board.style.display = "none"
    gameStatus.innerHTML = `It's a tie!`
  }
  if (turnPlayer === "red") {
    turnPlayer = "blue"
  } else {
    turnPlayer = "red"
  }
  if (gameOver === false) {
    gameStatus.innerHTML = `${turnPlayer.charAt(0).toUpperCase() + turnPlayer.slice(1)}'s turn`
  }
}

boxes.forEach(box => {
  box.addEventListener("click", select)
})

button.addEventListener("click", e => {
  gameOver = false
  boxes.forEach(box => {
    box.style.backgroundColor = "gray"
    box.addEventListener("click", select)
  })
  turnPlayer = "red"
  board.style.display = "grid"
  boxesSelected = 0
  gameStatus.innerHTML = `${turnPlayer.charAt(0).toUpperCase() + turnPlayer.slice(1)}'s turn`
})