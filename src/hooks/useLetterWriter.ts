import { useState } from "react";
import { LetterWriterState, LetterTemplate } from "@/types/letterwriter";

const INITIAL_STATE: LetterWriterState = {
    mode: "selection",
    currentTemplate: null,
    fields: {},
};

export const useLetterWriter = () => {
    const [state, setState] = useState<LetterWriterState>(INITIAL_STATE);

    const selectTemplate = (template: LetterTemplate) => {
        // Initialize fields with empty strings
        const initialFields: Record<string, string> = {};
        template.fields.forEach(field => {
            initialFields[field.id] = field.value || "";
        });

        setState({
            mode: "writing",
            currentTemplate: template,
            fields: initialFields,
        });
    };

    const updateField = (fieldId: string, value: string) => {
        setState((prev) => ({
            ...prev,
            fields: {
                ...prev.fields,
                [fieldId]: value,
            },
        }));
    };

    const previewLetter = () => {
        setState((prev) => ({
            ...prev,
            mode: "preview",
        }));
    };

    const resetTool = () => {
        if (state.currentTemplate) {
            selectTemplate(state.currentTemplate);
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
        selectTemplate,
        updateField,
        previewLetter,
        resetTool,
        goBack,
    };
};
