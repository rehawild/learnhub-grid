import { DrillState } from "@/types/timerdrill";
import { Button } from "@/components/ui/button";
import { Trophy, RefreshCcw, Target, Zap } from "lucide-react";

interface ScoreCardProps {
    state: DrillState;
    onReset: () => void;
}

export const ScoreCard = ({ state, onReset }: ScoreCardProps) => {
    const total = state.correctCount + state.wrongCount;
    const accuracy = total > 0 ? Math.round((state.correctCount / total) * 100) : 0;
    // Speed: Questions per minute (extrapolated if finished early, but here it's fixed time)
    // Actually "Avg Time" would be hard to calculate without granular timestamps, 
    // so let's stick to "Questions Answered".

    return (
        <div className="max-w-md mx-auto text-center space-y-8 animate-in zoom-in">
            <div className="relative inline-block">
                <div className="absolute inset-0 bg-yellow-500 blur-2xl opacity-20 rounded-full"></div>
                <Trophy className="w-32 h-32 text-yellow-500 relative z-10 mx-auto" />
            </div>

            <div className="space-y-2">
                <h2 className="text-4xl font-bold">Time's Up!</h2>
                <p className="text-muted-foreground text-lg">Here is how you performed</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border p-4 rounded-xl shadow-sm">
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1 mb-1">
                        <Target className="w-4 h-4" /> Score
                    </div>
                    <div className="text-3xl font-bold text-primary">{state.score}</div>
                </div>
                <div className="bg-card border p-4 rounded-xl shadow-sm">
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1 mb-1">
                        <Zap className="w-4 h-4" /> Accuracy
                    </div>
                    <div className="text-3xl font-bold text-green-500">{accuracy}%</div>
                </div>
                <div className="bg-card border p-4 rounded-xl shadow-sm col-span-2">
                    <div className="text-sm text-muted-foreground mb-1">
                        Questions Answered
                    </div>
                    <div className="text-3xl font-bold">{total}</div>
                </div>
            </div>

            <Button size="lg" className="w-full gap-2 text-lg h-12" onClick={onReset}>
                <RefreshCcw className="w-5 h-5" /> Play Again
            </Button>
        </div>
    );
};
