import { useState, useCallback, useEffect } from "react";
import { RiddleDeck, RiddleState } from "@/types/riddles";

export const useRiddles = (deck: RiddleDeck | null) => {
    const [state, setState] = useState<RiddleState>({
        currentRiddleIndex: 0,
        isAnswerRevealed: false,
        isComplete: false,
    });

    const initGame = useCallback(() => {
        setState({
            currentRiddleIndex: 0,
            isAnswerRevealed: false,
            isComplete: false,
        });
    }, []);

    useEffect(() => {
        initGame();
    }, [initGame, deck]);

    const revealAnswer = useCallback(() => {
        setState((prev) => ({ ...prev, isAnswerRevealed: true }));
    }, []);

    const nextRiddle = useCallback(() => {
        if (!deck) return;

        setState((prev) => {
            const isLastRiddle = prev.currentRiddleIndex === deck.riddles.length - 1;
            if (isLastRiddle) {
                return { ...prev, isComplete: true };
            }
            return {
                ...prev,
                currentRiddleIndex: prev.currentRiddleIndex + 1,
                isAnswerRevealed: false,
            };
        });
    }, [deck]);

    const currentRiddle = deck ? deck.riddles[state.currentRiddleIndex] : null;

    return {
        ...state,
        currentRiddle,
        totalRiddles: deck?.riddles.length || 0,
        revealAnswer,
        nextRiddle,
        resetGame: initGame,
    };
};
