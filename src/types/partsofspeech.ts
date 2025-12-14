export type PartOfSpeechType =
    | "noun" | "verb" | "adjective" | "adverb" | "pronoun" | "preposition" | "conjunction" | "interjection";

export interface POSQuestion {
    id: string;
    sentence: string; // "The *quick* brown fox" - target word wrapped in asterisks
    targetWord: string; // "quick"
    correctAnswer: PartOfSpeechType;
    options: PartOfSpeechType[];
    explanation: string;
}

export interface POSDeck {
    id: string;
    name: string;
    description: string;
    questions: POSQuestion[];
}

export interface POSState {
    currentDeck: POSDeck | null;
    currentIndex: number;
    correctCount: number;
    isComplete: boolean;
    selectedOption: PartOfSpeechType | null;
    isCorrect: boolean | null;
    showExplanation: boolean;
}
