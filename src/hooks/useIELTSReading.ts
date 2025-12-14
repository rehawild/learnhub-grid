import { useState, useEffect, useRef } from "react";
import { ReadingTest, ReadingSessionState } from "@/types/ieltsreading";
import { MOCK_READING_TEST } from "@/data/ieltsreading/tests";

const INITIAL_STATE: ReadingSessionState = {
    status: 'idle',
    currentSectionIndex: 0,
    answers: {},
    elapsedTime: 0,
    score: null,
    showResults: false
};

export const useIELTSReading = () => {
    const [state, setState] = useState<ReadingSessionState>(INITIAL_STATE);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTest = () => {
        setState({
            ...INITIAL_STATE,
            status: 'running',
            elapsedTime: 0
        });
        startTimer();
    };

    const submitAnswer = (questionId: string, answer: string) => {
        setState(prev => ({
            ...prev,
            answers: { ...prev.answers, [questionId]: answer }
        }));
    };

    const nextSection = () => {
        setState(prev => {
            if (prev.currentSectionIndex < MOCK_READING_TEST.passages.length - 1) {
                return { ...prev, currentSectionIndex: prev.currentSectionIndex + 1 };
            }
            return prev;
        });
    };

    const prevSection = () => {
        setState(prev => {
            if (prev.currentSectionIndex > 0) {
                return { ...prev, currentSectionIndex: prev.currentSectionIndex - 1 };
            }
            return prev;
        });
    };

    const finishTest = () => {
        stopTimer();
        calculateScore();
    };

    const calculateScore = () => {
        let correctCount = 0;
        let totalQuestions = 0;

        MOCK_READING_TEST.passages.forEach(passage => {
            passage.questionSets.forEach(qs => {
                qs.questions.forEach(q => {
                    totalQuestions++;
                    const userAns = state.answers[q.id];
                    // Simple exact match check. In real app, might need more robust normalization.
                    // For multiple choice 'C' vs 'C.' etc.
                    if (userAns && userAns.trim().toUpperCase() === (q.correctAnswer as string).toUpperCase()) {
                        correctCount++;
                    }
                });
            });
        });

        setState(prev => ({
            ...prev,
            status: 'completed',
            score: correctCount,
            showResults: true
        }));
    };

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setState(prev => ({ ...prev, elapsedTime: prev.elapsedTime + 1 }));
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
        test: MOCK_READING_TEST,
        state,
        startTest,
        submitAnswer,
        nextSection,
        prevSection,
        finishTest,
        reset
    };
};
