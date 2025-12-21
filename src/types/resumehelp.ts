export interface ResumeBullet {
    id: string;
    weak: string;
    strong: string;
    actionVerb: string;
    impactLabel: string;
    explanation: string;
}

export interface ResumeCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    bullets: ResumeBullet[];
}

export type ResumeMode = 'selection' | 'learning' | 'practice';

export interface ResumeState {
    mode: ResumeMode;
    currentCategory: ResumeCategory | null;
    currentBulletIndex: number;
    score: number;
}
