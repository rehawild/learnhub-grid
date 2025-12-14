import { useState, useRef, useEffect } from "react";
import { InterviewPrepState, InterviewTopic, UserResponse } from "@/types/interviewprep";

const INITIAL_STATE: InterviewPrepState = {
    mode: "selection",
    currentTopic: null,
    currentQuestionIndex: 0,
    isRecording: false,
    recordingTime: 0,
    userResponses: {}
};

export const useInterviewPrep = () => {
    const [state, setState] = useState<InterviewPrepState>(INITIAL_STATE);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const selectTopic = (topic: InterviewTopic) => {
        setState({
            mode: "practice",
            currentTopic: topic,
            currentQuestionIndex: 0,
            isRecording: false,
            recordingTime: 0,
            userResponses: {}
        });
    };

    const toggleRecording = () => {
        if (state.isRecording) {
            // Stop recording
            if (timerRef.current) clearInterval(timerRef.current);
            setState(prev => {
                if (!prev.currentTopic) return prev;
                const currentQ = prev.currentTopic.questions[prev.currentQuestionIndex];

                return {
                    ...prev,
                    isRecording: false,
                    userResponses: {
                        ...prev.userResponses,
                        [currentQ.id]: {
                            duration: prev.recordingTime,
                            audioUrl: "mock_audio_blob_url" // In real app, this would be a URL object
                        }
                    }
                };
            });
        } else {
            // Start recording
            setState(prev => ({ ...prev, isRecording: true, recordingTime: 0 }));
            timerRef.current = setInterval(() => {
                setState(prev => ({ ...prev, recordingTime: prev.recordingTime + 1 }));
            }, 1000);
        }
    };

    const nextQuestion = () => {
        if (!state.currentTopic) return;
        if (state.currentQuestionIndex < state.currentTopic.questions.length - 1) {
            setState(prev => ({
                ...prev,
                currentQuestionIndex: prev.currentQuestionIndex + 1,
                isRecording: false,
                recordingTime: 0
            }));
            if (timerRef.current) clearInterval(timerRef.current);
        } else {
            // End of session
            if (timerRef.current) clearInterval(timerRef.current);
            setState(prev => ({ ...prev, mode: "evaluation", isRecording: false }));
        }
    };

    const prevQuestion = () => {
        if (state.currentQuestionIndex > 0) {
            setState(prev => ({
                ...prev,
                currentQuestionIndex: prev.currentQuestionIndex - 1,
                isRecording: false,
                recordingTime: 0
            }));
            if (timerRef.current) clearInterval(timerRef.current);
        }
    };

    const submitSelfEvaluation = (questionId: string, rating: number, notes: string) => {
        setState(prev => ({
            ...prev,
            userResponses: {
                ...prev.userResponses,
                [questionId]: {
                    ...prev.userResponses[questionId],
                    selfRating: rating,
                    notes: notes
                }
            }
        }));
    };

    const resetTool = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setState(INITIAL_STATE);
    };

    const restartSession = () => {
        if (state.currentTopic) {
            selectTopic(state.currentTopic);
        }
    };

    // Cleanup
    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    return {
        state,
        selectTopic,
        toggleRecording,
        nextQuestion,
        prevQuestion,
        submitSelfEvaluation,
        resetTool,
        restartSession
    };
};
