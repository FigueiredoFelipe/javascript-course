const addBtn = document.querySelector('#add-btn')
const analyzeBtn = document.querySelector('#parsing-btn')
const userInput = document.querySelector(`#inp-number`)
const tab = document.querySelector('#pool')
const result = document.querySelector('#result')
const numberPool = []


function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adding() {
    let chosenNumber = Number(userInput.value)

    if (chosenNumber <= 0 || chosenNumber > 100) {
        alert('Only numbers between 1 and 100 are allowed.')
    } else if (inList(chosenNumber, numberPool)) {
        alert('Choose non repeated numbers.')
    } else {
        let item = document.createElement('option')
        item.text = `Number ${chosenNumber} added.`
        item.value = `tab${chosenNumber}`
        tab.appendChild(item)
        numberPool.push(chosenNumber)
    }
    userInput.value = ''
    userInput.focus()
}

function parsingData() {
    if (numberPool.length == 0) {
        alert(`Please don't rush, add some numbers so we can analyze.`)
    } else {

        let higherValue = Number(Math.max(...numberPool))
        let lowestValue = Number(Math.min(...numberPool))
        let sum = numberPool.reduce((acc, cur) => acc + cur, 0)
        let average = sum / numberPool.length

        result.innerHTML = `
            <p>We have <strong>${numberPool.length}</strong> registered numbers.</p>
            <p>The higher value informed was <strong>${higherValue}</strong>.</p>
            <p>The lowest value informed was <strong>${lowestValue}</strong>.</p>
            <p>The sum of all values is equal to <strong>${sum}</strong>.</p>
            <p>The average of the entered values is <strong>${average}</strong>.</p>
        `
    }
}

analyzeBtn.addEventListener('click', parsingData)
addBtn.addEventListener('click', adding)

userInput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
    adding();
    }
})