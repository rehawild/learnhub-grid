import { useState, useCallback } from "react";
import { ReportState, ReportSection, ReportMode } from "@/types/reportwriting";

export const useReportWriting = () => {
    const [state, setState] = useState<ReportState>({
        mode: 'selection',
        currentSection: null,
        currentPhraseIndex: 0,
        score: 0
    });

    const selectSection = useCallback((section: ReportSection) => {
        setState(prev => ({
            ...prev,
            currentSection: section,
            mode: 'learning',
            currentPhraseIndex: 0
        }));
    }, []);

    const setMode = useCallback((mode: ReportMode) => {
        setState(prev => ({
            ...prev,
            mode,
            currentPhraseIndex: 0
        }));
    }, []);

    const nextPhrase = useCallback(() => {
        if (!state.currentSection) return;

        if (state.currentPhraseIndex < state.currentSection.phrases.length - 1) {
            setState(prev => ({
                ...prev,
                currentPhraseIndex: prev.currentPhraseIndex + 1
            }));
        } else {
            setMode('practice');
        }
    }, [state.currentSection, state.currentPhraseIndex, setMode]);

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
            currentSection: null,
            currentPhraseIndex: 0,
            score: 0
        });
    }, []);

    return {
        state,
        selectSection,
        setMode,
        nextPhrase,
        prevPhrase,
        updateScore,
        resetTool
    };
};
