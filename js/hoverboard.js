const container = document.getElementById('container')
const colors =["green", "white", "blue", "red"]
const SQUARE = 500;

for(let i =0; i<SQUARE; i = i+1){
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover',()=>setColor(square))
    container.appendChild(square)
}

function removeColor(element){
    element.style.background = '#ididid'
    element.style.boxShadow = '0 0 2px #000'
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = '0 0 2px${color}, 0 0 10px${color}'
}

function getRandomColor(){
    return colors[Math.floor(Math.random()* colors.length)]

}
