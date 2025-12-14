import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTimerDrill } from "@/hooks/useTimerDrill";
import { drillCategories } from "@/data/timerdrill/drills";
import { DrillSelector } from "@/components/timerdrill/DrillSelector";
import { SprintInterface } from "@/components/timerdrill/SprintInterface";
import { ScoreCard } from "@/components/timerdrill/ScoreCard";

const TimerDrill = () => {
    const { state, startDrill, submitAnswer, reset } = useTimerDrill();
    const { category, status } = state;

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-4xl mx-auto px-4 py-8">

                {/* 1. Navigation Header */}
                <div className="mb-6 flex justify-between items-center">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2 -ml-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                    {status === 'running' && (
                        <Button variant="outline" onClick={reset}>Quit Drill</Button>
                    )}
                </div>

                {/* 2. Tool Title */}
                {status === 'idle' && (
                    <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4">
                        <h1 className="text-5xl font-black text-foreground mb-4 tracking-tight">
                            Timer Drill <span className="text-yellow-500">⚡</span>
                        </h1>
                        <p className="text-muted-foreground text-xl max-w-lg mx-auto">
                            Test your reflexes. Select a category and answer as many questions as possible before time runs out!
                        </p>
                    </div>
                )}

                {/* 3. Main Content Area */}
                {status === 'idle' && (
                    <DrillSelector categories={drillCategories} onSelect={startDrill} />
                )}

                {status === 'running' && (
                    <SprintInterface state={state} onAnswer={submitAnswer} />
                )}

                {status === 'finished' && (
                    <ScoreCard state={state} onReset={reset} />
                )}

            </div>
        </div>
    );
};

export default TimerDrill;
