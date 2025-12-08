import { WordBuilderDeck, WordPart } from "@/types/wordbuilder";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface WordBuilderInputProps {
  deck: WordBuilderDeck;
  currentWordIndex: number;
  selectedParts: string[];
  isCorrect: boolean | null;
  showHint: boolean;
  onTogglePart: (partId: string) => void;
  onCheck: () => void;
  onNext: () => void;
  onToggleHint: () => void;
}

export const WordBuilderInput = ({
  deck,
  currentWordIndex,
  selectedParts,
  isCorrect,
  showHint,
  onTogglePart,
  onCheck,
  onNext,
  onToggleHint,
}: WordBuilderInputProps) => {
  const currentWord = deck.words[currentWordIndex];
  const prefixes = deck.availableParts.filter((p) => p.type === "prefix");
  const suffixes = deck.availableParts.filter((p) => p.type === "suffix");

  const buildPreview = () => {
    const selectedPrefix = prefixes.find((p) => selectedParts.includes(p.id));
    const selectedSuffix = suffixes.find((p) => selectedParts.includes(p.id));
    
    let result = "";
    if (selectedPrefix) result += selectedPrefix.value.replace("-", "");
    result += currentWord.root;
    if (selectedSuffix) result += selectedSuffix.value.replace("-", "");
    
    return result;
  };

  return (
    <div className="space-y-6">
      {/* Root word display */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">Root Word</p>
          <p className="text-4xl font-bold text-primary">{currentWord.root}</p>
          <p className="text-sm text-muted-foreground mt-2">
            "{currentWord.rootMeaning}"
          </p>
        </CardContent>
      </Card>

      {/* Word preview */}
      <div className="text-center py-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground mb-1">Building:</p>
        <p className="text-2xl font-semibold text-foreground">{buildPreview()}</p>
      </div>

      {/* Prefix selection */}
      {prefixes.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Prefixes (add before)</p>
          <div className="flex flex-wrap gap-2">
            {prefixes.map((part) => (
              <PartButton
                key={part.id}
                part={part}
                isSelected={selectedParts.includes(part.id)}
                isDisabled={isCorrect !== null}
                onClick={() => onTogglePart(part.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Suffix selection */}
      {suffixes.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Suffixes (add after)</p>
          <div className="flex flex-wrap gap-2">
            {suffixes.map((part) => (
              <PartButton
                key={part.id}
                part={part}
                isSelected={selectedParts.includes(part.id)}
                isDisabled={isCorrect !== null}
                onClick={() => onTogglePart(part.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Hint */}
      {showHint && (
        <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
          <p className="text-sm text-accent-foreground">
            <span className="font-medium">Hint:</span> The word means "{currentWord.resultMeaning}"
          </p>
        </div>
      )}

      {/* Feedback */}
      {isCorrect !== null && (
        <div
          className={cn(
            "p-4 rounded-lg text-center",
            isCorrect
              ? "bg-green-500/10 text-green-600 dark:text-green-400"
              : "bg-destructive/10 text-destructive"
          )}
        >
          {isCorrect ? (
            <p className="font-medium">
              Correct! "{currentWord.resultWord}" means "{currentWord.resultMeaning}"
            </p>
          ) : (
            <p className="font-medium">
              Not quite. The answer is "{currentWord.resultWord}"
            </p>
          )}
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={onToggleHint}
          disabled={isCorrect !== null}
          className="flex-1"
        >
          <Lightbulb className="w-4 h-4 mr-2" />
          Hint
        </Button>
        {isCorrect === null ? (
          <Button
            onClick={onCheck}
            disabled={selectedParts.length === 0}
            className="flex-1"
          >
            <Check className="w-4 h-4 mr-2" />
            Check
          </Button>
        ) : (
          <Button onClick={onNext} className="flex-1">
            <ArrowRight className="w-4 h-4 mr-2" />
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

interface PartButtonProps {
  part: WordPart;
  isSelected: boolean;
  isDisabled: boolean;
  onClick: () => void;
}

const PartButton = ({ part, isSelected, isDisabled, onClick }: PartButtonProps) => (
  <Button
    variant={isSelected ? "default" : "outline"}
    size="sm"
    disabled={isDisabled}
    onClick={onClick}
    className={cn(
      "transition-all",
      isSelected && "ring-2 ring-primary ring-offset-2"
    )}
  >
    <span className="font-mono">{part.value}</span>
    <span className="ml-2 text-xs opacity-70">({part.meaning})</span>
  </Button>
);
