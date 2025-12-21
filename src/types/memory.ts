export interface MemoryPair {
    text: string;
    icon: string;
}

export interface MemoryDeck {
    id: string;
    name: string;
    description: string;
    pairs: MemoryPair[];
}

export interface MemoryCard {
    id: string; // unique ID for React key
    pairId: string; // ID to check match (e.g. index of pair)
    content: string;
    type: 'text' | 'icon';
    isFlipped: boolean;
    isMatched: boolean;
}

export interface MemoryState {
    cards: MemoryCard[];
    moves: number;
    matches: number;
    isComplete: boolean;
    isLocked: boolean; // Prevent clicking while animating
}
