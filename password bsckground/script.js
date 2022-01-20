// 1 - traer lo que necesit 
    // - fondo y la password pa ver su lenght
//  2 - ADun listener a cada stroke puede ser change
// 3 - por cada cambio en el lengh disminuimos el blurr

const password = document.getElementById('pass')
const bg = document.getElementById('background')


password.addEventListener('input', () => {
    const largo = password.value.length 

    const blurr = 20 - (largo * 2)

    if(largo > 7) {
        bg.style.filter = `blur(0px)`
    } else {
        bg.style.filter = `blur(${blurr}px)`
    }

   
    console.log(blurr)
})