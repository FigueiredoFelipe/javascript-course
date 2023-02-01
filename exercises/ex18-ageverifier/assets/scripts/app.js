const currentYear = new Date().getFullYear()
const birthYear = document.querySelector('#user-age')
const userMale = document.getElementsByName('gender')[0]
const userFemale = document.getElementsByName('gender')[1]
const userOther = document.getElementsByName('gender')[2]
const button = document.getElementsByClassName('handle-button')[0]

const femaleStage = ["Baby girl", "Little girl", "Girl", "Teenage girl", "Young woman", "Woman", "Older woman", "Elderly woman"]

const maleStage = ["Baby boy", "Little boy", "Boy", "Teenage boy", "Young man", "Man", "Older man", "Elderly man"]


const verify = () => {

    let userAge = currentYear - birthYear.value

    /*Male*/

    if (userMale.checked === true && userAge == 0){
        console.log(`The user informed us he is a ${maleStage[0]} and will complete ${++userAge}-year-old next year.`)
    }

else if (userMale.checked === true && userAge >0 && userAge <=1){
        console.log(`The user informed us he is a ${maleStage[0]} and will complete ${userAge}-years-old by the end of the current year.`)
    }
    
    else if (userMale.checked === true && userAge > 1 && userAge <=3){
        console.log(`The user informed us he is a ${maleStage[0]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userMale.checked === true && userAge > 3 && userAge <=8){
        console.log(`The user informed us he is a ${maleStage[1]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userMale.checked === true && userAge > 8 && userAge <=13){
        console.log(`The user informed us he is a ${maleStage[2]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userMale.checked === true && userAge > 13 && userAge <=19){
        console.log(`The user informed us he is a ${maleStage[3]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userMale.checked === true && userAge > 19 && userAge <=35){
        console.log(`The user informed us he is a ${maleStage[4]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userMale.checked === true && userAge > 35 && userAge <=55){
        console.log(`The user informed us he is a ${maleStage[5]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userMale.checked === true && userAge > 55 && userAge <=65){
        console.log(`The user informed us he is a ${maleStage[6]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userMale.checked === true && userAge > 65 && userAge <=120){
        console.log(`The user informed us he is a ${maleStage[7]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    /*Female*/

    else if (userFemale.checked === true && userAge == 0){
        console.log(`The user informed us she is a ${femaleStage[0]} and will complete ${++userAge}-year-old next year.`)
    }
    
    else if (userFemale.checked === true && userAge >0 && userAge <=1){
        console.log(`The user informed us she is a ${femaleStage[0]} and will complete ${userAge}-years-old by the end of the current year.`)
    }
    
    else if (userFemale.checked === true && userAge > 1 && userAge <=3){
        console.log(`The user informed us she is a ${femaleStage[0]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userFemale.checked === true && userAge > 3 && userAge <=8){
        console.log(`The user informed us she is a ${femaleStage[1]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userFemale.checked === true && userAge > 8 && userAge <=13){
        console.log(`The user informed us she is a ${femaleStage[2]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userFemale.checked === true && userAge > 13 && userAge <=19){
        console.log(`The user informed us she is a ${femaleStage[3]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userFemale.checked === true && userAge > 19 && userAge <=35){
        console.log(`The user informed us she is a ${femaleStage[4]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userFemale.checked === true && userAge > 35 && userAge <=55){
        console.log(`The user informed us she is a ${femaleStage[5]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userFemale.checked === true && userAge > 55 && userAge <=65){
        console.log(`The user informed us she is a ${femaleStage[6]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    else if (userFemale.checked === true && userAge > 65 && userAge <=120){
        console.log(`The user informed us she is a ${femaleStage[7]} and will complete ${userAge}-years-old by the end of the current year.`)
    }

    
    /*Other*/

    else if (userOther.checked === true && userAge >=0 && userAge <= 120){
        console.log(`The user will complete ${userAge}-years-old by the end of the current year.`)
    }



    

    else {
        alert('Please insert a valid Birth Date and Gender.')
    }

}


button.addEventListener('click', verify)