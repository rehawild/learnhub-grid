export interface Quote {
    id: string;
    text: string;
    author: string;
    source?: string;
    context?: string; // Optional context or hint
    options: string[]; // Author options
    correctAnswer: string; // The correct author name
}

export interface QuoteCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    quotes: Quote[];
}

export type QuoteQuizMode = 'selection' | 'quiz' | 'complete';

export interface QuoteQuizState {
    mode: QuoteQuizMode;
    currentCategory: QuoteCategory | null;
    currentQuoteIndex: number;
    score: number;
    answers: Record<string, string>; // quoteId -> selectedAnswer
    isCorrect: boolean | null;
}
