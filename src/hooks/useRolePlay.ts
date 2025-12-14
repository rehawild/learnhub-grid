import { useState, useRef, useEffect } from "react";
import { RolePlayState, RolePlayScenario, ChatMessage } from "@/types/roleplay";

const INITIAL_STATE: RolePlayState = {
    mode: "selection",
    currentScenario: null,
    messages: [],
    isRecording: false,
    isProcessing: false,
};

// Simple simulated responses to keep the conversation flowing without a real backend
const SIMULATED_RESPONSES = [
    "That's interesting, tell me more.",
    "I understand. And then what?",
    "Could you clarify that point?",
    "Okay, I see what you mean.",
    "Let's move on to the next topic.",
    "That sounds great!",
    "I'm afraid I don't quite agree, but go on."
];

export const useRolePlay = () => {
    const [state, setState] = useState<RolePlayState>(INITIAL_STATE);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);

    const selectScenario = (scenario: RolePlayScenario) => {
        const initialMsg: ChatMessage = {
            id: 'init',
            sender: 'partner',
            text: scenario.initialMessage,
            timestamp: Date.now()
        };

        setState({
            ...INITIAL_STATE,
            mode: "chat",
            currentScenario: scenario,
            messages: [initialMsg]
        });
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
            // State update happens in handleRecordingStop via ondataavailable
        }
    };

    const handleRecordingStop = (audioBlob: Blob) => {
        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            sender: 'user',
            text: "🎤 [Audio Message]", // Future: Transcript
            audioBlob,
            timestamp: Date.now()
        };

        setState(prev => ({
            ...prev,
            isRecording: false,
            isProcessing: true,
            messages: [...prev.messages, userMsg]
        }));

        // Simulate Partner Response Delay
        setTimeout(() => {
            const randomResponse = SIMULATED_RESPONSES[Math.floor(Math.random() * SIMULATED_RESPONSES.length)];
            const partnerMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                sender: 'partner',
                text: randomResponse,
                timestamp: Date.now()
            };

            setState(prev => ({
                ...prev,
                isProcessing: false,
                messages: [...prev.messages, partnerMsg]
            }));
        }, 2000);
    };

    const playAudio = (blob: Blob) => {
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audio.play();
    };

    const resetTool = () => {
        setState(INITIAL_STATE);
    };

    return {
        state,
        selectScenario,
        startRecording,
        stopRecording,
        playAudio,
        resetTool
    };
};
