export type VerbTense = "past-simple" | "past-participle";

export interface VerbQuestion {
    id: string;
    baseForm: string; // e.g., "go"
    targetTense: VerbTense; // e.g., "past-simple"
    correctAnswer: string; // e.g., "went"
    options: string[]; // ["went", "gone", "goed", "going"]
}

export interface VerbDeck {
    id: string;
    name: string;
    description: string;
    questions: VerbQuestion[];
}

export interface VerbState {
    currentDeck: VerbDeck | null;
    currentIndex: number;
    correctCount: number;
    isComplete: boolean;
    selectedOption: string | null;
    isCorrect: boolean | null;
}
