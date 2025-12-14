import { useState } from "react";
import { ReviewWriterState, ReviewCategory } from "@/types/reviewwriter";

const INITIAL_STATE: ReviewWriterState = {
    mode: "selection",
    currentCategory: null,
    title: "",
    rating: 0,
    pros: [],
    cons: [],
    body: "",
};

export const useReviewWriter = () => {
    const [state, setState] = useState<ReviewWriterState>(INITIAL_STATE);

    const selectCategory = (category: ReviewCategory) => {
        setState({
            ...INITIAL_STATE,
            mode: "writing",
            currentCategory: category,
        });
    };

    const updateState = (updates: Partial<ReviewWriterState>) => {
        setState((prev) => ({
            ...prev,
            ...updates,
        }));
    };

    const addPro = (text: string) => {
        setState(prev => ({ ...prev, pros: [...prev.pros, text] }));
    };

    const removePro = (index: number) => {
        setState(prev => ({ ...prev, pros: prev.pros.filter((_, i) => i !== index) }));
    };

    const addCon = (text: string) => {
        setState(prev => ({ ...prev, cons: [...prev.cons, text] }));
    };

    const removeCon = (index: number) => {
        setState(prev => ({ ...prev, cons: prev.cons.filter((_, i) => i !== index) }));
    };

    const previewReview = () => {
        setState((prev) => ({
            ...prev,
            mode: "preview",
        }));
    };

    const resetTool = () => {
        if (state.currentCategory) {
            selectCategory(state.currentCategory);
        } else {
            setState(INITIAL_STATE);
        }
    };

    const goBack = () => {
        if (state.mode === "preview") {
            setState((prev) => ({ ...prev, mode: "writing" }));
        } else if (state.mode === "writing") {
            setState(INITIAL_STATE);
        }
    };

    return {
        state,
        selectCategory,
        updateState,
        addPro,
        removePro,
        addCon,
        removeCon,
        previewReview,
        resetTool,
        goBack,
    };
};
