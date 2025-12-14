import { useState, useEffect, useCallback, useRef } from 'react';
import { WordSearchDeck, CellPosition, GridCell } from '@/types/wordsearch';

const GRID_SIZE = 12; // 12x12 grid for now
const DIRECTIONS = [
    [0, 1],   // right
    [1, 0],   // down
    [1, 1],   // diagonal down-right
    [-1, 1],  // diagonal up-right
];

// Helper to generate random letter
const getRandomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

export const useWordSearch = (deck: WordSearchDeck | null) => {
    const [grid, setGrid] = useState<GridCell[][]>([]);
    const [foundWords, setFoundWords] = useState<string[]>([]);
    const [selection, setSelection] = useState<CellPosition[]>([]);
    const [isSelecting, setIsSelecting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    // Store where words are actually placed to double check, 
    // though checking the string formed is usually enough.
    // For this simple version, we'll just check the selected string against the word list.

    const generateGrid = useCallback(() => {
        if (!deck) return;

        // Initialize empty grid
        const newGrid: string[][] = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
        const placedWords: string[] = [];

        // Sort words by length (longest first) to make placement easier
        const wordsToPlace = [...deck.words].sort((a, b) => b.length - a.length);

        for (const word of wordsToPlace) {
            let placed = false;
            let attempts = 0;
            const maxAttempts = 100;

            while (!placed && attempts < maxAttempts) {
                const direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
                const [dr, dc] = direction;

                // Random start position
                const row = Math.floor(Math.random() * GRID_SIZE);
                const col = Math.floor(Math.random() * GRID_SIZE);

                // Check boundary
                const endRow = row + dr * (word.length - 1);
                const endCol = col + dc * (word.length - 1);

                if (endRow >= 0 && endRow < GRID_SIZE && endCol >= 0 && endCol < GRID_SIZE) {
                    // Check overlap
                    let canPlace = true;
                    for (let i = 0; i < word.length; i++) {
                        const r = row + dr * i;
                        const c = col + dc * i;
                        if (newGrid[r][c] !== '' && newGrid[r][c] !== word[i]) {
                            canPlace = false;
                            break;
                        }
                    }

                    if (canPlace) {
                        for (let i = 0; i < word.length; i++) {
                            const r = row + dr * i;
                            const c = col + dc * i;
                            newGrid[r][c] = word[i];
                        }
                        placed = true;
                        placedWords.push(word);
                    }
                }
                attempts++;
            }
        }

        // Fill remaining with random letters
        const finalGrid: GridCell[][] = newGrid.map((rowArr, rowIdx) =>
            rowArr.map((char, colIdx) => ({
                row: rowIdx,
                col: colIdx,
                letter: char || getRandomLetter(),
                isFound: false,
                isSelected: false
            }))
        );

        setGrid(finalGrid);
        setFoundWords([]);
        setSelection([]);
        setIsComplete(false);
    }, [deck]);

    useEffect(() => {
        generateGrid();
    }, [generateGrid]);

    // Handle Selection Logic
    const startSelection = (row: number, col: number) => {
        setIsSelecting(true);
        setSelection([{ row, col }]);
    };

    const updateSelection = (row: number, col: number) => {
        if (!isSelecting || selection.length === 0) return;

        const start = selection[0];

        // Calculate new selection line
        // We constrain to 8 directions (horizontal, vertical, diagonal)
        const dr = row - start.row;
        const dc = col - start.col;

        // Check if consistent direction
        if (dr === 0 && dc === 0) {
            setSelection([start]);
            return;
        }

        // Determine if it's a valid line (horizontal, vertical, or perfectly diagonal)
        const isHorizontal = dr === 0;
        const isVertical = dc === 0;
        const isDiagonal = Math.abs(dr) === Math.abs(dc);

        if (isHorizontal || isVertical || isDiagonal) {
            const steps = Math.max(Math.abs(dr), Math.abs(dc));
            const stepR = dr === 0 ? 0 : dr / steps;
            const stepC = dc === 0 ? 0 : dc / steps;

            const newSelection: CellPosition[] = [];
            for (let i = 0; i <= steps; i++) {
                newSelection.push({
                    row: start.row + stepR * i,
                    col: start.col + stepC * i
                });
            }
            setSelection(newSelection);
        }
    };

    const endSelection = () => {
        setIsSelecting(false);

        // Check word
        if (selection.length === 0 || !deck) return;

        const selectedWord = selection.map(pos => grid[pos.row][pos.col].letter).join('');
        const reversedWord = selectedWord.split('').reverse().join('');

        const matchedWord = deck.words.find(w => w === selectedWord || w === reversedWord);

        if (matchedWord && !foundWords.includes(matchedWord)) {
            // Mark as found
            const newFoundWords = [...foundWords, matchedWord];
            setFoundWords(newFoundWords);

            // Update grid to show found state
            setGrid(prev => prev.map(rowArr => rowArr.map(cell => {
                const isInSelection = selection.some(s => s.row === cell.row && s.col === cell.col);
                if (isInSelection) {
                    return { ...cell, isFound: true };
                }
                return cell;
            })));

            // Check completion
            if (newFoundWords.length === deck.words.length) {
                setIsComplete(true);
            }
        }

        setSelection([]);
    };

    return {
        grid,
        foundWords,
        selection,
        isSelecting,
        isComplete,
        startSelection,
        updateSelection,
        endSelection,
        resetGame: generateGrid
    };
};
