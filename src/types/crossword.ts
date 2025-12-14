export type Direction = 'across' | 'down';

export interface CrosswordClue {
    id: string; // unique id for the clue
    number: number;
    direction: Direction;
    text: string;
    answer: string;
    row: number; // 0-indexed start position
    col: number; // 0-indexed start position
}

export interface CrosswordDeck {
    id: string;
    name: string;
    description: string;
    difficulty: 'easy' | 'medium' | 'hard';
    width: number;
    height: number;
    clues: CrosswordClue[];
}

export interface CellData {
    row: number;
    col: number;
    value: string; // User input
    correctValue: string | null; // Null if black square
    clueIds: string[]; // IDs of clues passing through this cell
    isBlack: boolean;
    number?: number; // Cell number (if it's a start of a word)
    isActive: boolean; // Focused
    isRelated: boolean; // Same clue as focused
    isCorrect: boolean; // For validation
    isError: boolean; // For validation
}

export interface CrosswordState {
    grid: CellData[][];
    activeClueId: string | null;
    selectedCell: { row: number; col: number } | null;
    isComplete: boolean;
    direction: Direction; // Current typing direction
}
