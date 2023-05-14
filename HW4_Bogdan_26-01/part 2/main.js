var button = document.querySelector('.btn')

button.addEventListener('click', () => {
    var text = document.querySelector('.text')
    text.innerText = prompt('Что вывести?')
})
