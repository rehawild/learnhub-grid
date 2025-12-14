import { useState } from "react";
import { CompPassage, CompState } from "@/types/comprehension";

export const useComprehension = () => {
    const [state, setState] = useState<CompState>({
        currentPassage: null,
        mode: "selection",
        currentQuestionIndex: 0,
        score: 0,
        answers: {},
        showExplanation: false,
    });

    const selectPassage = (passage: CompPassage) => {
        setState({
            currentPassage: passage,
            mode: "reading",
            currentQuestionIndex: 0,
            score: 0,
            answers: {},
            showExplanation: false,
        });
    };

    const startQuiz = () => {
        setState((prev) => ({ ...prev, mode: "quiz" }));
    };

    const answerQuestion = (answer: string) => {
        if (!state.currentPassage) return;

        const currentQ = state.currentPassage.questions[state.currentQuestionIndex];
        const isCorrect = answer === currentQ.correctAnswer;

        // We show explanation first, then user manually clicks "Next"
        // So here we validly just record the choice and show explanation

        // If we want immediate feedback style:
        setState((prev) => ({
            ...prev,
            answers: { ...prev.answers, [currentQ.id]: answer },
            score: isCorrect ? prev.score + 1 : prev.score,
            showExplanation: true
        }));
    };

    const nextQuestion = () => {
        if (!state.currentPassage) return;

        const nextIndex = state.currentQuestionIndex + 1;

        if (nextIndex >= state.currentPassage.questions.length) {
            setState((prev) => ({ ...prev, mode: "complete", showExplanation: false }));
        } else {
            setState((prev) => ({
                ...prev,
                currentQuestionIndex: nextIndex,
                showExplanation: false
            }));
        }
    }

    const goBack = () => {
        setState({
            currentPassage: null,
            mode: "selection",
            currentQuestionIndex: 0,
            score: 0,
            answers: {},
            showExplanation: false,
        });
    };

    const resetPassage = () => {
        if (state.currentPassage) {
            selectPassage(state.currentPassage);
        }
    }

    return {
        state,
        currentQuestion: state.currentPassage?.questions[state.currentQuestionIndex],
        selectPassage,
        startQuiz,
        answerQuestion,
        nextQuestion,
        goBack,
        resetPassage
    };
};
