import { useState } from "react";
import { PracticeState, DailyChallenge } from "@/types/practiceplus";
import { WEEKLY_CHALLENGES } from "@/data/practiceplus/content";

const INITIAL_STATE: PracticeState = {
    currentDayId: "",
    activeSession: false,
    currentQuestionIndex: 0,
    answers: {},
    completedDays: [], // In real app, load from local storage
    streak: 3, // Mock streak
    showResult: false
};

export const usePracticePlus = () => {
    const [state, setState] = useState<PracticeState>(INITIAL_STATE);

    const startChallenge = (challengeId: string) => {
        setState(prev => ({
            ...prev,
            currentDayId: challengeId,
            activeSession: true,
            currentQuestionIndex: 0,
            answers: {},
            showResult: false
        }));
    };

    const submitAnswer = (itemId: string, answer: string) => {
        setState(prev => ({
            ...prev,
            answers: { ...prev.answers, [itemId]: answer }
        }));
    };

    const nextQuestion = () => {
        setState(prev => {
            const currentChallenge = WEEKLY_CHALLENGES.find(c => c.id === prev.currentDayId);
            if (!currentChallenge) return prev;

            if (prev.currentQuestionIndex < currentChallenge.items.length - 1) {
                return { ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 };
            } else {
                // Finish session
                return {
                    ...prev,
                    showResult: true,
                    completedDays: [...prev.completedDays, prev.currentDayId]
                    // should check for uniqueness
                };
            }
        });
    };

    const exitSession = () => {
        setState(prev => ({
            ...prev,
            activeSession: false,
            currentDayId: "",
            showResult: false
        }));
    };

    const getCurrentChallenge = () => {
        return WEEKLY_CHALLENGES.find(c => c.id === state.currentDayId) || null;
    };

    const calculateScore = () => {
        const challenge = getCurrentChallenge();
        if (!challenge) return 0;
        let score = 0;
        challenge.items.forEach(item => {
            if (state.answers[item.id] === item.correctAnswer) {
                score++;
            }
        });
        return score;
    };

    return {
        state,
        challenges: WEEKLY_CHALLENGES,
        startChallenge,
        submitAnswer,
        nextQuestion,
        exitSession,
        currentChallenge: getCurrentChallenge(),
        score: calculateScore()
    };
};
