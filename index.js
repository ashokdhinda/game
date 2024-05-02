let boxes = document.querySelectorAll('.box')
let resetbtn = document.querySelector('#restart')
let newGamebtn = document.querySelector('#new-btn')
let msgcontener = document.querySelector('.msg-coneter')
let msg = document.querySelector('#msg')

let turnO = true
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 7],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]
const resetGame = () =>{
    turnO= true;
    enablebleBoxes();
    msgcontener.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (turnO) {
      box.innerText = 'O'
      turnO = false
    } else {
      box.innerText = 'x'
      turnO = true
    }
    box.disabled = true
    checkWinner()
  })
})
const disableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enablebleBoxes = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
  msg.innerText = `congratulations, winner is ${winner}`
  msgcontener.classList.remove('hide')
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let posVal1 = boxes[pattern[0]].innerText
    let posVal2 = boxes[pattern[1]].innerText
    let posVal3 = boxes[pattern[2]].innerText
    if (posVal1 != '' && posVal2 != '' && posVal3 != '') {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        showWinner(posVal1)
      }
    }
  }
}

newGamebtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)