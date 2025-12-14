import { useState } from "react";
import { StoryWriterState, StoryGenre, StoryPrompt } from "@/types/storywriter";

const INITIAL_STATE: StoryWriterState = {
    mode: "selection",
    currentGenre: null,
    currentPrompt: null,
    storyContent: "",
};

export const useStoryWriter = () => {
    const [state, setState] = useState<StoryWriterState>(INITIAL_STATE);

    const selectGenre = (genre: StoryGenre) => {
        // Randomly select a prompt from the genre
        const randomPrompt = genre.prompts[Math.floor(Math.random() * genre.prompts.length)];

        setState({
            ...INITIAL_STATE,
            mode: "writing",
            currentGenre: genre,
            currentPrompt: randomPrompt,
            storyContent: "",
        });
    };

    const updateStory = (content: string) => {
        setState((prev) => ({
            ...prev,
            storyContent: content,
        }));
    };

    const finishStory = () => {
        // Could run checks here (min length etc)
        setState((prev) => ({
            ...prev,
            mode: "complete",
        }));
    };

    const resetWriter = () => {
        if (state.currentGenre) {
            selectGenre(state.currentGenre);
        } else {
            setState(INITIAL_STATE);
        }
    };

    const goBack = () => {
        if (state.mode === "complete") {
            setState((prev) => ({ ...prev, mode: "writing" }));
        } else if (state.mode === "writing") {
            setState(INITIAL_STATE);
        }
    };

    return {
        state,
        selectGenre,
        updateStory,
        finishStory,
        resetWriter,
        goBack,
    };
};
