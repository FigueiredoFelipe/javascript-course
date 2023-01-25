const veriButton = document.getElementById('ver-btn')

const maxSpeed = 60
const txtv = document.getElementById('txtvel')
let res = document.querySelector('div#res')


const velocidade = () => {
    let vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é <strong>${vel}</strong> Km/h.`
    if (vel > maxSpeed) {
        res.innerHTML = `Sua velocidade foi superior a ${maxSpeed}Km/h. Você foi <strong>MULTADO!</strong>`
        res.innerHTML += `<p>Velocidade auferida ${vel}Km/h.</p>`
    } else {
    res.innerHTML += `<p>Dirija sempre com o cinto de segurança!</p>`
}
}

veriButton.addEventListener('click', velocidade)