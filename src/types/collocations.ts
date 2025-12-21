export interface Collocation {
    id: string;
    phrase: string;
    headword: string; // e.g., "Decision"
    collocate: string; // e.g., "Make"
    type: string; // e.g., "Verb + Noun"
    meaning: string;
    example: string;
    distractors: string[]; // e.g., ["Do", "Take", "Give"]
    usageNote?: string;
}

export interface CollocationCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    collocations: Collocation[];
}

export type CollocationMode = 'selection' | 'discovery' | 'drill' | 'results';

export interface CollocationState {
    mode: CollocationMode;
    currentCategory: CollocationCategory | null;
    currentIndex: number;
    score: number;
}
