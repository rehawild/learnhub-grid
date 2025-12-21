import { useState, useCallback, useMemo } from "react";
import { DialectState, DialectItem } from "@/types/britishVsUs";
import { dialectItems } from "@/data/britishVsUs/items";

export const useBritishVsUs = () => {
    const [state, setState] = useState<DialectState>({
        currentIndex: 0,
        score: 0,
        completed: false,
        attempts: 0
    });

    const currentItem = useMemo(() =>
        dialectItems[state.currentIndex] || null,
        [state.currentIndex]);

    const totalItemsCount = dialectItems.length;

    const handleCorrect = useCallback(() => {
        setState(prev => {
            const nextIndex = prev.currentIndex + 1;
            const isFinished = nextIndex >= totalItemsCount;

            return {
                ...prev,
                currentIndex: isFinished ? prev.currentIndex : nextIndex,
                score: prev.score + 10,
                completed: isFinished,
                attempts: 0
            };
        });
    }, [totalItemsCount]);

    const handleWrong = useCallback(() => {
        setState(prev => ({
            ...prev,
            attempts: prev.attempts + 1
        }));
    }, []);

    const reset = useCallback(() => {
        setState({
            currentIndex: 0,
            score: 0,
            completed: false,
            attempts: 0
        });
    }, []);

    return {
        state,
        currentItem,
        handleCorrect,
        handleWrong,
        reset,
        totalItemsCount
    };
};
