export interface CompQuestion {
    id: string;
    type: "main-idea" | "inference" | "detail" | "vocab";
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export interface CompPassage {
    id: string;
    title: string;
    topic: string; // e.g., "Biology", "History"
    difficulty: "Level 1" | "Level 2" | "Level 3";
    content: string[]; // Paragraphs
    questions: CompQuestion[];
}

export interface CompState {
    currentPassage: CompPassage | null;
    mode: "selection" | "reading" | "quiz" | "complete";
    currentQuestionIndex: number;
    score: number;
    answers: Record<string, string>;
    showExplanation: boolean;
}
