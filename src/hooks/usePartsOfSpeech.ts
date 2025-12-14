import { useState } from "react";
import { POSDeck, POSState, PartOfSpeechType } from "@/types/partsofspeech";
import { toast } from "sonner";

export const usePartsOfSpeech = () => {
    const [state, setState] = useState<POSState>({
        currentDeck: null,
        currentIndex: 0,
        correctCount: 0,
        isComplete: false,
        selectedOption: null,
        isCorrect: null,
        showExplanation: false,
    });

    const selectDeck = (deck: POSDeck) => {
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

    const checkAnswer = (option: PartOfSpeechType) => {
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
