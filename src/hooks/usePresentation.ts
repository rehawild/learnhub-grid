import { useState, useRef, useEffect } from "react";
import { PresentationState, PresentationTopic, PresentationSettings, PresentationRecording } from "@/types/presentation";

const INITIAL_STATE: PresentationState = {
    step: "selection",
    currentTopic: null,
    settings: null,
    currentSlideIndex: 0,
    elapsedTime: 0,
    isTimerRunning: false,
    isRecording: false,
    recordings: []
};

// Default settings per mode
const MODE_SETTINGS: Record<string, PresentationSettings> = {
    "Standard": { mode: "Standard", durationPerSlide: 0, totalDuration: 300 }, // 5 mins, manual slides
    "PechaKucha": { mode: "PechaKucha", durationPerSlide: 20, totalDuration: 0 }, // 20s per slide, auto
    "Impromptu": { mode: "Impromptu", durationPerSlide: 0, totalDuration: 120 } // 2 mins, manual
};

export const usePresentation = () => {
    const [state, setState] = useState<PresentationState>(INITIAL_STATE);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const selectTopic = (topic: PresentationTopic, mode: string) => {
        setState({
            ...INITIAL_STATE,
            step: "preparation",
            currentTopic: topic,
            settings: MODE_SETTINGS[mode] || MODE_SETTINGS["Standard"]
        });
    };

    const startPresentation = async () => {
        setState(prev => ({
            ...prev,
            step: "presenting",
            elapsedTime: 0,
            currentSlideIndex: 0,
            isTimerRunning: true,
            isRecording: false // Wait to record until audio starts? Or auto-start? Let's manual start for now or auto-start.
        }));

        // Auto-start recording for presentation
        startRecording();
    };

    const nextSlide = () => {
        if (!state.currentTopic?.slides) return;
        if (state.currentSlideIndex < state.currentTopic.slides.length - 1) {
            setState(prev => ({ ...prev, currentSlideIndex: prev.currentSlideIndex + 1 }));
        } else {
            finishPresentation();
        }
    };

    const prevSlide = () => {
        if (state.currentSlideIndex > 0) {
            setState(prev => ({ ...prev, currentSlideIndex: prev.currentSlideIndex - 1 }));
        }
    };

    const finishPresentation = () => {
        stopRecording();
        setState(prev => ({ ...prev, step: "completed", isTimerRunning: false }));
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
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && state.isRecording) {
            mediaRecorderRef.current.stop();
        }
    };

    const handleRecordingStop = (audioBlob: Blob) => {
        if (!state.currentTopic) return;

        const newRecording: PresentationRecording = {
            id: Date.now().toString(),
            topicId: state.currentTopic.id,
            audioBlob,
            duration: state.elapsedTime,
            timestamp: Date.now()
        };

        setState(prev => ({
            ...prev,
            isRecording: false,
            recordings: [...prev.recordings, newRecording]
        }));
    };

    // Timer Logic
    useEffect(() => {
        if (state.isTimerRunning) {
            timerRef.current = setInterval(() => {
                setState(prev => {
                    const newTime = prev.elapsedTime + 1;

                    // Auto-advance logic for PechaKucha
                    if (prev.settings?.mode === "PechaKucha" &&
                        prev.settings.durationPerSlide > 0 &&
                        newTime % prev.settings.durationPerSlide === 0) {

                        // Check if we need to advance or if we are done
                        if (prev.currentTopic?.slides && prev.currentSlideIndex < prev.currentTopic.slides.length - 1) {
                            return { ...prev, elapsedTime: newTime, currentSlideIndex: prev.currentSlideIndex + 1 };
                        } else if (prev.currentTopic?.slides && prev.currentSlideIndex === prev.currentTopic.slides.length - 1) {
                            // End of last slide in auto mode
                            stopRecording();
                            return { ...prev, elapsedTime: newTime, step: "completed", isTimerRunning: false };
                        }
                    }

                    return { ...prev, elapsedTime: newTime };
                });
            }, 1000);
        } else if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [state.isTimerRunning, state.settings, state.currentTopic]);

    const playRecording = (rec: PresentationRecording) => {
        const url = URL.createObjectURL(rec.audioBlob);
        const audio = new Audio(url);
        audio.play();
    };

    const resetTool = () => {
        stopRecording();
        setState(INITIAL_STATE);
    };

    return {
        state,
        selectTopic,
        startPresentation,
        nextSlide,
        prevSlide,
        finishPresentation,
        playRecording,
        resetTool
    };
};
