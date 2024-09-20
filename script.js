function gameBoard () {
    const rows  = 3;
    const columns  = 3;
    const board = [];
    
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i][j] = Cell()
        }
    }
    const getBoard = () => board;
    board[0][0].playerSymbol('X')
    

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
cell.playerSymbol('Y');


const realBoard = gameBoard()


console.log(realBoard.getBoard())
console.log(realBoard.getBoard()[0][0].getValue());
console.log(realBoard.getBoard())