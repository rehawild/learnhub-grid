export interface DailyPhrase {
    id: string;
    phrase: string;
    meaning: string;
    example: string;
    origin?: string;
    category: 'idiom' | 'slang' | 'formal' | 'proverb';
    date: string; // YYYY-MM-DD
}

export interface DailyPhraseState {
    mode: 'discovery' | 'composition' | 'unlocked';
    currentPhrase: DailyPhrase | null;
    compositionShards: string[];
    selectedShards: string[];
    isCorrect: boolean | null;
    score: number;
}
