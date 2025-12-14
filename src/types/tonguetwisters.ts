export interface TongueTwister {
    id: string;
    text: string;
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
    focusSound: string; // e.g., 's' vs 'sh', 'p', 'th'
    targetSpeed: number; // seconds to complete
}

export interface TwisterAttempt {
    id: string;
    twisterId: string;
    audioBlob: Blob;
    duration: number; // seconds
    isSuccess: boolean; // User self-reported or basic detection
    timestamp: number;
}

export type TwisterMode = 'list' | 'practice';

export interface TongueTwisterState {
    mode: TwisterMode;
    selectedDifficulty: string;
    currentTwister: TongueTwister | null;
    isRecording: boolean;
    startTime: number | null;
    attempts: TwisterAttempt[];
}
