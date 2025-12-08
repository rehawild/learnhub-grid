export interface PrefixWord {
  id: string;
  prefix: string;
  meaning: string;
  rootWord: string;
  combinedWord: string;
  definition: string;
  example: string;
}

export interface PrefixDeck {
  id: string;
  name: string;
  description: string;
  words: PrefixWord[];
}

export type PrefixFeedback = "correct" | "incorrect" | null;
