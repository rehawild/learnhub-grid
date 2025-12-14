export type QuestionType = 'multiple_choice' | 'true_false_not_given' | 'matching_headings';

export interface Question {
    id: string;
    type: QuestionType;
    text: string;
    options?: string[]; // For multiple choice
    correctAnswer: string | string[]; // Can be single answer or array for matching
    userAnswer?: string;
}

export interface QuestionSet {
    id: string;
    instruction: string;
    questions: Question[];
}

export interface ReadingPassage {
    id: string;
    title: string;
    content: string[]; // Array of paragraphs
    questionSets: QuestionSet[];
}

export interface ReadingTest {
    id: string;
    title: string;
    passages: ReadingPassage[]; // Usually 3 sections
}

export interface ReadingSessionState {
    status: 'idle' | 'running' | 'completed';
    currentSectionIndex: number;
    answers: Record<string, string>; // questionId -> answer
    elapsedTime: number;
    score: number | null;
    showResults: boolean;
}
