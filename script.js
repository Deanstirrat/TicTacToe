const playBtn = document.getElementById('playBtn');
const singlePlayerButton = document.getElementById('singlePlayerButton')
const twoPlayerButton = document.getElementById('twoPlayerButton')
const continueBtn = document.getElementById('continueBtn')
const gameSelect = document.getElementById('gameSelectModal')
const overlay = document.getElementById('overlay')
const turnDisplay = document.getElementById('turnDisplay')
const winnerModal = document.getElementById('winnerModal')
const winnerHeading = document.getElementById('winnerHeading')


const box1 = document.getElementById('1')
const box2 = document.getElementById('2')
const box3 = document.getElementById('3')
const box4 = document.getElementById('4')
const box5 = document.getElementById('5')
const box6 = document.getElementById('6')
const box7 = document.getElementById('7')
const box8 = document.getElementById('8')
const box9 = document.getElementById('9')

const board = (() => {
    let realBoxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
    let playerTurn = 'X'
    turnDisplay.textContent = 'X\'s turn'
    let box = ['', '', '', '', '', '', '', '', '']

    const displayWinner = () => {
        if (//horizantal
            ((box[0] == box[1] &&
                box[1] == box[2] && box[0] == 'X') ||
                (box[3] == box[4] &&
                    box[4] == box[5] && box[3] == 'X') ||
                (box[6] == box[7] &&
                    box[7] == box[8] && box[6] == 'X')) ||
            //vetical
            ((box[0] == box[3] &&
                box[3] == box[6] && box[0] == 'X') ||
                (box[1] == box[4] &&
                    box[4] == box[7] && box[1] == 'X') ||
                (box[2] == box[5] &&
                    box[5] == box[8] && box[2] == 'X')) ||
            //diagnal
            ((box[0] == box[4] &&
                box[4] == box[8] && box[0] == 'X') ||
                (box[2] == box[4] &&
                    box[4] == box[6] && box[2] == 'X'))) {console.log('x won');winnerHeading.textContent = "X is the winner!";}
        if (//horizantal
            ((box[0] == box[1] &&
                box[1] == box[2] && box[0] == 'O') ||
                (box[3] == box[4] &&
                    box[4] == box[5] && box[3] == 'O') ||
                (box[6] == box[7] &&
                    box[7] == box[8] && box[6] == 'O')) ||
            //vetical
            ((box[0] == box[3] &&
                box[3] == box[6] && box[0] == 'O') ||
                (box[1] == box[4] &&
                    box[4] == box[7] && box[1] == 'O') ||
                (box[2] == box[5] &&
                    box[5] == box[8] && box[2] == 'O')) ||
            //diagnal
            ((box[0] == box[4] &&
                box[4] == box[8] && box[0] == 'O') ||
                (box[2] == box[4] &&
                    box[4] == box[6] && box[2] == 'O'))) winnerHeading.textContent = "O is the winner!"

        winnerModal.classList.remove('inactive')
        overlay.classList.remove('inactive')
    }

    const updatePlayer = () => {
        if (playerTurn == 'X') {
            playerTurn = 'O'
            turnDisplay.textContent = 'O\'s turn'
        }
        else {
            playerTurn = 'X'
            turnDisplay.textContent = 'X\'s turn'
        }
    }

    const makeMove = (boxNum) => {
        if (box[boxNum] == '') {
            box[boxNum] = playerTurn
            updateBoard();
        }
    }

    const resetBoard = () => {
        for (let i = 0; i < 9; i++) {
            box[i] = ''
        }
        playerTurn = 'O'
        updateBoard()
    }

    const checkOpenBoxes = () => {
        return !(box.includes(''))
    }

    const checkForWinner = () => {
        if (!box.every(v => v === '')) {
            if (//horizantal
                ((box[0] == box[1] &&
                    box[1] == box[2] && box[0] != '') ||
                    (box[3] == box[4] &&
                        box[4] == box[5] && box[3] != '') ||
                    (box[6] == box[7] &&
                        box[7] == box[8] && box[6] != '')) ||
                //vetical
                ((box[0] == box[3] &&
                    box[3] == box[6] && box[0] != '') ||
                    (box[1] == box[4] &&
                        box[4] == box[7] && box[1] != '') ||
                    (box[2] == box[5] &&
                        box[5] == box[8] && box[2] != '')) ||
                //diagnal
                ((box[0] == box[4] &&
                    box[4] == box[8] && box[0] != '') ||
                    (box[2] == box[4] &&
                        box[4] == box[6] && box[2] != ''))) {
                //Winner found
                displayWinner()
                resetBoard()
            }
            else if (checkOpenBoxes()) {
                // //game ended in tie
                console.log('game ended in tie')
                resetBoard()
                gameSelect.classList.remove('inactive')
                overlay.classList.remove('inactive')
            }
        }
    }

    const updateBoard = () => {
        for (let i = 0; i < 9; i++) {
            realBoxes[i].innerHTML = ''
            const playerName = document.createElement('p')
            playerName.classList.add('player-name')
            playerName.textContent = box[i]
            realBoxes[i].appendChild(playerName)
        }
        updatePlayer()
        checkForWinner()
    }

    return {
        makeMove
    };
})();

playBtn.onclick = function () {
    if(singlePlayerButton.classList.contains('selected')){
        gameSelect.classList.add('inactive');
        overlay.classList.add('inactive')
        singlePlayerButton.classList.remove('selected')
    }
    else if(twoPlayerButton.classList.contains('selected')){
        gameSelect.classList.add('inactive');
        overlay.classList.add('inactive')
        twoPlayerButton.classList.remove('selected')
    }
}

continueBtn.onclick = function () {
    gameSelect.classList.remove('inactive')
    winnerModal.classList.add('inactive')
}

singlePlayerButton.onclick = function(){
    singlePlayerButton.classList.add('selected')
    twoPlayerButton.classList.remove('selected')
}
twoPlayerButton.onclick = function(){
    twoPlayerButton.classList.add('selected')
    singlePlayerButton.classList.remove('selected')
}



box1.onclick = function () {
    board.makeMove(0)
}
box2.onclick = function () {
    board.makeMove(1)
}
box3.onclick = function () {
    board.makeMove(2)
}
box4.onclick = function () {
    board.makeMove(3)
}
box5.onclick = function () {
    board.makeMove(4)
}
box6.onclick = function () {
    board.makeMove(5)
}
box7.onclick = function () {
    board.makeMove(6)
}
box8.onclick = function () {
    board.makeMove(7)
}
box9.onclick = function () {
    board.makeMove(8)
}
