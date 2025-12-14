import { useState, useRef, useEffect } from "react";
import { PhoneEnglishState, PhoneScenario, CallStatus } from "@/types/phoneenglish";

const INITIAL_STATE: PhoneEnglishState = {
    mode: "list",
    currentScenario: null,
    callStatus: "idle",
    conversationHistory: [],
    isMuted: false,
    isSpeakerOn: false,
    callDuration: 0,
};

export const usePhoneEnglish = () => {
    const [state, setState] = useState<PhoneEnglishState>(INITIAL_STATE);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const selectScenario = (scenario: PhoneScenario) => {
        setState({
            ...INITIAL_STATE,
            mode: "call",
            currentScenario: scenario,
            callStatus: "idle" // Wait for user to tap "Call"
        });
    };

    const startCall = () => {
        setState(prev => ({ ...prev, callStatus: "dialing" }));

        // Simulate connection delay
        setTimeout(() => {
            setState(prev => ({ ...prev, callStatus: "connected" }));
            startTimer();
        }, 2000);
    };

    const endCall = () => {
        stopTimer();
        setState(prev => ({ ...prev, callStatus: "ended" }));
    };

    const toggleMute = () => {
        setState(prev => ({ ...prev, isMuted: !prev.isMuted }));
    };

    const toggleSpeaker = () => {
        setState(prev => ({ ...prev, isSpeakerOn: !prev.isSpeakerOn }));
    };

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setState(prev => ({ ...prev, callDuration: prev.callDuration + 1 }));
        }, 1000);
    };

    const stopTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    const exitCall = () => {
        stopTimer();
        setState(INITIAL_STATE);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    return {
        state,
        selectScenario,
        startCall,
        endCall,
        toggleMute,
        toggleSpeaker,
        exitCall
    };
};
