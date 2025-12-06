export interface WordPair {
  id: string;
  word: string;
  definition: string;
}

export interface MatchCard {
  id: string;
  pairId: string;
  content: string;
  type: "word" | "definition";
  isFlipped: boolean;
  isMatched: boolean;
}

export interface WordMatchDeck {
  id: string;
  name: string;
  description: string;
  pairs: WordPair[];
}
