import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useSongLyrics } from "@/hooks/useSongLyrics";
import { demoSongs } from "@/data/songlyrics/songs";
import { SongSelector } from "@/components/songlyrics/SongSelector";
import { LyricPlayer } from "@/components/songlyrics/LyricPlayer";
import { ResultModal } from "@/components/songlyrics/ResultModal";

const SongLyrics = () => {
    const {
        state,
        selectSong,
        togglePlay,
        updateAnswer,
        checkAnswers,
        resetTool,
        replaySong
    } = useSongLyrics();

    const handleBackToSelection = () => {
        resetTool();
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-2xl mx-auto px-4 py-8">

                {/* 1. Navigation Header */}
                <div className="mb-8">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                </div>

                {/* 2. Tool Title & Description */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        🎵 Song Lyrics
                    </h1>
                    <p className="text-muted-foreground">
                        Learn English by filling in the missing lyrics.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <SongSelector songs={demoSongs} onSelect={selectSong} />
                ) : state.mode === "playing" && state.currentSong ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={handleBackToSelection} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Change Song
                            </Button>
                        </div>
                        <LyricPlayer
                            song={state.currentSong}
                            isPlaying={state.isPlaying}
                            userAnswers={state.userAnswers}
                            onTogglePlay={togglePlay}
                            onUpdateAnswer={updateAnswer}
                            onCheck={checkAnswers}
                        />
                    </div>
                ) : state.mode === "results" && state.currentSong ? (
                    <div className="space-y-6">
                        <ResultModal
                            score={state.score}
                            song={state.currentSong}
                            onRetry={replaySong}
                            onBack={handleBackToSelection}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default SongLyrics;
