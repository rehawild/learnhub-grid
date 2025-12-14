export interface PhoneScenario {
    id: string;
    title: string;
    description: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    context: string; // e.g. "Calling a restaurant"
    objective: string; // e.g. "Reserve a table for two"
    initialAudio?: string; // URL for greeting
    script: PhoneScriptLine[];
}

export interface PhoneScriptLine {
    id: string;
    speaker: 'Caller' | 'Receiver'; // Receiver is the AI/App
    text: string;
    audioUrl?: string; // Pre-recorded lines
    expectedResponseKeywords?: string[]; // Simple keyword matching for user input
}

export type CallStatus = 'dialing' | 'connected' | 'ended' | 'idle';

export interface PhoneEnglishState {
    mode: 'list' | 'call';
    currentScenario: PhoneScenario | null;
    callStatus: CallStatus;
    conversationHistory: PhoneScriptLine[];
    isMuted: boolean;
    isSpeakerOn: boolean;
    callDuration: number;
}
