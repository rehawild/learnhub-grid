import { useState, useCallback, useEffect } from 'react';
import { BoardCell, ScrabbleTile, ScrabbleState } from '@/types/scrabble';
import { LETTER_DISTRIBUTION, LETTER_VALUES, BOARD_SIZE, getBonusAt } from '@/data/scrabble/constants';
import { v4 as uuidv4 } from 'uuid';

const RACK_SIZE = 7;

export const useScrabble = () => {
    // Game State
    const [board, setBoard] = useState<BoardCell[][]>([]);
    const [rack, setRack] = useState<ScrabbleTile[]>([]);
    const [score, setScore] = useState(0);
    const [bag, setBag] = useState<string[]>([]);
    const [history, setHistory] = useState<{ word: string, score: number }[]>([]);

    // Interaction State
    const [selectedTileId, setSelectedTileId] = useState<string | null>(null);
    const [message, setMessage] = useState<string>("");

    // Initialize Game
    const initGame = useCallback(() => {
        // 1. Create Bag
        const newBag: string[] = [];
        Object.entries(LETTER_DISTRIBUTION).forEach(([letter, count]) => {
            for (let i = 0; i < count; i++) newBag.push(letter);
        });
        // Shuffle
        for (let i = newBag.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newBag[i], newBag[j]] = [newBag[j], newBag[i]];
        }

        // 2. Fill Rack
        const newRack: ScrabbleTile[] = [];
        for (let i = 0; i < RACK_SIZE; i++) {
            if (newBag.length > 0) {
                const letter = newBag.pop()!;
                newRack.push({ id: uuidv4(), letter, value: LETTER_VALUES[letter] });
            }
        }

        // 3. Create Board
        const newBoard: BoardCell[][] = Array(BOARD_SIZE).fill(null).map((_, r) =>
            Array(BOARD_SIZE).fill(null).map((_, c) => ({
                row: r,
                col: c,
                bonus: getBonusAt(r, c),
                tile: null,
                isTemp: false
            }))
        );

        setBag(newBag);
        setRack(newRack);
        setBoard(newBoard);
        setScore(0);
        setHistory([]);
        setMessage("Drag and drop or click to place tiles. First word must cross the center star.");
    }, []);

    useEffect(() => {
        initGame();
    }, [initGame]);

    // Actions
    const selectTile = (tileId: string) => {
        // If clicking same tile, deselect
        if (selectedTileId === tileId) {
            setSelectedTileId(null);
        } else {
            setSelectedTileId(tileId);
        }
    };

    const placeTile = (row: number, col: number) => {
        if (!selectedTileId) return;

        // Check if cell is empty
        if (board[row][col].tile) return;

        // Find tile in rack
        const tileIndex = rack.findIndex(t => t.id === selectedTileId);
        if (tileIndex === -1) return; // Should not happen

        const tile = rack[tileIndex];

        // Update Board
        const newBoard = [...board];
        newBoard[row] = [...newBoard[row]];
        newBoard[row][col] = { ...newBoard[row][col], tile, isTemp: true };
        setBoard(newBoard);

        // Update Rack (remove tile)
        const newRack = [...rack];
        newRack.splice(tileIndex, 1);
        setRack(newRack);

        setSelectedTileId(null);
        setMessage("");
    };

    const recallTile = (row: number, col: number) => {
        const cell = board[row][col];
        if (!cell.tile || !cell.isTemp) return; // Can only recall temp tiles

        // Add back to rack
        setRack(prev => [...prev, cell.tile!]);

        // Remove from board
        const newBoard = [...board];
        newBoard[row] = [...newBoard[row]];
        newBoard[row][col] = { ...newBoard[row][col], tile: null, isTemp: false };
        setBoard(newBoard);
    };

    const shuffleRack = () => {
        setRack(prev => {
            const newRack = [...prev];
            for (let i = newRack.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newRack[i], newRack[j]] = [newRack[j], newRack[i]];
            }
            return newRack;
        });
    };

    const submitMove = () => {
        // Gathering temp tiles
        let tempTiles: BoardCell[] = [];
        for (let r = 0; r < BOARD_SIZE; r++) {
            for (let c = 0; c < BOARD_SIZE; c++) {
                if (board[r][c].isTemp) tempTiles.push(board[r][c]);
            }
        }

        if (tempTiles.length === 0) {
            setMessage("Place some tiles first!");
            return;
        }

        // Validation 1: Linearity
        const rows = new Set(tempTiles.map(t => t.row));
        const cols = new Set(tempTiles.map(t => t.col));
        const isHorizontal = rows.size === 1;
        const isVertical = cols.size === 1;

        if (!isHorizontal && !isVertical) {
            setMessage("Tiles must be placed in a straight line.");
            return;
        }

        // Validation 2: Connectivity
        // If it's the first move, it must cover center (7,7)
        // If not first move, must connect to non-temp tiles

        const isFirstMove = board.every(row => row.every(cell => !cell.tile || cell.isTemp));

        if (isFirstMove) {
            const coversCenter = tempTiles.some(t => t.row === 7 && t.col === 7);
            if (!coversCenter) {
                setMessage("First word must cover the center star.");
                return;
            }
            if (tempTiles.length < 2) {
                setMessage("First word must be at least 2 letters.");
                return;
            }
        } else {
            // Check connectivity to existing board
            let connects = false;
            // Check neighbors of all temp tiles
            // Also need to check if we are bridging properly (no gaps)
            // Simple adjacency check for now
            for (const t of tempTiles) {
                const neighbors = [
                    { r: t.row - 1, c: t.col }, { r: t.row + 1, c: t.col },
                    { r: t.row, c: t.col - 1 }, { r: t.row, c: t.col + 1 }
                ];
                for (const n of neighbors) {
                    if (n.r >= 0 && n.r < BOARD_SIZE && n.c >= 0 && n.c < BOARD_SIZE) {
                        const cell = board[n.r][n.c];
                        if (cell.tile && !cell.isTemp) {
                            connects = true;
                            break;
                        }
                    }
                }
                if (connects) break;
            }

            if (!connects) {
                setMessage("Word must connect to existing tiles.");
                return;
            }
        }

        // TODO: Full gap check (User might place A _ _ B).
        // For simplicity assuming user places contiguously or bridges correctly.
        // A strict implementation would scan the line from min to max idx and ensure all are filled.

        // Scoring
        let moveScore = 0;
        let wordMultiplier = 1;

        // Calculate score for the primary word
        // We need to identify the full word formed (including existing tiles)
        // Only checking primary word for simplicity of this version. 
        // Real scrabble checks cross-words too.

        // Simplified Score: Just sum the tiles placed + neighbors in line
        // Proper way: find start and end of the word along the axis

        const sorted = tempTiles.sort((a, b) => isHorizontal ? a.col - b.col : a.row - b.row);
        let startRow = sorted[0].row;
        let startCol = sorted[0].col;

        // Backtrack to find start
        while (true) {
            const prevR = isHorizontal ? startRow : startRow - 1;
            const prevC = isHorizontal ? startCol - 1 : startCol;
            if (prevR < 0 || prevC < 0 || !board[prevR][prevC].tile) break;
            startRow = prevR;
            startCol = prevC;
        }

        // Forward track to find end
        // ... (Similar logic)

        // For this Sandbox: simple sum of temp tiles * multipliers
        // This is inaccurate but usable for a prototype.
        // Let's try slightly better: sum values of ALL tiles in the primary line.

        let currentWordString = "";

        // Iterate through the line
        let r = startRow;
        let c = startCol;

        while (r < BOARD_SIZE && c < BOARD_SIZE && board[r][c].tile) {
            const cell = board[r][c];
            let letterValue = cell.tile!.value;

            // Apply bonus ONLY if it is a fresh placement (isTemp)
            if (cell.isTemp) {
                if (cell.bonus === 'DL') letterValue *= 2;
                if (cell.bonus === 'TL') letterValue *= 3;
                if (cell.bonus === 'DW' || cell.bonus === 'START') wordMultiplier *= 2;
                if (cell.bonus === 'TW') wordMultiplier *= 3;
            }

            moveScore += letterValue;
            currentWordString += cell.tile!.letter;

            if (isHorizontal) c++; else r++;
        }

        moveScore *= wordMultiplier;

        // Bonus for using all 7 tiles
        if (tempTiles.length === 7) moveScore += 50;

        // Commit Move
        const finalBoard = board.map(row => row.map(cell => ({
            ...cell,
            isTemp: false
        })));

        setBoard(finalBoard);
        setScore(prev => prev + moveScore);
        setHistory(prev => [...prev, { word: currentWordString, score: moveScore }]);
        setMessage(`Played ${currentWordString} for ${moveScore} points!`);

        // Refill Rack
        const tilesNeeded = RACK_SIZE - rack.length;
        const _bag = [...bag];
        const newTiles: ScrabbleTile[] = [];
        for (let i = 0; i < tilesNeeded; i++) {
            if (_bag.length > 0) {
                const letter = _bag.pop()!;
                newTiles.push({ id: uuidv4(), letter, value: LETTER_VALUES[letter] });
            }
        }
        setBag(_bag);
        setRack(prev => [...prev, ...newTiles]);
    };

    return {
        board,
        rack,
        score,
        bagCount: bag.length,
        history,
        selectedTileId,
        message,
        selectTile,
        placeTile,
        recallTile,
        submitMove,
        shuffleRack,
        resetGame: initGame
    };
};
