import { useState } from "react";
import { Story, StoryTimeState } from "@/types/storytime";

export const useStoryTime = () => {
    const [state, setState] = useState<StoryTimeState>({
        currentStory: null,
        mode: "library",
        currentQuestionIndex: 0,
        score: 0,
        answers: {},
    });

    const selectStory = (story: Story) => {
        setState({
            currentStory: story,
            mode: "reading",
            currentQuestionIndex: 0,
            score: 0,
            answers: {},
        });
    };

    const startQuiz = () => {
        setState((prev) => ({ ...prev, mode: "quiz" }));
    };

    const answerQuestion = (answer: string) => {
        if (!state.currentStory) return;

        const currentQ = state.currentStory.questions[state.currentQuestionIndex];
        const isCorrect = answer === currentQ.correctAnswer;

        // Store answer logic if needed, simplify for now

        setState((prev) => {
            const newScore = isCorrect ? prev.score + 1 : prev.score;
            const nextIndex = prev.currentQuestionIndex + 1;

            if (nextIndex >= (prev.currentStory?.questions.length || 0)) {
                return {
                    ...prev,
                    score: newScore,
                    mode: "complete",
                };
            }

            return {
                ...prev,
                score: newScore,
                currentQuestionIndex: nextIndex,
            };
        });
    };

    const goBack = () => {
        setState({
            currentStory: null,
            mode: "library",
            currentQuestionIndex: 0,
            score: 0,
            answers: {},
        });
    };

    const resetStory = () => {
        if (state.currentStory) {
            selectStory(state.currentStory);
        }
    }

    return {
        state,
        currentQuestion: state.currentStory?.questions[state.currentQuestionIndex],
        selectStory,
        startQuiz,
        answerQuestion,
        goBack,
        resetStory
    };
};
