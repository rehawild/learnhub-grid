export interface MeetingPhrase {
    id: string;
    text: string;
    meaning: string;
    context: string;
}

export interface MeetingScenario {
    id: string;
    title: string;
    description: string;
    icon: string;
    phrases: MeetingPhrase[];
}

export type MeetingMode = 'selection' | 'learning' | 'practice';

export interface MeetingState {
    mode: MeetingMode;
    currentScenario: MeetingScenario | null;
    currentPhraseIndex: number;
    score: number;
}
