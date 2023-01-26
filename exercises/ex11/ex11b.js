let age = 65

console.log(`A idade do usuário é de ${age} anos.`)

    if (age >= 18){
        console.log("É maior.")
    } else if (age >= 16 && age <18){
        console.log(`É menor púbere.`)
    } else if (age < 16){
        console.log(`É menor impúbere.`)
    }

    if (age < 16){
        console.log(`Não vota.`)
    } else if (age >= 16 && age < 18 || age >= 65){
        console.log(`O voto é opcional.`)
    } else if (age >= 18){
        console.log(`O voto é obrigatório.`)
    }


// IDADE 
// SE MAIOR >= 18
// MENOR PÚBERE >=16 < 18
// MENOR IMPÚBERE <16

// VOTAR
// OPCIONAL
// OBRIGATÓRIA
// NÃO VOTA