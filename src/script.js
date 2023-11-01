let board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 'X';

const cells = document.querySelectorAll('.cell');
const messageDiv = document.getElementById('message');

cells.forEach((cell, index) => {
    cell.addEventListener('click', function() {
        if (board[index] === '') {
            board[index] = playerTurn;
            cell.textContent = playerTurn;
            checkWin();
            playerTurn = playerTurn === 'X' ? 'O' : 'X';
        }
    });
});

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winConditions) {
        if (board[condition[0]] === board[condition[1]] && board[condition[1]] === board[condition[2]] && board[condition[0]] !== '') {
            messageDiv.textContent = `Player ${board[condition[0]]} wins!`;
            return;
        }
    }

    if (!board.includes('')) {
        messageDiv.textContent = 'Draw!';
    }
}
