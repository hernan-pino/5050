const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')


textarea.focus()

textarea.addEventListener('keyup', (e)=> {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        },10)

        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '')
    .map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tags')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect(){
    const times = 30
    
    // hacemos un intervalo, primero elige una we random, lo highlight despues se lo quita
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)
        
        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);

    }, 100); 

    // limpiamos el intervalo anterios y seleccionamos uno 
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randoTag = pickRandomTag()
            highlightTag(randoTag)
        }, 100);

    }, times * 100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tags') //traemos todos los span

    return tags[Math.floor(Math.random() * tags.length)]// floor aprixima 
}

function highlightTag (tag) {
    tag.classList.add('highlight')
}


function unhighlightTag (tag) {
    tag.classList.remove('highlight')
}