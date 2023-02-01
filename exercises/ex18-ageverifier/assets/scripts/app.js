const currentYear = new Date().getFullYear()

const birthYear = document.querySelector('#user-age')
const userMale = document.getElementsByName('gender')[0]
const userFemale = document.getElementsByName('gender')[1]
const userOther = document.getElementsByName('gender')[2]

const displayData = document.getElementById('display-data')
const button = document.getElementsByClassName('handle-button')[0]

const femaleStage = ["Baby girl", "Little girl", "Girl", "Teenage girl", "Young woman", "Woman", "Older woman", "Elderly woman"]
const maleStage = ["Baby boy", "Little boy", "Boy", "Teenage boy", "Young man", "Man", "Older man", "Elderly man"]


/*Years for validation test: 2023, 2022, 2019, 2014, 2003, 1987, 1967, 1957 */


const verify = () => {

    let userAge = currentYear - birthYear.value

    /*Male*/

    if (userMale.checked === true && userAge == 0) {
        displayData.innerText = `The user informed us he is a ${maleStage[0]} and will complete ${++userAge}-year-old next year.`
        document.getElementById("image").src = "./assets/images/9-baby-boy.png"
    }

    else if (userMale.checked === true && userAge > 0 && userAge <= 1) {

        displayData.innerText = `The user informed us he is a ${maleStage[0]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/9-baby-boy.png"
    }

    else if (userMale.checked === true && userAge > 1 && userAge <= 3) {
        displayData.innerText = `The user informed us he is a ${maleStage[0]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/9-baby-boy.png"
    }

    else if (userMale.checked === true && userAge > 3 && userAge <= 8) {
        displayData.innerText = `The user informed us he is a ${maleStage[1]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/10-little-boy.png"

    }

    else if (userMale.checked === true && userAge > 8 && userAge <= 13) {
        displayData.innerText = `The user informed us he is a ${maleStage[2]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/11-boy.png"

    }

    else if (userMale.checked === true && userAge > 13 && userAge <= 19) {
        displayData.innerText = `The user informed us he is a ${maleStage[3]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/12-teenage-boy.png"

    }

    else if (userMale.checked === true && userAge > 19 && userAge <= 35) {
        displayData.innerText = `The user informed us he is a ${maleStage[4]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/13-young-man.png"

    }

    else if (userMale.checked === true && userAge > 35 && userAge <= 55) {
        displayData.innerText = `The user informed us he is a ${maleStage[5]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/14-man.png"

    }

    else if (userMale.checked === true && userAge > 55 && userAge <= 65) {
        displayData.innerText = `The user informed us he is a ${maleStage[6]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/15-older-man.png"

    }

    else if (userMale.checked === true && userAge > 65 && userAge <= 120) {
        displayData.innerText = `The user informed us he is a ${maleStage[7]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/16-elderly-man.png"

    }

    /*Female*/

    else if (userFemale.checked === true && userAge == 0) {
        displayData.innerText = `The user informed us she is a ${femaleStage[0]} and will complete ${++userAge}-year-old next year.`
        document.getElementById("image").src = "./assets/images/1-baby-girl.png"

    }

    else if (userFemale.checked === true && userAge > 0 && userAge <= 1) {
        displayData.innerText = `The user informed us she is a ${femaleStage[0]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/1-baby-girl.png"

    }

    else if (userFemale.checked === true && userAge > 1 && userAge <= 3) {
        displayData.innerText = `The user informed us she is a ${femaleStage[0]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/1-baby-girl.png"

    }

    else if (userFemale.checked === true && userAge > 3 && userAge <= 8) {
        displayData.innerText = `The user informed us she is a ${femaleStage[1]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/2-little-girl.png"

    }

    else if (userFemale.checked === true && userAge > 8 && userAge <= 13) {
        displayData.innerText = `The user informed us she is a ${femaleStage[2]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/3-girl.png"

    }

    else if (userFemale.checked === true && userAge > 13 && userAge <= 19) {
        displayData.innerText = `The user informed us she is a ${femaleStage[3]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/4-teenage-girl.png"

    }

    else if (userFemale.checked === true && userAge > 19 && userAge <= 35) {
        displayData.innerText = `The user informed us she is a ${femaleStage[4]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/5-young-woman.png"

    }

    else if (userFemale.checked === true && userAge > 35 && userAge <= 55) {
        displayData.innerText = `The user informed us she is a ${femaleStage[5]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/6-woman.png"

    }

    else if (userFemale.checked === true && userAge > 55 && userAge <= 65) {
        displayData.innerText = `The user informed us she is a ${femaleStage[6]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/7-older-woman.png"

    }

    else if (userFemale.checked === true && userAge > 65 && userAge <= 120) {
        displayData.innerText = `The user informed us she is a ${femaleStage[7]} and will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = "./assets/images/8-elderly-woman.png"

    }


    /*Other*/

    else if (userOther.checked === true && userAge >= 0 && userAge <= 120) {
        displayData.innerText = `The user will complete ${userAge}-years-old by the end of the current year.`
        document.getElementById("image").src = ""
    }


    else {
        alert('Please insert a valid Birth Date and Gender.')
    }

}


button.addEventListener('click', verify)