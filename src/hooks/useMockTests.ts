import { useState, useRef, useEffect } from "react";
import { MockTestState, MockExam } from "@/types/mocktests";

const INITIAL_STATE: MockTestState = {
    currentExam: null,
    status: 'idle',
    answers: {},
    elapsedSeconds: 0,
    currentSectionIndex: 0,
    score: 0
};

export const useMockTests = () => {
    const [state, setState] = useState<MockTestState>(INITIAL_STATE);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startExam = (exam: MockExam) => {
        setState({
            ...INITIAL_STATE,
            currentExam: exam,
            status: 'running',
            elapsedSeconds: 0
        });
        startTimer();
    };

    const submitAnswer = (questionId: string, answer: string) => {
        setState(prev => ({
            ...prev,
            answers: { ...prev.answers, [questionId]: answer }
        }));
    };

    const finishExam = () => {
        stopTimer();
        calculateScore();
    };

    const calculateScore = () => {
        setState(prev => {
            if (!prev.currentExam) return prev;
            let totalScore = 0;

            prev.currentExam.sections.forEach(section => {
                section.questions.forEach(q => {
                    const ans = prev.answers[q.id]?.trim().toLowerCase();
                    const correct = q.correctAnswer.toLowerCase();
                    if (ans === correct) {
                        totalScore += q.points;
                    }
                });
            });

            return {
                ...prev,
                status: 'review',
                score: totalScore
            };
        });
    };

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setState(prev => {
                // If running, increment
                if (prev.status === 'running') {
                    return { ...prev, elapsedSeconds: prev.elapsedSeconds + 1 };
                }
                return prev;
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
        startExam,
        submitAnswer,
        finishExam,
        reset
    };
};
