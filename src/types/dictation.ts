export interface DictationExercise {
    id: string;
    title: string;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    category: string;
    audioSrc: string; // Mock URL or placeholder
    transcript: string; // The correct text
}

export type DictationMode = 'selection' | 'writing' | 'feedback';

export interface DictationState {
    mode: DictationMode;
    currentExercise: DictationExercise | null;
    userText: string;
    isPlaying: boolean;
    playbackSpeed: number; // 0.5, 0.75, 1.0
}
