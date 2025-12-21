export interface Proverb {
    id: string;
    phrase: string;
    meaning: string;
    origin?: string;
    missingWord: string;
    distractors: string[];
}

export interface ProverbCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    proverbs: Proverb[];
}

export type ProverbMode = 'selection' | 'discovery' | 'drill' | 'results';

export interface ProverbState {
    mode: ProverbMode;
    currentCategory: ProverbCategory | null;
    currentIndex: number;
    score: number;
}
