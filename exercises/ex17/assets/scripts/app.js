const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
const time = new Date()
const displayTime = document.getElementById('time-now')
const hour = parseInt(Math.random() * 23)
// const hour = time.getHours()
const day = time.getDate()
const month = monthNames[time.getMonth()]
const year = time.getFullYear()

const img = document.getElementsByTagName('img')
const allImages = img.innerHTML

displayTime.innerText = `Agora são ${hour} horas do dia ${day} do mês de ${month} de ${year}.`


if (hour >= 6 && hour < 11) {
    document.getElementById("image").src = "./assets/images/01.png";
} else if (hour >= 11 && hour < 15) {
    document.getElementById("image").src = "./assets/images/02.png"
} else if (hour >= 15 && hour < 18) {
    document.getElementById("image").src = "./assets/images/03.png";
} else if (hour >= 18 && hour < 21) {
    document.getElementById("image").src = "./assets/images/04.png";
} else if (hour >= 21 && hour <= 24) {
    document.getElementById("image").src = "./assets/images/05.png";
} else if (hour >= 1 && hour < 6) {
    document.getElementById("image").src = "./assets/images/06.png";
}