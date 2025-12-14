export interface Phoneme {
    symbol: string;
    description: string;
    videoUrl?: string; // Optional instructional video
}

export interface PronunciationWord {
    id: string;
    word: string;
    phonetic: string;
    audioUrl?: string; // Reference audio
    difficulty: 'Easy' | 'Medium' | 'Hard';
    category: 'Vowels' | 'Consonants' | 'Clusters' | 'Intonation';
    tips: string;
}

export interface PronunciationAttempt {
    id: string;
    wordId: string;
    audioBlob: Blob;
    score: number; // 0-100
    feedback: string;
    timestamp: number;
}

export type PronunciationMode = 'list' | 'practice';

export interface PronunciationState {
    mode: PronunciationMode;
    selectedCategory: string;
    currentWord: PronunciationWord | null;
    isRecording: boolean;
    attempts: PronunciationAttempt[];
}
