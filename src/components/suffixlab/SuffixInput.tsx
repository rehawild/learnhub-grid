import { SuffixWord, SuffixFeedback } from "@/types/suffixlab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Lightbulb, ArrowRight } from "lucide-react";

interface SuffixInputProps {
  word: SuffixWord;
  userAnswer: string;
  feedback: SuffixFeedback;
  showHint: boolean;
  onAnswerChange: (answer: string) => void;
  onCheck: () => void;
  onNext: () => void;
  onToggleHint: () => void;
}

export const SuffixInput = ({
  word,
  userAnswer,
  feedback,
  showHint,
  onAnswerChange,
  onCheck,
  onNext,
  onToggleHint,
}: SuffixInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (feedback) {
        onNext();
      } else {
        onCheck();
      }
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">
          <span className="text-primary">{word.baseWord}</span>
          <span className="text-muted-foreground mx-2">+</span>
          <span className="text-purple-500">{word.suffix}</span>
        </CardTitle>
        <p className="text-muted-foreground mt-2">{word.meaning}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={userAnswer}
            onChange={(e) => onAnswerChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type the combined word..."
            disabled={feedback !== null}
            className="text-center text-lg"
            autoFocus
          />
        </div>

        {showHint && (
          <div className="p-3 bg-muted rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              <Lightbulb className="inline w-4 h-4 mr-1" />
              {word.hint}
            </p>
          </div>
        )}

        {feedback && (
          <div
            className={`p-3 rounded-lg text-center ${
              feedback === "correct"
                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
            }`}
          >
            {feedback === "correct" ? (
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Correct! The word is "{word.combinedWord}"
              </p>
            ) : (
              <p className="flex items-center justify-center gap-2">
                <XCircle className="w-5 h-5" />
                The correct answer is "{word.combinedWord}"
              </p>
            )}
          </div>
        )}

        <div className="flex gap-2 justify-center">
          {!feedback && (
            <>
              <Button variant="outline" onClick={onToggleHint}>
                <Lightbulb className="w-4 h-4 mr-1" />
                Hint
              </Button>
              <Button onClick={onCheck} disabled={!userAnswer.trim()}>
                Check
              </Button>
            </>
          )}
          {feedback && (
            <Button onClick={onNext}>
              Next <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
