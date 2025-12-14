export type TOEFLTaskType = 'speaking_independent' | 'speaking_integrated' | 'writing_integrated';

export type TOEFLStage = 'idle' | 'reading' | 'listening' | 'preparing' | 'speaking' | 'completed';

export interface TOEFLModule {
    id: string;
    title: string;
    type: TOEFLTaskType;
    description: string;
    content: {
        readingText?: string; // For integrated tasks
        readingTimeSeconds?: number;
        listeningScript?: string[]; // Transcript of the audio part
        listeningImage?: string; // Context image (e.g., "Professor in class")
        listeningDurationSeconds?: number; // Simulated duration
        question: string;
        prepTimeSeconds: number;
        speakTimeSeconds: number;
    };
}

export interface TOEFLState {
    currentModule: TOEFLModule | null;
    stage: TOEFLStage;
    timer: number;
    totalTime: number; // For progress bars
    isRecording: boolean;
    recordingBlob: Blob | null;
}
