// Single Responsibility: Type definitions for Synonym Finder tool

export interface SynonymWord {
  id: string;
  word: string;
  synonyms: string[];
  definition: string;
  example: string;
}

export interface SynonymDeck {
  id: string;
  name: string;
  description: string;
  words: SynonymWord[];
}

export interface SynonymProgress {
  current: number;
  total: number;
  correct: number;
}
