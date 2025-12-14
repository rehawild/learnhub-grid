export interface PresentationTopic {
    id: string;
    title: string;
    description: string;
    category: 'Business' | 'Academic' | 'Creative' | 'Impromptu';
    slides?: string[]; // Content prompts or image placeholders for each 'slide'
}

export type PresentationMode = 'Standard' | 'PechaKucha' | 'Impromptu';

export interface PresentationSettings {
    mode: PresentationMode;
    durationPerSlide: number; // seconds (0 for manual)
    totalDuration: number; // seconds
}

export interface PresentationRecording {
    id: string;
    topicId: string;
    audioBlob: Blob;
    duration: number;
    timestamp: number;
}

export interface PresentationState {
    step: 'selection' | 'preparation' | 'presenting' | 'completed';
    currentTopic: PresentationTopic | null;
    settings: PresentationSettings | null;
    currentSlideIndex: number;
    elapsedTime: number;
    isTimerRunning: boolean;
    isRecording: boolean;
    recordings: PresentationRecording[];
}
