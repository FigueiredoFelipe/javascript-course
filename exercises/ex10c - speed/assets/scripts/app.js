const speedInput = document.querySelector('input#txt-speed')
const informBtn = document.querySelector('input#inf-btn')
const display = document.querySelector('article#monitor')
const speedLimit = 60

document.querySelector('#inf-btn')


const checkSpeed = () => {
    let ckSpeed = Number(speedInput.value)
    if (ckSpeed <= speedLimit) {
        display.innerHTML = `You were traveling at <strong>${ckSpeed}Km/h</strong>.`
        display.innerHTML += `<p>Drive safe.</p>`
    } else if (ckSpeed > 60) {
        display.innerHTML = `You were traveling at <strong>${ckSpeed}Km/h.</strong>`
        display.innerHTML += `<p><strong>You've been fined!!</strong></p>`
    } else {
    }
}

// Estudar como habilitar enter para enviar o formulário


informBtn.addEventListener('click', checkSpeed)