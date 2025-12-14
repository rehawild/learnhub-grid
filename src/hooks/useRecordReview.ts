import { useState, useRef, useEffect } from "react";
import { RecordReviewState, ReviewTopic, SavedRecording } from "@/types/recordreview";

const INITIAL_STATE: RecordReviewState = {
    mode: "topics",
    currentTopic: null,
    isRecording: false,
    startTime: null,
    elapsed: 0,
    recordings: [],
};

export const useRecordReview = () => {
    const [state, setState] = useState<RecordReviewState>(INITIAL_STATE);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const selectTopic = (topic: ReviewTopic) => {
        setState(prev => ({
            ...prev,
            mode: "recording",
            currentTopic: topic,
            elapsed: 0
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
                startTime: Date.now(),
                elapsed: 0
            }));

            intervalRef.current = setInterval(() => {
                setState(prev => ({ ...prev, elapsed: prev.elapsed + 1 }));
            }, 1000);

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
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    };

    const handleRecordingStop = (audioBlob: Blob) => {
        if (!state.currentTopic) return;

        // Final duration check
        const duration = state.elapsed;

        const newRecording: SavedRecording = {
            id: Date.now().toString(),
            topicId: state.currentTopic.id,
            audioBlob,
            duration,
            timestamp: Date.now(),
            notes: ""
        };

        setState(prev => ({
            ...prev,
            recordings: [newRecording, ...prev.recordings],
        }));
    };

    const playRecording = (recording: SavedRecording) => {
        const audioUrl = URL.createObjectURL(recording.audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
    };

    const deleteRecording = (id: string) => {
        setState(prev => ({
            ...prev,
            recordings: prev.recordings.filter(rec => rec.id !== id)
        }));
    };

    const goBack = () => {
        if (state.isRecording) stopRecording();
        setState(prev => ({ ...prev, mode: "topics", currentTopic: null }));
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return {
        state,
        selectTopic,
        startRecording,
        stopRecording,
        playRecording,
        deleteRecording,
        goBack
    };
};
