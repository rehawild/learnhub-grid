export interface ArticleSentence {
  id: string;
  sentence: string; // Sentence with blank for article (e.g., "I saw ___ elephant")
  correctArticle: "a" | "an" | "the" | "no article";
  explanation: string;
}

export interface ArticleDeck {
  id: string;
  name: string;
  description: string;
  sentences: ArticleSentence[];
}

export interface ArticleExpertState {
  currentDeck: ArticleDeck | null;
  currentIndex: number;
  selectedArticle: string;
  isCorrect: boolean | null;
  showExplanation: boolean;
  correctCount: number;
  isComplete: boolean;
}
