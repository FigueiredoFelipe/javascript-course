let age = 64

console.log(`Você tem ${age} anos.`)

    if (age >= 18 ){
    console.log('Maior de idade')
    } 
        else if (age <= 16)
        console.log('Menor impúbere')
            else if (age >16 && age < 18) {
            console.log('Menor púbere')} else {
            console.log('Menor de idade.')}

    if (age >= 18 && age < 65){
        console.log('Voto obrigatório')
    } else if (age >=16 && age < 18 || age >= 65){
        console.log('Voto opcional')
    } else {
        console.log('Não vota.')
    }