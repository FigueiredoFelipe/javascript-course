const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener('click', handleClick)
    button.addEventListener('mouseenter', handleEnter)
    button.addEventListener('mouseout', handleExit)
});

function handleClick (event) {
    const el = event.target
    el.classList.toggle('active') 
    if (el.className.includes("active")) {
        el.innerText = 'Interaja'
    } else {
        el.innerText = 'Clicou'
    }
}

function handleEnter (event) {
    const el = event.target
    el.classList.add('mouseOn')
    el.innerText = 'Entrou!'
}

function handleExit (event){
    const el = event.target
    el.classList.remove('mouseOn')
    el.innerText = 'Saiu!'
}