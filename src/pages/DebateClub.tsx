import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useDebateClub } from "@/hooks/useDebateClub";
import { debateTopics } from "@/data/debateclub/topics";
import { DebateTopics } from "@/components/debateclub/DebateTopics";
import { DebateStage } from "@/components/debateclub/DebateStage";

const DebateClub = () => {
    const {
        state,
        selectTopic,
        startDebate,
        nextPhase,
        toggleTimer,
        startRecording,
        stopRecording,
        playRecording,
        resetTool
    } = useDebateClub();

    // Helper to handle detailed selection from component
    const handleTopicSelect = (topic: any, side: any) => {
        selectTopic(topic);
        startDebate(side);
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-5xl mx-auto px-4 py-8">

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
                        ⚖️ Debate Club
                    </h1>
                    <p className="text-muted-foreground">
                        Structure your arguments and practice persuasive speaking.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <div className="max-w-3xl mx-auto">
                        <DebateTopics
                            topics={debateTopics}
                            onSelect={handleTopicSelect}
                        />
                    </div>
                ) : state.mode === "debate" && state.currentTopic && state.userSide ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={resetTool} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> End Debate
                            </Button>
                        </div>
                        <DebateStage
                            topic={state.currentTopic}
                            side={state.userSide}
                            phase={state.currentPhase}
                            timeLeft={state.timeLeft}
                            isTimerRunning={state.isTimerRunning}
                            isRecording={state.isRecording}
                            recordings={state.recordings}
                            onNextPhase={nextPhase}
                            onToggleTimer={toggleTimer}
                            onStartRecording={startRecording}
                            onStopRecording={stopRecording}
                            onPlayRecording={playRecording}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default DebateClub;
