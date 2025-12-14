import { useState } from "react";
import { FillTheGapState, FillGapExercise } from "@/types/fillthegap";

const INITIAL_STATE: FillTheGapState = {
    mode: "selection",
    currentExercise: null,
    userAnswers: {},
    isComplete: false,
    score: null,
};

export const useFillTheGap = () => {
    const [state, setState] = useState<FillTheGapState>(INITIAL_STATE);

    const selectExercise = (exercise: FillGapExercise) => {
        setState({
            mode: "practice",
            currentExercise: exercise,
            userAnswers: {},
            isComplete: false,
            score: null,
        });
    };

    const selectWord = (gapId: string, word: string) => {
        setState(prev => ({
            ...prev,
            userAnswers: { ...prev.userAnswers, [gapId]: word }
        }));
    };

    const checkAnswers = () => {
        if (!state.currentExercise) return;

        let totalGaps = 0;
        let correctGaps = 0;

        state.currentExercise.dialogue.forEach(line => {
            line.segments.forEach(seg => {
                if (typeof seg !== 'string') {
                    totalGaps++;
                    if (state.userAnswers[seg.id] === seg.correctWord) {
                        correctGaps++;
                    }
                }
            });
        });

        const score = Math.round((correctGaps / totalGaps) * 100);
        setState(prev => ({ ...prev, isComplete: true, score }));
    };

    const resetTool = () => {
        setState(INITIAL_STATE);
    };

    const retryExercise = () => {
        setState(prev => ({
            ...prev,
            userAnswers: {},
            isComplete: false,
            score: null,
        }));
    };

    return {
        state,
        selectExercise,
        selectWord,
        checkAnswers,
        resetTool,
        retryExercise
    };
};
