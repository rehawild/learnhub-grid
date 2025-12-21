import { useState, useCallback } from "react";
import { IdiomState, IdiomCategory, IdiomMode, Idiom } from "@/types/idiommaster";

export const useIdiomMaster = () => {
    const [state, setState] = useState<IdiomState>({
        mode: 'selection',
        currentCategory: null,
        currentIdiomIndex: 0,
        score: 0,
        selections: {}
    });

    const selectCategory = useCallback((category: IdiomCategory) => {
        setState({
            mode: 'learning',
            currentCategory: category,
            currentIdiomIndex: 0,
            score: 0,
            selections: {}
        });
    }, []);

    const setMode = useCallback((mode: IdiomMode) => {
        setState(prev => ({
            ...prev,
            mode,
            currentIdiomIndex: 0
        }));
    }, []);

    const nextIdiom = useCallback(() => {
        setState(prev => {
            if (!prev.currentCategory) return prev;
            if (prev.currentIdiomIndex < prev.currentCategory.idioms.length - 1) {
                return {
                    ...prev,
                    currentIdiomIndex: prev.currentIdiomIndex + 1
                };
            }
            return {
                ...prev,
                mode: 'practice'
            };
        });
    }, []);

    const prevIdiom = useCallback(() => {
        setState(prev => ({
            ...prev,
            currentIdiomIndex: Math.max(0, prev.currentIdiomIndex - 1)
        }));
    }, []);

    const makeSelection = useCallback((idiomId: string, chosenMeaning: string, isCorrect: boolean) => {
        setState(prev => ({
            ...prev,
            selections: { ...prev.selections, [idiomId]: chosenMeaning },
            score: isCorrect ? prev.score + 10 : prev.score
        }));
    }, []);

    const resetTool = useCallback(() => {
        setState({
            mode: 'selection',
            currentCategory: null,
            currentIdiomIndex: 0,
            score: 0,
            selections: {}
        });
    }, []);

    return {
        state,
        selectCategory,
        setMode,
        nextIdiom,
        prevIdiom,
        makeSelection,
        resetTool
    };
};
