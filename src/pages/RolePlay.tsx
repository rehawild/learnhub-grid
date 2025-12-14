import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useRolePlay } from "@/hooks/useRolePlay";
import { rolePlayScenarios } from "@/data/roleplay/scenarios";
import { ScenarioSelector } from "@/components/roleplay/ScenarioSelector";
import { RolePlayStage } from "@/components/roleplay/RolePlayStage";

const RolePlay = () => {
    const {
        state,
        selectScenario,
        startRecording,
        stopRecording,
        playAudio,
        resetTool
    } = useRolePlay();

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
                        🎭 Role Play
                    </h1>
                    <p className="text-muted-foreground">
                        Immerse yourself in real-world scenarios.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <ScenarioSelector
                        scenarios={rolePlayScenarios}
                        onSelect={selectScenario}
                    />
                ) : state.mode === "chat" && state.currentScenario ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={resetTool} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> End Role Play
                            </Button>
                        </div>
                        <RolePlayStage
                            scenario={state.currentScenario}
                            messages={state.messages}
                            isRecording={state.isRecording}
                            isProcessing={state.isProcessing}
                            onStartRecording={startRecording}
                            onStopRecording={stopRecording}
                            onPlayAudio={playAudio}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default RolePlay;
