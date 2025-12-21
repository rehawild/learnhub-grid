export interface Riddle {
    id: string;
    question: string;
    answer: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

export interface RiddleDeck {
    id: string;
    name: string;
    description: string;
    difficulty: 'easy' | 'medium' | 'hard';
    riddles: Riddle[];
}

export interface RiddleState {
    currentRiddleIndex: number;
    isAnswerRevealed: boolean;
    isComplete: boolean;
}
