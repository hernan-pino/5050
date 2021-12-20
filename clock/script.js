const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const seconEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')


const days = ['dom','lunes','mar','mir','juev','vier','sab']
const months =['ene','feb','feb','feb','feb','feb','feb','feb','feb','feb','nov','dic']

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Lght Mode'
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hour = time.getHours()
    const hoursForClock = hour % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hour >= 12 ? 'PM' : 'AM'


    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    seconEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ?`0${minutes}` : minutes } ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class='cicle'>${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min ) + out_min;}

setTime()

setInterval(setTime, 1000)