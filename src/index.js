const GRID_SIZE = 9;

class SudokuGame {
    constructor() {
        this.board = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
        this.initializeGame();
    }

    initializeGame() {
        // Kezdő Sudoku tábla létrehozása
        this.generateBoard();
        this.renderBoard();
        this.addEventListeners();
    }

    generateBoard() {
        // Példa kezdő értékekkel töltjük fel a táblát
        const startingNumbers = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]
        ];
        this.board = startingNumbers;
    }

    renderBoard() {
        const root = document.getElementById('root');
        root.innerHTML = '';
        
        const container = document.createElement('div');
        container.className = 'sudoku-container';
        
        const board = document.createElement('div');
        board.className = 'sudoku-board';

        for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 0; j < GRID_SIZE; j++) {
                const cell = document.createElement('input');
                cell.type = 'number';
                cell.className = 'sudoku-cell';
                cell.min = 1;
                cell.max = 9;
                cell.value = this.board[i][j] || '';
                cell.dataset.row = i;
                cell.dataset.col = j;
                
                if (this.board[i][j] !== 0) {
                    cell.readOnly = true;
                    cell.classList.add('initial');
                }
                
                board.appendChild(cell);
            }
        }

        container.appendChild(board);
        root.appendChild(container);
    }

    addEventListeners() {
        document.querySelectorAll('.sudoku-cell').forEach(cell => {
            cell.addEventListener('input', (e) => {
                const value = parseInt(e.target.value) || 0;
                const row = parseInt(e.target.dataset.row);
                const col = parseInt(e.target.dataset.col);

                if (value >= 0 && value <= 9) {
                    this.board[row][col] = value;
                    if (this.isValid(row, col, value)) {
                        e.target.classList.remove('invalid');
                    } else {
                        e.target.classList.add('invalid');
                    }
                }
            });
        });
    }

    isValid(row, col, value) {
        // Sor ellenőrzése
        for (let i = 0; i < GRID_SIZE; i++) {
            if (i !== col && this.board[row][i] === value) return false;
        }

        // Oszlop ellenőrzése
        for (let i = 0; i < GRID_SIZE; i++) {
            if (i !== row && this.board[i][col] === value) return false;
        }

        // 3x3-as blokk ellenőrzése
        const blockRow = Math.floor(row / 3) * 3;
        const blockCol = Math.floor(col / 3) * 3;
        for (let i = blockRow; i < blockRow + 3; i++) {
            for (let j = blockCol; j < blockCol + 3; j++) {
                if (i !== row && j !== col && this.board[i][j] === value) return false;
            }
        }

        return true;
    }
}

// Stílusok hozzáadása
const styles = `
    .sudoku-container {
        display: flex;
        justify-content: center;
        padding: 20px;
    }
    
    .sudoku-board {
        display: grid;
        grid-template-columns: repeat(9, 40px);
        gap: 1px;
        background-color: #ccc;
        padding: 2px;
    }
    
    .sudoku-cell {
        width: 40px;
        height: 40px;
        border: 1px solid #999;
        text-align: center;
        font-size: 20px;
    }
    
    .sudoku-cell:nth-child(3n) {
        border-right: 2px solid #666;
    }
    
    .sudoku-cell:nth-child(n+19):nth-child(-n+27),
    .sudoku-cell:nth-child(n+46):nth-child(-n+54) {
        border-bottom: 2px solid #666;
    }
    
    .initial {
        background-color: #f0f0f0;
    }
    
    .invalid {
        background-color: #ffebee;
    }
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Játék indítása
document.addEventListener('DOMContentLoaded', () => {
    new SudokuGame();
});
