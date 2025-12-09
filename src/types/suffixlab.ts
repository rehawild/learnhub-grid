export interface SuffixWord {
  id: string;
  baseWord: string;
  suffix: string;
  combinedWord: string;
  meaning: string;
  hint: string;
}

export interface SuffixDeck {
  id: string;
  name: string;
  description: string;
  words: SuffixWord[];
}

export type SuffixFeedback = "correct" | "incorrect" | null;
