import { useState, useRef, useEffect } from "react";
import { DebateClubState, DebateTopic, DebateSide, DebateRecording, DebatePhase } from "@/types/debateclub";

const INITIAL_STATE: DebateClubState = {
    mode: "selection",
    currentTopic: null,
    userSide: null,
    currentPhase: "Preparation",
    timeLeft: 0,
    isTimerRunning: false,
    isRecording: false,
    recordings: [],
};

// Phase settings (duration in seconds)
const PHASE_DURATIONS: Record<DebatePhase, number> = {
    "Preparation": 120, // 2 mins prep
    "Opening": 60,      // 1 min opening
    "Rebuttal": 45,     // 45s rebuttal
    "Closing": 45,      // 45s closing
    "Completed": 0
};

export const useDebateClub = () => {
    const [state, setState] = useState<DebateClubState>(INITIAL_STATE);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const selectTopic = (topic: DebateTopic) => {
        setState({
            ...INITIAL_STATE,
            currentTopic: topic,
            // Don't switch mode yet, user needs to pick side
        });
    };

    const startDebate = (side: DebateSide) => {
        if (!state.currentTopic) return;
        setState(prev => ({
            ...prev,
            mode: "debate",
            userSide: side,
            currentPhase: "Preparation",
            timeLeft: PHASE_DURATIONS["Preparation"],
            isTimerRunning: true,
            isRecording: false,
            recordings: []
        }));
    };

    const nextPhase = () => {
        const phases: DebatePhase[] = ["Preparation", "Opening", "Rebuttal", "Closing", "Completed"];
        const currentIndex = phases.indexOf(state.currentPhase);
        const next = phases[currentIndex + 1];

        if (state.isRecording) stopRecording();

        setState(prev => ({
            ...prev,
            currentPhase: next,
            timeLeft: next === "Completed" ? 0 : PHASE_DURATIONS[next],
            isTimerRunning: next !== "Completed",
            isRecording: false
        }));
    };

    const toggleTimer = () => {
        setState(prev => ({ ...prev, isTimerRunning: !prev.isTimerRunning }));
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.start();
            setState(prev => ({ ...prev, isRecording: true })); // Timer continues running

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
        const newRecording: DebateRecording = {
            phase: state.currentPhase,
            audioBlob,
            duration: PHASE_DURATIONS[state.currentPhase] - state.timeLeft // Rough estimate or separate timer?
        };

        setState(prev => ({
            ...prev,
            recordings: [...prev.recordings, newRecording]
        }));
    };

    useEffect(() => {
        if (state.isTimerRunning && state.timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setState(prev => {
                    if (prev.timeLeft <= 1) {
                        // Timer finished
                        return { ...prev, timeLeft: 0, isTimerRunning: false };
                    }
                    return { ...prev, timeLeft: prev.timeLeft - 1 };
                });
            }, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [state.isTimerRunning, state.timeLeft]);

    const playRecording = (rec: DebateRecording) => {
        const audioUrl = URL.createObjectURL(rec.audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
    };

    const resetTool = () => {
        setState(INITIAL_STATE);
    };

    return {
        state,
        selectTopic,
        startDebate,
        nextPhase,
        toggleTimer,
        startRecording,
        stopRecording,
        playRecording,
        resetTool
    };
};
