export type IELTSPart = 'Part 1' | 'Part 2' | 'Part 3';

export interface IELTSTest {
    id: string;
    title: string; // e.g., "Mock Test 1: Travel & Work"
    parts: {
        part1: {
            topic: string;
            questions: string[];
        };
        part2: {
            topic: string; // Cue card topic
            cueCardPoints: string[];
            followUpQuestion?: string;
        };
        part3: {
            topic: string;
            questions: string[];
        };
    };
}

export interface IELTSSessionState {
    status: 'idle' | 'running' | 'paused' | 'completed';
    currentPart: IELTSPart;
    currentQuestionIndex: number; // For Part 1 & 3
    isPrepTime: boolean; // Specifically for Part 2 (1 min)
    elapsedTime: number; // For the current section
    isRecording: boolean;
    recordings: {
        part1: Blob | null;
        part2: Blob | null;
        part3: Blob | null;
    };
    selectedTest: IELTSTest | null;
}
