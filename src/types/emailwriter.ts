export interface EmailField {
    id: 'subject' | 'recipient' | 'greeting' | 'body' | 'closing' | 'sender';
    label: string;
    placeholder: string;
    tips: string[];
    value: string;
    required: boolean;
}

export interface EmailTemplate {
    id: string;
    name: string;
    description: string;
    icon: string;
    fields: EmailField[];
    structure: string; // Describes the general tone/structure
}

export type EmailWriterMode = 'selection' | 'composing' | 'preview';

export interface EmailWriterState {
    mode: EmailWriterMode;
    currentTemplate: EmailTemplate | null;
    fields: Record<string, string>; // Map field id to value
}
