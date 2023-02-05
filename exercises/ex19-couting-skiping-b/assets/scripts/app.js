const start = document.querySelector('#start-value')
const end = document.querySelector('#end-value')
const skip = document.querySelector('#skip-value')
let result = []
const displayBoard = document.querySelector('#result')


function count() {

    a = Number(start.value)
    b = Number(end.value)
    c = Number(skip.value)

    result = []

    if (start.value.length == 0 || end.value.length == 0 || skip.value.length == 0) {
        alert('Insert a valid number on Start, End and Skip.')
        return
    }

    if (a < b) {

        for (i = a; i <= b; i += c) {
            result.push(i)
            displayBoard.innerText = result
        }
    } else if (a > b) {

        for (i = a; i >= b; i -= c) {
            result.push(i)
        }
    }
    displayBoard.textContent = result.join(`, \u{1F449}`)
    displayBoard.textContent += `\u{1F3C1}`
}
