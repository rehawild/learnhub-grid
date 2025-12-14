import { useState } from "react";
import { ClueLevel, ContextCluesState, ClueQuestion } from "@/types/contextclues";

const INITIAL_STATE: ContextCluesState = {
    mode: "selection",
    currentLevel: null,
    currentIndex: 0,
    score: 0,
    answers: {},
    isCorrect: null,
};

export const useContextClues = () => {
    const [state, setState] = useState<ContextCluesState>(INITIAL_STATE);

    const selectLevel = (level: ClueLevel) => {
        setState({
            ...INITIAL_STATE,
            mode: "game",
            currentLevel: level,
        });
    };

    const answerQuestion = (answer: string) => {
        if (!state.currentLevel) return;

        const currentQ = state.currentLevel.questions[state.currentIndex];
        const isCorrect = answer === currentQ.correctAnswer;

        setState((prev) => ({
            ...prev,
            isCorrect,
            answers: { ...prev.answers, [currentQ.id]: answer },
            score: isCorrect ? prev.score + 1 : prev.score,
        }));
    };

    const nextQuestion = () => {
        if (!state.currentLevel) return;

        const nextIndex = state.currentIndex + 1;
        if (nextIndex < state.currentLevel.questions.length) {
            setState((prev) => ({
                ...prev,
                currentIndex: nextIndex,
                isCorrect: null,
            }));
        } else {
            setState((prev) => ({
                ...prev,
                mode: "complete",
            }));
        }
    };

    const resetGame = () => {
        if (state.currentLevel) {
            selectLevel(state.currentLevel);
        } else {
            setState(INITIAL_STATE);
        }
    };

    const goBack = () => {
        setState(INITIAL_STATE);
    };

    const getCurrentQuestion = (): ClueQuestion | null => {
        if (!state.currentLevel || state.mode !== "game") return null;
        return state.currentLevel.questions[state.currentIndex];
    };

    return {
        state,
        currentQuestion: getCurrentQuestion(),
        selectLevel,
        answerQuestion,
        nextQuestion,
        resetGame,
        goBack,
    };
};
