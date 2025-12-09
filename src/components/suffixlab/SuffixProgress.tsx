import { Progress } from "@/components/ui/progress";

interface SuffixProgressProps {
  current: number;
  total: number;
  correct: number;
}

export const SuffixProgress = ({ current, total, correct }: SuffixProgressProps) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full max-w-lg mx-auto space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>
          Word {current + 1} of {total}
        </span>
        <span className="text-green-600 dark:text-green-400">
          {correct} correct
        </span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};
