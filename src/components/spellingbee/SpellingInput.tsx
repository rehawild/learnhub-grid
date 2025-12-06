import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Volume2, Check, ArrowRight, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpellingInputProps {
  input: string;
  setInput: (value: string) => void;
  isCorrect: boolean | null;
  correctWord: string;
  hint?: string;
  showHint: boolean;
  onSpeak: () => void;
  onCheck: () => void;
  onNext: () => void;
  onToggleHint: () => void;
}

export const SpellingInput = ({
  input,
  setInput,
  isCorrect,
  correctWord,
  hint,
  showHint,
  onSpeak,
  onCheck,
  onNext,
  onToggleHint,
}: SpellingInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (isCorrect === null) {
        onCheck();
      } else {
        onNext();
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md">
      {/* Play Sound Button */}
      <Button
        size="lg"
        className="w-24 h-24 rounded-full bg-primary hover:bg-primary/90"
        onClick={onSpeak}
      >
        <Volume2 className="w-12 h-12" />
      </Button>
      <p className="text-muted-foreground text-sm">Click to hear the word</p>

      {/* Hint */}
      {hint && (
        <div className="w-full">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            onClick={onToggleHint}
          >
            <Lightbulb className="w-4 h-4 mr-2" />
            {showHint ? "Hide hint" : "Show hint"}
          </Button>
          {showHint && (
            <p className="text-sm text-muted-foreground mt-2 p-3 bg-muted/50 rounded-lg">
              {hint}
            </p>
          )}
        </div>
      )}

      {/* Input Field */}
      <div className="w-full">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type the word..."
          disabled={isCorrect !== null}
          className={cn(
            "text-center text-xl h-14 font-medium",
            isCorrect === true && "border-green-500 bg-green-500/10",
            isCorrect === false && "border-red-500 bg-red-500/10"
          )}
          autoFocus
        />
      </div>

      {/* Feedback */}
      {isCorrect !== null && (
        <div
          className={cn(
            "text-center p-4 rounded-lg w-full",
            isCorrect ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
          )}
        >
          {isCorrect ? (
            <p className="font-semibold">Correct! 🎉</p>
          ) : (
            <div>
              <p className="font-semibold">Not quite!</p>
              <p className="text-sm mt-1">
                The correct spelling is: <span className="font-bold">{correctWord}</span>
              </p>
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        {isCorrect === null ? (
          <Button onClick={onCheck} disabled={!input.trim()}>
            <Check className="w-4 h-4 mr-2" />
            Check
          </Button>
        ) : (
          <Button onClick={onNext}>
            Next Word
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};
