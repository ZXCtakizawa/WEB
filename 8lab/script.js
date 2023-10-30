function setBtnLoveOnCLickListener(){
let firstName = prompt('Его имя');
let secondName = prompt('Её имя');
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var number = getRandomInt(0, 100) 
alert (`${firstName} и ${secondName} подходят на ${number}%`)
}

function setBtnBMIOnCLickListener() {
let firstNumberFormula = prompt(`Вес`) 
let secondNumberFormula = prompt(`Рост`)

var formula = firstNumberFormula/((secondNumberFormula/100) ** 2)

if (formula <= 18.5 ){
    attention = "Недостаточный вес"
}
if (formula >= 18.5 && formula <= 25) {
    attention = "Нормально"
}
if (formula >= 25 && formula  <= 30) {
    attention = "У вас излишек веса"
}
if (formula > 30) {
   attention = "У вас ожирение"
}

alert (`${formula} Твой ИМТ = ${attention}`)
}


function setBtnYearOnCLickListener(){
    let year = prompt('Год')

    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
        leapYear = "високосный"
    } else {
        leapYear = "не високосный"
    }
    alert (`${year} год - ${leapYear}`)
}


function setBtnDinnerOnCLickListener(){
    let count = prompt('Кол-во человек');
    let matrix = [];
    let matrixNumber = "";

    for (let i = 0; i < count; i++) {
        matrixNumber = prompt('Имя');
        matrix[i] = matrixNumber;
    }
    alert (`За ужин платит ` + matrix[Math.floor(Math.random() * matrix.length)])
}