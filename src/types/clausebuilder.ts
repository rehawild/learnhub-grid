export interface ClauseQuestion {
    id: string;
    sentenceStart: string; // "I will go to the park..."
    correctClause: string; // "...if it stops raining."
    options: string[]; // ["...if it stops raining.", "...unless it stops raining.", "...so it stops raining."]
    explanation: string;
    type: "conditional" | "relative" | "conjunction";
}

export interface ClauseDeck {
    id: string;
    name: string;
    description: string;
    questions: ClauseQuestion[];
}

export interface ClauseState {
    currentDeck: ClauseDeck | null;
    currentIndex: number;
    correctCount: number;
    isComplete: boolean;
    selectedOption: string | null;
    isCorrect: boolean | null;
    showExplanation: boolean;
}
