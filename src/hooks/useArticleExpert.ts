import { useState, useCallback } from "react";
import { ArticleDeck, ArticleExpertState } from "@/types/articleexpert";

const initialState: ArticleExpertState = {
  currentDeck: null,
  currentIndex: 0,
  selectedArticle: "",
  isCorrect: null,
  showExplanation: false,
  correctCount: 0,
  isComplete: false,
};

export const useArticleExpert = () => {
  const [state, setState] = useState<ArticleExpertState>(initialState);

  const selectDeck = useCallback((deck: ArticleDeck) => {
    setState({
      ...initialState,
      currentDeck: deck,
    });
  }, []);

  const selectArticle = useCallback((article: string) => {
    setState((prev) => ({
      ...prev,
      selectedArticle: article,
    }));
  }, []);

  const checkAnswer = useCallback(() => {
    if (!state.currentDeck || !state.selectedArticle) return;

    const currentSentence = state.currentDeck.sentences[state.currentIndex];
    const isCorrect = state.selectedArticle === currentSentence.correctArticle;

    setState((prev) => ({
      ...prev,
      isCorrect,
      showExplanation: true,
      correctCount: isCorrect ? prev.correctCount + 1 : prev.correctCount,
    }));
  }, [state.currentDeck, state.currentIndex, state.selectedArticle]);

  const nextSentence = useCallback(() => {
    if (!state.currentDeck) return;

    const nextIndex = state.currentIndex + 1;
    const isComplete = nextIndex >= state.currentDeck.sentences.length;

    setState((prev) => ({
      ...prev,
      currentIndex: isComplete ? prev.currentIndex : nextIndex,
      selectedArticle: "",
      isCorrect: null,
      showExplanation: false,
      isComplete,
    }));
  }, [state.currentDeck, state.currentIndex]);

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
    selectArticle,
    checkAnswer,
    nextSentence,
    resetGame,
    goBack,
  };
};
