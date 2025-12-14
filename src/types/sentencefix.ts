export interface FixQuestion {
    id: string;
    incorrectSentence: string; // The error-filled sentence
    correctSentence: string; // The right answer
    options: string[]; // Options including distractor inputs
    explanation: string; // Why the correct one is correct
}

export interface FixDeck {
    id: string;
    name: string;
    description: string;
    questions: FixQuestion[];
}

export interface FixState {
    currentDeck: FixDeck | null;
    currentIndex: number;
    correctCount: number;
    isComplete: boolean;
    selectedOption: string | null;
    isCorrect: boolean | null;
    showExplanation: boolean;
}
