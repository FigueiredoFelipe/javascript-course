const button = document.querySelector('#verify-btn')
const userInput = document.querySelector('#txt-age')
const board = document.querySelector('#result-div')

const check = () => {
    let age = Number(userInput.value)
    board.innerHTML = `O usuário tem <strong>${age}</strong> anos.`
    if (age >= 18) {
        board.innerHTML += `<p>É maior de idade.</p>`
    } else if (age >= 16 && age < 18) {
        board.innerHTML += `<p>É menor púbere.</p>`
    } else if (age < 16) {
        board.innerHTML += `<p>É menor impúbere.</p>`
    }

    if (age >= 18 && age < 65) {
        board.innerHTML += `<p>O voto é obrigatório.</p>`
    } else if (age >= 16 && age < 18 || age >= 65) {
        board.innerHTML += `<p>O voto é facultativo.</p>`
    } else if (age < 16) {
        board.innerHTML += `<p><strong>Não pode votar.</strong></p>`
    } else {
        return
    }
}

button.addEventListener('click', check)