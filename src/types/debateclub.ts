export interface DebateTopic {
    id: string;
    motion: string;
    category: 'Technology' | 'Society' | 'Education' | 'Environment';
    difficulty: 'Easy' | 'Medium' | 'Hard';
    pointsFor: string[]; // Helping points
    pointsAgainst: string[];
}

export type DebateSide = 'Proposition' | 'Opposition';

export type DebatePhase = 'Preparation' | 'Opening' | 'Rebuttal' | 'Closing' | 'Completed';

export interface DebateRecording {
    phase: DebatePhase;
    audioBlob: Blob;
    duration: number;
}

export interface DebateClubState {
    mode: 'selection' | 'debate';
    currentTopic: DebateTopic | null;
    userSide: DebateSide | null;
    currentPhase: DebatePhase;
    timeLeft: number; // For timer
    isTimerRunning: boolean;
    isRecording: boolean;
    recordings: DebateRecording[];
}
