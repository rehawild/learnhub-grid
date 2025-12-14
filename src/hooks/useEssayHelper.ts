import { useState } from "react";
import { EssayHelperState, EssayTemplate, EssaySection } from "@/types/essayhelper";

const INITIAL_STATE: EssayHelperState = {
    mode: "selection",
    currentTemplate: null,
    currentSectionIndex: 0,
    sections: [],
};

export const useEssayHelper = () => {
    const [state, setState] = useState<EssayHelperState>(INITIAL_STATE);

    const selectTemplate = (template: EssayTemplate) => {
        // Deep copy sections to allow editing
        const sectionsCopy = template.sections.map(s => ({ ...s }));

        setState({
            ...INITIAL_STATE,
            mode: "building",
            currentTemplate: template,
            sections: sectionsCopy,
        });
    };

    const updateSectionContent = (content: string) => {
        setState((prev) => {
            const newSections = [...prev.sections];
            newSections[prev.currentSectionIndex] = {
                ...newSections[prev.currentSectionIndex],
                content,
            };
            return { ...prev, sections: newSections };
        });
    };

    const nextSection = () => {
        if (!state.sections.length) return;

        const nextIndex = state.currentSectionIndex + 1;
        if (nextIndex < state.sections.length) {
            setState((prev) => ({
                ...prev,
                currentSectionIndex: nextIndex,
            }));
        } else {
            // Finished all sections, go to preview
            setState((prev) => ({
                ...prev,
                mode: "preview",
            }));
        }
    };

    const prevSection = () => {
        const prevIndex = state.currentSectionIndex - 1;
        if (prevIndex >= 0) {
            setState((prev) => ({
                ...prev,
                currentSectionIndex: prevIndex,
            }));
        } else {
            // Go back to selection if at start? 
            // Better to handle that with a separate "back" action or confirm dialog
        }
    };

    const goToSection = (index: number) => {
        if (index >= 0 && index < state.sections.length) {
            setState((prev) => ({
                ...prev,
                currentSectionIndex: index,
            }));
        }
    };

    const resetHelper = () => {
        if (state.currentTemplate) {
            selectTemplate(state.currentTemplate);
        } else {
            setState(INITIAL_STATE);
        }
    };

    const goBack = () => {
        if (state.mode === "preview") {
            setState((prev) => ({ ...prev, mode: "building", currentSectionIndex: prev.sections.length - 1 }));
        } else if (state.mode === "building") {
            setState(INITIAL_STATE);
        }
    };

    const getCurrentSection = (): EssaySection | null => {
        if (!state.sections.length || state.mode !== "building") return null;
        return state.sections[state.currentSectionIndex];
    };

    return {
        state,
        currentSection: getCurrentSection(),
        selectTemplate,
        updateSectionContent,
        nextSection,
        prevSection,
        goToSection,
        resetHelper,
        goBack,
    };
};
