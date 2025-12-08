import { useState, useCallback } from "react";
import { WordBuilderDeck, WordBuilderState } from "@/types/wordbuilder";

const initialState: WordBuilderState = {
  currentDeck: null,
  currentWordIndex: 0,
  selectedParts: [],
  isCorrect: null,
  correctCount: 0,
  isComplete: false,
  showHint: false,
};

export const useWordBuilder = () => {
  const [state, setState] = useState<WordBuilderState>(initialState);

  const selectDeck = useCallback((deck: WordBuilderDeck) => {
    setState({
      ...initialState,
      currentDeck: deck,
    });
  }, []);

  const togglePart = useCallback((partId: string) => {
    setState((prev) => {
      if (prev.isCorrect !== null) return prev;
      
      const isSelected = prev.selectedParts.includes(partId);
      return {
        ...prev,
        selectedParts: isSelected
          ? prev.selectedParts.filter((id) => id !== partId)
          : [...prev.selectedParts, partId],
      };
    });
  }, []);

  const checkAnswer = useCallback(() => {
    setState((prev) => {
      if (!prev.currentDeck) return prev;

      const currentWord = prev.currentDeck.words[prev.currentWordIndex];
      const correctParts = currentWord.correctParts;
      
      const isCorrect =
        prev.selectedParts.length === correctParts.length &&
        correctParts.every((part) => prev.selectedParts.includes(part));

      return {
        ...prev,
        isCorrect,
        correctCount: isCorrect ? prev.correctCount + 1 : prev.correctCount,
      };
    });
  }, []);

  const nextWord = useCallback(() => {
    setState((prev) => {
      if (!prev.currentDeck) return prev;

      const nextIndex = prev.currentWordIndex + 1;
      const isComplete = nextIndex >= prev.currentDeck.words.length;

      return {
        ...prev,
        currentWordIndex: isComplete ? prev.currentWordIndex : nextIndex,
        selectedParts: [],
        isCorrect: null,
        isComplete,
        showHint: false,
      };
    });
  }, []);

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

  return {
    state,
    selectDeck,
    togglePart,
    checkAnswer,
    nextWord,
    toggleHint,
    resetGame,
    goBack,
  };
};
