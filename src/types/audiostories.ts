export interface AudioStory {
    id: string;
    title: string;
    author: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    category: 'Fiction' | 'History' | 'Sci-Fi' | 'Mystery';
    coverImage: string; // Emoji or URL
    audioSrc: string; // Mock
    content: string; // Full text
    quiz: QuizQuestion[];
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number; // Index of correct option
}

export type AudioStoriesMode = 'library' | 'reading' | 'quiz';

export interface AudioStoriesState {
    mode: AudioStoriesMode;
    currentStory: AudioStory | null;
    isPlaying: boolean;
    quizAnswers: Record<string, number>; // questionId -> selectedIndex
    score: number | null;
}
