export interface ReportPhrase {
    id: string;
    text: string;
    meaning: string;
    context: string;
    tone: 'formal' | 'objective' | 'persuasive' | 'direct';
}

export interface ReportSection {
    id: string;
    title: string;
    description: string;
    icon: string;
    phrases: ReportPhrase[];
}

export type ReportMode = 'selection' | 'learning' | 'practice';

export interface ReportState {
    mode: ReportMode;
    currentSection: ReportSection | null;
    currentPhraseIndex: number;
    score: number;
}
