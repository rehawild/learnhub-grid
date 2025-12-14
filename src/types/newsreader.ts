export interface NewsVocabulary {
    word: string;
    definition: string;
}

export interface NewsQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface NewsArticle {
    id: string;
    headline: string;
    summary: string;
    source: string; // e.g., "Tech Daily", "World News"
    date: string;
    category: "Technology" | "Science" | "Environment" | "Culture";
    imageEmoji: string;
    content: string[]; // Paragraphs
    vocabulary: NewsVocabulary[]; // Key terms to learn
    questions: NewsQuestion[];
}

export interface NewsReaderState {
    currentArticle: NewsArticle | null;
    mode: "feed" | "reading" | "quiz" | "complete";
    currentQuestionIndex: number;
    score: number;
}
