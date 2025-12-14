export interface SensoryInput {
    id: 'sight' | 'sound' | 'smell' | 'taste' | 'touch' | 'emotion';
    label: string;
    icon: string;
    placeholder: string;
    prompt: string;
}

export interface DescriptionExercise {
    id: string;
    title: string;
    description: string;
    imagePrompt: string; // Emoji or short description of visual
    category: 'Object' | 'Place' | 'Character' | 'Event';
    keyElements: string[];
}

export type DescriptionLabMode = 'selection' | 'writing' | 'feedback';

export interface DescriptionLabState {
    mode: DescriptionLabMode;
    currentExercise: DescriptionExercise | null;
    inputs: Record<string, string>; // Map sensory input id to user text
}
