import { WordMatchDeck } from "@/types/wordmatch";
import { Button } from "@/components/ui/button";

interface DeckSelectorProps {
  decks: WordMatchDeck[];
  onSelectDeck: (deck: WordMatchDeck) => void;
}

export const DeckSelector = ({ decks, onSelectDeck }: DeckSelectorProps) => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Word Match</h2>
        <p className="text-muted-foreground">
          Match words with their definitions
        </p>
      </div>

      <div className="grid gap-4 w-full max-w-md">
        {decks.map((deck) => (
          <Button
            key={deck.id}
            variant="outline"
            className="h-auto p-4 flex flex-col items-start gap-1 hover:border-primary transition-colors"
            onClick={() => onSelectDeck(deck)}
          >
            <span className="font-semibold text-lg">{deck.name}</span>
            <span className="text-sm text-muted-foreground">
              {deck.description}
            </span>
            <span className="text-xs text-primary mt-1">
              {deck.pairs.length} pairs
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};
