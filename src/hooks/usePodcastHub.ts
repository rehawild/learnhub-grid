import { useState, useRef, useEffect } from "react";
import { PodcastHubState, PodcastEpisode } from "@/types/podcasthub";

const INITIAL_STATE: PodcastHubState = {
    mode: "list",
    currentEpisode: null,
    isPlaying: false,
    currentTime: 0,
};

export const usePodcastHub = () => {
    const [state, setState] = useState<PodcastHubState>(INITIAL_STATE);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const playEpisode = (episode: PodcastEpisode) => {
        // If selecting the same episode, just toggle play
        if (state.currentEpisode?.id === episode.id) {
            togglePlay();
            return;
        }

        // New episode
        setState({
            mode: "player",
            currentEpisode: episode,
            isPlaying: true,
            currentTime: 0,
        });
    };

    const togglePlay = () => {
        setState((prev) => ({
            ...prev,
            isPlaying: !prev.isPlaying,
        }));
    };

    const stopAudio = () => {
        setState((prev) => ({
            ...prev,
            isPlaying: false,
            currentTime: 0
        }));
    };

    const seek = (seconds: number) => {
        setState((prev) => ({
            ...prev,
            currentTime: seconds,
        }));
    };

    const goBack = () => {
        stopAudio();
        setState((prev) => ({ ...prev, mode: "list", currentEpisode: null }));
    };

    // Simulate audio progress
    useEffect(() => {
        if (state.isPlaying) {
            intervalRef.current = setInterval(() => {
                setState((prev) => ({
                    ...prev,
                    currentTime: prev.currentTime + 1,
                }));
            }, 1000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [state.isPlaying]);

    return {
        state,
        playEpisode,
        togglePlay,
        seek,
        goBack,
    };
};
