import { TenseWord } from "@/types/tensetrainer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Lightbulb } from "lucide-react";

interface TenseInputProps {
  word: TenseWord;
  userAnswer: string;
  isCorrect: boolean | null;
  showHint: boolean;
  onAnswerChange: (answer: string) => void;
  onCheck: () => void;
  onNext: () => void;
  onToggleHint: () => void;
}

export const TenseInput = ({
  word,
  userAnswer,
  isCorrect,
  showHint,
  onAnswerChange,
  onCheck,
  onNext,
  onToggleHint,
}: TenseInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (isCorrect === null) {
        onCheck();
      } else {
        onNext();
      }
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card">
        <CardContent className="pt-6 space-y-4">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Tense: {word.tense}</p>
            <p className="text-2xl font-bold text-primary">
              Base verb: "{word.baseVerb}"
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-lg text-center text-foreground">
              {word.sentence.split("___").map((part, index, arr) => (
                <span key={index}>
                  {part}
                  {index < arr.length - 1 && (
                    <span className="inline-block min-w-[100px] border-b-2 border-primary mx-1">
                      {userAnswer || "___"}
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>

          {showHint && (
            <div className="bg-primary/10 rounded-lg p-3">
              <p className="text-sm text-primary flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                {word.hint}
              </p>
            </div>
          )}

          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Type the correct verb form..."
              value={userAnswer}
              onChange={(e) => onAnswerChange(e.target.value)}
              onKeyPress={handleKeyPress}
              className={`text-center text-lg ${
                isCorrect === true
                  ? "border-green-500 bg-green-50 dark:bg-green-950"
                  : isCorrect === false
                  ? "border-red-500 bg-red-50 dark:bg-red-950"
                  : ""
              }`}
              disabled={isCorrect !== null}
              autoFocus
            />

            {isCorrect === false && (
              <p className="text-center text-sm text-red-500">
                Correct answer: <span className="font-bold">{word.correctAnswer}</span>
              </p>
            )}

            <div className="flex gap-2 justify-center">
              {isCorrect === null ? (
                <>
                  <Button
                    variant="outline"
                    onClick={onToggleHint}
                    className="gap-2"
                  >
                    <Lightbulb className="h-4 w-4" />
                    {showHint ? "Hide Hint" : "Show Hint"}
                  </Button>
                  <Button
                    onClick={onCheck}
                    disabled={!userAnswer.trim()}
                    className="gap-2"
                  >
                    <Check className="h-4 w-4" />
                    Check
                  </Button>
                </>
              ) : (
                <Button onClick={onNext} className="gap-2">
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
