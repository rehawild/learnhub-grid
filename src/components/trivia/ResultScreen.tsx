import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, ListChecks } from "lucide-react";
import { TriviaState } from "@/types/trivia";

interface ResultScreenProps {
    score: number;
    totalQuestions: number;
    onRetry: () => void;
    onBack: () => void;
}

export const ResultScreen = ({ score, totalQuestions, onRetry, onBack }: ResultScreenProps) => {
    // Max score per question is 10
    const maxScore = totalQuestions * 10;
    const percentage = Math.round((score / maxScore) * 100);

    return (
        <div className="flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-500 py-12 text-center max-w-lg mx-auto">
            <div className="relative">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center animate-bounce">
                    <Trophy className="w-16 h-16 text-primary" />
                </div>
            </div>

            <div className="space-y-2">
                <h2 className="text-4xl font-bold text-foreground">Quiz Complete!</h2>
                <p className="text-xl text-muted-foreground">
                    You scored <span className="text-primary font-bold">{score}</span> / {maxScore}
                </p>
            </div>

            <div className="w-full bg-secondary h-4 rounded-full overflow-hidden">
                <div
                    className="h-full bg-primary transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <p className="text-sm font-medium text-muted-foreground">
                {percentage >= 80 ? "Amazing Job!" : percentage >= 50 ? "Good Effort!" : "Keep Practicing!"}
            </p>

            <div className="flex gap-4 pt-4">
                <Button size="lg" onClick={onRetry} className="gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Play Again
                </Button>
                <Button variant="outline" size="lg" onClick={onBack} className="gap-2">
                    <ListChecks className="w-4 h-4" />
                    Pick Category
                </Button>
            </div>
        </div>
    );
};
