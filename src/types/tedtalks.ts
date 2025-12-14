export interface TedTalk {
    id: string;
    title: string;
    speaker: string;
    duration: string;
    level: 'Intermediate' | 'Advanced';
    thumbnail: string;
    videoUrl: string; // YouTube ID or URL
    transcript: TranscriptSegment[];
    vocabulary: VocabularyItem[];
}

export interface TranscriptSegment {
    id: string;
    startTime: number; // Seconds
    endTime: number;
    text: string;
}

export interface VocabularyItem {
    id: string;
    word: string;
    definition: string;
    timestamp: number; // When it appears
}

export type TedTalksMode = 'library' | 'watching';

export interface TedTalksState {
    mode: TedTalksMode;
    currentTalk: TedTalk | null;
    currentTime: number;
    isPlaying: boolean;
    autoScroll: boolean;
    showVocab: boolean;
}
