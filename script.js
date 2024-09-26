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
    let X = playerX.getPlayer();
    let O = playerO.getPlayer();
    let currentPlayer = X;
    const board = gameBoard();
    let gameOver = false;

    function makeMove (row, column) {
        if (gameOver === true) {
            return false;
        }

        const success = board.setCell(row, column, currentPlayer);

        if (!success) {
            console.log("Cell is filled, try again");
            return false;
        }

        if (checkWinner (currentPlayer)) {
            console.log(`Player ${currentPlayer} wins!`);
            gameOver = true;
            return true;
        }

        if (checkDraw()) {
            console.log("It's a draw!");
            gameOver = true;
            return true;
        }

        currentPlayer = currentPlayer === X ? O : X;
        return true;
    }
    
    function checkWinner (currentPlayer) {
        for (let row = 0; row < 3; row++) {
            if (board.getBoard()[row][0].getValue() === currentPlayer &&
                board.getBoard()[row][1].getValue() === currentPlayer &&
                board.getBoard()[row][2].getValue() === currentPlayer) {
                return true;
            }
        }

        for (let column = 0; column < 3; column++) {
            if (board.getBoard()[0][column].getValue() === currentPlayer &&
                board.getBoard()[1][column].getValue() === currentPlayer &&
                board.getBoard()[2][column].getValue() === currentPlayer) {
                    return true;
            }
        }

        if (board.getBoard()[0][0].getValue() === currentPlayer &&
            board.getBoard()[1][1].getValue() === currentPlayer &&
            board.getBoard()[2][2].getValue() === currentPlayer) {
                return true;
        }

        if (board.getBoard()[0][2].getValue() === currentPlayer &&
            board.getBoard()[1][1].getValue() === currentPlayer &&
            board.getBoard()[2][0].getValue() === currentPlayer) {
                return true;
        }
        return false;
    };

    function checkDraw () {
        const boardState = board.getBoard();
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (!boardState[row][col].isFilled()) {
                    return false
                }
            }
        }
        return true;
    }

    function nextTurn () {
        while (!gameOver) {
            const userInput = prompt('Player move, e.g., 0,1');
            const [row, column] = userInput.split(',').map(Number);

            if (row < 0 || row > 2 || column < 0 || column > 2) {
                console.log('Invalid move')
                continue;
            }
            
            const moveMade = makeMove(row, column);
            if (!moveMade) {
                console.log('Cell filled');
            }
        }
    }

    return { makeMove, checkWinner, checkDraw, nextTurn };
};

function Cell () {
    let value = '';

    const playerSymbol = (symbol) => {
        value = symbol
    }

    const isFilled = () => value !== '' && value !== null;
    const getValue = () => value;

    return { playerSymbol, isFilled, getValue }
};

const playerX = createPlayer('X');
const playerO = createPlayer('O');
const gameStart = gameController().nextTurn();

const realBoard = gameBoard()
realBoard.setCell(0, 0, 'null')
realBoard.setCell(0, 1, 'O')

console.log(realBoard.getBoard()[0][0].getValue())
console.log(realBoard.getBoard()[0][1].getValue())
console.log(playerO.getPlayer())