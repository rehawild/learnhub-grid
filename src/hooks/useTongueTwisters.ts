import { useState, useRef } from "react";
import { TongueTwisterState, TongueTwister, TwisterAttempt } from "@/types/tonguetwisters";

const INITIAL_STATE: TongueTwisterState = {
    mode: "list",
    selectedDifficulty: "All",
    currentTwister: null,
    isRecording: false,
    startTime: null,
    attempts: [],
};

export const useTongueTwisters = () => {
    const [state, setState] = useState<TongueTwisterState>(INITIAL_STATE);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);

    const selectDifficulty = (difficulty: string) => {
        setState(prev => ({ ...prev, selectedDifficulty: difficulty }));
    };

    const selectTwister = (twister: TongueTwister) => {
        setState(prev => ({
            ...prev,
            mode: "practice",
            currentTwister: twister,
            attempts: [],
            isRecording: false,
            startTime: null
        }));
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.start();
            setState(prev => ({
                ...prev,
                isRecording: true,
                startTime: Date.now()
            }));

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    handleRecordingStop(e.data);
                }
            };

        } catch (err) {
            console.error("Error accessing microphone:", err);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && state.isRecording) {
            mediaRecorderRef.current.stop();
            setState(prev => ({ ...prev, isRecording: false }));
        }
    };

    const handleRecordingStop = (audioBlob: Blob) => {
        if (!state.currentTwister || !state.startTime) return;

        const duration = (Date.now() - state.startTime) / 1000;
        const isSuccess = duration <= state.currentTwister.targetSpeed; // Basic success metric based on speed

        const newAttempt: TwisterAttempt = {
            id: Date.now().toString(),
            twisterId: state.currentTwister.id,
            audioBlob,
            duration,
            isSuccess,
            timestamp: Date.now()
        };

        setState(prev => ({
            ...prev,
            attempts: [newAttempt, ...prev.attempts],
            startTime: null
        }));
    };

    const playAttempt = (attempt: TwisterAttempt) => {
        const audioUrl = URL.createObjectURL(attempt.audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
    };

    const goBack = () => {
        setState(prev => ({ ...prev, mode: "list", currentTwister: null }));
    };

    return {
        state,
        selectDifficulty,
        selectTwister,
        startRecording,
        stopRecording,
        playAttempt,
        goBack
    };
};
