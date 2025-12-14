import { useState } from "react";
import { AccentTrainerState, AccentRegion, AccentExample } from "@/types/accenttrainer";

const INITIAL_STATE: AccentTrainerState = {
    mode: "selection",
    currentRegion: null,
    currentExample: null,
    isPlaying: false,
    isRecording: false,
};

export const useAccentTrainer = () => {
    const [state, setState] = useState<AccentTrainerState>(INITIAL_STATE);

    const selectRegion = (region: AccentRegion) => {
        setState({
            mode: "practice",
            currentRegion: region,
            currentExample: region.examples[0] || null,
            isPlaying: false,
            isRecording: false,
        });
    };

    const selectExample = (example: AccentExample) => {
        setState((prev) => ({
            ...prev,
            currentExample: example,
            isPlaying: false,
            isRecording: false,
        }));
    };

    const togglePlay = () => {
        // Mock audio play
        if (state.isPlaying) {
            setState((prev) => ({ ...prev, isPlaying: false }));
        } else {
            setState((prev) => ({ ...prev, isPlaying: true }));
            // Simulate audio ending
            setTimeout(() => setState((prev) => ({ ...prev, isPlaying: false })), 2000);
        }
    };

    const toggleRecording = () => {
        if (state.isRecording) {
            setState((prev) => ({ ...prev, isRecording: false }));
        } else {
            setState((prev) => ({ ...prev, isRecording: true }));
            // Simulate recording duration
            setTimeout(() => setState((prev) => ({ ...prev, isRecording: false })), 3000);
        }
    };

    const resetTool = () => {
        setState(INITIAL_STATE);
    };

    const goBack = () => {
        setState(INITIAL_STATE);
    };

    return {
        state,
        selectRegion,
        selectExample,
        togglePlay,
        toggleRecording,
        resetTool,
        goBack
    };
};
