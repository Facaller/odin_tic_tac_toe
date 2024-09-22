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

    return { player, playerSymbol, getPlayer };
}

function gameController () {
    let currentPlayer = 'X';
    const board = gameBoard();
    let gameOver = false;

    function makeMove (row, column, currentPlayer) {
        if (gameOver === true) {
            return
        }

        const success = board.setCell(row, column, currentPlayer);

        if (!success) {
            console.log("Cell is filled, try again");
            return
        }

        currentPlayer = currentPlayer === 'X' ? 'Y' : 'X';
    }
}

function Cell () {
    let value = '';

    const playerSymbol = (symbol) => {
        value = symbol
    }

    const isFilled = () => value !== '' && value !== null;
    const getValue = () => value;

    return { playerSymbol, isFilled, getValue }
};

const realBoard = gameBoard()
realBoard.setCell(0, 0, 'null')
realBoard.setCell(0, 1, 'Y')

console.log(realBoard.getBoard()[0][0].getValue())
console.log(realBoard.getBoard()[0][1].getValue())