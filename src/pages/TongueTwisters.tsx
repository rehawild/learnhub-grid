import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTongueTwisters } from "@/hooks/useTongueTwisters";
import { tongueTwisters } from "@/data/tonguetwisters/twisters";
import { TwisterList } from "@/components/tonguetwisters/TwisterList";
import { TwisterPractice } from "@/components/tonguetwisters/TwisterPractice";

const TongueTwisters = () => {
    const {
        state,
        selectDifficulty,
        selectTwister,
        startRecording,
        stopRecording,
        playAttempt,
        goBack
    } = useTongueTwisters();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-4xl mx-auto px-4 py-8">

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
                        😝 Tongue Twisters
                    </h1>
                    <p className="text-muted-foreground">
                        Challenge your speech speed and agility.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "list" ? (
                    <TwisterList
                        twisters={tongueTwisters}
                        selectedDifficulty={state.selectedDifficulty}
                        onSelectDifficulty={selectDifficulty}
                        onSelectTwister={selectTwister}
                    />
                ) : state.mode === "practice" && state.currentTwister ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to List
                            </Button>
                        </div>
                        <TwisterPractice
                            twister={state.currentTwister}
                            isRecording={state.isRecording}
                            attempts={state.attempts}
                            onStartRecording={startRecording}
                            onStopRecording={stopRecording}
                            onPlayAttempt={playAttempt}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default TongueTwisters;
