const playBtn = document.getElementById('playBtn');
const gameSelect = document.getElementById('gameSelectModal')
const overlay = document.getElementById('overlay')

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
    let box = ['', '', '', '', '', '', '', '', '']

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
        updateBoard()
    }

    const checkForWinner = () => {
        if(//horizantal
            ((box[0]==box[1] && 
            box[1]==box[2] && box[0]!='') ||
            (box[3]==box[4] && 
                box[4]==box[5] && box[3]!='')||
                (box[6]==box[7] && 
                    box[7]==box[8] && box[6]!=''))||
                    //vetical
                    ((box[0]==box[3] && 
                        box[3]==box[6] && box[0]!='') ||
                        (box[1]==box[4] && 
                            box[4]==box[7] && box[1]!='')||
                            (box[2]==box[5] && 
                                box[5]==box[8] && box[2]!=''))||
                                //diagnal
                                ((box[0]==box[4] && 
                                    box[4]==box[8] && box[0]!='') ||
                                    (box[2]==box[4] && 
                                        box[4]==box[6] && box[2]!=''))){
                                            resetBoard()
                                            gameSelect.classList.remove('inactive')
                                            overlay.classList.remove('inactive')
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
        if (playerTurn == 'X') playerTurn = 'O'
        else playerTurn = 'X'
        
        checkForWinner()
    }

    return {
        makeMove
    };
})();

playBtn.onclick = function () {
    gameSelect.classList.add('inactive');
    overlay.classList.add('inactive')
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
