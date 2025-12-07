import { useState, useCallback, useEffect } from "react";
import { SynonymDeck, SynonymWord, SynonymProgress } from "@/types/synonymfinder";

interface UseSynonymFinderResult {
  currentWord: SynonymWord | null;
  currentIndex: number;
  isComplete: boolean;
  progress: SynonymProgress;
  userAnswer: string;
  feedback: "correct" | "incorrect" | null;
  showHint: boolean;
  setUserAnswer: (answer: string) => void;
  checkAnswer: () => boolean;
  nextWord: () => void;
  toggleHint: () => void;
  resetGame: () => void;
}

export const useSynonymFinder = (deck: SynonymDeck | null): UseSynonymFinderResult => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [showHint, setShowHint] = useState(false);

  const words = deck?.words ?? [];
  const currentWord = words[currentIndex] ?? null;
  const isComplete = deck ? currentIndex >= words.length : false;

  const progress: SynonymProgress = {
    current: currentIndex + 1,
    total: words.length,
    correct: correctCount,
  };

  // Reset when deck changes
  useEffect(() => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setUserAnswer("");
    setFeedback(null);
    setShowHint(false);
  }, [deck?.id]);

  const checkAnswer = useCallback((): boolean => {
    if (!currentWord) return false;

    const normalizedAnswer = userAnswer.trim().toLowerCase();
    const isCorrect = currentWord.synonyms.some(
      (syn) => syn.toLowerCase() === normalizedAnswer
    );

    setFeedback(isCorrect ? "correct" : "incorrect");

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }

    return isCorrect;
  }, [currentWord, userAnswer]);

  const nextWord = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
    setUserAnswer("");
    setFeedback(null);
    setShowHint(false);
  }, []);

  const toggleHint = useCallback(() => {
    setShowHint((prev) => !prev);
  }, []);

  const resetGame = useCallback(() => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setUserAnswer("");
    setFeedback(null);
    setShowHint(false);
  }, []);

  return {
    currentWord,
    currentIndex,
    isComplete,
    progress,
    userAnswer,
    feedback,
    showHint,
    setUserAnswer,
    checkAnswer,
    nextWord,
    toggleHint,
    resetGame,
  };
};
