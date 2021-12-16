const smallCups = document.querySelectorAll('.cum-small')
const liters = document.getElementById('litters')
const percentage = document.getElementById('percentage')
const remaind = document.getElementById('remaind')

updateBigCup()

smallCups.forEach((cup,idx) => {
    cup.addEventListener('click', () => {
        highlightCup(idx)
    })
})

function highlightCup(idx) {
    if(smallCups[idx].classList.contains('full') && 
    !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')

        }
    })

    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cum-small.full').length

    const totalCups = smallCups.length

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.heigth = 0
    } else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups/totalCups*330}px`
        percentage.innerText = `${fullCups/totalCups*100}%`
    }

    if(fullCups === totalCups){
        remaind.style.visibility = 'hidden'
        remaind.style.height = 0
    } else {
        remaind.style.visibility = 'visible'
        liters.innerText = `${2-(250*fullCups/1000)} L`
    }
}

