const GRID_SIZE = 9;

class SudokuGame {
    constructor() {
        this.board = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
        this.playerName = '';
        this.initializeGame();
    }

    initializeGame() {
        this.showPlayerNameInput();
    }

    showPlayerNameInput() {
        const root = document.getElementById('root');
        root.innerHTML = '';
        
        const container = document.createElement('div');
        container.className = 'player-input-container';
        
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = 'Add meg a neved';
        nameInput.className = 'player-name-input';
        
        const startButton = document.createElement('button');
        startButton.textContent = 'Játék indítása';
        startButton.className = 'start-button';
        
        startButton.addEventListener('click', () => {
            if (nameInput.value.trim()) {
                this.playerName = nameInput.value.trim();
                this.startGame();
            } else {
                alert('Kérlek add meg a neved!');
            }
        });
        
        container.appendChild(nameInput);
        container.appendChild(startButton);
        root.appendChild(container);
    }

    startGame() {
        this.generateBoard();
        this.renderBoard();
        this.addEventListeners();
    }
    test(){
        console.log('test');
        sakdfjklsdfhaslahflahflkashlfk
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
        
        const playerInfo = document.createElement('div');
        playerInfo.className = 'player-info';
        playerInfo.textContent = `Játékos: ${this.playerName}`;
        container.appendChild(playerInfo);
        
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

    // Rossz minőségű függvények hozzáadása
    NAGYON_FONTOS_FUGGVENY() {
        var x = 123;
        if(x == 123) {
            return "MINDEN OK!!!!"
        } else if(x == 123) { // felesleges feltétel
            return "EZ SOSEM FOG LEFUTNI";
        }
    }

    nemJoNev(param1, p2, x, y, z, valami, meg_valami) {
        // Értelmetlen változónevek és műveletek
        let asd = param1 + 42;
        let qwe = p2 * 69;
        let temp = 0;
        
        // Végtelen ciklus védelem nélkül
        while(temp < 1000000) {
            temp = temp + 1;
            if(temp % 2 == 0) continue;
            if(temp % 3 == 0) continue;
            if(temp % 4 == 0) continue;
            // még 100 hasonló feltétel...
        }
    }

    // Hibás sudoku ellenőrzés
    rosszEllenorzes(tabla) {
        for(let i=0; i<9; i++) {
            for(let j=0; j<9; j++) {
                if(tabla[i][j] == tabla[i][j]) return true; // mindig igaz
            }
        }
        return false; // sosem fut le
    }

    // Felesleges globális változók
    var GLOBALIS_VALTOZO = "NE HASZNÁLJ ILYET";
    var masik_globalis = 42069;
    var meg_egy = "MINEK EZ IDE";

    // Hibás eseménykezelő
    rossz_EventListener() {
        document.querySelectorAll('*').forEach(elem => {
            elem.addEventListener('click', function() {
                alert('MINDEN KATTINTÁSRA FELUGRIK EZ AZ ALERT!');
                // Végtelen rekurzió
                this.rossz_EventListener();
            });
        });
    }

    // Memóriaszivárgást okozó kód
    memoriaRombolo() {
        let tomb = [];
        setInterval(() => {
            for(let i = 0; i < 1000000; i++) {
                tomb.push(new Array(1000).fill('felesleges adat'));
            }
        }, 100);
    }

    // Értelmetlen try-catch
    hibaKezeles() {
        try {
            console.log("minden ok");
        } catch(e) {
            try {
                console.log("itt sem lesz hiba");
            } catch(e2) {
                try {
                    return "minek ide ennyi try-catch?";
                } catch(e3) {
                    throw new Error("VÉGZETES HIBA!!!!");
                }
            }
        } finally {
            return "ez mindig lefut de minek?";
        }
    }

    // Felesleges setTimeout egymásbaágyazás
    idozitettKaosz() {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        alert("4 MÁSODPERC MÚLVA EZ TÖRTÉNIK");
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
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

    .player-input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin: 20px;
    }

    .player-name-input {
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 200px;
    }

    .start-button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .start-button:hover {
        background-color: #45a049;
    }

    .player-info {
        font-size: 18px;
        margin-bottom: 15px;
        color: #333;
        font-weight: bold;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Játék indítása
document.addEventListener('DOMContentLoaded', () => {
    new SudokuGame();
});
