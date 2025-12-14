export interface PunctuationQuestion {
    id: string;
    sentence: string; // "Hello___ world"
    correctAnswer: string; // ","
    options: string[]; // [",", ".", "!", "?"]
    explanation: string; // "We use a comma..."
}

export interface PunctuationDeck {
    id: string;
    name: string;
    description: string;
    questions: PunctuationQuestion[];
}

export interface PunctuationState {
    currentDeck: PunctuationDeck | null;
    currentIndex: number;
    correctCount: number;
    isComplete: boolean;
    selectedOption: string | null;
    isCorrect: boolean | null;
    showExplanation: boolean;
}
