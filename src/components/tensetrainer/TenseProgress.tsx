import { Progress } from "@/components/ui/progress";

interface TenseProgressProps {
  current: number;
  total: number;
  correctAnswers: number;
}

export const TenseProgress = ({ current, total, correctAnswers }: TenseProgressProps) => {
  const progressPercent = ((current + 1) / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>
          Word {current + 1} of {total}
        </span>
        <span className="text-green-600">
          {correctAnswers} correct
        </span>
      </div>
      <Progress value={progressPercent} className="h-2" />
    </div>
  );
};
