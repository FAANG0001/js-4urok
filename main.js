

let imya = prompt( ' Введите имя ')
let num = +prompt( 'Введите год рождение')
let year = +prompt( ' нынешний год')
let = answer = 1

for(let i = 0; i < num; i++) {

        answer = num - year
}
alert(imya + ', ваш возраст '+answer)


function rand(min,max){

    return Math.floor(Math.random() * (max + 1 - min ) + min)
}


let minNumber = +prompt(' Введите минимальное значение ')
let maxNumber = +prompt(' Введите максимальное значение ')

for(let i = 1; i < 2; i++) {

    let one = rand(minNumber,maxNumber)
    let two = rand(minNumber,maxNumber)
    let result = +prompt( one + ' + ' + two + ' =')
    let last = result == ( one + two) ? 'Good' : 'Bad'
    alert(one + ' + ' + two + ' = ' + ( one + two ) + '  Ваш ответ ' + result + ', ' + last)
}
for(let i = 1; i < 2; i++) {

    let one = rand(minNumber,maxNumber)
    let two = rand(minNumber,maxNumber)
    let result = +prompt( one + ' - ' + two + ' =')
    let last = result == ( one - two) ? 'Good' : 'Bad'  
    alert(one + ' - ' + two + ' = ' + ( one - two ) + '  Ваш ответ ' + result + ', ' + last)
}
for(let i = 1; i < 2; i++) {

    let one = rand(minNumber,maxNumber)
    let two = rand(minNumber,maxNumber)
    let result = +prompt( one + ' * ' + two + ' =')
    let last = result == ( one * two) ? 'Good' : 'Bad'  
    alert(one + ' * ' + two + ' = ' + ( one * two ) + '  Ваш ответ ' + result + ', ' + last)
}
for(let i = 1; i < 2; i++) {

    let one = rand(minNumber,maxNumber)
    let two = rand(minNumber,maxNumber)
    let result = +prompt( one + ' / ' + two + ' =')
    let last = result == ( one / two) ? 'Good' : 'Bad'  
    alert(one + ' / ' + two + ' = ' + ( one / two ) + '  Ваш ответ ' + result + ', ' + last)
}