import { useState, useCallback } from "react";
import { NetworkingState, NetworkingScenario, NetworkingMode } from "@/types/networking";

export const useNetworking = () => {
    const [state, setState] = useState<NetworkingState>({
        mode: 'selection',
        currentScenario: null,
        currentPhraseIndex: 0,
        score: 0
    });

    const selectScenario = useCallback((scenario: NetworkingScenario) => {
        setState(prev => ({
            ...prev,
            currentScenario: scenario,
            mode: 'learning',
            currentPhraseIndex: 0
        }));
    }, []);

    const setMode = useCallback((mode: NetworkingMode) => {
        setState(prev => ({
            ...prev,
            mode,
            currentPhraseIndex: 0
        }));
    }, []);

    const nextPhrase = useCallback(() => {
        if (!state.currentScenario) return;

        if (state.currentPhraseIndex < state.currentScenario.phrases.length - 1) {
            setState(prev => ({
                ...prev,
                currentPhraseIndex: prev.currentPhraseIndex + 1
            }));
        } else {
            setMode('practice');
        }
    }, [state.currentScenario, state.currentPhraseIndex, setMode]);

    const prevPhrase = useCallback(() => {
        if (state.currentPhraseIndex > 0) {
            setState(prev => ({
                ...prev,
                currentPhraseIndex: prev.currentPhraseIndex - 1
            }));
        }
    }, [state.currentPhraseIndex]);

    const updateScore = useCallback((newScore: number) => {
        setState(prev => ({
            ...prev,
            score: prev.score + newScore
        }));
    }, []);

    const resetTool = useCallback(() => {
        setState({
            mode: 'selection',
            currentScenario: null,
            currentPhraseIndex: 0,
            score: 0
        });
    }, []);

    return {
        state,
        selectScenario,
        setMode,
        nextPhrase,
        prevPhrase,
        updateScore,
        resetTool
    };
};
