export interface WordPart {
  id: string;
  type: "prefix" | "suffix" | "root";
  value: string;
  meaning: string;
}

export interface WordBuilderWord {
  id: string;
  root: string;
  rootMeaning: string;
  correctParts: string[]; // IDs of correct prefix/suffix combinations
  resultWord: string;
  resultMeaning: string;
}

export interface WordBuilderDeck {
  id: string;
  name: string;
  description: string;
  availableParts: WordPart[];
  words: WordBuilderWord[];
}

export interface WordBuilderState {
  currentDeck: WordBuilderDeck | null;
  currentWordIndex: number;
  selectedParts: string[];
  isCorrect: boolean | null;
  correctCount: number;
  isComplete: boolean;
  showHint: boolean;
}
