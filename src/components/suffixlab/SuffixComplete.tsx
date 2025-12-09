import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, RotateCcw } from "lucide-react";

interface SuffixCompleteProps {
  correct: number;
  total: number;
  onReset: () => void;
}

export const SuffixComplete = ({ correct, total, onReset }: SuffixCompleteProps) => {
  const percentage = Math.round((correct / total) * 100);

  return (
    <Card className="w-full max-w-lg mx-auto text-center">
      <CardHeader>
        <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
          <Trophy className="w-8 h-8 text-purple-600 dark:text-purple-400" />
        </div>
        <CardTitle className="text-2xl">Practice Complete!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
          {correct}/{total}
        </div>
        <p className="text-muted-foreground">
          You got {percentage}% correct
        </p>
        <Button onClick={onReset} className="w-full">
          <RotateCcw className="w-4 h-4 mr-2" />
          Try Another Deck
        </Button>
      </CardContent>
    </Card>
  );
};
