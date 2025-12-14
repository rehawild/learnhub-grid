export type PracticeItemType = 'grammar' | 'vocabulary' | 'listening' | 'reading';

export interface PracticeItem {
    id: string;
    type: PracticeItemType;
    question: string;
    options?: string[]; // For quiz style
    correctAnswer: string;
    explanation?: string;
    context?: string; // e.g. reading passage snippet or audio transcript placeholder
}

export interface DailyChallenge {
    id: string; // ISO date or "day-1"
    title: string;
    description: string;
    items: PracticeItem[];
    estimatedMinutes: number;
    rewards: number; // XP or points
}

export interface PracticeState {
    currentDayId: string;
    activeSession: boolean;
    currentQuestionIndex: number;
    answers: Record<string, string>; // itemId -> answer
    completedDays: string[];
    streak: number;
    showResult: boolean;
}
