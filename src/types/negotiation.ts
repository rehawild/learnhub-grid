export interface NegotiationPhrase {
    id: string;
    text: string;
    meaning: string;
    context: string;
    strategy: string;
}

export interface NegotiationScenario {
    id: string;
    title: string;
    description: string;
    icon: string;
    difficulty: 'easy' | 'medium' | 'hard';
    phrases: NegotiationPhrase[];
}

export type NegotiationMode = 'selection' | 'learning' | 'practice';

export interface NegotiationState {
    mode: NegotiationMode;
    currentScenario: NegotiationScenario | null;
    currentPhraseIndex: number;
    score: number;
}
