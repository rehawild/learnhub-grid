export interface ReviewCategory {
    id: string;
    label: string;
    icon: string;
    description: string;
    placeholderTitle: string;
    tips: string[];
}

export type ReviewWriterMode = 'selection' | 'writing' | 'preview';

export interface ReviewWriterState {
    mode: ReviewWriterMode;
    currentCategory: ReviewCategory | null;
    title: string;
    rating: number; // 1-5
    pros: string[];
    cons: string[];
    body: string;
}
