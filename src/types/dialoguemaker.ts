export interface DialogueCharacter {
    id: string;
    name: string;
    color: string; // Tailwind color class prompt e.g. "bg-blue-100"
    avatar: string; // Emoji
}

export interface DialogueLine {
    id: string;
    characterId: string;
    text: string;
}

export interface DialogueScenario {
    id: string;
    title: string;
    description: string;
    icon: string;
    characters: DialogueCharacter[];
    starters: string[]; // Ideas to start the conversation
}

export type DialogueMakerMode = 'selection' | 'editor';

export interface DialogueMakerState {
    mode: DialogueMakerMode;
    currentScenario: DialogueScenario | null;
    lines: DialogueLine[];
}
