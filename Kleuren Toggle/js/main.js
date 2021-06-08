let dropdown = document.querySelector('.dropdown')
let status = document.querySelector('#status')

dropdown.addEventListener('mouseenter', (e) => {
    if (dropdown.classList.contains('closed')) {
        dropdown.classList.remove('closed')
        status.innerHTML = 'open'
    }
})
dropdown.addEventListener('mouseenter', (e) => {
    if (!dropdown.classList.contains('closed')) {
        dropdown.classList.add('closed')
        status.innerHTML = 'closed'
    }
})