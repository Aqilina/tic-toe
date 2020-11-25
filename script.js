// const first = document.querySelector('#1')
// const second = document.querySelector('#2')
// const third = document.querySelector('#3')
//
// const fourth = document.querySelector('#4')
// const fifth = document.querySelector('#5')
// const sixth = document.querySelector('#6')
//
// const seventh = document.querySelector('#7')
// const eight = document.querySelector('#8')
// const ninth = document.querySelector('#9')

const cell = document.getElementsByClassName('cell')
const result = document.querySelector('.result')
let box = document.querySelector('.box')
let btnPlay = document.querySelector('.btnPlay')

let allItems = [...cell]
let selectedIndex
let itemClickedId

let trigger = true
let triggerStartGame = true
let winnerBoard = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
]

let playerX = 'X'
let playerO = 'O'
let empty = ''


// console.log(allItems)



function otherWay(){
    allItems.map(item => {
        item.addEventListener('click', itemClick)
    })
}
otherWay()

function itemClick(event) { // sita antra
    itemClickedId = event.path[0].id
    // console.log(itemClickedId)

    selectedIndex = allItems.findIndex(el => el.id === itemClickedId)
    selectedIndex = allItems[selectedIndex]

    // console.log(selectedIndex)

    if(triggerStartGame){  /// N.B. !!! kad zaidimas nesibaigtu po papildomo paspaudimo !!!!!!!!!!!!!!
        startGame()
    }

}


function startGame() {
    // console.log(selectedIndex)
    // console.log(allItems)

    if(trigger){
        allItems.map(item => {
            if (item.id === itemClickedId && item.innerHTML === '') {
                item.innerHTML = playerX
                trigger = false
            }
        })
    }
    if(trigger === false){
        allItems.map(item => {
            if (item.id === itemClickedId && item.innerHTML === '' ) {
                item.innerHTML = playerO
                trigger = true
            }
        })
    }
    checkWhoWins()
}

function checkWhoWins(){
        if (allItems[0].innerHTML !== empty && allItems[0].innerHTML === allItems[1].innerHTML && allItems[1].innerHTML === allItems[2].innerHTML) {
            if (allItems[0].innerHTML === playerX && allItems[1].innerHTML === playerX && allItems[2].innerHTML === playerX) {
                triggerStartGame = false
                result.innerHTML = "X player won!!!"
                console.log('winner X')
            }
            if (allItems[0].innerHTML !== empty && allItems[0].innerHTML === playerO && allItems[1].innerHTML === playerO && allItems[2].innerHTML === playerO) {
                triggerStartGame = false
                result.innerHTML = "O player won!!!"
                console.log('winner 0')
            }
        }

        if (allItems[3].innerHTML !== empty && allItems[3].innerHTML === allItems[4].innerHTML && allItems[4].innerHTML === allItems[5].innerHTML) {
            if (allItems[3].innerHTML === playerX && allItems[4].innerHTML === playerX && allItems[5].innerHTML === playerX){
                triggerStartGame = false
                result.innerHTML = "X player won!!!"
                console.log('winner X')
            }
            if (allItems[3].innerHTML === playerO && allItems[4].innerHTML === playerO && allItems[5].innerHTML === playerO){
                triggerStartGame = false
                result.innerHTML = "O player won!!!"
                console.log('winner 0')
            }
        }

        if (allItems[6].innerHTML !== empty && allItems[6].innerHTML === allItems[7].innerHTML && allItems[7].innerHTML === allItems[8].innerHTML) {
            if (allItems[6].innerHTML === playerX && allItems[7].innerHTML === playerX && allItems[8].innerHTML === playerX){
                triggerStartGame = false
                result.innerHTML = "X player won!!!"
                console.log('winner X')
            }
            if (allItems[6].innerHTML === playerO && allItems[7].innerHTML === playerO && allItems[8].innerHTML === playerO){
                triggerStartGame = false
                result.innerHTML = "0 player won!!!"
                console.log('winner 0')
            }
        }

        if (allItems[0].innerHTML !== empty && allItems[0].innerHTML === allItems[3].innerHTML && allItems[3].innerHTML === allItems[6].innerHTML) {
            if (allItems[0].innerHTML === playerX && allItems[3].innerHTML === playerX && allItems[6].innerHTML === playerX){
                triggerStartGame = false
                result.innerHTML = "X player won!!!"
                console.log('winner X')
            }
            if (allItems[1].innerHTML === playerO && allItems[4].innerHTML === playerO && allItems[7].innerHTML === playerO){
                triggerStartGame = false
                result.innerHTML = "0 player won!!!"
                console.log('winner 0')
            }
        }

        if (allItems[1].innerHTML !== empty && allItems[1].innerHTML === allItems[4].innerHTML && allItems[4].innerHTML === allItems[7].innerHTML) {
            if (allItems[1].innerHTML === playerX && allItems[4].innerHTML === playerX && allItems[7].innerHTML === playerX) {
                triggerStartGame = false
                result.innerHTML = "X player won!!!"
                console.log('winner X')
            }
            if (allItems[1].innerHTML === playerO && allItems[4].innerHTML === playerO && allItems[7].innerHTML === playerO){
                triggerStartGame = false
                result.innerHTML = "0 player won!!!"
                console.log('winner 0')
            }
        }

        if (allItems[2].innerHTML !== empty && allItems[2].innerHTML === allItems[5].innerHTML && allItems[5].innerHTML === allItems[8].innerHTML) {
            if (allItems[2].innerHTML === playerX && allItems[5].innerHTML === playerX && allItems[8].innerHTML === playerX){
                triggerStartGame = false
                result.innerHTML = "X player won!!!"
                console.log('winner X')
            }
            if (allItems[2].innerHTML === playerO && allItems[5].innerHTML === playerO && allItems[8].innerHTML === playerO){
                triggerStartGame = false
                result.innerHTML = "0 player won!!!"
                console.log('winner O')
            }
        }

    if (allItems[0].innerHTML !== empty && allItems[0].innerHTML === allItems[4].innerHTML && allItems[4].innerHTML === allItems[8].innerHTML) {
        if (allItems[0].innerHTML === playerX && allItems[4].innerHTML === playerX && allItems[8].innerHTML === playerX){
            triggerStartGame = false
            result.innerHTML = "X player won!!!"
            console.log('winner X')
        }
        if (allItems[0].innerHTML === playerO && allItems[4].innerHTML === playerO && allItems[8].innerHTML === playerO){
            triggerStartGame = false
            result.innerHTML = "0 player won!!!"
            console.log('winner O')
        }
    }

    if (allItems[2].innerHTML !== empty && allItems[2].innerHTML === allItems[4].innerHTML && allItems[4].innerHTML === allItems[6].innerHTML) {
        if (allItems[2].innerHTML === playerX && allItems[4].innerHTML === playerX && allItems[6].innerHTML === playerX){
            triggerStartGame = false
            result.innerHTML = "X player won!!!"
            console.log('winner X')
        }
        if (allItems[2].innerHTML === playerO && allItems[4].innerHTML === playerO && allItems[6].innerHTML === playerO){
            triggerStartGame = false
            result.innerHTML = "0 player won!!!"
            console.log('winner O')
        }
    }
}

// function playAgain(){
//     allItems.map(item => {
//         item.innerHTML = ''
//     })
// }
//
// btnPlay.addEventListener('click', playAgain)