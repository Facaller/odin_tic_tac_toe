function gameBoard () {
    const rows  = 3;
    const cols  = 3;
    const board = [];
    
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            board[i].push(null);
        }
    }
    const getBoard = () => board;

}

function createPlayers (symbol) {
    const x = 'X';
    const o = 'O';
}

function gameController () {

}

function Cell () {
    let value = '';
}

// function gameBoard() {
//     const rows = 3;
//     const cols = 3;
//     const board = [];

//     // Initialize the board
//     for (let i = 0; i < rows; i++) {
//         board[i] = [];
//         for (let j = 0; j < cols; j++) {
//             board[i].push(null);
//         }
//     }

//     // Method to get the current board
//     const getBoard = () => board;

//     // Method to update a specific cell
//     const setCell = (row, col, value) => {
//         if (row >= 0 && row < rows && col >= 0 && col < cols) {
//             board[row][col] = value;
//         } else {
//             console.log("Invalid cell coordinates");
//         }
//     };

//     // Method to get the value of a specific cell
//     const getCell = (row, col) => {
//         if (row >= 0 && row < rows && col >= 0 && col < cols) {
//             return board[row][col];
//         } else {
//             console.log("Invalid cell coordinates");
//             return null;
//         }
//     };

//     // Return the methods to interact with the board
//     return {
//         getBoard,
//         setCell,
//         getCell
//     };
// }

// // Example usage:
// const myBoard = gameBoard();
// myBoard.setCell(1, 2, 'X'); // Sets cell at row 1, col 2 to 'X'
// console.log(myBoard.getBoard()); // Logs the current state of the board
// console.log(myBoard.getCell(1, 2)); // Logs the value of cell at row 1, col 2

