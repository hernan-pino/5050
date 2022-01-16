const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('rigth')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2050)


function run() {
    idx++

    changeImage()
}

function changeImage() {
    if(idx > img.length - 1){
        idx = 0
    } else if(idx < 0 ) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx*500}px)`
}

function restInt(){
    clearInterval(interval)
    interval = setInterval(run,2050)
}

rightBtn.addEventListener('click',() => {
    idx++

    changeImage()
    restInt()
})

leftBtn.addEventListener('click',() => {
    idx--

    changeImage()
    restInt()
})