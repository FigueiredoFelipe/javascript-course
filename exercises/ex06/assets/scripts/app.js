const d1 = document.getElementById('area')
// // addEventListener('click')


function clicar () {
    d1.innerText = 'Clicou'
    d1.style.background = 'yellow'
}

function entrar () {
    d1.style.background = 'blue'
    d1.innerText = 'Entrou!'
}

function sair (){
    d1.style.background = ''
    d1.innerText = 'Saiu!'
}


d1.addEventListener('click', clicar)
d1.addEventListener('mouseenter', entrar)
d1.addEventListener('mouseout', sair)
