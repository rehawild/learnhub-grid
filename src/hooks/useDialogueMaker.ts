import { useState } from "react";
import { DialogueMakerState, DialogueScenario, DialogueLine, DialogueCharacter } from "@/types/dialoguemaker";


const INITIAL_STATE: DialogueMakerState = {
    mode: "selection",
    currentScenario: null,
    lines: [],
};

export const useDialogueMaker = () => {
    const [state, setState] = useState<DialogueMakerState>(INITIAL_STATE);

    const selectScenario = (scenario: DialogueScenario) => {
        setState({
            ...INITIAL_STATE,
            mode: "editor",
            currentScenario: scenario,
            lines: [],
        });
    };

    const addLine = (characterId: string, text: string) => {
        const newLine: DialogueLine = {
            id: crypto.randomUUID(),
            characterId,
            text,
        };
        setState((prev) => ({
            ...prev,
            lines: [...prev.lines, newLine],
        }));
    };

    const deleteLine = (lineId: string) => {
        setState((prev) => ({
            ...prev,
            lines: prev.lines.filter((line) => line.id !== lineId),
        }));
    };

    // To be used for "undo" functionality if needed, or reordering
    // For now simple add/delete is sufficient MVP

    const resetTool = () => {
        if (state.currentScenario) {
            selectScenario(state.currentScenario);
        } else {
            setState(INITIAL_STATE);
        }
    };

    const goBack = () => {
        setState(INITIAL_STATE);
    };

    return {
        state,
        selectScenario,
        addLine,
        deleteLine,
        resetTool,
        goBack,
    };
};
