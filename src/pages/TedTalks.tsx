import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTedTalks } from "@/hooks/useTedTalks";
import { sampleTalks } from "@/data/tedtalks/talks";
import { TalkLibrary } from "@/components/tedtalks/TalkLibrary";
import { VideoPlayer } from "@/components/tedtalks/VideoPlayer";

const TedTalks = () => {
    const {
        state,
        selectTalk,
        toggleAutoScroll,
        toggleVocab,
        updateProgress,
        setPlaying,
        goBack
    } = useTedTalks();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-6xl mx-auto px-4 py-8">

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
                        🎬 TED Talks
                    </h1>
                    <p className="text-muted-foreground">
                        Learn from inspiring speakers with interactive transcripts.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "library" ? (
                    <div className="max-w-4xl mx-auto">
                        <TalkLibrary talks={sampleTalks} onSelect={selectTalk} />
                    </div>
                ) : state.mode === "watching" && state.currentTalk ? (
                    <div className="space-y-6">
                        <div className="max-w-4xl mx-auto flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Library
                            </Button>
                        </div>
                        <VideoPlayer
                            talk={state.currentTalk}
                            currentTime={state.currentTime}
                            autoScroll={state.autoScroll}
                            showVocab={state.showVocab}
                            onProgress={updateProgress}
                            onPlayStateChange={setPlaying}
                            onToggleAutoScroll={toggleAutoScroll}
                            onToggleVocab={toggleVocab}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default TedTalks;
