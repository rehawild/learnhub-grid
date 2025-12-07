import { Progress } from "@/components/ui/progress";

interface AntonymProgressProps {
  currentIndex: number;
  totalWords: number;
  correctAnswers: number;
}

export const AntonymProgress = ({
  currentIndex,
  totalWords,
  correctAnswers,
}: AntonymProgressProps) => {
  const progressPercent = ((currentIndex + 1) / totalWords) * 100;

  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>
          Word {currentIndex + 1} of {totalWords}
        </span>
        <span>Correct: {correctAnswers}</span>
      </div>
      <Progress value={progressPercent} className="h-2" />
    </div>
  );
};
