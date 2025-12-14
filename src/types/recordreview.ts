export interface ReviewTopic {
    id: string;
    title: string;
    description: string;
    questions: string[]; // Prompts to guide the user
}

export interface SavedRecording {
    id: string;
    topicId: string;
    audioBlob: Blob;
    duration: number; // seconds
    timestamp: number;
    notes: string;
}

export type RecordReviewMode = 'topics' | 'recording';

export interface RecordReviewState {
    mode: RecordReviewMode;
    currentTopic: ReviewTopic | null;
    isRecording: boolean;
    startTime: number | null;
    elapsed: number;
    recordings: SavedRecording[];
}
