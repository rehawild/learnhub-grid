import { useState, useCallback } from "react";
import { SlangState, SlangCategory, SlangMode } from "@/types/slangschool";

export const useSlangSchool = () => {
    const [state, setState] = useState<SlangState>({
        mode: 'selection',
        currentCategory: null,
        currentIndex: 0,
        score: 0
    });

    const selectCategory = useCallback((category: SlangCategory) => {
        setState({
            mode: 'learning',
            currentCategory: category,
            currentIndex: 0,
            score: 0
        });
    }, []);

    const nextStep = useCallback(() => {
        setState(prev => {
            if (!prev.currentCategory) return prev;

            // Learn -> Challenge (Same term)
            if (prev.mode === 'learning') {
                return { ...prev, mode: 'challenge' };
            }

            // Challenge -> Next Learn (Next term)
            if (prev.mode === 'challenge') {
                if (prev.currentIndex < prev.currentCategory.terms.length - 1) {
                    return {
                        ...prev,
                        mode: 'learning',
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
            if (prev.mode === 'challenge') {
                return { ...prev, mode: 'learning' };
            }
            if (prev.mode === 'learning' && prev.currentIndex > 0) {
                return {
                    ...prev,
                    mode: 'challenge',
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
