export interface WordSearchDeck {
    id: string;
    name: string;
    description: string;
    difficulty: 'easy' | 'medium' | 'hard';
    topics: string[];
    words: string[];
}

export interface CellPosition {
    row: number;
    col: number;
}

export interface GridCell extends CellPosition {
    letter: string;
    isFound: boolean;
    isSelected: boolean;
}

export interface WordLocation {
    word: string;
    start: CellPosition;
    end: CellPosition;
    color?: string; // For different colors per word if we want
}

export interface WordSearchState {
    grid: string[][]; // Simple char grid
    foundWords: string[];
    currentSelection: CellPosition[]; // Array of selected cells
    startTime: number;
    isComplete: boolean;
}
