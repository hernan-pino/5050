const body =document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rigthBtn = document.getElementById('right')


let activeSlide = 0

rigthBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setBgToBoddy()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setBgToBoddy()
    setActiveSlide()
})


setBgToBoddy()

function setBgToBoddy() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')
}