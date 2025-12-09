export interface TenseWord {
  id: string;
  baseVerb: string;
  tense: string;
  correctAnswer: string;
  sentence: string; // Sentence with blank for the verb
  hint: string;
}

export interface TenseDeck {
  id: string;
  name: string;
  description: string;
  words: TenseWord[];
}

export interface TenseTrainerState {
  currentDeck: TenseDeck | null;
  currentWordIndex: number;
  userAnswer: string;
  isCorrect: boolean | null;
  showHint: boolean;
  correctAnswers: number;
  isComplete: boolean;
}
