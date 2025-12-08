import { Progress } from "@/components/ui/progress";

interface PrefixProgressProps {
  current: number;
  total: number;
  correct: number;
}

export const PrefixProgress = ({ current, total, correct }: PrefixProgressProps) => {
  const progressValue = ((current + 1) / total) * 100;

  return (
    <div className="w-full max-w-2xl space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>
          Prefix {current + 1} of {total}
        </span>
        <span>
          {correct} correct
        </span>
      </div>
      <Progress value={progressValue} className="h-2" />
    </div>
  );
};
