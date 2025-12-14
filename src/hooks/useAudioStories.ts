import { useState, useRef, useEffect } from "react";
import { AudioStoriesState, AudioStory, AudioStoriesMode } from "@/types/audiostories";

const INITIAL_STATE: AudioStoriesState = {
    mode: "library",
    currentStory: null,
    isPlaying: false,
    quizAnswers: {},
    score: null,
};

export const useAudioStories = () => {
    const [state, setState] = useState<AudioStoriesState>(INITIAL_STATE);

    // Mock speech for now
    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            utterance.onend = () => setState(prev => ({ ...prev, isPlaying: false }));
            window.speechSynthesis.speak(utterance);
        } else {
            setTimeout(() => setState(prev => ({ ...prev, isPlaying: false })), 3000);
        }
    };

    const selectStory = (story: AudioStory) => {
        setState({
            mode: "reading",
            currentStory: story,
            isPlaying: false,
            quizAnswers: {},
            score: null,
        });
    };

    const togglePlay = () => {
        if (!state.currentStory) return;

        if (state.isPlaying) {
            window.speechSynthesis.cancel();
            setState(prev => ({ ...prev, isPlaying: false }));
        } else {
            setState(prev => ({ ...prev, isPlaying: true }));
            speak(state.currentStory.content);
        }
    };

    const startQuiz = () => {
        window.speechSynthesis.cancel();
        setState(prev => ({ ...prev, mode: "quiz", isPlaying: false }));
    };

    const selectAnswer = (questionId: string, optionIndex: number) => {
        setState(prev => ({
            ...prev,
            quizAnswers: { ...prev.quizAnswers, [questionId]: optionIndex }
        }));
    };

    const submitQuiz = () => {
        if (!state.currentStory) return;

        let correct = 0;
        state.currentStory.quiz.forEach(q => {
            if (state.quizAnswers[q.id] === q.correctAnswer) {
                correct++;
            }
        });

        const score = Math.round((correct / state.currentStory.quiz.length) * 100);
        setState(prev => ({ ...prev, score }));
    };

    const resetTool = () => {
        window.speechSynthesis.cancel();
        setState(INITIAL_STATE);
    };

    const backToStory = () => {
        setState(prev => ({ ...prev, mode: "reading", score: null }));
    };

    // Cleanup
    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    return {
        state,
        selectStory,
        togglePlay,
        startQuiz,
        selectAnswer,
        submitQuiz,
        resetTool,
        backToStory
    };
};
