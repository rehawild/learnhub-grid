import { useState, useRef, useEffect } from "react";
import { DrillState, DrillCategory } from "@/types/timerdrill";

const INITIAL_STATE: DrillState = {
    category: null,
    status: 'idle',
    currentQuestionIndex: 0,
    timeLeft: 0,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    history: []
};

export const useTimerDrill = () => {
    const [state, setState] = useState<DrillState>(INITIAL_STATE);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<number>(0);

    const startDrill = (category: DrillCategory) => {
        setState({
            ...INITIAL_STATE,
            category,
            status: 'running',
            timeLeft: category.defaultTimeSeconds,
        });
        startTimer();
    };

    const submitAnswer = (userAnswer: string) => {
        const { category, currentQuestionIndex } = state;
        if (!category) return;

        const currentItem = category.items[Math.floor(Math.random() * category.items.length)]; // Randomize? Or sequential?
        // Let's stick to sequential for now, or randomize in UI. 
        // Actually for a 'Drill' random is better to avoid memorizing sequence if retrying.
        // But for State consistency, let's use the index effectively.

        // BETTER APPROACH: Pre-shuffle or just iterate.
        // Let's use `currentQuestionIndex` to map to the shuffled array in the UI or just sequential.
        // For simplicity: Sequential for this prototype to ensure unique questions.
        const item = category.items[currentQuestionIndex];

        const isCorrect = item.correctAnswers.includes(userAnswer);

        setState(prev => {
            const newScore = isCorrect ? prev.score + 10 : prev.score;
            // Bonus for streaks could be added here

            const nextIndex = prev.currentQuestionIndex + 1;

            // If we run out of questions, maybe loop? Or finish?
            // "Timer Drill" usually implies loop or infinite.
            // Let's just loop for now if we reach the end.
            const nextQIndex = nextIndex >= (prev.category?.items.length || 0) ? 0 : nextIndex;

            return {
                ...prev,
                score: newScore,
                correctCount: isCorrect ? prev.correctCount + 1 : prev.correctCount,
                wrongCount: isCorrect ? prev.wrongCount : prev.wrongCount + 1,
                currentQuestionIndex: nextQIndex,
                history: [...prev.history, { itemId: item.id, isCorrect, timeTaken: 0 }] // TODO: calculate delta time
            };
        });
    };

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setState(prev => {
                if (prev.timeLeft <= 1) {
                    stopTimer();
                    return { ...prev, timeLeft: 0, status: 'finished' };
                }
                return { ...prev, timeLeft: prev.timeLeft - 1 };
            });
        }, 1000);
    };

    const stopTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    useEffect(() => {
        return () => stopTimer();
    }, []);

    const reset = () => {
        stopTimer();
        setState(INITIAL_STATE);
    };

    return {
        state,
        startDrill,
        submitAnswer,
        reset
    };
};
