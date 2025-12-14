export type QuestionType = 'multiple_choice' | 'true_false' | 'fill_blank';

export interface Question {
    id: string;
    type: QuestionType;
    text: string;
    options?: string[]; // For MCQ
    correctAnswer: string;
    points: number;
}

export interface ExamSection {
    id: string;
    title: string;
    description: string;
    questions: Question[];
}

export interface MockExam {
    id: string;
    title: string;
    description: string;
    durationMinutes: number;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    sections: ExamSection[];
}

export interface MockTestState {
    currentExam: MockExam | null;
    status: 'idle' | 'running' | 'review';
    answers: Record<string, string>; // questionId -> answer
    elapsedSeconds: number;
    currentSectionIndex: number;
    score: number;
}
