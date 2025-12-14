export interface EssaySection {
    id: string;
    title: string;
    placeholder: string;
    tips: string[];
    content: string; // User input
}

export interface EssayTemplate {
    id: string;
    name: string;
    description: string;
    icon: string;
    sections: EssaySection[];
}

export type EssayHelperMode = 'selection' | 'building' | 'preview';

export interface EssayHelperState {
    mode: EssayHelperMode;
    currentTemplate: EssayTemplate | null;
    currentSectionIndex: number;
    sections: EssaySection[]; // Initialized from template
}
