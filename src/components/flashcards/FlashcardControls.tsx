import { ChevronLeft, ChevronRight, RotateCcw, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlashcardControlsProps {
  onPrev: () => void;
  onNext: () => void;
  onReset: () => void;
  onShuffle?: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  currentIndex: number;
  totalCards: number;
}

export const FlashcardControls = ({
  onPrev,
  onNext,
  onReset,
  onShuffle,
  canGoPrev,
  canGoNext,
  currentIndex,
  totalCards,
}: FlashcardControlsProps) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      {/* Card counter */}
      <p className="text-muted-foreground text-sm">
        Card {currentIndex + 1} of {totalCards}
      </p>

      {/* Navigation buttons */}
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrev}
          disabled={!canGoPrev}
          className="h-12 w-12 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={onReset}
          className="h-10 w-10 rounded-full"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>

        {onShuffle && (
          <Button
            variant="outline"
            size="icon"
            onClick={onShuffle}
            className="h-10 w-10 rounded-full"
          >
            <Shuffle className="h-4 w-4" />
          </Button>
        )}

        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={!canGoNext}
          className="h-12 w-12 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Hint text */}
      <p className="text-muted-foreground/60 text-xs">
        Click card to flip • Use arrows to navigate
      </p>
    </div>
  );
};
