export interface PhrasalVerb {
    id: string;
    phrase: string;
    verb: string;
    particle: string;
    meaning: string;
    example: string;
    distractors: string[];
    isSeparable: boolean;
    usageTip?: string;
}

export interface PhrasalVerbCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    verbs: PhrasalVerb[];
}

export type PhrasalVerbMode = 'selection' | 'learning' | 'practice' | 'results';

export interface PhrasalVerbState {
    mode: PhrasalVerbMode;
    currentCategory: PhrasalVerbCategory | null;
    currentIndex: number;
    score: number;
}
