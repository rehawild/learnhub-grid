export type CambridgePartType = 'multiple_choice_cloze' | 'word_formation';

export interface ClozeOption {
    id: string; // "1", "2", etc.
    options: { A: string; B: string; C: string; D: string };
    correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export interface WordFormationItem {
    id: string; // "1", "2"
    sentence: string; // "The ________ was successful."
    rootWord: string; // "PERFORM"
    correctAnswer: string; // "PERFORMANCE"
}

export interface CambridgePart {
    id: string;
    type: CambridgePartType;
    title: string;
    description: string;
    text?: string; // For cloze text with placeholders like (1)...
    items: (ClozeOption | WordFormationItem)[]; // Union type items
}

export interface CambridgeTest {
    id: string;
    title: string;
    level: 'B2 First' | 'C1 Advanced';
    parts: CambridgePart[];
}

export interface CambridgeState {
    currentTest: CambridgeTest | null;
    currentPartIndex: number;
    answers: Record<string, string>; // itemId -> answer
    showResults: boolean;
    score: number;
}
