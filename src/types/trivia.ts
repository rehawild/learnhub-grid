export interface TriviaOption {
    id: string;
    text: string;
}

export interface TriviaQuestion {
    id: string;
    text: string;
    options: TriviaOption[];
    correctOptionId: string;
    explanation: string;
}

export interface TriviaCategory {
    id: string;
    name: string;
    description: string;
    icon: string; // Emoji or Lucide icon name
    questions: TriviaQuestion[];
}

export type TriviaStatus = 'idle' | 'playing' | 'completed';

export interface TriviaState {
    currentQuestionIndex: number;
    score: number;
    status: TriviaStatus;
    answers: { questionId: string; optionId: string; isCorrect: boolean }[];
}
