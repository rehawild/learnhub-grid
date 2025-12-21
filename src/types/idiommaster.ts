export interface Idiom {
    id: string;
    phrase: string;
    meaning: string;
    origin?: string;
    example: string;
    context: string; // The "blank" version for drills
}

export interface IdiomCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    idioms: Idiom[];
}

export type IdiomMode = 'selection' | 'learning' | 'practice' | 'results';

export interface IdiomState {
    mode: IdiomMode;
    currentCategory: IdiomCategory | null;
    currentIdiomIndex: number;
    score: number;
    selections: Record<string, string>; // idiomId -> chosenMeaning
}
