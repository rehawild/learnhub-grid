export interface JargonTerm {
    id: string;
    term: string;
    definition: string;
    plainEnglish: string;
    example: string;
}

export interface JargonCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    terms: JargonTerm[];
}

export type JargonMode = 'selection' | 'learning' | 'practice';

export interface JargonState {
    mode: JargonMode;
    currentCategory: JargonCategory | null;
    currentTermIndex: number;
    score: number;
}
