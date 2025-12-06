import { Progress } from "@/components/ui/progress";

interface SpellingProgressProps {
  current: number;
  total: number;
  correct: number;
}

export const SpellingProgress = ({ current, total, correct }: SpellingProgressProps) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between text-sm text-muted-foreground mb-2">
        <span>
          Word {Math.min(current + 1, total)} of {total}
        </span>
        <span className="text-green-400">{correct} correct</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};
