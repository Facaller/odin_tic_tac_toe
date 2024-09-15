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
    console.log(board);
}

function createPlayers (symbol) {
    const x = 'X';
    const o = 'O';
}

function gameController () {

}

// I'm a beginner learning JS. I'm trying to build a tic tac toe game to play in the console. I'm only focused on building the game board and creating players for now. The objective is for me to practice factory functions and closures, reducing the amount of global variables. Can you offer me some guidance on where to start. Some pseudo code would be appreciated. Please do not show me any code. I will show you what I have so far, but do not show me any new code. If you have comments on my code that's fine. 
// function gameBoard () {
//     const rows  = 3;
//     const cols  = 3;
//     const board = [];
    
//     for (let i = 0; i < rows; i++) {
//         board[i] = [];
//         for (let j = 0; j < cols; j++) {
//             board[i].push(Cell());
//         }
//     }
// }

// function createPlayers (player) {
    
// }
// ChatGPT said: