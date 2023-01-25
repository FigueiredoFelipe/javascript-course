const pais = document.querySelector('input#txt-pais')
const checkBtn = document.querySelector('input#ck-btn')
let res = document.querySelector('div#res')

const brasileiro = 'Brasil'


const validar = () => {
    let nacao = pais.value
    let nacionalidade = 
    res.innerHTML = `Você nasceu no ${nacao}.`
    if (nacao == 'Brasil') {
        res.innerHTML += `<p><strong>Portanto você é brasileiro</strong></p>`} else if (nacao != 'Brasil'){
            res.innerHTML += `<p><strong>Você é estrangeiro.</strong></p>`
        }
    }

checkBtn.addEventListener('click', validar)
