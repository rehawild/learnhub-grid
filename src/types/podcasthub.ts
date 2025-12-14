export interface PodcastEpisode {
    id: string;
    title: string;
    description: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    category: string;
    audioSrc: string; // URL or mock path
    thumbnail: string; // Emoji or image URL
    transcript: PodcastTranscriptSegment[];
}

export interface PodcastTranscriptSegment {
    id: string;
    timestamp: number; // Seconds
    text: string;
    speaker: string;
}

export type PodcastHubMode = 'list' | 'player';

export interface PodcastHubState {
    mode: PodcastHubMode;
    currentEpisode: PodcastEpisode | null;
    isPlaying: boolean;
    currentTime: number;
}
