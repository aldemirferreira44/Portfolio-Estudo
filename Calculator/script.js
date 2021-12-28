var n1 = document.querySelector("#n1")
var n2 = document.querySelector("#n2")
var s = document.querySelector('span')

function soma() {
    s.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}

function sub() {
    s.innerHTML = parseInt(n1.value) - parseInt(n2.value)
}

function mult() {
    s.innerHTML = parseInt(n1.value) * parseInt(n2.value)
}

function div() {
    s.innerHTML = parseInt(n1.value) / parseInt(n2.value)
}
