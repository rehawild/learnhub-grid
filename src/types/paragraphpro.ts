export interface ParagraphPart {
    id: 'topic' | 'supporting1' | 'supporting2' | 'supporting3' | 'conclusion';
    label: string;
    placeholder: string;
    tips: string[];
    value: string;
}

export interface ParagraphGuide {
    id: string;
    name: string;
    description: string;
    icon: string;
    structure: string;
    parts: ParagraphPart[];
}

export type ParagraphProMode = 'selection' | 'building' | 'review';

export interface ParagraphProState {
    mode: ParagraphProMode;
    currentGuide: ParagraphGuide | null;
    parts: Record<string, string>; // Map part id to value
}
