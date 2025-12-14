export interface BookQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    type: 'character' | 'theme' | 'plot';
}

export interface Book {
    id: string;
    title: string;
    author: string;
    coverEmoji: string;
    description: string;
    summary: string[]; // Breakdown of the plot/chapter
    questions: BookQuestion[];
    difficulty: 'Easy' | 'Medium' | 'Hard';
    themes: string[];
}

export type BookClubMode = 'selection' | 'reading' | 'discussion' | 'complete';

export interface BookClubState {
    mode: BookClubMode;
    currentBook: Book | null;
    currentQuestionIndex: number;
    score: number;
    answers: Record<string, string>; // questionId -> selectedAnswer
    showExplanation: boolean;
    isCorrect: boolean | null;
}
