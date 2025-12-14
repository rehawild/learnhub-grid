export interface FillGapExercise {
    id: string;
    title: string;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    category: 'Business' | 'Travel' | 'Casual' | 'Academic';
    dialogue: DialogueLine[];
}

export interface DialogueLine {
    id: string;
    speaker: string;
    avatar: string; // Emoji
    text: string; // Full text with gaps marked or separate structure? 
    // Let's use a "Gap" structure for easier UI rendering
    segments: (string | Gap)[];
}

export interface Gap {
    id: string;
    correctWord: string;
    options: string[]; // 3-4 choices
}

export type FillTheGapMode = 'selection' | 'practice';

export interface FillTheGapState {
    mode: FillTheGapMode;
    currentExercise: FillGapExercise | null;
    userAnswers: Record<string, string>; // gapId -> selectedWord
    isComplete: boolean;
    score: number | null;
}
