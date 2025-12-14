export interface ChatUser {
    id: string;
    name: string;
    avatar?: string;
}

export interface ChatMessage {
    id: string;
    senderId: string;
    text: string;
    timestamp: number;
    isAudio?: boolean; // If we add audio support later
}

export interface DailyTopic {
    id: string;
    date: string; // YYYY-MM-DD
    title: string;
    question: string;
    starterParams: string[]; // Suggestions to start talking
}

export interface UserStats {
    currentStreak: number;
    totalDays: number;
    lastActiveDate: string | null;
}

export interface DailyChatState {
    currentTopic: DailyTopic;
    messages: ChatMessage[];
    stats: UserStats;
    isTyping: boolean; // Partner typing simulation
}
