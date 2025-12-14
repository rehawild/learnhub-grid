import { useState } from "react";
import { TedTalksState, TedTalk } from "@/types/tedtalks";

const INITIAL_STATE: TedTalksState = {
    mode: "library",
    currentTalk: null,
    currentTime: 0,
    isPlaying: false,
    autoScroll: true,
    showVocab: true,
};

export const useTedTalks = () => {
    const [state, setState] = useState<TedTalksState>(INITIAL_STATE);

    // Controlled by the external player component
    const updateProgress = (time: number) => {
        setState(prev => ({ ...prev, currentTime: time }));
    };

    const setPlaying = (isPlaying: boolean) => {
        setState(prev => ({ ...prev, isPlaying }));
    };

    const selectTalk = (talk: TedTalk) => {
        setState({
            mode: "watching",
            currentTalk: talk,
            currentTime: 0,
            isPlaying: false,
            autoScroll: true,
            showVocab: true,
        });
    };

    const toggleAutoScroll = () => setState(prev => ({ ...prev, autoScroll: !prev.autoScroll }));
    const toggleVocab = () => setState(prev => ({ ...prev, showVocab: !prev.showVocab }));

    const goBack = () => {
        setState(INITIAL_STATE);
    };

    return {
        state,
        selectTalk,
        updateProgress,
        setPlaying,
        toggleAutoScroll,
        toggleVocab,
        goBack
    };
};
