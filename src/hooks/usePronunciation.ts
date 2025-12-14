import { useState, useRef } from "react";
import { PronunciationState, PronunciationWord, PronunciationAttempt } from "@/types/pronunciation";

const INITIAL_STATE: PronunciationState = {
    mode: "list",
    selectedCategory: "All",
    currentWord: null,
    isRecording: false,
    attempts: [],
};

export const usePronunciation = () => {
    const [state, setState] = useState<PronunciationState>(INITIAL_STATE);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);

    const selectCategory = (category: string) => {
        setState(prev => ({ ...prev, selectedCategory: category }));
    };

    const selectWord = (word: PronunciationWord) => {
        setState(prev => ({
            ...prev,
            mode: "practice",
            currentWord: word,
            attempts: [], // Reset attempts for new word
            isRecording: false
        }));
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.start();
            setState(prev => ({ ...prev, isRecording: true }));

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    handleRecordingStop(e.data);
                }
            };

        } catch (err) {
            console.error("Error accessing microphone:", err);
            // Handle permission error (could expose an error state)
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && state.isRecording) {
            mediaRecorderRef.current.stop();
            setState(prev => ({ ...prev, isRecording: false }));
        }
    };

    const handleRecordingStop = (audioBlob: Blob) => {
        if (!state.currentWord) return;

        // Mock Scoring Logic
        const mockScore = Math.floor(Math.random() * 30) + 70; // Random score 70-100
        const feedback = mockScore > 90 ? "Excellent pronunciation!" :
            mockScore > 80 ? "Good, but check the vowel sound." :
                "Keep trying, focus on the stress.";

        const newAttempt: PronunciationAttempt = {
            id: Date.now().toString(),
            wordId: state.currentWord.id,
            audioBlob,
            score: mockScore,
            feedback,
            timestamp: Date.now()
        };

        setState(prev => ({
            ...prev,
            attempts: [newAttempt, ...prev.attempts]
        }));
    };

    const playReference = () => {
        if (state.currentWord) {
            const utterance = new SpeechSynthesisUtterance(state.currentWord.word);
            utterance.lang = 'en-US';
            window.speechSynthesis.speak(utterance);
        }
    };

    const playAttempt = (attempt: PronunciationAttempt) => {
        const audioUrl = URL.createObjectURL(attempt.audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
    };

    const goBack = () => {
        setState(prev => ({ ...prev, mode: "list", currentWord: null }));
    };

    return {
        state,
        selectCategory,
        selectWord,
        startRecording,
        stopRecording,
        playReference,
        playAttempt,
        goBack
    };
};
