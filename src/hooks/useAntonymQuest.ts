import { useState, useCallback } from "react";
import { AntonymDeck, AntonymState } from "@/types/antonymquest";

const initialState: AntonymState = {
  currentIndex: 0,
  correctAnswers: 0,
  isComplete: false,
  showHint: false,
  userInput: "",
  feedback: null,
};

export const useAntonymQuest = (deck: AntonymDeck | null) => {
  const [state, setState] = useState<AntonymState>(initialState);

  const currentWord = deck?.words[state.currentIndex] || null;
  const totalWords = deck?.words.length || 0;

  const setUserInput = useCallback((input: string) => {
    setState((prev) => ({ ...prev, userInput: input, feedback: null }));
  }, []);

  const toggleHint = useCallback(() => {
    setState((prev) => ({ ...prev, showHint: !prev.showHint }));
  }, []);

  const checkAnswer = useCallback(() => {
    if (!currentWord) return;

    const normalizedInput = state.userInput.toLowerCase().trim();
    const isCorrect = currentWord.antonyms.some(
      (antonym) => antonym.toLowerCase() === normalizedInput
    );

    setState((prev) => ({
      ...prev,
      feedback: isCorrect ? "correct" : "incorrect",
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
    }));
  }, [currentWord, state.userInput]);

  const nextWord = useCallback(() => {
    if (!deck) return;

    const nextIndex = state.currentIndex + 1;
    if (nextIndex >= deck.words.length) {
      setState((prev) => ({ ...prev, isComplete: true }));
    } else {
      setState((prev) => ({
        ...prev,
        currentIndex: nextIndex,
        showHint: false,
        userInput: "",
        feedback: null,
      }));
    }
  }, [deck, state.currentIndex]);

  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    ...state,
    currentWord,
    totalWords,
    setUserInput,
    toggleHint,
    checkAnswer,
    nextWord,
    reset,
  };
};
