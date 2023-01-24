const p1 = document.getElementsByTagName('p')[1]
// const corpo = document.getElementsByTagName('body')[0]
// const corpo = document.body
// const corpo = document.querySelector('body')
const corpo = document.querySelectorAll('body')[0]
const test = document.getElementsByName('number')
// const d = document.getElementById('msg')
const d = document.querySelector('#msg')


// window.alert(p1.innerText)
corpo.style.background = 'black'
p1.style.color = 'darkblue'




d.style.background = 'green'
d.innerText = 'Estou aguardando'