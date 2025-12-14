export type TestType = 'IELTS' | 'TOEFL' | 'Cambridge' | 'Mock Test' | 'Custom';

export interface ScoreRecord {
    id: string;
    testType: TestType;
    details: string; // e.g. "Mock Test 1", "Official Exam"
    date: string; // ISO date
    score: number;
    maxScore: number;
    tags?: string[];
}

export interface Goal {
    id: string;
    testType: TestType;
    targetScore: number;
    deadline?: string;
    description?: string;
}

export interface ScoreTrackState {
    records: ScoreRecord[];
    goals: Goal[];
    filterType: TestType | 'All';
}
