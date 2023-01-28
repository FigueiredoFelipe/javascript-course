let amigo = {
    nome: 'Holly',
    age: 'Perfect',
    peso: 54,
    engordar(p=0){
        console.log(`Engordou`)
            this.peso += p
    }}

amigo.engordar(3)

console.log(amigo)

console.log(amigo.peso)