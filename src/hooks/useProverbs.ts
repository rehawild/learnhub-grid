import { useState, useCallback } from "react";
import { ProverbState, ProverbCategory, ProverbMode } from "@/types/proverbs";

export const useProverbs = () => {
    const [state, setState] = useState<ProverbState>({
        mode: 'selection',
        currentCategory: null,
        currentIndex: 0,
        score: 0
    });

    const selectCategory = useCallback((category: ProverbCategory) => {
        setState({
            mode: 'discovery',
            currentCategory: category,
            currentIndex: 0,
            score: 0
        });
    }, []);

    const nextStep = useCallback(() => {
        setState(prev => {
            if (!prev.currentCategory) return prev;

            // Discovery -> Drill (Same proverb)
            if (prev.mode === 'discovery') {
                return { ...prev, mode: 'drill' };
            }

            // Drill -> Next Discovery (Next proverb)
            if (prev.mode === 'drill') {
                if (prev.currentIndex < prev.currentCategory.proverbs.length - 1) {
                    return {
                        ...prev,
                        mode: 'discovery',
                        currentIndex: prev.currentIndex + 1
                    };
                }
                return { ...prev, mode: 'results' };
            }

            return prev;
        });
    }, []);

    const prevStep = useCallback(() => {
        setState(prev => {
            if (prev.mode === 'drill') {
                return { ...prev, mode: 'discovery' };
            }
            if (prev.mode === 'discovery' && prev.currentIndex > 0) {
                return {
                    ...prev,
                    mode: 'drill',
                    currentIndex: prev.currentIndex - 1
                };
            }
            return prev;
        });
    }, []);

    const addScore = useCallback((points: number) => {
        setState(prev => ({
            ...prev,
            score: prev.score + points
        }));
    }, []);

    const resetTool = useCallback(() => {
        setState({
            mode: 'selection',
            currentCategory: null,
            currentIndex: 0,
            score: 0
        });
    }, []);

    return {
        state,
        selectCategory,
        nextStep,
        prevStep,
        addScore,
        resetTool
    };
};
