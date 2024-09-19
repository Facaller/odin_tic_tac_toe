function gameBoard () {
    const rows  = 3;
    const columns  = 3;
    const board = [];
    
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i][j] = cell
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
cell.playerSymbol('X');


const realBoard = gameBoard()


console.log(realBoard.getBoard())
console.log(cell.getValue())

// function Cell() {
//     let value = '';

//     const playerSymbol = (symbol) => {
//         value = symbol;
//     };

//     const isFilled = () => value !== '';
//     const getValue = () => value;

//     return { playerSymbol, isFilled, getValue };
// }

// function gameBoard() {
//     const rows = 3;
//     const columns = 3;
//     const board = [];

//     for (let i = 0; i < rows; i++) {
//         board[i] = [];
//         for (let j = 0; j < columns; j++) {
//             board[i][j] = Cell();
//         }
//     }

//     const getBoard = () => board;

//     const makeMove = (row, column, playerSymbol) => {
//         if (!board[row][column].isFilled()) {
//             board[row][column].playerSymbol(playerSymbol);
//         } else {
//             console.log("Cell is already filled");
//         }
//     };

//     return { getBoard, makeMove };
// }

// function createPlayer(player) {
//     const playerSymbol = player;

//     const getPlayer = () => playerSymbol;

//     return { player, playerSymbol, getPlayer };
// }

// // Example usage:
// const realBoard = gameBoard();
// const playerX = createPlayer('X');
// const playerO = createPlayer('O');

// realBoard.makeMove(0, 0, playerX.getPlayer());  // Player X places a token
// realBoard.makeMove(0, 0, playerO.getPlayer());  // Attempting to place on filled cell

// // Check the state of the board
// const boardState = realBoard.getBoard();
// boardState.forEach((row, rowIndex) => {
//     row.forEach((cell, colIndex) => {
//         console.log(`Cell [${rowIndex}][${colIndex}]: ${cell.getValue()}`);
//     });
// });
