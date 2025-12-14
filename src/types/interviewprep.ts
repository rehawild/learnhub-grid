export interface InterviewTopic {
    id: string;
    title: string;
    description: string;
    icon: string; // Emoji
    questions: InterviewQuestion[];
}

export interface InterviewQuestion {
    id: string;
    text: string;
    tips: string[]; // Advice on how to answer
    sampleAnswer: string;
}

export type InterviewMode = 'selection' | 'practice' | 'evaluation';

export interface InterviewPrepState {
    mode: InterviewMode;
    currentTopic: InterviewTopic | null;
    currentQuestionIndex: number;
    isRecording: boolean;
    recordingTime: number; // in seconds
    userResponses: Record<string, UserResponse>; // questionId -> response
}

export interface UserResponse {
    audioUrl?: string; // Mock URL for now
    duration: number;
    selfRating?: number; // 1-5
    notes?: string;
}
