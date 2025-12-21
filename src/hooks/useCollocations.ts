import { useState, useCallback } from "react";
import { CollocationState, CollocationCategory, CollocationMode } from "@/types/collocations";

export const useCollocations = () => {
    const [state, setState] = useState<CollocationState>({
        mode: 'selection',
        currentCategory: null,
        currentIndex: 0,
        score: 0
    });

    const selectCategory = useCallback((category: CollocationCategory) => {
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

            // Discovery -> Drill (Same collocation)
            if (prev.mode === 'discovery') {
                return { ...prev, mode: 'drill' };
            }

            // Drill -> Next Discovery (Next collocation)
            if (prev.mode === 'drill') {
                if (prev.currentIndex < prev.currentCategory.collocations.length - 1) {
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
