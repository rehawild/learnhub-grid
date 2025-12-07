import { SynonymWord } from "@/types/synonymfinder";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, ArrowRight, Lightbulb } from "lucide-react";

interface SynonymInputProps {
  word: SynonymWord;
  userAnswer: string;
  feedback: "correct" | "incorrect" | null;
  showHint: boolean;
  onAnswerChange: (answer: string) => void;
  onCheck: () => void;
  onNext: () => void;
  onToggleHint: () => void;
}

export const SynonymInput = ({
  word,
  userAnswer,
  feedback,
  showHint,
  onAnswerChange,
  onCheck,
  onNext,
  onToggleHint,
}: SynonymInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (feedback) {
        onNext();
      } else {
        onCheck();
      }
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-3xl font-bold text-primary">
          {word.word}
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          {word.definition}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-sm italic text-muted-foreground">
            "{word.example}"
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Enter a synonym:
          </label>
          <Input
            value={userAnswer}
            onChange={(e) => onAnswerChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a synonym..."
            className={`text-center text-lg ${
              feedback === "correct"
                ? "border-green-500 bg-green-50 dark:bg-green-950"
                : feedback === "incorrect"
                ? "border-red-500 bg-red-50 dark:bg-red-950"
                : ""
            }`}
            disabled={feedback !== null}
            autoFocus
          />
        </div>

        {feedback && (
          <div
            className={`flex items-center justify-center gap-2 p-3 rounded-lg ${
              feedback === "correct"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            }`}
          >
            {feedback === "correct" ? (
              <>
                <Check className="h-5 w-5" />
                <span>Correct! Well done!</span>
              </>
            ) : (
              <>
                <X className="h-5 w-5" />
                <span>
                  Not quite. Synonyms: {word.synonyms.join(", ")}
                </span>
              </>
            )}
          </div>
        )}

        {showHint && !feedback && (
          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-3 rounded-lg">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Hint:</strong> First letter is "{word.synonyms[0][0].toUpperCase()}"
              and it has {word.synonyms[0].length} letters.
            </p>
          </div>
        )}

        <div className="flex gap-2 justify-center">
          {!feedback ? (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={onToggleHint}
              >
                <Lightbulb className="h-4 w-4 mr-1" />
                {showHint ? "Hide Hint" : "Show Hint"}
              </Button>
              <Button onClick={onCheck} disabled={!userAnswer.trim()}>
                <Check className="h-4 w-4 mr-1" />
                Check
              </Button>
            </>
          ) : (
            <Button onClick={onNext}>
              <ArrowRight className="h-4 w-4 mr-1" />
              Next Word
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
