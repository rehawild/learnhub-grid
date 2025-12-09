import { useState, useCallback } from "react";
import { SuffixDeck, SuffixWord, SuffixFeedback } from "@/types/suffixlab";

interface UseSuffixLabResult {
  currentDeck: SuffixDeck | null;
  currentWord: SuffixWord | null;
  currentIndex: number;
  userAnswer: string;
  feedback: SuffixFeedback;
  correctCount: number;
  showHint: boolean;
  isComplete: boolean;
  selectDeck: (deck: SuffixDeck) => void;
  setUserAnswer: (answer: string) => void;
  checkAnswer: () => void;
  nextWord: () => void;
  toggleHint: () => void;
  resetGame: () => void;
}

export const useSuffixLab = (): UseSuffixLabResult => {
  const [currentDeck, setCurrentDeck] = useState<SuffixDeck | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<SuffixFeedback>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentWord = currentDeck?.words[currentIndex] ?? null;

  const selectDeck = useCallback((deck: SuffixDeck) => {
    setCurrentDeck(deck);
    setCurrentIndex(0);
    setUserAnswer("");
    setFeedback(null);
    setCorrectCount(0);
    setShowHint(false);
    setIsComplete(false);
  }, []);

  const checkAnswer = useCallback(() => {
    if (!currentWord || feedback) return;

    const isCorrect = userAnswer.toLowerCase().trim() === currentWord.combinedWord.toLowerCase();
    setFeedback(isCorrect ? "correct" : "incorrect");
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }
  }, [currentWord, userAnswer, feedback]);

  const nextWord = useCallback(() => {
    if (!currentDeck) return;

    if (currentIndex < currentDeck.words.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setUserAnswer("");
      setFeedback(null);
      setShowHint(false);
    } else {
      setIsComplete(true);
    }
  }, [currentDeck, currentIndex]);

  const toggleHint = useCallback(() => {
    setShowHint((prev) => !prev);
  }, []);

  const resetGame = useCallback(() => {
    setCurrentDeck(null);
    setCurrentIndex(0);
    setUserAnswer("");
    setFeedback(null);
    setCorrectCount(0);
    setShowHint(false);
    setIsComplete(false);
  }, []);

  return {
    currentDeck,
    currentWord,
    currentIndex,
    userAnswer,
    feedback,
    correctCount,
    showHint,
    isComplete,
    selectDeck,
    setUserAnswer,
    checkAnswer,
    nextWord,
    toggleHint,
    resetGame,
  };
};
