let squaresPerRow = 4
const container = document.querySelector(".container")
const clearBtn = document.querySelector(".clear-btn")
clearBtn.addEventListener("click", clearGrid)
let squares
const slider = document.querySelector(".slider")
const gridSize = document.querySelector(".grid-size")

slider.oninput = function() {
    gridSize.innerHTML = this.value;
}

function changeBackground(e){
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  let color = `rgb(${r}, ${g}, ${b})`
  e.target.style.background = color
}

function clearGrid(){
  squares.forEach(square => square.style.background = "lightgrey")
  squaresPerRow = prompt("How many squares per side?")
  fillGrid()
}

function fillGrid(){
  //clear grid first
  container.innerHTML = ""
  
  //add columns and rows
  container.style.gridTemplateRows = `repeat(${squaresPerRow}, 1fr)`
  container.style.gridTemplateColumns = `repeat(${squaresPerRow}, 1fr)`
  
  let numSquares = squaresPerRow * squaresPerRow
  
  //create squares
  for(let i = 0; i < numSquares; i++){
    let square = document.createElement("div")
    square.setAttribute("class", "square")
    container.appendChild(square)
  }

  //get array of squares
  squares = document.querySelectorAll(".square")

  //add listener for hover on each square
  squares.forEach(square => square.addEventListener("mouseover", changeBackground))
}

fillGrid()