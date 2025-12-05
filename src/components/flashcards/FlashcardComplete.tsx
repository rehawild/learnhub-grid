import { PartyPopper, RotateCcw, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlashcardCompleteProps {
  deckName: string;
  totalCards: number;
  onRestart: () => void;
  onChangeDeck: () => void;
}

export const FlashcardComplete = ({
  deckName,
  totalCards,
  onRestart,
  onChangeDeck,
}: FlashcardCompleteProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center p-8">
      <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
        <PartyPopper className="h-10 w-10 text-primary" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">
          Deck Complete!
        </h2>
        <p className="text-muted-foreground">
          You've reviewed all {totalCards} cards in "{deckName}"
        </p>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onChangeDeck}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Change Deck
        </Button>
        <Button onClick={onRestart}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Study Again
        </Button>
      </div>
    </div>
  );
};
