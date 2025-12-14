import { useState } from "react";
import { NewsArticle, NewsReaderState } from "@/types/newsreader";

export const useNewsReader = () => {
    const [state, setState] = useState<NewsReaderState>({
        currentArticle: null,
        mode: "feed",
        currentQuestionIndex: 0,
        score: 0,
    });

    const selectArticle = (article: NewsArticle) => {
        setState({
            currentArticle: article,
            mode: "reading",
            currentQuestionIndex: 0,
            score: 0,
        });
    };

    const startQuiz = () => {
        setState((prev) => ({ ...prev, mode: "quiz" }));
    };

    const answerQuestion = (answer: string) => {
        if (!state.currentArticle) return;

        const currentQ = state.currentArticle.questions[state.currentQuestionIndex];
        const isCorrect = answer === currentQ.correctAnswer;

        setState((prev) => {
            const newScore = isCorrect ? prev.score + 1 : prev.score;
            const nextIndex = prev.currentQuestionIndex + 1;

            if (nextIndex >= (prev.currentArticle?.questions.length || 0)) {
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
            currentArticle: null,
            mode: "feed",
            currentQuestionIndex: 0,
            score: 0,
        });
    };

    const resetArticle = () => {
        if (state.currentArticle) {
            selectArticle(state.currentArticle);
        }
    }

    return {
        state,
        currentQuestion: state.currentArticle?.questions[state.currentQuestionIndex],
        selectArticle,
        startQuiz,
        answerQuestion,
        goBack,
        resetArticle
    };
};
