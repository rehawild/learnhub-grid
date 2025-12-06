export interface SpellingWord {
  id: string;
  word: string;
  hint?: string;
}

export interface SpellingBeeDeck {
  id: string;
  name: string;
  description: string;
  words: SpellingWord[];
}
