import { useState } from "react";
import { CambridgeState, CambridgeTest } from "@/types/cambridge";

const INITIAL_STATE: CambridgeState = {
    currentTest: null,
    currentPartIndex: 0,
    answers: {},
    showResults: false,
    score: 0
};

export const useCambridge = () => {
    const [state, setState] = useState<CambridgeState>(INITIAL_STATE);

    const startTest = (test: CambridgeTest) => {
        setState({
            ...INITIAL_STATE,
            currentTest: test
        });
    };

    const setAnswer = (itemId: string, value: string) => {
        setState(prev => ({
            ...prev,
            answers: { ...prev.answers, [itemId]: value }
        }));
    };

    const nextPart = () => {
        setState(prev => {
            if (!prev.currentTest) return prev;
            if (prev.currentPartIndex < prev.currentTest.parts.length - 1) {
                return { ...prev, currentPartIndex: prev.currentPartIndex + 1 };
            } else {
                return calculateResults(prev);
            }
        });
    };

    const calculateResults = (currentState: CambridgeState): CambridgeState => {
        if (!currentState.currentTest) return currentState;
        let score = 0;

        currentState.currentTest.parts.forEach(part => {
            part.items.forEach(item => {
                const userAnswer = currentState.answers[item.id]?.trim().toUpperCase();
                const correct = (item as any).correctAnswer?.toUpperCase();
                if (userAnswer === correct) {
                    score++;
                }
            });
        });

        return { ...currentState, showResults: true, score };
    };

    const reset = () => {
        setState(INITIAL_STATE);
    };

    return {
        state,
        startTest,
        setAnswer,
        nextPart,
        reset
    };
};
