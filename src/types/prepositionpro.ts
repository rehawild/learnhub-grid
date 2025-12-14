export interface PrepositionQuestion {
  id: string;
  sentence: string; // The sentence with a placeholder, e.g., "I will see you ___ 5 PM."
  options: string[]; // ["at", "on", "in", "by"]
  correctAnswer: string; // "at"
  explanation: string; // "We use 'at' for precise times."
}

export interface PrepositionDeck {
  id: string;
  name: string;
  description: string;
  questions: PrepositionQuestion[];
}

export interface PrepositionState {
  currentDeck: PrepositionDeck | null;
  currentIndex: number;
  correctCount: number;
  isComplete: boolean;
  selectedOption: string | null; // The option the user clicked
  isCorrect: boolean | null; // null = not answered, true = correct, false = wrong
  showExplanation: boolean;
}
