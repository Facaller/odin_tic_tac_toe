function gameBoard () {
    const rows  = 3;
    const columns  = 3;
    const board = [];
    
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(playerX);
        }
    }
    const getBoard = () => board;

    return {getBoard};
}

function createPlayer (player) {
    const playerSymbol = player;

    const getPlayer = () => playerSymbol;

    return {player, playerSymbol, getPlayer};
}

function gameController () {

}

function Cell () {
    let value = '';

    const playerSymbol = (symbol) => {
        value = symbol
    }

    const isFilled = () => value !== '';
    const getValue = () => value;

    return {playerSymbol, isFilled, getValue}
};

const cell = Cell();
const playerX = cell.playerSymbol('X');


const realBoard = gameBoard()


console.log(realBoard.getBoard())
console.log(cell.getValue())

