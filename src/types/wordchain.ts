export type Speaker = 'user' | 'bot';

export interface ChainEntry {
    id: string;
    word: string;
    speaker: Speaker;
    timestamp: number;
}

export interface WordChainCategory {
    id: string;
    name: string;
    description: string;
    words: string[]; // Bank for bot
}

export interface WordChainState {
    chain: ChainEntry[];
    score: number;
    lives: number;
    isGameOver: boolean;
    message: string;
    requiredLetter: string; // The letter the next word must start with
}
