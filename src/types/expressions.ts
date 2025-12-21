export interface SocialExpression {
    id: string;
    expression: string;
    socialFunction: string;
    example: string;
    scenario: string;
    prompt: string;
    distractors: string[];
}

export interface ExpressionCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    expressions: SocialExpression[];
}

export type ExpressionMode = 'selection' | 'discovery' | 'drill' | 'results';

export interface ExpressionState {
    mode: ExpressionMode;
    currentCategory: ExpressionCategory | null;
    currentIndex: number;
    score: number;
}
