export interface AccentRegion {
    id: string;
    name: string;
    flag: string; // Emoji
    description: string;
    characteristics: string[]; // Key features (e.g., 'Rhotic r', 'Glottal stop')
    examples: AccentExample[];
}

export interface AccentExample {
    id: string;
    phrase: string;
    phonetic: string; // IPA or simple phonetic
    audioSrc: string; // URL
    tip: string;
}

export type AccentTrainerMode = 'selection' | 'practice';

export interface AccentTrainerState {
    mode: AccentTrainerMode;
    currentRegion: AccentRegion | null;
    currentExample: AccentExample | null; // Currently selected phrase
    isPlaying: boolean;
    isRecording: boolean; // Mock recording state
}
