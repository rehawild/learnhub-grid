export interface ClueQuestion {
    id: string;
    sentence: string; // The sentence with a placeholder/highlighted word
    targetWord: string; // The difficult word to define
    options: string[]; // Possible definitions or synonyms
    correctAnswer: string; // The correct definition
    hint?: string; // Optional hint explaining context
}

export interface ClueLevel {
    id: string;
    name: string;
    description: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    questions: ClueQuestion[];
}

export type ContextCluesMode = 'selection' | 'game' | 'complete';

export interface ContextCluesState {
    mode: ContextCluesMode;
    currentLevel: ClueLevel | null;
    currentIndex: number;
    score: number;
    answers: Record<string, string>; // questionId -> selectedAnswer
    isCorrect: boolean | null;
}
