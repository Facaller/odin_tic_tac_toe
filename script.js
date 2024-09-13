function gameBoard () {
    const rows  = 6;
    const cols  = 7;
    const board = [];
    
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            board[i].push(Cell());
        }
    }
}

function createPlayers () {

}

function playGame () {

}