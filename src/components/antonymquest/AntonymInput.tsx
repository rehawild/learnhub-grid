import { AntonymWord } from "@/types/antonymquest";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Check, ArrowRight } from "lucide-react";

interface AntonymInputProps {
  word: AntonymWord;
  userInput: string;
  feedback: "correct" | "incorrect" | null;
  showHint: boolean;
  onInputChange: (value: string) => void;
  onCheck: () => void;
  onNext: () => void;
  onToggleHint: () => void;
}

export const AntonymInput = ({
  word,
  userInput,
  feedback,
  showHint,
  onInputChange,
  onCheck,
  onNext,
  onToggleHint,
}: AntonymInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (feedback === "correct") {
        onNext();
      } else {
        onCheck();
      }
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Find the Antonym</CardTitle>
        <p className="text-4xl font-bold text-primary mt-4">{word.word}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="text"
          placeholder="Type an antonym..."
          value={userInput}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className={`text-center text-lg ${
            feedback === "correct"
              ? "border-green-500 bg-green-50"
              : feedback === "incorrect"
              ? "border-red-500 bg-red-50"
              : ""
          }`}
          disabled={feedback === "correct"}
        />

        {feedback === "incorrect" && (
          <p className="text-red-500 text-center text-sm">
            Try again! Possible antonyms: {word.antonyms.slice(0, 2).join(", ")}...
          </p>
        )}

        {feedback === "correct" && (
          <p className="text-green-500 text-center text-sm font-medium">
            Correct! Great job!
          </p>
        )}

        {showHint && word.hint && (
          <p className="text-muted-foreground text-center text-sm italic">
            Hint: {word.hint}
          </p>
        )}

        <div className="flex gap-2 justify-center">
          <Button variant="outline" size="sm" onClick={onToggleHint}>
            <Lightbulb className="h-4 w-4 mr-1" />
            Hint
          </Button>

          {feedback === "correct" ? (
            <Button onClick={onNext}>
              <ArrowRight className="h-4 w-4 mr-1" />
              Next
            </Button>
          ) : (
            <Button onClick={onCheck} disabled={!userInput.trim()}>
              <Check className="h-4 w-4 mr-1" />
              Check
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
