import { useState } from "react";
import { VerbDeck, VerbState } from "@/types/verbforms";
import { toast } from "sonner";

export const useVerbForms = () => {
    const [state, setState] = useState<VerbState>({
        currentDeck: null,
        currentIndex: 0,
        correctCount: 0,
        isComplete: false,
        selectedOption: null,
        isCorrect: null,
    });

    const selectDeck = (deck: VerbDeck) => {
        setState({
            currentDeck: deck,
            currentIndex: 0,
            correctCount: 0,
            isComplete: false,
            selectedOption: null,
            isCorrect: null,
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
        }));

        if (isCorrect) {
            toast.success("Correct!", { duration: 1000 });
            // Auto advance after correct answer delay? 
            // User might want to see it was correct. Let's make them click Next to match other tools.
        } else {
            toast.error("Try again next time", { duration: 1000 });
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
