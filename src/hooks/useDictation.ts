import { useState, useRef, useEffect } from "react";
import { DictationState, DictationExercise } from "@/types/dictation";

const INITIAL_STATE: DictationState = {
    mode: "selection",
    currentExercise: null,
    userText: "",
    isPlaying: false,
    playbackSpeed: 1.0,
};

export const useDictation = () => {
    const [state, setState] = useState<DictationState>(INITIAL_STATE);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Mock speech synthesis for audio playback
    const speak = (text: string, speed: number) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = speed * 0.9; // Adjust slightly for natural feel
            utterance.lang = 'en-US';

            utterance.onend = () => {
                setState(prev => ({ ...prev, isPlaying: false }));
            };

            window.speechSynthesis.speak(utterance);
        } else {
            console.warn("Speech Synthesis not supported");
            // Fallback: just toggle state back immediately
            setTimeout(() => setState(prev => ({ ...prev, isPlaying: false })), 2000);
        }
    };

    const startExercise = (exercise: DictationExercise) => {
        setState({
            mode: "writing",
            currentExercise: exercise,
            userText: "",
            isPlaying: false,
            playbackSpeed: 1.0,
        });
    };

    const togglePlay = () => {
        if (!state.currentExercise) return;

        if (state.isPlaying) {
            window.speechSynthesis.cancel();
            setState(prev => ({ ...prev, isPlaying: false }));
        } else {
            setState(prev => ({ ...prev, isPlaying: true }));
            speak(state.currentExercise.transcript, state.playbackSpeed);
        }
    };

    const setPlaybackSpeed = (speed: number) => {
        setState(prev => ({ ...prev, playbackSpeed: speed }));
        // If playing, restart with new speed? Or just set state. 
        // For simplicity, we'll let next play use new speed.
        if (state.isPlaying) {
            window.speechSynthesis.cancel();
            setState(prev => ({ ...prev, isPlaying: false }));
        }
    };

    const checkWork = () => {
        setState(prev => ({ ...prev, mode: "feedback", isPlaying: false }));
        window.speechSynthesis.cancel();
    };

    const updateUserText = (text: string) => {
        setState(prev => ({ ...prev, userText: text }));
    };

    const resetTool = () => {
        window.speechSynthesis.cancel();
        setState(INITIAL_STATE);
    };

    const tryAgain = () => {
        setState(prev => ({
            ...prev,
            mode: "writing",
            userText: "", // Optional: keep text? Usually retry means clear or edit. Let's keep empty for fresh start or user can see previous.
            // Actually better to keep empty for true dictation practice
        }));
    };

    // Cleanup
    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    return {
        state,
        startExercise,
        togglePlay,
        setPlaybackSpeed,
        updateUserText,
        checkWork,
        resetTool,
        tryAgain
    };
};
