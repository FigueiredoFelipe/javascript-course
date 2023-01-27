let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

console.log(num)
console.log(`Esta Array tem ${num.length} posições.`)
console.log(`O primeiro valor desta array é ${num[0]}`)

let whatIndex = 5
let pos = num.indexOf(whatIndex)
if (pos == -1){
    console.log(`O índex desejado não foi encontrado`)
} else {
    console.log(`O index de ${whatIndex} é ${pos}.`)
}

