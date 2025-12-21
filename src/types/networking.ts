export interface NetworkingPhrase {
    id: string;
    text: string;
    meaning: string;
    context: string;
    intention: 'rapport' | 'introduction' | 'elevator-pitch' | 'exit';
}

export interface NetworkingScenario {
    id: string;
    title: string;
    description: string;
    icon: string;
    phrases: NetworkingPhrase[];
}

export type NetworkingMode = 'selection' | 'learning' | 'practice';

export interface NetworkingState {
    mode: NetworkingMode;
    currentScenario: NetworkingScenario | null;
    currentPhraseIndex: number;
    score: number;
}
