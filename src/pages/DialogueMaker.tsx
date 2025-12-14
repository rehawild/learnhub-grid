import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import { useDialogueMaker } from "@/hooks/useDialogueMaker";
import { dialogueScenarios } from "@/data/dialoguemaker/dialogue-scenarios";
import { ScenarioSelector } from "@/components/dialoguemaker/ScenarioSelector";
import { DialogueEditor } from "@/components/dialoguemaker/DialogueEditor";
import { DialoguePreview } from "@/components/dialoguemaker/DialoguePreview";
import { toast } from "sonner";

const DialogueMaker = () => {
    const {
        state,
        selectScenario,
        addLine,
        deleteLine,
        resetTool,
        goBack
    } = useDialogueMaker();

    const copyTranscript = () => {
        const transcript = state.lines
            .map(line => {
                const char = state.currentScenario?.characters.find(c => c.id === line.characterId);
                return `${char?.name}: ${line.text}`;
            })
            .join("\n");
        navigator.clipboard.writeText(transcript);
        toast.success("Transcript copied to clipboard!");
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
                        🗣️ Dialogue Maker
                    </h1>
                    <p className="text-muted-foreground">
                        Create realistic conversations to practice real-world scenarios.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <ScenarioSelector scenarios={dialogueScenarios} onSelect={selectScenario} />
                ) : state.mode === "editor" && state.currentScenario ? (
                    <div className="space-y-6 flex flex-col h-full">
                        <div className="flex justify-between items-center">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Change Scenario
                            </Button>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={resetTool}>
                                    <RotateCcw className="w-4 h-4 mr-2" /> Restart
                                </Button>
                                <Button variant="secondary" size="sm" onClick={copyTranscript} disabled={state.lines.length === 0}>
                                    Copy Transcript
                                </Button>
                            </div>
                        </div>

                        {/* Combined Chat Interface */}
                        <div className="flex flex-col border rounded-xl overflow-hidden shadow-sm">
                            <DialoguePreview
                                scenario={state.currentScenario}
                                lines={state.lines}
                                onDeleteLine={deleteLine}
                            />
                            <DialogueEditor
                                scenario={state.currentScenario}
                                onAddLine={addLine}
                            />
                        </div>
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default DialogueMaker;
