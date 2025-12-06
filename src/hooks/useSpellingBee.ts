import { useState, useCallback, useMemo } from "react";
import { SpellingBeeDeck, SpellingWord } from "@/types/spellingbee";

interface UseSpellingBeeResult {
  currentWord: SpellingWord;
  currentIndex: number;
  totalWords: number;
  input: string;
  setInput: (value: string) => void;
  isCorrect: boolean | null;
  showHint: boolean;
  toggleHint: () => void;
  checkAnswer: () => void;
  nextWord: () => void;
  correctCount: number;
  isComplete: boolean;
  speak: () => void;
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

export const useSpellingBee = (deck: SpellingBeeDeck): UseSpellingBeeResult => {
  const [words, setWords] = useState<SpellingWord[]>(() => shuffleArray(deck.words));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const currentWord = words[currentIndex];
  const totalWords = words.length;
  const isComplete = currentIndex >= totalWords;

  const speak = useCallback(() => {
    if (currentWord && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(currentWord.word);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    }
  }, [currentWord]);

  const toggleHint = useCallback(() => {
    setShowHint((prev) => !prev);
  }, []);

  const checkAnswer = useCallback(() => {
    if (!currentWord) return;
    const correct = input.toLowerCase().trim() === currentWord.word.toLowerCase();
    setIsCorrect(correct);
    if (correct) {
      setCorrectCount((prev) => prev + 1);
    }
  }, [input, currentWord]);

  const nextWord = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
    setInput("");
    setIsCorrect(null);
    setShowHint(false);
  }, []);

  const resetGame = useCallback(() => {
    setWords(shuffleArray(deck.words));
    setCurrentIndex(0);
    setInput("");
    setIsCorrect(null);
    setShowHint(false);
    setCorrectCount(0);
  }, [deck.words]);

  return {
    currentWord,
    currentIndex,
    totalWords,
    input,
    setInput,
    isCorrect,
    showHint,
    toggleHint,
    checkAnswer,
    nextWord,
    correctCount,
    isComplete,
    speak,
    resetGame,
  };
};
