import { useState } from "react";
import { QuoteCategory, QuoteQuizState, Quote } from "@/types/quotequiz";

const INITIAL_STATE: QuoteQuizState = {
    mode: "selection",
    currentCategory: null,
    currentQuoteIndex: 0,
    score: 0,
    answers: {},
    isCorrect: null,
};

export const useQuoteQuiz = () => {
    const [state, setState] = useState<QuoteQuizState>(INITIAL_STATE);

    const selectCategory = (category: QuoteCategory) => {
        setState({
            ...INITIAL_STATE,
            mode: "quiz",
            currentCategory: category,
        });
    };

    const answerQuote = (answer: string) => {
        if (!state.currentCategory) return;

        const currentQuote = state.currentCategory.quotes[state.currentQuoteIndex];
        const isCorrect = answer === currentQuote.correctAnswer;

        setState((prev) => ({
            ...prev,
            isCorrect,
            answers: { ...prev.answers, [currentQuote.id]: answer },
            score: isCorrect ? prev.score + 1 : prev.score,
        }));
    };

    const nextQuote = () => {
        if (!state.currentCategory) return;

        const nextIndex = state.currentQuoteIndex + 1;
        if (nextIndex < state.currentCategory.quotes.length) {
            setState((prev) => ({
                ...prev,
                currentQuoteIndex: nextIndex,
                isCorrect: null,
            }));
        } else {
            setState((prev) => ({
                ...prev,
                mode: "complete",
            }));
        }
    };

    const resetQuiz = () => {
        if (state.currentCategory) {
            selectCategory(state.currentCategory);
        } else {
            setState(INITIAL_STATE);
        }
    };

    const goBack = () => {
        if (state.mode === "complete" || state.mode === "quiz") {
            setState(INITIAL_STATE);
        }
    };

    const getCurrentQuote = (): Quote | null => {
        if (!state.currentCategory || state.mode !== "quiz") return null;
        return state.currentCategory.quotes[state.currentQuoteIndex];
    };

    return {
        state,
        currentQuote: getCurrentQuote(),
        selectCategory,
        answerQuote,
        nextQuote,
        resetQuiz,
        goBack,
    };
};
