import { useState, useEffect, useCallback } from 'react';
import { CrosswordDeck, CellData, Direction, CrosswordState } from '@/types/crossword';

export const useCrossword = (deck: CrosswordDeck | null) => {
    const [state, setState] = useState<CrosswordState>({
        grid: [],
        activeClueId: null,
        selectedCell: null,
        isComplete: false,
        direction: 'across'
    });

    // Initialize Grid
    useEffect(() => {
        if (!deck) return;

        const newGrid: CellData[][] = Array(deck.height).fill(null).map((_, r) =>
            Array(deck.width).fill(null).map((_, c) => ({
                row: r,
                col: c,
                value: '',
                correctValue: null,
                clueIds: [],
                isBlack: true,
                isActive: false,
                isRelated: false,
                isCorrect: false,
                isError: false
            }))
        );

        // Populate grid based on clues
        deck.clues.forEach(clue => {
            const dr = clue.direction === 'across' ? 0 : 1;
            const dc = clue.direction === 'across' ? 1 : 0;

            for (let i = 0; i < clue.answer.length; i++) {
                const r = clue.row + dr * i;
                const c = clue.col + dc * i;

                if (r >= 0 && r < deck.height && c >= 0 && c < deck.width) {
                    const cell = newGrid[r][c];
                    cell.isBlack = false;
                    cell.correctValue = clue.answer[i];
                    cell.clueIds.push(clue.id);

                    if (i === 0) {
                        cell.number = clue.number;
                    }
                }
            }
        });

        // Set initial selection to first available cell
        let firstCell = null;
        for (let r = 0; r < deck.height; r++) {
            for (let c = 0; c < deck.width; c++) {
                if (!newGrid[r][c].isBlack) {
                    firstCell = { row: r, col: c };
                    break;
                }
            }
            if (firstCell) break;
        }

        setState({
            grid: newGrid,
            activeClueId: null, // Will calculate based on selection
            selectedCell: firstCell,
            isComplete: false,
            direction: 'across'
        });

    }, [deck]);

    // Derived state update: When selection changes, update highlights
    useEffect(() => {
        if (!state.selectedCell || !deck) return;

        setState(prev => {
            const { row, col } = prev.selectedCell!;
            const currentCell = prev.grid[row][col];

            // Find active clue based on direction
            // Prioritize the clue that matches current direction if possible
            // If current cell doesn't have a clue in current direction, switch direction
            let newActiveClueId = null;
            let newDirection = prev.direction;

            // Find valid clues for this cell
            const cellClues = deck.clues.filter(c => currentCell.clueIds.includes(c.id));

            const clueInCurrentDir = cellClues.find(c => c.direction === prev.direction);
            const clueInOtherDir = cellClues.find(c => c.direction !== prev.direction);

            if (clueInCurrentDir) {
                newActiveClueId = clueInCurrentDir.id;
            } else if (clueInOtherDir) {
                newActiveClueId = clueInOtherDir.id;
                newDirection = clueInOtherDir.direction;
            }

            // Update grid highlights
            const newGrid = prev.grid.map(r => r.map(c => ({
                ...c,
                isActive: c.row === row && c.col === col,
                isRelated: newActiveClueId ? c.clueIds.includes(newActiveClueId) : false
            })));

            return {
                ...prev,
                grid: newGrid,
                activeClueId: newActiveClueId,
                direction: newDirection
            };
        });
    }, [state.selectedCell?.row, state.selectedCell?.col, state.direction, deck]); // Wait, circular dependency if I include activeClueId? No.

    // Actions
    const selectCell = (row: number, col: number) => {
        if (state.grid[row][col].isBlack) return;

        setState(prev => {
            // If clicking the same cell, toggle direction
            if (prev.selectedCell?.row === row && prev.selectedCell?.col === col) {
                return {
                    ...prev,
                    direction: prev.direction === 'across' ? 'down' : 'across'
                };
            }
            return {
                ...prev,
                selectedCell: { row, col }
            };
        });
    };

    const setCellValue = (val: string) => {
        if (!state.selectedCell || !deck) return;

        const { row, col } = state.selectedCell;
        const letter = val.toUpperCase().slice(-1); // Take last char if string

        setState(prev => {
            const newGrid = [...prev.grid];
            newGrid[row] = [...newGrid[row]];
            newGrid[row][col] = { ...newGrid[row][col], value: letter };

            // Check completion
            const isAllCorrect = newGrid.every(r => r.every(c =>
                c.isBlack || c.value === c.correctValue
            ));

            return {
                ...prev,
                grid: newGrid,
                isComplete: isAllCorrect
            };
        });

        // Auto-advance
        if (letter) {
            moveSelection(1);
        }
    };

    const moveSelection = (step: number) => {
        if (!state.selectedCell || !deck) return;

        const { row, col } = state.selectedCell;
        let dRow = state.direction === 'across' ? 0 : 1;
        let dCol = state.direction === 'across' ? 1 : 0;

        if (step < 0) {
            dRow = -dRow;
            dCol = -dCol;
        }

        let nextRow = row + dRow;
        let nextCol = col + dCol;

        // Simple bound check, doesn't jump over black squares automatically in this simple version
        // Ideally should look for next editable cell in that direction
        if (nextRow >= 0 && nextRow < deck.height && nextCol >= 0 && nextCol < deck.width) {
            if (!state.grid[nextRow][nextCol].isBlack) {
                setState(prev => ({
                    ...prev,
                    selectedCell: { row: nextRow, col: nextCol }
                }));
            }
        }
    };

    return {
        ...state,
        selectCell,
        setCellValue,
        moveSelection
    };
};
