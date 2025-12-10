import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ArticleCompleteProps {
  correct: number;
  total: number;
  onRestart: () => void;
  onBack: () => void;
}

export const ArticleComplete = ({ correct, total, onRestart, onBack }: ArticleCompleteProps) => {
  const percentage = Math.round((correct / total) * 100);

  return (
    <Card className="text-center bg-card border-border">
      <CardHeader>
        <CardTitle className="text-2xl">Deck Complete!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-6xl font-bold text-primary">{percentage}%</div>
        <p className="text-xl text-muted-foreground">
          You got {correct} out of {total} correct!
        </p>
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={onBack}>
            Choose Another Deck
          </Button>
          <Button onClick={onRestart}>
            Try Again
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
