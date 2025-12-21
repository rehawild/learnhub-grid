export interface HangmanDeck {
    id: string;
    name: string;
    description: string;
    difficulty: 'easy' | 'medium' | 'hard';
    words: string[];
}

export type GameStatus = 'playing' | 'won' | 'lost';

export interface HangmanState {
    currentWord: string;
    guessedLetters: string[];
    lives: number;
    status: GameStatus;
}
