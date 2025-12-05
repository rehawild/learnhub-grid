export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category?: string;
}

export interface FlashcardDeck {
  id: string;
  name: string;
  description?: string;
  cards: Flashcard[];
}
