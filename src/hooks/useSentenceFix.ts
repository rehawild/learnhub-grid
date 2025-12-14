import { useState } from "react";
import { FixDeck, FixState } from "@/types/sentencefix";
import { toast } from "sonner";

export const useSentenceFix = () => {
    const [state, setState] = useState<FixState>({
        currentDeck: null,
        currentIndex: 0,
        correctCount: 0,
        isComplete: false,
        selectedOption: null,
        isCorrect: null,
        showExplanation: false,
    });

    const selectDeck = (deck: FixDeck) => {
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
        const isCorrect = option === currentQuestion.correctSentence;

        setState((prev) => ({
            ...prev,
            selectedOption: option,
            isCorrect,
            correctCount: isCorrect ? prev.correctCount + 1 : prev.correctCount,
            showExplanation: true,
        }));

        if (isCorrect) {
            toast.success("Correct Fix!", { duration: 1500 });
        } else {
            toast.error("Not quite right", { duration: 1500 });
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
