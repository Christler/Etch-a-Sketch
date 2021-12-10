let squaresPerRow = 4
let squares
let shaderSelected = false
let rainbowSelected = false
let colorSelected = true
const container = document.querySelector(".container")
const colorPicker = document.querySelector(".color-picker")
const shaderBtn = document.querySelector(".shader-btn")
const rainbowBtn = document.querySelector(".rainbow-btn")
const clearBtn = document.querySelector(".clear-btn")
const slider = document.querySelector(".slider")
const gridSizeOutput = document.querySelector(".grid-size")
gridSizeOutput.innerHTML = `${squaresPerRow} X ${squaresPerRow}`

//add listeners to buttons and color picker
colorPicker.addEventListener("input", () => {
  colorSelected = true
  shaderSelected = false
  rainbowSelected = false
})
shaderBtn.addEventListener("click", () => { 
  shaderSelected = true
  rainbowSelected = false
  colorSelected = false
})
rainbowBtn.addEventListener("click", () => { 
  shaderSelected = false
  rainbowSelected = true
  colorSelected = false
})
clearBtn.addEventListener("click", clearGrid)

//when slider is used update grid
slider.oninput = function() {
  squaresPerRow = this.value  
  gridSizeOutput.innerHTML = `${squaresPerRow} X ${squaresPerRow}`
  fillGrid()  
}

function changeBackground(e){
  let color
  
  //rainbow selected
  if(rainbowSelected){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    color = `rgb(${r}, ${g}, ${b})`
  }
  
  //shader selected
  if(shaderSelected){
    if(e.target.style.background === ""){
      color = "rgb(220, 220, 220)"
    }else{
      let rgbValuesArr = e.target.style.background.replace(/[rgb()]/g, "").split(",").map(Number)
      let r = rgbValuesArr[0] - 20
      let g = rgbValuesArr[1] - 20
      let b = rgbValuesArr[2] - 20
      color = `rgb(${r}, ${g}, ${b})`
    }
  }
  
  //color selected
  if(colorSelected){
    color = colorPicker.value
  }

  e.target.style.background = color
}

function clearGrid(){
  squares.forEach(square => square.style.background = "lightgrey")
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