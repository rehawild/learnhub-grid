import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw, Home, Trophy } from "lucide-react";

interface WordBuilderCompleteProps {
  correct: number;
  total: number;
  onReset: () => void;
  onGoBack: () => void;
}

export const WordBuilderComplete = ({
  correct,
  total,
  onReset,
  onGoBack,
}: WordBuilderCompleteProps) => {
  const percentage = Math.round((correct / total) * 100);

  return (
    <Card className="text-center">
      <CardHeader>
        <div className="mx-auto mb-4">
          <Trophy className="w-16 h-16 text-yellow-500" />
        </div>
        <CardTitle className="text-2xl">Building Complete!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-5xl font-bold text-primary">{percentage}%</p>
          <p className="text-muted-foreground mt-2">
            {correct} out of {total} words built correctly
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={onGoBack}>
            <Home className="w-4 h-4 mr-2" />
            Back to Decks
          </Button>
          <Button onClick={onReset}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
