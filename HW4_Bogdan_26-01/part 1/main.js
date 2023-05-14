function increment() {
    var counter = document.getElementById("counter")
    var value = Number(counter.innerText)
    if (value >= 0) {
        counter.innerText = value + 1
        counter.style.color = "green"
    }
}

function decrement() {
    var counter = document.getElementById("counter")
    var value = Number(counter.innerText)
    if (value > 0) {
        counter.innerText = value - 1
        counter.style.color = "red"
    }
}