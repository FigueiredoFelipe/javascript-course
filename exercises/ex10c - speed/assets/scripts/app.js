const speedInput = document.querySelector('input#txt-speed')
const informBtn = document.querySelector('input#inf-btn')
let display = document.querySelector('article#monitor')


const checkSpeed = () => {
    let ckSpeed = Number(speedInput.value)
    display.innerHTML = `You were traveling at ${ckSpeed}Km/h. Drive safe!!`
    display.innerHTML = `You were traveling at ${ckSpeed}Km/h. You've been fined!!`
}




informBtn.addEventListener('click', checkSpeed)