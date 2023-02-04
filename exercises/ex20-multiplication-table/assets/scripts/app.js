const generateBtn = document.querySelector('#gen-btn')
const  userInput = document.querySelector('#user-input')
const tab = document.querySelector('#selection')



// const generate = function () {
//     if (userInput.value.length == 0) {
//         window.alert('Please insert a number!')
//     } else if (userInput.value.length != 0){

//         let n = Number(userInput.value)
//         let c = 1
//         tab.innerHTML = ''
//         for (let i = c; i <=10; i += c) {
//             let item =  document.createElement('option')
//             item.text = `${n} x ${c} = ${n*c}`
//             item.value = `tab${c}`
//             tab.appendChild(item)
//             console.log(n * i);
//         }
//     }
    

// }


const generate = function () {
    if (userInput.value == 0){
        alert('Pease insert a number!')
    } else if (userInput.value != 0){
        let n = Number(userInput.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    } 


}














generateBtn.addEventListener('click', generate)