const whatTime = new Date()
let hora = whatTime.getHours()

if (hora >= 6 && hora < 12){
    console.log(`São ${hora} horas. Bom dia!`)
}
    else if (hora >=12 && hora < 18) {
        console.log(`São ${hora} horas. Boa tarde!`)
}   else if (hora >=18 && hora <= 24 || hora >= 1 && hora < 6){
        console.log(`São ${hora} horas. Boa noite.`)
}
