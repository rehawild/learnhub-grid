import { useState } from "react";
import { PunctuationDeck, PunctuationState } from "@/types/punctuation";
import { toast } from "sonner";

export const usePunctuation = () => {
    const [state, setState] = useState<PunctuationState>({
        currentDeck: null,
        currentIndex: 0,
        correctCount: 0,
        isComplete: false,
        selectedOption: null,
        isCorrect: null,
        showExplanation: false,
    });

    const selectDeck = (deck: PunctuationDeck) => {
        setState({
            currentDeck: deck,
            currentIndex: 0,
            correctCount: 0,
            isComplete: false,
            selectedOption: null,
            isCorrect: null,
            showExplanation: false,
        });
    };

    const checkAnswer = (option: string) => {
        if (!state.currentDeck || state.isCorrect !== null) return;

        const currentQuestion = state.currentDeck.questions[state.currentIndex];
        const isCorrect = option === currentQuestion.correctAnswer;

        setState((prev) => ({
            ...prev,
            selectedOption: option,
            isCorrect,
            correctCount: isCorrect ? prev.correctCount + 1 : prev.correctCount,
            showExplanation: true,
        }));

        if (isCorrect) {
            toast.success("Correct!", { duration: 1500 });
        } else {
            toast.error("Oops! Not that one.", { duration: 1500 });
        }
    };

    const nextQuestion = () => {
        if (!state.currentDeck) return;

        const isLastQuestion =
            state.currentIndex === state.currentDeck.questions.length - 1;

        if (isLastQuestion) {
            setState((prev) => ({ ...prev, isComplete: true }));
        } else {
            setState((prev) => ({
                ...prev,
                currentIndex: prev.currentIndex + 1,
                selectedOption: null,
                isCorrect: null,
                showExplanation: false,
            }));
        }
    };

    const resetGame = () => {
        if (!state.currentDeck) return;
        selectDeck(state.currentDeck);
    };

    const goBack = () => {
        setState({
            currentDeck: null,
            currentIndex: 0,
            correctCount: 0,
            isComplete: false,
            selectedOption: null,
            isCorrect: null,
            showExplanation: false,
        });
    };

    return {
        state,
        currentQuestion: state.currentDeck?.questions[state.currentIndex],
        selectDeck,
        checkAnswer,
        nextQuestion,
        resetGame,
        goBack,
    };
};
