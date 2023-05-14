var userColor = prompt('Введите цвет: (Красный, Желтый, Зеленый)')

function color (userColor) {
    var colorRed = document.querySelector('.colorRed')
    var colorYellow = document.querySelector('.colorYellow')
    var colorGreen = document.querySelector('.colorGreen')
    var text = document.querySelector('.text')

    switch (userColor) {
        case 'Красный':
            colorRed.style.backgroundColor = 'red'
            text.innerText = 'STOP!'
            break
        case 'Желтый':
            colorYellow.style.backgroundColor = 'yellow'
            text.innerText = 'CAREFUL!'
            break
        case 'Зеленый':
            colorGreen.style.backgroundColor = 'green'
            text.innerText = 'GO!'
            break
        default:
            alert('Неправильный цвет!')
    }
}

color(userColor)