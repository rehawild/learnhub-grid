import { useState, useCallback } from "react";
import { PitchState, PitchScenario, PitchMode, PitchOption, ImpactLevel } from "@/types/pitching";

const IMPACT_SCORES: Record<ImpactLevel, number> = {
    high: 25,
    medium: 10,
    low: 0
};

export const usePitching = () => {
    const [state, setState] = useState<PitchState>({
        mode: 'selection',
        currentScenario: null,
        currentSegmentIndex: 0,
        selections: [],
        totalScore: 0
    });

    const selectScenario = useCallback((scenario: PitchScenario) => {
        setState({
            mode: 'learning',
            currentScenario: scenario,
            currentSegmentIndex: 0,
            selections: [],
            totalScore: 0
        });
    }, []);

    const setMode = useCallback((mode: PitchMode) => {
        setState(prev => ({
            ...prev,
            mode,
            currentSegmentIndex: 0,
            selections: [],
            totalScore: 0
        }));
    }, []);

    const makeSelection = useCallback((segmentId: string, option: PitchOption) => {
        setState(prev => {
            const isAlreadySelected = prev.selections.some(s => s.segmentId === segmentId);
            if (isAlreadySelected) return prev;

            return {
                ...prev,
                selections: [...prev.selections, { segmentId, optionId: option.id }],
                totalScore: prev.totalScore + IMPACT_SCORES[option.impact]
            };
        });
    }, []);

    const nextSegment = useCallback(() => {
        setState(prev => {
            if (!prev.currentScenario) return prev;
            if (prev.currentSegmentIndex < prev.currentScenario.segments.length - 1) {
                return {
                    ...prev,
                    currentSegmentIndex: prev.currentSegmentIndex + 1
                };
            }
            return prev;
        });
    }, []);

    const resetTool = useCallback(() => {
        setState({
            mode: 'selection',
            currentScenario: null,
            currentSegmentIndex: 0,
            selections: [],
            totalScore: 0
        });
    }, []);

    return {
        state,
        selectScenario,
        setMode,
        makeSelection,
        nextSegment,
        resetTool
    };
};
