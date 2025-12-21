import { useState, useCallback } from "react";
import { JargonState, JargonCategory, JargonMode } from "@/types/jargonbuster";

export const useJargonBuster = () => {
    const [state, setState] = useState<JargonState>({
        mode: 'selection',
        currentCategory: null,
        currentTermIndex: 0,
        score: 0
    });

    const selectCategory = useCallback((category: JargonCategory) => {
        setState({
            mode: 'learning',
            currentCategory: category,
            currentTermIndex: 0,
            score: 0
        });
    }, []);

    const setMode = useCallback((mode: JargonMode) => {
        setState(prev => ({
            ...prev,
            mode,
            currentTermIndex: 0
        }));
    }, []);

    const nextTerm = useCallback(() => {
        setState(prev => {
            if (!prev.currentCategory) return prev;
            if (prev.currentTermIndex < prev.currentCategory.terms.length - 1) {
                return {
                    ...prev,
                    currentTermIndex: prev.currentTermIndex + 1
                };
            }
            return {
                ...prev,
                mode: 'practice'
            };
        });
    }, []);

    const prevTerm = useCallback(() => {
        setState(prev => ({
            ...prev,
            currentTermIndex: Math.max(0, prev.currentTermIndex - 1)
        }));
    }, []);

    const updateScore = useCallback((points: number) => {
        setState(prev => ({
            ...prev,
            score: prev.score + points
        }));
    }, []);

    const resetTool = useCallback(() => {
        setState({
            mode: 'selection',
            currentCategory: null,
            currentTermIndex: 0,
            score: 0
        });
    }, []);

    return {
        state,
        selectCategory,
        setMode,
        nextTerm,
        prevTerm,
        updateScore,
        resetTool
    };
};
