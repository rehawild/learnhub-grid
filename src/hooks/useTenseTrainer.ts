import { useState, useCallback } from "react";
import { TenseDeck, TenseTrainerState } from "@/types/tensetrainer";

const initialState: TenseTrainerState = {
  currentDeck: null,
  currentWordIndex: 0,
  userAnswer: "",
  isCorrect: null,
  showHint: false,
  correctAnswers: 0,
  isComplete: false,
};

export const useTenseTrainer = () => {
  const [state, setState] = useState<TenseTrainerState>(initialState);

  const selectDeck = useCallback((deck: TenseDeck) => {
    setState({
      ...initialState,
      currentDeck: deck,
    });
  }, []);

  const setUserAnswer = useCallback((answer: string) => {
    setState((prev) => ({
      ...prev,
      userAnswer: answer,
      isCorrect: null,
    }));
  }, []);

  const checkAnswer = useCallback(() => {
    if (!state.currentDeck) return;

    const currentWord = state.currentDeck.words[state.currentWordIndex];
    const isCorrect =
      state.userAnswer.toLowerCase().trim() ===
      currentWord.correctAnswer.toLowerCase();

    setState((prev) => ({
      ...prev,
      isCorrect,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
    }));
  }, [state.currentDeck, state.currentWordIndex, state.userAnswer]);

  const nextWord = useCallback(() => {
    if (!state.currentDeck) return;

    const nextIndex = state.currentWordIndex + 1;
    const isComplete = nextIndex >= state.currentDeck.words.length;

    setState((prev) => ({
      ...prev,
      currentWordIndex: isComplete ? prev.currentWordIndex : nextIndex,
      userAnswer: "",
      isCorrect: null,
      showHint: false,
      isComplete,
    }));
  }, [state.currentDeck, state.currentWordIndex]);

  const toggleHint = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showHint: !prev.showHint,
    }));
  }, []);

  const resetGame = useCallback(() => {
    setState((prev) => ({
      ...initialState,
      currentDeck: prev.currentDeck,
    }));
  }, []);

  const goBack = useCallback(() => {
    setState(initialState);
  }, []);

  const currentWord = state.currentDeck?.words[state.currentWordIndex] || null;

  return {
    state,
    currentWord,
    selectDeck,
    setUserAnswer,
    checkAnswer,
    nextWord,
    toggleHint,
    resetGame,
    goBack,
  };
};
