import { SynonymProgress as SynonymProgressType } from "@/types/synonymfinder";
import { Progress } from "@/components/ui/progress";

interface SynonymProgressProps {
  progress: SynonymProgressType;
}

export const SynonymProgress = ({ progress }: SynonymProgressProps) => {
  const percentage = (progress.current / progress.total) * 100;

  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>
          Word {progress.current} of {progress.total}
        </span>
        <span className="text-green-600 dark:text-green-400">
          {progress.correct} correct
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};
