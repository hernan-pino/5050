const imgs = document.querySelectorAll('.content')
const liEl = document.querySelectorAll('li')

// imgs.forEach(img => {
//     img.classList.remove('show')


// })

liEl.forEach((item,idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        imgs[idx].classList.add('show')
    })
})

function hideAllContents() {
    imgs.forEach(content => content.classList.remove('show'))
}
function hideAllItems() {
    liEl.forEach(item => item.classList.remove('active'))
}