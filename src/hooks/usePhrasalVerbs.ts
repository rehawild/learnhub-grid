import { useState, useCallback } from "react";
import { PhrasalVerbState, PhrasalVerbCategory, PhrasalVerbMode } from "@/types/phrasalverbs";

export const usePhrasalVerbs = () => {
    const [state, setState] = useState<PhrasalVerbState>({
        mode: 'selection',
        currentCategory: null,
        currentIndex: 0,
        score: 0
    });

    const selectCategory = useCallback((category: PhrasalVerbCategory) => {
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

            // If we are learning, move to practice for the SAME verb
            if (prev.mode === 'learning') {
                return { ...prev, mode: 'practice' };
            }

            // If we are practicing, move to learning for the NEXT verb
            if (prev.mode === 'practice') {
                if (prev.currentIndex < prev.currentCategory.verbs.length - 1) {
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
            if (prev.mode === 'practice') {
                return { ...prev, mode: 'learning' };
            }
            if (prev.mode === 'learning' && prev.currentIndex > 0) {
                return {
                    ...prev,
                    mode: 'practice',
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
