var arr = [2, 1, 4, 5, 7]

var getPositionArrayElement = (element, array) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return console.log(array.indexOf(element))
        }
    }
    return console.log('There is no exact this element in this array.')
}

getPositionArrayElement(5, arr)