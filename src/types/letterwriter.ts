export interface LetterField {
    id: string;
    label: string;
    placeholder: string;
    tips: string[];
    value: string;
    required: boolean;
    type: 'text' | 'textarea' | 'date';
}

export interface LetterTemplate {
    id: string;
    name: string;
    description: string;
    icon: string;
    layout: 'formal' | 'informal'; // Affects alignment and font
    fields: LetterField[];
}

export type LetterWriterMode = 'selection' | 'writing' | 'preview';

export interface LetterWriterState {
    mode: LetterWriterMode;
    currentTemplate: LetterTemplate | null;
    fields: Record<string, string>; // Map field id to value
}
