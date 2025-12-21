export interface ScrabbleTile {
    id: string; // Unique ID for React keys
    letter: string;
    value: number;
}

export type BonusType = 'DL' | 'TL' | 'DW' | 'TW' | 'START';

export interface BoardCell {
    row: number;
    col: number;
    bonus: BonusType | null;
    tile: ScrabbleTile | null;
    isTemp: boolean; // Is the tile currently being placed (not yet submitted)
}

export interface ScrabbleState {
    board: BoardCell[][];
    rack: ScrabbleTile[];
    score: number;
    bag: string[]; // Bag of remaining letters
    history: { word: string; score: number }[];
}
