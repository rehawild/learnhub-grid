export interface PoetryQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export interface Poem {
    id: string;
    title: string;
    author: string;
    lines: string[];
    theme: string;
    tags: string[]; // e.g., "Nature", "Melancholy", "Hope"
    questions: PoetryQuestion[];
}

export interface PoetryState {
    currentPoem: Poem | null;
    mode: "library" | "reading" | "analysis" | "complete";
    currentQuestionIndex: number;
    score: number;
    answers: Record<string, string>;
    showExplanation: boolean;
}
