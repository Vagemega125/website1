const LoadText = document.querySelectro('.loading-text')
const bg = document.querySelector('.bg')

let load =0

let int = setInterval(blurring, 300)

function blurring(){
    load = load+1
    if (load >99){
        clearInterval(int)
    }
    LoadText.innerText = `${load}%`
bg.style.filter = "blur(${50 - (load/2)}px)"
}
