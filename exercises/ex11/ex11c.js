let age = 65
    console.log(`A idade do usuário e dé ${age} anos.`)

    if (age >= 18){
        console.log(`É maior.`)
    } else if (age >= 16 && age < 18){
        console.log(`É menor púbere.`)
    } else if (age < 16){
        console.log(`É menor impúbere.`)
    }

    if (age >= 18 && age < 65){
        console.log(`O voto é obrigatório.`)
    } else if (age >= 16 && age < 18 || age >= 65){
        console.log(`O voto é opcional`)
    } else {
        console.log(`Não vota`)
    }