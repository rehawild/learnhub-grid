import { useState, useCallback } from "react";
import { Flashcard, FlashcardDeck } from "@/types/flashcard";

interface UseFlashcardsResult {
  currentCard: Flashcard | null;
  currentIndex: number;
  isFlipped: boolean;
  isComplete: boolean;
  progress: number;
  flipCard: () => void;
  nextCard: () => void;
  prevCard: () => void;
  resetDeck: () => void;
  goToCard: (index: number) => void;
}

export const useFlashcards = (deck: FlashcardDeck | null): UseFlashcardsResult => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const cards = deck?.cards ?? [];
  const currentCard = cards[currentIndex] ?? null;
  const isComplete = currentIndex >= cards.length;
  const progress = cards.length > 0 ? ((currentIndex) / cards.length) * 100 : 0;

  const flipCard = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const nextCard = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => Math.min(prev + 1, cards.length));
  }, [cards.length]);

  const prevCard = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const resetDeck = useCallback(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, []);

  const goToCard = useCallback((index: number) => {
    setIsFlipped(false);
    setCurrentIndex(Math.max(0, Math.min(index, cards.length - 1)));
  }, [cards.length]);

  return {
    currentCard,
    currentIndex,
    isFlipped,
    isComplete,
    progress,
    flipCard,
    nextCard,
    prevCard,
    resetDeck,
    goToCard,
  };
};
