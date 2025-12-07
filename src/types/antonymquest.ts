export interface AntonymWord {
  id: string;
  word: string;
  antonyms: string[];
  hint?: string;
}

export interface AntonymDeck {
  id: string;
  name: string;
  description: string;
  words: AntonymWord[];
}

export interface AntonymState {
  currentIndex: number;
  correctAnswers: number;
  isComplete: boolean;
  showHint: boolean;
  userInput: string;
  feedback: "correct" | "incorrect" | null;
}
