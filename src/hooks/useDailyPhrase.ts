import { useState, useMemo, useEffect, useCallback } from "react";
import { DailyPhrase, DailyPhraseState } from "@/types/dailyPhrase";
import { dailyPhrases } from "@/data/dailyPhrase/items";

export const useDailyPhrase = () => {
    const [state, setState] = useState<DailyPhraseState>({
        mode: 'discovery',
        currentPhrase: null,
        compositionShards: [],
        selectedShards: [],
        isCorrect: null,
        score: 0
    });

    // Initialize with today's phrase
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        const phrase = dailyPhrases.find(p => p.date === today) || dailyPhrases[0];

        const shards = phrase.phrase.split(' ').sort(() => Math.random() - 0.5);

        setState(prev => ({
            ...prev,
            currentPhrase: phrase,
            compositionShards: shards,
            mode: 'discovery'
        }));
    }, []);

    const startComposition = useCallback(() => {
        setState(prev => ({ ...prev, mode: 'composition' }));
    }, []);

    const selectShard = useCallback((shard: string, index: number) => {
        if (state.mode !== 'composition') return;

        setState(prev => {
            const newSelected = [...prev.selectedShards, shard];
            const newShards = [...prev.compositionShards];
            newShards.splice(index, 1);

            let isCorrect = prev.isCorrect;
            let mode = prev.mode;
            let score = prev.score;

            if (newShards.length === 0) {
                const finalPhrase = newSelected.join(' ');
                if (finalPhrase === prev.currentPhrase?.phrase) {
                    isCorrect = true;
                    mode = 'unlocked';
                    score += 50;
                } else {
                    isCorrect = false;
                    // Reset selected shards on failure to allow retry
                    return {
                        ...prev,
                        selectedShards: [],
                        compositionShards: prev.currentPhrase?.phrase.split(' ').sort(() => Math.random() - 0.5) || [],
                        isCorrect: false
                    };
                }
            }

            return {
                ...prev,
                selectedShards: newSelected,
                compositionShards: newShards,
                isCorrect,
                mode,
                score
            };
        });
    }, [state.mode, state.compositionShards, state.currentPhrase]);

    const resetComposition = useCallback(() => {
        if (!state.currentPhrase) return;
        const shards = state.currentPhrase.phrase.split(' ').sort(() => Math.random() - 0.5);
        setState(prev => ({
            ...prev,
            selectedShards: [],
            compositionShards: shards,
            isCorrect: null
        }));
    }, [state.currentPhrase]);

    return {
        state,
        startComposition,
        selectShard,
        resetComposition
    };
};
