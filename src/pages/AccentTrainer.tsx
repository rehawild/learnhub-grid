import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useAccentTrainer } from "@/hooks/useAccentTrainer";
import { accentRegions } from "@/data/accenttrainer/accents";
import { AccentSelector } from "@/components/accenttrainer/AccentSelector";
import { AccentPlayer } from "@/components/accenttrainer/AccentPlayer";

const AccentTrainer = () => {
    const {
        state,
        selectRegion,
        selectExample,
        togglePlay,
        toggleRecording,
        goBack
    } = useAccentTrainer();

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
                        🌍 Accent Trainer
                    </h1>
                    <p className="text-muted-foreground">
                        Master the nuances of different English accents.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <AccentSelector regions={accentRegions} onSelect={selectRegion} />
                ) : state.mode === "practice" && state.currentRegion && state.currentExample ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Regions
                            </Button>
                        </div>
                        <AccentPlayer
                            region={state.currentRegion}
                            example={state.currentExample}
                            isPlaying={state.isPlaying}
                            isRecording={state.isRecording}
                            onTogglePlay={togglePlay}
                            onToggleRecord={toggleRecording}
                            onSelectExample={selectExample}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default AccentTrainer;
