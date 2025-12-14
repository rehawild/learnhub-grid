import { useState } from "react";
import { DescriptionLabState, DescriptionExercise } from "@/types/descriptionlab";

const INITIAL_STATE: DescriptionLabState = {
    mode: "selection",
    currentExercise: null,
    inputs: {},
};

export const useDescriptionLab = () => {
    const [state, setState] = useState<DescriptionLabState>(INITIAL_STATE);

    const selectExercise = (exercise: DescriptionExercise) => {
        setState({
            ...INITIAL_STATE,
            mode: "writing",
            currentExercise: exercise,
            inputs: {}, // Start fresh
        });
    };

    const updateInput = (inputId: string, value: string) => {
        setState((prev) => ({
            ...prev,
            inputs: {
                ...prev.inputs,
                [inputId]: value,
            },
        }));
    };

    const submitDescription = () => {
        // Simple validation or just proceed
        setState((prev) => ({
            ...prev,
            mode: "feedback",
        }));
    };

    const resetTool = () => {
        if (state.currentExercise) {
            selectExercise(state.currentExercise);
        } else {
            setState(INITIAL_STATE);
        }
    };

    const goBack = () => {
        if (state.mode === "feedback") {
            setState((prev) => ({ ...prev, mode: "writing" }));
        } else if (state.mode === "writing") {
            setState(INITIAL_STATE);
        }
    };

    return {
        state,
        selectExercise,
        updateInput,
        submitDescription,
        resetTool,
        goBack,
    };
};
