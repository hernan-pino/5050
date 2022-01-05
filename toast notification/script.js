const button = document.getElementById('btn')
const toasts = document.getElementById('toasts')


const messages = [
    'mensaje 1',
    'mensaje 2',
    'mensaje 3',
    'mensaje 4'
]

 button.addEventListener('click', () => createNot())

 function createNot() {
     const notif = document.createElement('div')
     notif.classList.add('toast')

     notif.innerText = getTandomMessage()

     toasts.appendChild(notif)

     setTimeout(() => {
         notif.remove()
     }, 3000)
 }

 function getTandomMessage() {
     return messages[Math.floor(Math.random() * messages.length)]
 }