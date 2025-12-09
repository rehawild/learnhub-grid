import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, RotateCcw, ArrowLeft } from "lucide-react";

interface TenseCompleteProps {
  correctAnswers: number;
  totalWords: number;
  onRestart: () => void;
  onBack: () => void;
}

export const TenseComplete = ({
  correctAnswers,
  totalWords,
  onRestart,
  onBack,
}: TenseCompleteProps) => {
  const percentage = Math.round((correctAnswers / totalWords) * 100);

  return (
    <Card className="text-center">
      <CardHeader>
        <div className="mx-auto mb-4">
          <Trophy className="h-16 w-16 text-yellow-500" />
        </div>
        <CardTitle className="text-2xl">Practice Complete!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <p className="text-4xl font-bold text-primary">{percentage}%</p>
          <p className="text-muted-foreground">
            You got {correctAnswers} out of {totalWords} correct
          </p>
        </div>

        <div className="flex gap-2 justify-center">
          <Button variant="outline" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Choose Deck
          </Button>
          <Button onClick={onRestart} className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Try Again
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
