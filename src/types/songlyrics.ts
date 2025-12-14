export interface Song {
    id: string;
    title: string;
    artist: string;
    genre: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    coverArt: string; // Emoji or URL
    audioSrc: string; // Mock
    lyrics: LyricLine[];
}

export interface LyricLine {
    id: string;
    text: string;
    gaps: Gap[]; // Indices of words that are missing
    startTime: number; // Seconds
}

export interface Gap {
    word: string;
    index: number; // Word index in the line
}

export type SongLyricsMode = 'selection' | 'playing' | 'results';

export interface SongLyricsState {
    mode: SongLyricsMode;
    currentSong: Song | null;
    userAnswers: Record<string, string>; // key: lineId-gapIndex, value: user input
    isPlaying: boolean;
    score: number | null;
}
