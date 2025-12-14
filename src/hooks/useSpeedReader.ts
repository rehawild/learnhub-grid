import { useState, useEffect, useCallback } from "react";
import { ReaderText, ReaderSettings, ReaderState } from "@/types/speedreader";

export const useSpeedReader = () => {
    const [state, setState] = useState<ReaderState>({
        currentText: null,
        isPlaying: false,
        currentIndex: 0,
        words: [],
        isComplete: false,
        settings: {
            wpm: 300,
            chunkSize: 1,
        },
    });

    const selectText = (text: ReaderText) => {
        setState((prev) => ({
            ...prev,
            currentText: text,
            words: text.content.split(/\s+/),
            currentIndex: 0,
            isPlaying: false,
            isComplete: false,
        }));
    };

    const togglePlay = () => {
        setState((prev) => {
            if (prev.isComplete) {
                // Restart if complete
                return { ...prev, currentIndex: 0, isComplete: false, isPlaying: true };
            }
            return { ...prev, isPlaying: !prev.isPlaying };
        });
    };

    const updateSettings = (newSettings: Partial<ReaderSettings>) => {
        setState((prev) => ({
            ...prev,
            settings: { ...prev.settings, ...newSettings },
        }));
    };

    const resetReader = () => {
        setState((prev) => ({
            ...prev,
            currentIndex: 0,
            isComplete: false,
            isPlaying: false
        }));
    }

    const goBack = () => {
        setState((prev) => ({
            ...prev,
            currentText: null,
            words: [],
            currentIndex: 0,
            isPlaying: false,
            isComplete: false,
        }));
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (state.isPlaying && !state.isComplete && state.words.length > 0) {
            // Calculate delay in ms: (60000 ms / WPM) * chunkSize
            const delay = (60000 / state.settings.wpm) * state.settings.chunkSize;

            interval = setInterval(() => {
                setState((prev) => {
                    const nextIndex = prev.currentIndex + prev.settings.chunkSize;

                    if (nextIndex >= prev.words.length) {
                        return { ...prev, isPlaying: false, isComplete: true, currentIndex: prev.words.length };
                    }

                    return { ...prev, currentIndex: nextIndex };
                });
            }, delay);
        }

        return () => clearInterval(interval);
    }, [state.isPlaying, state.isComplete, state.settings.wpm, state.settings.chunkSize, state.words.length]);

    return {
        state,
        selectText,
        togglePlay,
        updateSettings,
        resetReader,
        goBack,
    };
};
