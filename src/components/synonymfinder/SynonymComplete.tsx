import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw, ArrowLeft, Trophy, Star } from "lucide-react";

interface SynonymCompleteProps {
  deckName: string;
  totalWords: number;
  correctCount: number;
  onRestart: () => void;
  onChangeDeck: () => void;
}

export const SynonymComplete = ({
  deckName,
  totalWords,
  correctCount,
  onRestart,
  onChangeDeck,
}: SynonymCompleteProps) => {
  const percentage = Math.round((correctCount / totalWords) * 100);
  const isPerfect = percentage === 100;
  const isGood = percentage >= 70;

  return (
    <Card className="w-full max-w-md text-center">
      <CardHeader>
        <div className="flex justify-center mb-4">
          {isPerfect ? (
            <Trophy className="h-16 w-16 text-yellow-500" />
          ) : isGood ? (
            <Star className="h-16 w-16 text-primary" />
          ) : (
            <Star className="h-16 w-16 text-muted-foreground" />
          )}
        </div>
        <CardTitle className="text-2xl">
          {isPerfect
            ? "Perfect Score!"
            : isGood
            ? "Great Job!"
            : "Keep Practicing!"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-muted-foreground mb-2">
            You completed "{deckName}"
          </p>
          <p className="text-4xl font-bold text-primary">
            {correctCount} / {totalWords}
          </p>
          <p className="text-lg text-muted-foreground">
            {percentage}% correct
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Button onClick={onRestart} className="w-full">
            <RotateCcw className="h-4 w-4 mr-2" />
            Practice Again
          </Button>
          <Button variant="outline" onClick={onChangeDeck} className="w-full">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Choose Different Deck
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
