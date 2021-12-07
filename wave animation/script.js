const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => (
    label.innerHTML = label.innerText
        .split('')
        .map((letter, pico) =>  `<span style='transition-delay: ${pico  * 50}ms'>${letter}</span>`)
        .join('')
))