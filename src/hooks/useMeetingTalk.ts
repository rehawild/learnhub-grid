import { useState, useCallback } from "react";
import { MeetingScenario, MeetingState, MeetingMode } from "@/types/meetingtalk";

export const useMeetingTalk = () => {
    const [state, setState] = useState<MeetingState>({
        mode: 'selection',
        currentScenario: null,
        currentPhraseIndex: 0,
        score: 0,
    });

    const selectScenario = useCallback((scenario: MeetingScenario) => {
        setState({
            mode: 'learning',
            currentScenario: scenario,
            currentPhraseIndex: 0,
            score: 0,
        });
    }, []);

    const setMode = useCallback((mode: MeetingMode) => {
        setState(prev => ({ ...prev, mode }));
    }, []);

    const nextPhrase = useCallback(() => {
        setState(prev => {
            if (!prev.currentScenario) return prev;
            const isLast = prev.currentPhraseIndex === prev.currentScenario.phrases.length - 1;
            if (isLast) {
                return { ...prev, mode: 'practice', currentPhraseIndex: 0 };
            }
            return { ...prev, currentPhraseIndex: prev.currentPhraseIndex + 1 };
        });
    }, []);

    const prevPhrase = useCallback(() => {
        setState(prev => {
            if (prev.currentPhraseIndex === 0) return prev;
            return { ...prev, currentPhraseIndex: prev.currentPhraseIndex - 1 };
        });
    }, []);

    const updateScore = useCallback((points: number) => {
        setState(prev => ({ ...prev, score: prev.score + points }));
    }, []);

    const resetTool = useCallback(() => {
        setState({
            mode: 'selection',
            currentScenario: null,
            currentPhraseIndex: 0,
            score: 0,
        });
    }, []);

    return {
        state,
        selectScenario,
        setMode,
        nextPhrase,
        prevPhrase,
        updateScore,
        resetTool,
    };
};
