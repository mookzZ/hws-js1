var userColor = prompt('Введите цвет: (Красный, Желтый, Зеленый)')

function color (userColor) {
    var colorRed = document.querySelector('.colorRed')
    var colorYellow = document.querySelector('.colorYellow')
    var colorGreen = document.querySelector('.colorGreen')
    var text = document.querySelector('.text')

    if (userColor === 'Красный') {
        colorRed.style.backgroundColor = 'red'
        text.innerText = 'STOP!'
    } else if (userColor === 'Желтый') {
        colorYellow.style.backgroundColor = 'yellow'
        text.innerText = 'CAREFUL!'
    } else if (userColor === 'Зеленый') {
        colorGreen.style.backgroundColor = 'green'
        text.innerText = 'GO!'
    } else {
        alert('Неправильный цвет!')
    }
}

color(userColor)