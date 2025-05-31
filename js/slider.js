const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const rightSide = document.querySelector('.right-side')
const leftSide = document.querySelector('.left-side')
const slideLength = rightSide.querySelectorAll('div').length

leftSide.style.top = '${-(slidesLength - 1)*100}%'

upButton.addEventListener('click',() =>changeSlide('up'))
downButton.addEventListener('click',() =>changeSlide('down'))

function changeSlide(direction){
    if(direction == 'up'){
        console.log('up')
    }
    else{
        console.log('down')
    }
}
