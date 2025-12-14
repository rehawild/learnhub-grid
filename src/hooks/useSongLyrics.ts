import { useState, useRef, useEffect } from "react";
import { SongLyricsState, Song } from "@/types/songlyrics";

const INITIAL_STATE: SongLyricsState = {
    mode: "selection",
    currentSong: null,
    userAnswers: {},
    isPlaying: false,
    score: null,
};

export const useSongLyrics = () => {
    const [state, setState] = useState<SongLyricsState>(INITIAL_STATE);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const selectSong = (song: Song) => {
        setState({
            mode: "playing",
            currentSong: song,
            userAnswers: {},
            isPlaying: false, // Wait for user to start
            score: null,
        });
    };

    const togglePlay = () => {
        setState((prev) => ({
            ...prev,
            isPlaying: !prev.isPlaying,
        }));
        // In a real app, we'd control audioRef here or mock it
    };

    const updateAnswer = (lineId: string, gapIndex: number, value: string) => {
        const key = `${lineId}-${gapIndex}`;
        setState((prev) => ({
            ...prev,
            userAnswers: {
                ...prev.userAnswers,
                [key]: value
            }
        }));
    };

    const checkAnswers = () => {
        if (!state.currentSong) return;

        let totalGaps = 0;
        let correct = 0;

        state.currentSong.lyrics.forEach(line => {
            line.gaps.forEach(gap => {
                totalGaps++;
                const key = `${line.id}-${gap.index}`;
                const userAnswer = state.userAnswers[key]?.toLowerCase().trim() || "";
                if (userAnswer === gap.word.toLowerCase()) {
                    correct++;
                }
            });
        });

        const score = Math.round((correct / totalGaps) * 100);
        setState(prev => ({ ...prev, mode: "results", score, isPlaying: false }));
    };

    const resetTool = () => {
        setState(INITIAL_STATE);
    };

    const replaySong = () => {
        if (state.currentSong) {
            // Reset answers but keep song
            setState(prev => ({
                mode: "playing",
                currentSong: prev.currentSong,
                userAnswers: {},
                isPlaying: false,
                score: null
            }));
        }
    };

    return {
        state,
        selectSong,
        togglePlay,
        updateAnswer,
        checkAnswers,
        resetTool,
        replaySong
    };
};
