const time = new Date()
const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

const displayTime = document.getElementById('time-now')
// const hour = parseInt(Math.random() * 23) for test.
// const hour = '1'

const hour = time.getHours()
const min = time.getMinutes()
const day = time.getDate()
const month = monthNames[time.getMonth()]
const year = time.getFullYear()

const img = document.getElementsByTagName('img')
const allImages = img.innerHTML
let background = document.getElementById('bg')
let backColor = background.style

displayTime.innerText = `Agora são ${hour}:${min} minutos do dia ${day} do mês de ${month} de ${year}.`



if (hour >= 6 && hour < 11) {
    document.getElementById("image").src = "./assets/images/01.png";
    background.style.backgroundColor = '#b5d1e3';

} else if (hour >= 11 && hour < 15) {
    document.getElementById("image").src = "./assets/images/02.png";
    background.style.backgroundColor = '#2cbbff';

} else if (hour >= 15 && hour < 18) {
    document.getElementById("image").src = "./assets/images/03.png";
    background.style.backgroundColor = '#f5b878';

} else if (hour >= 18 && hour < 21) {
    document.getElementById("image").src = "./assets/images/04.png";
    background.style.backgroundColor = '#d2c3e2';

} else if (hour >= 21 && hour <= 24) {
    document.getElementById("image").src = "./assets/images/05.png";
    background.style.backgroundColor = '#5557b7';

} else if (hour >= 1 && hour < 6) {
    document.getElementById("image").src = "./assets/images/06.png";
    background.style.backgroundColor = '#346692';

}