export interface RolePlayScenario {
    id: string;
    title: string;
    description: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    userRole: string;
    partnerRole: string;
    location: string;
    initialMessage: string; // Partner starts
}

export interface ChatMessage {
    id: string;
    sender: 'user' | 'partner';
    text: string; // If user records, this might be transcribed text (mocked) or "Audio Message"
    audioBlob?: Blob; // Present if sender is user (or Partner if we had TTS audio)
    timestamp: number;
}

export interface RolePlayState {
    mode: 'selection' | 'chat';
    currentScenario: RolePlayScenario | null;
    messages: ChatMessage[];
    isRecording: boolean;
    isProcessing: boolean; // Simulating partner "thinking"
}
