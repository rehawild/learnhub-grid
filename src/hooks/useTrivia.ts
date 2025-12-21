import { useState, useCallback } from 'react';
import { TriviaCategory, TriviaQuestion, TriviaState } from '@/types/trivia';

export const useTrivia = (category: TriviaCategory | null) => {
    // State
    const [state, setState] = useState<TriviaState>({
        currentQuestionIndex: 0,
        score: 0,
        status: 'idle',
        answers: []
    });

    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    // Actions
    const startGame = useCallback(() => {
        setState({
            currentQuestionIndex: 0,
            score: 0,
            status: 'playing',
            answers: []
        });
        setSelectedOptionId(null);
        setIsAnswered(false);
    }, []);

    const selectOption = (optionId: string) => {
        if (state.status !== 'playing' || isAnswered) return;
        setSelectedOptionId(optionId);
    };

    const submitAnswer = () => {
        if (!category || !selectedOptionId || isAnswered) return;

        const currentQuestion = category.questions[state.currentQuestionIndex];
        const isCorrect = selectedOptionId === currentQuestion.correctOptionId;

        setIsAnswered(true);

        // Update score immediately? Or just track answers?
        // Let's update score immediately for live feedback.
        setState(prev => ({
            ...prev,
            score: isCorrect ? prev.score + 10 : prev.score,
            answers: [
                ...prev.answers,
                {
                    questionId: currentQuestion.id,
                    optionId: selectedOptionId,
                    isCorrect
                }
            ]
        }));
    };

    const nextQuestion = () => {
        if (!category) return;

        const nextIndex = state.currentQuestionIndex + 1;
        if (nextIndex >= category.questions.length) {
            setState(prev => ({ ...prev, status: 'completed' }));
        } else {
            setState(prev => ({ ...prev, currentQuestionIndex: nextIndex }));
            setSelectedOptionId(null);
            setIsAnswered(false);
        }
    };

    const currentQuestion = category ? category.questions[state.currentQuestionIndex] : null;

    return {
        ...state,
        currentQuestion,
        totalQuestions: category?.questions.length || 0,
        selectedOptionId,
        isAnswered,
        startGame,
        selectOption,
        submitAnswer,
        nextQuestion,
        resetGame: startGame
    };
};
