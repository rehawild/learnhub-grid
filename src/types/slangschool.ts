export interface SlangTerm {
    id: string;
    term: string;
    category: string;
    standardEnglish: string;
    meaning: string;
    example: string;
    origin?: string;
    distractors: string[]; // Standard English distractors
}

export interface SlangCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    terms: SlangTerm[];
}

export type SlangMode = 'selection' | 'learning' | 'challenge' | 'results';

export interface SlangState {
    mode: SlangMode;
    currentCategory: SlangCategory | null;
    currentIndex: number;
    score: number;
}
