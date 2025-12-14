import { useState } from "react";
import { Book, BookClubState, BookQuestion } from "@/types/bookclub";

const INITIAL_STATE: BookClubState = {
    mode: "selection",
    currentBook: null,
    currentQuestionIndex: 0,
    score: 0,
    answers: {},
    showExplanation: false,
    isCorrect: null,
};

export const useBookClub = () => {
    const [state, setState] = useState<BookClubState>(INITIAL_STATE);

    const selectBook = (book: Book) => {
        setState({
            ...INITIAL_STATE,
            mode: "reading",
            currentBook: book,
        });
    };

    const startDiscussion = () => {
        setState((prev) => ({
            ...prev,
            mode: "discussion",
            currentQuestionIndex: 0,
        }));
    };

    const answerQuestion = (answer: string) => {
        if (!state.currentBook) return;

        const currentQ = state.currentBook.questions[state.currentQuestionIndex];
        const isCorrect = answer === currentQ.correctAnswer;

        setState((prev) => ({
            ...prev,
            showExplanation: true,
            isCorrect,
            answers: { ...prev.answers, [currentQ.id]: answer },
            score: isCorrect ? prev.score + 1 : prev.score,
        }));
    };

    const nextQuestion = () => {
        if (!state.currentBook) return;

        const nextIndex = state.currentQuestionIndex + 1;
        if (nextIndex < state.currentBook.questions.length) {
            setState((prev) => ({
                ...prev,
                currentQuestionIndex: nextIndex,
                showExplanation: false,
                isCorrect: null,
            }));
        } else {
            setState((prev) => ({
                ...prev,
                mode: "complete",
            }));
        }
    };

    const goBack = () => {
        if (state.mode === "complete") {
            setState(INITIAL_STATE);
        } else if (state.mode === "discussion") {
            setState((prev) => ({ ...prev, mode: "reading" }));
        } else if (state.mode === "reading") {
            setState(INITIAL_STATE);
        } else {
            // Already at selection, do nothing or handle parent nav
        }
    };

    const resetBook = () => {
        if (!state.currentBook) return;
        selectBook(state.currentBook);
    };

    const getCurrentQuestion = (): BookQuestion | null => {
        if (!state.currentBook || state.mode !== "discussion") return null;
        return state.currentBook.questions[state.currentQuestionIndex];
    };

    return {
        state,
        currentQuestion: getCurrentQuestion(),
        selectBook,
        startDiscussion,
        answerQuestion,
        nextQuestion,
        goBack,
        resetBook,
    };
};
