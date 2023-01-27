const userInput = 100


function parImp(userInput) {
    if (userInput%2 === 0) {
        console.log(`even`)
        return 'even'
    } else {
        console.log(`odd`)
        return 'odd'
    }
}

let res = parImp(userInput)

console.log(res)