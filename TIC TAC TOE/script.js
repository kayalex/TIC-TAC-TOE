const board = document.getElementById('board')
const cell = document.querySelectorAll('.cell')

const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const winDiv = document.getElementById('winningMessage')
//global variables
let turn = 'o'
const WIN_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let boardLetter = ['','','','','','','','','']


// CHECK WIN FUNCTION
function checkWin() {
    for(let i = 0; i < WIN_COMBINATIONS.length; i++){
        if(boardLetter[WIN_COMBINATIONS[i][0]] == boardLetter[WIN_COMBINATIONS[i][1]] && boardLetter[WIN_COMBINATIONS[i][1]] == boardLetter[WIN_COMBINATIONS[i][2]] && boardLetter[WIN_COMBINATIONS[i][1]] != ''){
                winDiv.classList.add('won')
            }
    }
}

//turn changing function
function changeTurn(){
    checkWin()
    if(turn == 'x'){
        turn = 'o'
    }else{
        turn = 'x'
    }
    console.log(boardLetter);
    
}
//function to check if cell is alredy filled


function events(){
    checkWin()
    one.addEventListener('click', function(e){
    checkWin()
    changeTurn()
    
    if(e.currentTarget.classList.contains('x') || e.currentTarget.classList.contains('o')){
        events()
    }else{
        if(turn == 'x'){
            boardLetter[0] = 'x'
        }else if(turn == 'o'){
            boardLetter[0] = 'o'
        }
        one.classList.add(turn)
    }
})

two.addEventListener('click', function(e){
    checkWin()
    changeTurn()
    if(e.currentTarget.classList.contains('x') || e.currentTarget.classList.contains('o')){
        events()
    }else{
        if(turn == 'x'){
            boardLetter[1] = 'x'
        }else if(turn == 'o'){
            boardLetter[1] = 'o'
        }
        two.classList.add(turn)
    }
})

three.addEventListener('click', function(e){
    checkWin()
    changeTurn()
    if(e.currentTarget.classList.contains('x') || e.currentTarget.classList.contains('o')){
        events()
    }else{
        if(turn == 'x'){
            boardLetter[2] = 'x'
        }else if(turn == 'o'){
            boardLetter[2] = 'o'
        }
        three.classList.add(turn)
    }
})

four.addEventListener('click', function(e){
    checkWin()
    changeTurn()
    if(e.currentTarget.classList.contains('x') || e.currentTarget.classList.contains('o')){
        events()
    }else{
        if(turn == 'x'){
            boardLetter[3] = 'x'
        }else if(turn == 'o'){
            boardLetter[3] = 'o'
        }
        four.classList.add(turn)
    }
})

five.addEventListener('click', function(e){
    checkWin()
    changeTurn()
    if(e.currentTarget.classList.contains('x') || e.currentTarget.classList.contains('o')){
        events()
    }else{
        if(turn == 'x'){
            boardLetter[4] = 'x'
        }else if(turn == 'o'){
            boardLetter[4] = 'o'
        }
        five.classList.add(turn)
    }
})

six.addEventListener('click', function(e){
    checkWin()
    changeTurn()
    if(e.currentTarget.classList.contains('x') || e.currentTarget.classList.contains('o')){
        events()
    }else{
        if(turn == 'x'){
            boardLetter[5] = 'x'
        }else if(turn == 'o'){
            boardLetter[5] = 'o'
        }
        six.classList.add(turn)
    }
})

seven.addEventListener('click', function(e){
    checkWin()
    changeTurn()
    if(e.currentTarget.classList.contains('x') || e.currentTarget.classList.contains('o')){
        events()
    }else{
        if(turn == 'x'){
            boardLetter[6] = 'x'
        }else if(turn == 'o'){
            boardLetter[6] = 'o'
        }
        seven.classList.add(turn)
    }
})

eight.addEventListener('click', function(e){
    checkWin()
    changeTurn()
    if(e.currentTarget.classList.contains('x') || e.currentTarget.classList.contains('o')){
        events()
    }else{
        if(turn == 'x'){
            boardLetter[7] = 'x'
        }else if(turn == 'o'){
            boardLetter[7] = 'o'
        }
        eight.classList.add(turn)
    }
})

nine.addEventListener('click', function(e){
    checkWin()
    changeTurn()
    if(e.currentTarget.classList.contains('x') || e.currentTarget.classList.contains('o')){
        events()
    }else{
        if(turn == 'x'){
            boardLetter[8] = 'x'
        }else if(turn == 'o'){
            boardLetter[8] = 'o'
        }
        nine.classList.add(turn)
    }
})}
function game() {
    
    checkWin()
    events()   
}
game()