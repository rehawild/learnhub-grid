import { useState, useCallback } from "react";
import { SmallTalkState, SmallTalkTopic, SmallTalkMode, DialogueOption, SocialImpact } from "@/types/smalltalk";

const IMPACT_SCORES: Record<SocialImpact, number> = {
    high: 50,
    medium: 20,
    low: 0
};

export const useSmallTalk = () => {
    const [state, setState] = useState<SmallTalkState>({
        mode: 'selection',
        currentTopic: null,
        currentTurnIndex: 0,
        selections: [],
        totalScore: 0
    });

    const selectTopic = useCallback((topic: SmallTalkTopic) => {
        setState({
            mode: 'conversation',
            currentTopic: topic,
            currentTurnIndex: 0,
            selections: [],
            totalScore: 0
        });
    }, []);

    const makeSelection = useCallback((turnId: string, option: DialogueOption) => {
        setState(prev => {
            // Don't allow multiple selections for the same turn
            if (prev.selections.some(s => s.turnId === turnId)) return prev;

            return {
                ...prev,
                selections: [...prev.selections, { turnId, optionId: option.id }],
                totalScore: prev.totalScore + IMPACT_SCORES[option.impact]
            };
        });
    }, []);

    const nextTurn = useCallback(() => {
        setState(prev => {
            if (!prev.currentTopic) return prev;

            if (prev.currentTurnIndex < prev.currentTopic.turns.length - 1) {
                return {
                    ...prev,
                    currentTurnIndex: prev.currentTurnIndex + 1
                };
            } else {
                return {
                    ...prev,
                    mode: 'results'
                };
            }
        });
    }, []);

    const resetTool = useCallback(() => {
        setState({
            mode: 'selection',
            currentTopic: null,
            currentTurnIndex: 0,
            selections: [],
            totalScore: 0
        });
    }, []);

    return {
        state,
        selectTopic,
        makeSelection,
        nextTurn,
        resetTool
    };
};
