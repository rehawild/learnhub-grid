export type ImpactLevel = 'high' | 'medium' | 'low';

export interface PitchOption {
    id: string;
    text: string;
    impact: ImpactLevel;
    feedback: string;
}

export interface PitchSegment {
    id: string;
    type: 'hook' | 'problem' | 'solution' | 'ask';
    title: string;
    options: PitchOption[];
}

export interface PitchScenario {
    id: string;
    title: string;
    description: string;
    icon: string;
    segments: PitchSegment[];
}

export type PitchMode = 'selection' | 'learning' | 'practice';

export interface PitchState {
    mode: PitchMode;
    currentScenario: PitchScenario | null;
    currentSegmentIndex: number;
    selections: { segmentId: string; optionId: string }[];
    totalScore: number;
}
