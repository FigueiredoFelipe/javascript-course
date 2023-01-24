const btn =  document.getElementById('addBtn') // Assign addBtn
const tn1 = document.getElementById('txt-1') // Assign txt-1
const tn2 = document.querySelector('input#txt-2') // Assign txt-2
const res = document.querySelector('div#solution') // 


const somar = () => {
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}.`
}

btn.addEventListener('click', somar)