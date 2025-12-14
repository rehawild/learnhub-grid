export interface ReaderText {
    id: string;
    title: string;
    category: string;
    content: string; // Full text content
    difficulty: "Easy" | "Medium" | "Hard";
}

export interface ReaderSettings {
    wpm: number; // Words Per Minute
    chunkSize: number; // Words displayed at once (1, 2, or 3)
}

export interface ReaderState {
    currentText: ReaderText | null;
    isPlaying: boolean;
    currentIndex: number; // Index of the word array
    words: string[]; // Content split into words
    isComplete: boolean;
    settings: ReaderSettings;
}
