const container = document.querySelector(".container")

for(let i = 0; i < 16; i++){
    let square = document.createElement("div")
    square.setAttribute("class", "square")
    container.appendChild(square)
}