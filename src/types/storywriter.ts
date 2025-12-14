export interface StoryPrompt {
    id: string;
    text: string;
    elements: string[]; // Key elements to include (e.g., "A golden key", "A lost cat")
}

export interface StoryGenre {
    id: string;
    name: string;
    description: string;
    icon: string;
    prompts: StoryPrompt[];
}

export type StoryWriterMode = 'selection' | 'writing' | 'complete';

export interface StoryWriterState {
    mode: StoryWriterMode;
    currentGenre: StoryGenre | null;
    currentPrompt: StoryPrompt | null;
    storyContent: string;
}
