export interface StoryQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface Story {
    id: string;
    title: string;
    author: string;
    coverEmoji: string;
    content: string[]; // Paragraphs
    questions: StoryQuestion[];
}

export interface StoryTimeState {
    currentStory: Story | null;
    mode: "library" | "reading" | "quiz" | "complete";
    currentQuestionIndex: number;
    score: number;
    answers: Record<string, string>; // questionId -> selectedAnswer
}
