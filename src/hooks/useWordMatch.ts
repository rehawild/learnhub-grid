import { useState, useCallback, useMemo } from "react";
import { WordMatchDeck, MatchCard, WordPair } from "@/types/wordmatch";

interface UseWordMatchResult {
  cards: MatchCard[];
  selectedCards: MatchCard[];
  matches: number;
  attempts: number;
  isComplete: boolean;
  selectCard: (card: MatchCard) => void;
  resetGame: () => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const createCardsFromPairs = (pairs: WordPair[]): MatchCard[] => {
  const cards: MatchCard[] = [];
  
  pairs.forEach((pair) => {
    cards.push({
      id: `word-${pair.id}`,
      pairId: pair.id,
      content: pair.word,
      type: "word",
      isFlipped: false,
      isMatched: false,
    });
    cards.push({
      id: `def-${pair.id}`,
      pairId: pair.id,
      content: pair.definition,
      type: "definition",
      isFlipped: false,
      isMatched: false,
    });
  });
  
  return shuffleArray(cards);
};

export const useWordMatch = (deck: WordMatchDeck): UseWordMatchResult => {
  const [cards, setCards] = useState<MatchCard[]>(() => 
    createCardsFromPairs(deck.pairs)
  );
  const [selectedCards, setSelectedCards] = useState<MatchCard[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const matches = useMemo(
    () => cards.filter((card) => card.isMatched).length / 2,
    [cards]
  );

  const isComplete = useMemo(
    () => cards.every((card) => card.isMatched),
    [cards]
  );

  const selectCard = useCallback(
    (card: MatchCard) => {
      if (isProcessing || card.isMatched || card.isFlipped) return;
      if (selectedCards.length >= 2) return;

      // Flip the selected card
      setCards((prev) =>
        prev.map((c) =>
          c.id === card.id ? { ...c, isFlipped: true } : c
        )
      );

      const newSelected = [...selectedCards, card];
      setSelectedCards(newSelected);

      // Check for match when 2 cards are selected
      if (newSelected.length === 2) {
        setIsProcessing(true);
        setAttempts((prev) => prev + 1);

        const [first, second] = newSelected;
        const isMatch = 
          first.pairId === second.pairId && first.type !== second.type;

        setTimeout(() => {
          if (isMatch) {
            // Mark as matched
            setCards((prev) =>
              prev.map((c) =>
                c.pairId === first.pairId
                  ? { ...c, isMatched: true, isFlipped: true }
                  : c
              )
            );
          } else {
            // Flip back
            setCards((prev) =>
              prev.map((c) =>
                c.id === first.id || c.id === second.id
                  ? { ...c, isFlipped: false }
                  : c
              )
            );
          }
          setSelectedCards([]);
          setIsProcessing(false);
        }, 1000);
      }
    },
    [selectedCards, isProcessing]
  );

  const resetGame = useCallback(() => {
    setCards(createCardsFromPairs(deck.pairs));
    setSelectedCards([]);
    setAttempts(0);
    setIsProcessing(false);
  }, [deck.pairs]);

  return {
    cards,
    selectedCards,
    matches,
    attempts,
    isComplete,
    selectCard,
    resetGame,
  };
};
