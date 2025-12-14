import { useState } from "react";
import { ParagraphProState, ParagraphGuide } from "@/types/paragraphpro";

const INITIAL_STATE: ParagraphProState = {
    mode: "selection",
    currentGuide: null,
    parts: {},
};

export const useParagraphPro = () => {
    const [state, setState] = useState<ParagraphProState>(INITIAL_STATE);

    const selectGuide = (guide: ParagraphGuide) => {
        // Initialize parts with empty values
        const initialParts = guide.parts.reduce((acc, part) => {
            acc[part.id] = "";
            return acc;
        }, {} as Record<string, string>);

        setState({
            ...INITIAL_STATE,
            mode: "building",
            currentGuide: guide,
            parts: initialParts,
        });
    };

    const updatePart = (partId: string, value: string) => {
        setState((prev) => ({
            ...prev,
            parts: {
                ...prev.parts,
                [partId]: value,
            },
        }));
    };

    const reviewParagraph = () => {
        setState((prev) => ({
            ...prev,
            mode: "review",
        }));
    };

    const resetTool = () => {
        if (state.currentGuide) {
            selectGuide(state.currentGuide);
        } else {
            setState(INITIAL_STATE);
        }
    };

    const goBack = () => {
        if (state.mode === "review") {
            setState((prev) => ({ ...prev, mode: "building" }));
        } else if (state.mode === "building") {
            setState(INITIAL_STATE);
        }
    };

    return {
        state,
        selectGuide,
        updatePart,
        reviewParagraph,
        resetTool,
        goBack,
    };
};
