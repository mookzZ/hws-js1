var input = document.querySelector('#input')
var createButton = document.querySelector('#create_button')
var todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return alert('Пустые стороки или пробелы запрещены!')
    }
    var div = document.createElement('div')
    var text = document.createElement('p')
    var deleteButton = document.createElement('button')
    var editButton = document.createElement('button')
    deleteButton.setAttribute('class', 'eButton')
    editButton.setAttribute('class', 'eButton')
    deleteButton.innerText = 'DELETE'
    editButton.innerText = 'EDIT'
    div.setAttribute('class', 'block_text')
    text.innerText = input.value
    div.append(text, editButton, deleteButton)
    todoList.prepend(div)
    input.value = ''

    const deleteTodo = () => {
        return div.remove()
    }
    deleteButton.onclick = () => deleteTodo()

    const editTodo = () => {
        var editedText = prompt(`You editing: ${text.innerText}`)
        if (editedText.trim() === '') {
            return alert('Пустые строки или пробелы запрещены!')
        }
        return text.innerText = editedText
    }
    editButton.onclick = () => editTodo()
}

createButton.onclick = () => createTodo()

window.onkeydown = (event) => {
    if (event.keyCode === 13) {
        createTodo()
    }
}