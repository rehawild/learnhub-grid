import { PrefixWord, PrefixFeedback } from "@/types/prefixmaster";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Lightbulb, ArrowRight } from "lucide-react";

interface PrefixInputProps {
  word: PrefixWord;
  userAnswer: string;
  feedback: PrefixFeedback;
  showHint: boolean;
  onAnswerChange: (answer: string) => void;
  onCheck: () => void;
  onNext: () => void;
  onToggleHint: () => void;
}

export const PrefixInput = ({
  word,
  userAnswer,
  feedback,
  showHint,
  onAnswerChange,
  onCheck,
  onNext,
  onToggleHint,
}: PrefixInputProps) => {
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
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            {word.prefix}
          </Badge>
          <span className="text-muted-foreground">means</span>
          <span className="text-lg font-medium">"{word.meaning}"</span>
        </div>
        <CardTitle className="text-2xl mt-4">
          Root word: <span className="text-primary">{word.rootWord}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          <strong>Definition:</strong> {word.definition}
        </p>

        {showHint && (
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-sm">
              <strong>Example:</strong> {word.example}
            </p>
          </div>
        )}

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Combine the prefix with the root word:
          </label>
          <Input
            value={userAnswer}
            onChange={(e) => onAnswerChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`${word.prefix} + ${word.rootWord} = ?`}
            className={`text-lg ${
              feedback === "correct"
                ? "border-green-500 bg-green-50 dark:bg-green-950"
                : feedback === "incorrect"
                ? "border-red-500 bg-red-50 dark:bg-red-950"
                : ""
            }`}
            disabled={feedback !== null}
          />
        </div>

        {feedback && (
          <div
            className={`flex items-center gap-2 p-3 rounded-lg ${
              feedback === "correct"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            }`}
          >
            {feedback === "correct" ? (
              <>
                <CheckCircle className="h-5 w-5" />
                <span>Correct! The answer is "{word.combinedWord}"</span>
              </>
            ) : (
              <>
                <XCircle className="h-5 w-5" />
                <span>
                  Not quite. The correct answer is "{word.combinedWord}"
                </span>
              </>
            )}
          </div>
        )}

        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" onClick={onToggleHint} disabled={feedback !== null}>
            <Lightbulb className="h-4 w-4 mr-2" />
            {showHint ? "Hide Hint" : "Show Hint"}
          </Button>

          {!feedback ? (
            <Button onClick={onCheck} disabled={!userAnswer.trim()}>
              Check Answer
            </Button>
          ) : (
            <Button onClick={onNext}>
              Next Word
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
