import { DrillState, DrillItem } from "@/types/timerdrill";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Timer, Trophy, XCircle } from "lucide-react";

interface SprintInterfaceProps {
    state: DrillState;
    onAnswer: (val: string) => void;
}

export const SprintInterface = ({ state, onAnswer }: SprintInterfaceProps) => {
    const { category, currentQuestionIndex, timeLeft, score, correctCount, wrongCount } = state;
    if (!category) return null;

    const currentItem = category.items[currentQuestionIndex];
    const totalTime = category.defaultTimeSeconds;
    const progress = (timeLeft / totalTime) * 100;

    // Simple animation trigger
    const [animateClass, setAnimateClass] = useState("");

    const handleOptionClick = (opt: string) => {
        setAnimateClass("animate-pulse");
        setTimeout(() => setAnimateClass(""), 300);
        onAnswer(opt);
    };

    return (
        <div className="max-w-xl mx-auto space-y-8">
            {/* HUD */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-card p-2 rounded-lg border shadow-sm">
                    <Timer className="w-5 h-5 text-yellow-500" />
                    <span className={cn("text-2xl font-mono font-bold", timeLeft < 10 && "text-red-500 animate-pulse")}>
                        {timeLeft}
                    </span>
                </div>

                <div className="flex items-center gap-4 bg-card p-2 rounded-lg border shadow-sm">
                    <div className="flex items-center gap-1 text-green-500">
                        <Trophy className="w-4 h-4" />
                        <span className="font-bold">{score}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                        {correctCount} / {correctCount + wrongCount}
                    </div>
                </div>
            </div>

            {/* Timer Bar */}
            <Progress value={progress} className={cn("h-4 bg-secondary", timeLeft < 10 && "[&>div]:bg-red-500")} />

            {/* Question Card */}
            <div className={cn("bg-card border rounded-2xl p-12 text-center shadow-xl transition-all", animateClass)}>
                <h2 className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Current Word</h2>
                <div className="text-5xl font-black text-foreground mb-8">
                    {currentItem.question}
                </div>

                {/* Options Grid */}
                {currentItem.options && (
                    <div className="grid grid-cols-2 gap-4">
                        {currentItem.options.map((opt) => (
                            <Button
                                key={opt}
                                variant="outline"
                                size="lg"
                                className="h-16 text-xl hover:bg-yellow-500 hover:text-white transition-all transform hover:scale-105"
                                onClick={() => handleOptionClick(opt)}
                            >
                                {opt}
                            </Button>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};
