import { Progress } from "@/components/ui/progress";

interface ClauseProgressProps {
    current: number;
    total: number;
    correct: number;
}

export const ClauseProgress = ({ current, total, correct }: ClauseProgressProps) => {
    const progress = ((current) / total) * 100;

    return (
        <div className="w-full space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
                <span>Sentence {current + 1} of {total}</span>
                <span>Score: {correct}</span>
            </div>
            <Progress value={progress} className="h-2" />
        </div>
    );
};
