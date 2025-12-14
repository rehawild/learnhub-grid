import { DebateTopic, DebateSide, DebatePhase, DebateRecording } from "@/types/debateclub";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Square, Play, ArrowRight, Timer, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface DebateStageProps {
    topic: DebateTopic;
    side: DebateSide;
    phase: DebatePhase;
    timeLeft: number;
    isTimerRunning: boolean;
    isRecording: boolean;
    recordings: DebateRecording[];
    onNextPhase: () => void;
    onToggleTimer: () => void;
    onStartRecording: () => void;
    onStopRecording: () => void;
    onPlayRecording: (rec: DebateRecording) => void;
}

export const DebateStage = ({
    topic,
    side,
    phase,
    timeLeft,
    isTimerRunning,
    isRecording,
    recordings,
    onNextPhase,
    onToggleTimer,
    onStartRecording,
    onStopRecording,
    onPlayRecording
}: DebateStageProps) => {

    const formatTime = (secs: number) => {
        const mins = Math.floor(secs / 60);
        const scs = secs % 60;
        return `${mins}:${scs.toString().padStart(2, '0')}`;
    };

    const getPhaseColor = () => {
        switch (phase) {
            case "Preparation": return "text-blue-500";
            case "Opening": return "text-green-500";
            case "Rebuttal": return "text-orange-500";
            case "Closing": return "text-purple-500";
            default: return "text-primary";
        }
    };

    const getPhaseDescription = () => {
        switch (phase) {
            case "Preparation": return "Research your points and outline your arguments.";
            case "Opening": return "State your position clearly and present your main arguments.";
            case "Rebuttal": return "Address potential counter-arguments and defend your points.";
            case "Closing": return "Summarize your strongest points and make a final appeal.";
            default: return "Debate completed.";
        }
    };

    if (phase === "Completed") {
        return (
            <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in">
                <Card className="text-center py-10">
                    <h2 className="text-3xl font-bold mb-4">Debate Concluded! 🎓</h2>
                    <p className="text-muted-foreground mb-8">Great job practicing your argumentation skills.</p>

                    <div className="space-y-4 max-w-md mx-auto text-left">
                        <h3 className="font-semibold border-b pb-2">Your Recordings</h3>
                        {recordings.map((rec, i) => (
                            <div key={i} className="flex justify-between items-center p-3 bg-secondary/20 rounded">
                                <span className="font-medium">{rec.phase}</span>
                                <Button size="sm" variant="ghost" onClick={() => onPlayRecording(rec)}>
                                    <Play className="w-4 h-4 mr-1" /> Listen
                                </Button>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left: Phase & Controls */}
            <div className="lg:col-span-2 space-y-6">
                <Card className="border-t-4 border-t-primary">
                    <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                            <span className={cn("font-bold uppercase tracking-widest text-sm", getPhaseColor())}>
                                Current Phase: {phase}
                            </span>
                            <div className={cn("font-mono text-2xl font-bold tabular-nums", timeLeft < 10 && "text-destructive animate-pulse")}>
                                {formatTime(timeLeft)}
                            </div>
                        </div>
                        <Progress value={(timeLeft / 120) * 100} className="h-2" />
                        <CardTitle className="mt-6 text-3xl font-bold">"{topic.motion}"</CardTitle>
                        <CardDescription className="text-lg">You are arguing for: <span className="font-bold text-foreground">{side}</span></CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="bg-secondary/20 p-4 rounded-lg flex gap-4">
                            <Lightbulb className="w-6 h-6 text-yellow-500 shrink-0" />
                            <div>
                                <h4 className="font-semibold mb-1">Phase Goal</h4>
                                <p className="text-sm text-muted-foreground">{getPhaseDescription()}</p>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={onToggleTimer}
                            >
                                <Timer className="w-4 h-4 mr-2" /> {isTimerRunning ? "Pause Timer" : "Start Timer"}
                            </Button>

                            {phase !== "Preparation" && (
                                <Button
                                    size="lg"
                                    variant={isRecording ? "destructive" : "default"}
                                    onClick={isRecording ? onStopRecording : onStartRecording}
                                    className={cn(isRecording && "animate-pulse")}
                                >
                                    {isRecording ? <Square className="w-4 h-4 mr-2" /> : <Mic className="w-4 h-4 mr-2" />}
                                    {isRecording ? "Stop Recording" : "Record Speech"}
                                </Button>
                            )}
                        </div>

                        <div className="flex justify-end pt-4">
                            <Button onClick={onNextPhase} className="gap-2">
                                Next Phase <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Right: Helping Points */}
            <div className="lg:col-span-1">
                <Card className="h-full bg-secondary/10">
                    <CardHeader>
                        <CardTitle>Talking Points</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <h4 className="font-semibold text-sm text-green-600">Points For Proposition</h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                                {topic.pointsFor.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                        </div>
                        <div className="space-y-2 pt-4 border-t">
                            <h4 className="font-semibold text-sm text-red-600">Points For Opposition</h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                                {topic.pointsAgainst.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
};
