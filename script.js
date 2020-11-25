const first = document.querySelector('#first')
const second = document.querySelector('#second')
const third = document.querySelector('#third')

const fourth = document.querySelector('#fourth')
const fifth = document.querySelector('#fifth')
const sixth = document.querySelector('#sixth')

const seventh = document.querySelector('#seventh')
const eight = document.querySelector('#eight')
const ninth = document.querySelector('#ninth')

function addCross() {
    first.style.innerText = "X"
}

first.addEventListener('click', addCross)