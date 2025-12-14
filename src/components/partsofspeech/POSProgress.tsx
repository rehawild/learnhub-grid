import { Progress } from "@/components/ui/progress";

interface POSProgressProps {
    current: number;
    total: number;
    correct: number;
}

export const POSProgress = ({ current, total, correct }: POSProgressProps) => {
    const progress = ((current) / total) * 100;

    return (
        <div className="w-full space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
                <span>Question {current + 1} of {total}</span>
                <span>Score: {correct}</span>
            </div>
            <Progress value={progress} className="h-2" />
        </div>
    );
};
