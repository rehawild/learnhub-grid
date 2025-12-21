import { useState, useCallback } from "react";
import { ResumeState, ResumeCategory, ResumeMode } from "@/types/resumehelp";

export const useResumeHelp = () => {
    const [state, setState] = useState<ResumeState>({
        mode: 'selection',
        currentCategory: null,
        currentBulletIndex: 0,
        score: 0
    });

    const selectCategory = useCallback((category: ResumeCategory) => {
        setState({
            mode: 'learning',
            currentCategory: category,
            currentBulletIndex: 0,
            score: 0
        });
    }, []);

    const setMode = useCallback((mode: ResumeMode) => {
        setState(prev => ({
            ...prev,
            mode,
            currentBulletIndex: 0
        }));
    }, []);

    const nextBullet = useCallback(() => {
        setState(prev => {
            if (!prev.currentCategory) return prev;
            if (prev.currentBulletIndex < prev.currentCategory.bullets.length - 1) {
                return {
                    ...prev,
                    currentBulletIndex: prev.currentBulletIndex + 1
                };
            }
            return {
                ...prev,
                mode: 'practice'
            };
        });
    }, []);

    const prevBullet = useCallback(() => {
        setState(prev => ({
            ...prev,
            currentBulletIndex: Math.max(0, prev.currentBulletIndex - 1)
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
            currentBulletIndex: 0,
            score: 0
        });
    }, []);

    return {
        state,
        selectCategory,
        setMode,
        nextBullet,
        prevBullet,
        updateScore,
        resetTool
    };
};
