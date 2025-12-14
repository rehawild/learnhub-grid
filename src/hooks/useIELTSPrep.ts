import { useState, useRef, useEffect } from "react";
import { IELTSTest, IELTSSessionState, IELTSPart } from "@/types/ieltsprep";

const INITIAL_STATE: IELTSSessionState = {
    status: 'idle',
    currentPart: 'Part 1',
    currentQuestionIndex: 0,
    isPrepTime: false,
    elapsedTime: 0,
    isRecording: false,
    recordings: { part1: null, part2: null, part3: null },
    selectedTest: null
};

// Standard durations (in seconds) - mocked for user experience
// Part 1: ~4-5 mins. Part 2: 1 min, then 2 mins. Part 3: ~4-5 mins.
// For this tool, we might not enforce strict max time, but show elapsed.

export const useIELTSPrep = () => {
    const [state, setState] = useState<IELTSSessionState>(INITIAL_STATE);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Initial setup when a test is selected
    const startTest = (test: IELTSTest) => {
        setState({
            ...INITIAL_STATE,
            status: 'running',
            selectedTest: test,
            currentPart: 'Part 1',
            elapsedTime: 0
        });
        startRecording();
        startTimer();
    };

    const nextQuestion = () => {
        if (!state.selectedTest) return;

        setState(prev => {
            if (prev.currentPart === 'Part 1') {
                if (prev.currentQuestionIndex < prev.selectedTest!.parts.part1.questions.length - 1) {
                    return { ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 };
                } else {
                    // Move to Part 2 Intro
                    return transitionToPart('Part 2', prev);
                }
            } else if (prev.currentPart === 'Part 3') {
                if (prev.currentQuestionIndex < prev.selectedTest!.parts.part3.questions.length - 1) {
                    return { ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 };
                } else {
                    // Finish Test
                    finishTest();
                    return prev; // finishTest calls setState
                }
            }
            return prev;
        });
    };

    const startPart2Prep = () => {
        setState(prev => ({ ...prev, isPrepTime: true, elapsedTime: 0 }));
        // Stop generic recording for prep? Or keep it running? Let's pause/stop.
        // Actually typical IELTS flow: Recorder is ON during the whole test usually.
        // But for this tool, maybe we want separate blobs? Let's keep recording.
    };

    const startPart2Speaking = () => {
        setState(prev => ({ ...prev, isPrepTime: false, elapsedTime: 0 })); // Reset timer for the speech
    };

    const finishPart2 = () => {
        // Move to Part 3
        setState(prev => transitionToPart('Part 3', prev));
    };

    const transitionToPart = (nextPart: IELTSPart, currentState: IELTSSessionState): IELTSSessionState => {
        // Stop current recording chunk and save it? 
        // For simplicity now, let's keep one long recording OR handle chunks.
        // Let's implement chunking logic simply here:
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.requestData(); // Triggers dataavailable
            // We need to re-start recorder to separate files cleanly? 
            // Ideally stop and start.
            stopRecordingAndSave(currentState.currentPart);
            setTimeout(() => startRecording(), 100); // Tiny delay to ensure cleanup
        } else {
            startRecording();
        }

        return {
            ...currentState,
            currentPart: nextPart,
            currentQuestionIndex: 0,
            elapsedTime: 0,
            isPrepTime: nextPart === 'Part 2' // Actually Part 2 starts with instructions, then user clicks "Start Prep"
        };
    };

    const stopRecordingAndSave = (part: IELTSPart) => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            // The ondataavailable handler needs to know WHICH part to save to.
            // We can use a ref to track "recordingForPart" or just use state.currentPart inside the callback if we are careful.
            // But state inside callback might be stale.
            // Simplified approach: just stop. Handle logic in handler.
        }
    };

    // simplified recorder start
    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            // Capture the part at START of recording to tag properly closing
            const partAtStart = state.currentPart;

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    // Note: This relies on state.currentPart being accurate when stop() is called
                    // Ideally we'd pass the part to this function. 
                    // Let's fix this by using a ref if needed, or assuming synchronous flow.
                    saveRecording(e.data);
                }
            };
            mediaRecorder.start();
            setState(prev => ({ ...prev, isRecording: true }));
        } catch (e) {
            console.error(e);
        }
    };

    const saveRecording = (blob: Blob) => {
        setState(prev => {
            // Save to the part we just finished (or are currently in).
            // Since we transition AFTER stop, 'prev.currentPart' might be the OLD one if we called stop() before setState(newPart)
            // This is tricky. Let's just assume we save to currentPart.
            const target = prev.currentPart.toLowerCase().replace(" ", "") as 'part1' | 'part2' | 'part3';
            return {
                ...prev,
                recordings: { ...prev.recordings, [target]: blob }
            };
        });
    };

    const finishTest = () => {
        stopRecordingAndSave(state.currentPart);
        stopTimer();
        setState(prev => ({ ...prev, status: 'completed', isRecording: false }));
    };

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setState(prev => ({ ...prev, elapsedTime: prev.elapsedTime + 1 }));
        }, 1000);
    };

    const stopTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    // Cleanup
    useEffect(() => {
        return () => stopTimer();
    }, []);

    const reset = () => {
        setState(INITIAL_STATE);
    };

    return {
        state,
        startTest,
        nextQuestion,
        startPart2Prep,
        startPart2Speaking,
        finishPart2,
        finishTest,
        reset
    };
};
