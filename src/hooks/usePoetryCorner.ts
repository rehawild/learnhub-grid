import { useState } from "react";
import { Poem, PoetryState } from "@/types/poetry";

export const usePoetryCorner = () => {
    const [state, setState] = useState<PoetryState>({
        currentPoem: null,
        mode: "library",
        currentQuestionIndex: 0,
        score: 0,
        answers: {},
        showExplanation: false,
    });

    const selectPoem = (poem: Poem) => {
        setState({
            currentPoem: poem,
            mode: "reading",
            currentQuestionIndex: 0,
            score: 0,
            answers: {},
            showExplanation: false,
        });
    };

    const startAnalysis = () => {
        setState((prev) => ({ ...prev, mode: "analysis" }));
    };

    const answerQuestion = (answer: string) => {
        if (!state.currentPoem) return;

        const currentQ = state.currentPoem.questions[state.currentQuestionIndex];
        const isCorrect = answer === currentQ.correctAnswer;

        setState((prev) => ({
            ...prev,
            answers: { ...prev.answers, [currentQ.id]: answer },
            score: isCorrect ? prev.score + 1 : prev.score,
            showExplanation: true,
        }));
    };

    const nextQuestion = () => {
        if (!state.currentPoem) return;

        const nextIndex = state.currentQuestionIndex + 1;

        if (nextIndex >= state.currentPoem.questions.length) {
            setState((prev) => ({ ...prev, mode: "complete", showExplanation: false }));
        } else {
            setState((prev) => ({
                ...prev,
                currentQuestionIndex: nextIndex,
                showExplanation: false,
            }));
        }
    };

    const goBack = () => {
        setState({
            currentPoem: null,
            mode: "library",
            currentQuestionIndex: 0,
            score: 0,
            answers: {},
            showExplanation: false,
        });
    };

    const resetPoem = () => {
        if (state.currentPoem) {
            selectPoem(state.currentPoem);
        }
    };

    return {
        state,
        currentQuestion: state.currentPoem?.questions[state.currentQuestionIndex],
        selectPoem,
        startAnalysis,
        answerQuestion,
        nextQuestion,
        goBack,
        resetPoem,
    };
};
