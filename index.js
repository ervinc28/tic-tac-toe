// adding victory conditions
const victoryConditions = 
    [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]


 // Adding Elements
let board = [
    {id: 0, player: undefined},
    {id: 1, player: undefined},
    {id: 2, player: undefined}, 
    {id: 3, player: undefined}, 
    {id: 4, player: undefined}, 
    {id: 5, player: undefined}, 
    {id: 6, player: undefined},
    {id: 7, player: undefined}, 
    {id: 8, player: undefined}
]
let player1Move = 'X';
let player2Move = 'O';
let playerOneTurn = true;
let gameOver = false;

// Add QuerySelectors

const victoryMessageElement = document.querySelector('.victory')
const nextMoveElement = document.querySelector('.turn')
const reset = document.querySelector('#reset')


// Reset Button
reset.addEventListener('click', resetGame )

// Adding Functions
// const startGame = () {
    
// }
// const victoryMessage = ( => `Victory is: ${nextMove}`)
// const nextMoveMessage = ( => `Next move: ${nextMove}`)





// add EventListeners 
let boxes = document.querySelectorAll('.box')
   
// document.querySelectorAll('.box').map(box) => box.addEventListener('click', {event} => handleBoxClick{event}))
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', (e) => handleBoxClick(e))

    }

function handleBoxClick(event) {
    // event.target.innerText = 'cube';
    if(player1Move === true) {
        event.target.innerText = 'X';
        nextMoveElement.innerText = 'O';
        board[event.target.dataset.boxIndex].player = 'player 1';
        event.target.classList.add('disabled')
        checkVictory('player 1')
        player1Move = false
    }else  {
        player1Move = true
        event.target.innerText = 'O';
        nextMoveElement.innerText = 'X';
        event.target.classList.add('disabled')
        board[event.target.dataset.boxIndex].player = 'player 2';
        checkVictory('player 2')
    }
        console.log('board',board)
    }

function checkVictory(playerName ) {
    const allPlayerSpots = []
    for(let i = 0; i < board.length; i++) {
        if(board[i].player === playerName){
            allPlayerSpots.push(board[i].id)
        }
    }
     
    for(let i = 0; i < victoryConditions.length; i++) {
            let hasValue1 = allPlayerSpots.includes(victoryConditions[i][0])
            let hasValue2 = allPlayerSpots.includes(victoryConditions[i][1])
            let hasValue3 = allPlayerSpots.includes(victoryConditions[i][2])
            if(hasValue1 && hasValue2 && hasValue3) {
                console.log(playerName, 'won')
            }
    }
    console.log(playerName, allPlayerSpots)
}

function resetGame() {
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = ''
    }
    for(let i = 0; i < board.length; i++) {
        if(board[i].player === ''){
            allPlayerSpots.push(board[i].id)
        }
    }
}

    

//     const target = target.event
//     const boxIndex = target.dataset.boxIndex!= '') {
//         return;
//     }else {
//         boxIndexValues{boxIndex} = nextMove;
//         target.innerHTML = nextMove;
//         checkVictory();
//         changeNextMove();
//     }



// function changeNextMove() {
//     nextMove = nextMove === 'X' ? '0': 'X';
//     nextMoveElement.innerHTML = nextMoveMessage();
// }

// function checkVictory() {
//     for(let i = 0; i <= 8; i++) {
//         const victoryCondition = victoryConditions[i];
//         if(victoryCondition[0] == '' || 
//         victoryCondition[1] == '' ||
//         victoryCondition[2] == '' ||

    

//     }
// }




// // Reset Button
// reset.addEventListener('click', )
