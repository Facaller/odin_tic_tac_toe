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
    
    const setCell = (row, column, symbol) => {
        const cell = board[row][column];
        if (!cell.isFilled()) {
            cell.playerSymbol(symbol)
        } else {
            console.log("Cell is filled")
        }
    }

    return { getBoard, setCell };
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

const realBoard = gameBoard()
realBoard.setCell(0, 0, 'X')
realBoard.setCell(0, 0, 'Y')

console.log(realBoard.getBoard()[0][0].getValue())
console.log(realBoard.getBoard()[0][0].getValue())