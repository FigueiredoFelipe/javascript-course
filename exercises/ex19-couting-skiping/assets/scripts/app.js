const start = document.querySelector('#start')
const end = document.querySelector('#end')
const skip = document.querySelector('#skip')
const countButton = document.querySelector('#count')
const result = document.querySelector('#show-result')

const count = () => {
    let startNum = parseInt(start.value)
    let endNum = parseInt(end.value)
    let skipNum = parseInt(skip.value)
    let output = []

    if (skipNum <= 0){
        alert(`It's not possible to skip ZERO, we will consider the value "1"`)
        skipNum = 1
    }

    if (startNum < endNum) {

        for (let i = startNum; i <= endNum; i += skipNum) {
            output.push(i)
            // console.log('I: ', i)
            // console.log('Output: ', output)
        }
    }

    else if (startNum > endNum) {

        for (let i = startNum; i >= endNum; i -= skipNum) {
            output.push(i)
        }
    }
    result.textContent = output.join(`\u{1F449} `)
    result.textContent += `\u{1F3C1}`

}







countButton.addEventListener('click', count)