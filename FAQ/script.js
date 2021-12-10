const button = document.querySelectorAll('.faq-toggle')


button.forEach((but)=>{
    but.addEventListener('click',()=>{
        but.parentNode.classList.toggle('active')
    })
})