import { useState, useRef, useEffect } from "react";
import { TOEFLState, TOEFLModule, TOEFLStage } from "@/types/toeflprep";

const INITIAL_STATE: TOEFLState = {
    currentModule: null,
    stage: 'idle',
    timer: 0,
    totalTime: 0,
    isRecording: false,
    recordingBlob: null
};

export const useTOEFLPrep = () => {
    const [state, setState] = useState<TOEFLState>(INITIAL_STATE);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startModule = (module: TOEFLModule) => {
        // Determine first stage
        let firstStage: TOEFLStage = 'idle';
        let firstDuration = 0;

        if (module.type === 'speaking_integrated') {
            firstStage = 'reading';
            firstDuration = module.content.readingTimeSeconds || 45;
        } else {
            firstStage = 'preparing'; // Independent jumps to question/prep
            firstDuration = module.content.prepTimeSeconds; // Usually 15s
        }

        setState({
            currentModule: module,
            stage: firstStage,
            timer: firstDuration,
            totalTime: firstDuration,
            isRecording: false,
            recordingBlob: null
        });
        startTimer();
    };

    const nextStage = () => {
        const { currentModule, stage } = state;
        if (!currentModule) return;

        let nextStage: TOEFLStage = 'completed';
        let nextDuration = 0;

        // Flow: reading -> listening -> preparing -> speaking -> completed
        // (For independent: preparing -> speaking -> completed)

        switch (stage) {
            case 'reading':
                nextStage = 'listening';
                nextDuration = currentModule.content.listeningDurationSeconds || 20;
                break;
            case 'listening':
                nextStage = 'preparing';
                nextDuration = currentModule.content.prepTimeSeconds;
                break;
            case 'preparing':
                nextStage = 'speaking';
                nextDuration = currentModule.content.speakTimeSeconds;
                break;
            case 'speaking':
                nextStage = 'completed';
                break;
            default:
                break;
        }

        if (nextStage === 'speaking') {
            // Start recording would ideally happen here
        }

        setState(prev => ({
            ...prev,
            stage: nextStage,
            timer: nextDuration,
            totalTime: nextDuration
        }));
    };

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setState(prev => {
                if (prev.timer <= 0) {
                    // Auto-transition? Or wait for user?
                    // Typically TOEFL auto-transitions, but let's just hold or auto-transition.
                    // Let's hold at 0 and let a useEffect trigger the transition for smoother UX, 
                    // or just wrap `nextStage` call here.
                    // For simplicity, we'll let the UI call nextStage or handle it manually for Reading (user can finish early).
                    // But for Listening/Prep/Speak it should be auto.
                    return prev;
                }
                return { ...prev, timer: prev.timer - 1 };
            });
        }, 1000);
    };

    // Auto-advance logic wrapper could be done in useEffect, 
    // but React state updates in intervals are tricky. 
    // Let's expose an explicit "onTimerZero" if needed, or check in UI.

    // Cleanup
    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const reset = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setState(INITIAL_STATE);
    };

    return {
        state,
        startModule,
        nextStage,
        reset
    };
};
