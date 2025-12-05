import { Progress } from "@/components/ui/progress";

interface FlashcardProgressProps {
  progress: number;
}

export const FlashcardProgress = ({ progress }: FlashcardProgressProps) => {
  return (
    <div className="w-full max-w-md">
      <Progress value={progress} className="h-2" />
    </div>
  );
};
