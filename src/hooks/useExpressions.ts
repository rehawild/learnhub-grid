import { useState, useCallback } from "react";
import {
    ExpressionState,
    ExpressionCategory,
    ExpressionMode
} from "@/types/expressions";

export const useExpressions = () => {
    const [state, setState] = useState<ExpressionState>({
        mode: 'selection',
        currentCategory: null,
        currentIndex: 0,
        score: 0
    });

    const selectCategory = useCallback((category: ExpressionCategory) => {
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

            if (prev.mode === 'discovery') {
                return { ...prev, mode: 'drill' };
            }

            const nextIndex = prev.currentIndex + 1;
            if (nextIndex >= prev.currentCategory.expressions.length) {
                return { ...prev, mode: 'results' };
            }

            return {
                ...prev,
                mode: 'discovery',
                currentIndex: nextIndex
            };
        });
    }, []);

    const prevStep = useCallback(() => {
        setState(prev => {
            if (!prev.currentCategory) return prev;

            if (prev.mode === 'drill') {
                return { ...prev, mode: 'discovery' };
            }

            const prevIndex = prev.currentIndex - 1;
            if (prevIndex < 0) {
                return { ...prev, mode: 'selection', currentCategory: null };
            }

            return {
                ...prev,
                mode: 'drill',
                currentIndex: prevIndex
            };
        });
    }, []);

    const addScore = useCallback((points: number) => {
        setState(prev => ({ ...prev, score: prev.score + points }));
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
