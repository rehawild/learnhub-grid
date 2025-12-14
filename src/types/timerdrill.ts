export type DrillType = 'synonym' | 'antonym' | 'preposition' | 'translation';

export interface DrillItem {
    id: string;
    question: string; // The prompt, e.g., "Happy"
    correctAnswers: string[]; // Acceptable answers, e.g., ["glad", "joyful"]
    options?: string[]; // Optional for multiple choice mode
}

export interface DrillCategory {
    id: string;
    title: string;
    description: string;
    type: DrillType;
    defaultTimeSeconds: number;
    items: DrillItem[];
}

export interface DrillState {
    category: DrillCategory | null;
    status: 'idle' | 'running' | 'finished';
    currentQuestionIndex: number;
    timeLeft: number;
    score: number;
    correctCount: number;
    wrongCount: number;
    history: { itemId: string; isCorrect: boolean; timeTaken: number }[];
}
