import { useState } from "react";
import { EmailWriterState, EmailTemplate } from "@/types/emailwriter";

const INITIAL_STATE: EmailWriterState = {
    mode: "selection",
    currentTemplate: null,
    fields: {},
};

export const useEmailWriter = () => {
    const [state, setState] = useState<EmailWriterState>(INITIAL_STATE);

    const selectTemplate = (template: EmailTemplate) => {
        // Initialize fields with empty values
        const initialFields = template.fields.reduce((acc, field) => {
            acc[field.id] = "";
            return acc;
        }, {} as Record<string, string>);

        setState({
            ...INITIAL_STATE,
            mode: "composing",
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

    const previewEmail = () => {
        // Validation could go here
        setState((prev) => ({
            ...prev,
            mode: "preview",
        }));
    };

    const resetWriter = () => {
        if (state.currentTemplate) {
            selectTemplate(state.currentTemplate);
        } else {
            setState(INITIAL_STATE);
        }
    };

    const goBack = () => {
        if (state.mode === "preview") {
            setState((prev) => ({ ...prev, mode: "composing" }));
        } else if (state.mode === "composing") {
            setState(INITIAL_STATE);
        }
    };

    return {
        state,
        selectTemplate,
        updateField,
        previewEmail,
        resetWriter,
        goBack,
    };
};
