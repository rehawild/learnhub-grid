import { SpellingBeeDeck } from "@/types/spellingbee";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface DeckSelectorProps {
  decks: SpellingBeeDeck[];
  onSelect: (deck: SpellingBeeDeck) => void;
}

export const DeckSelector = ({ decks, onSelect }: DeckSelectorProps) => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="w-10 h-10 text-primary" />
        <h1 className="text-3xl font-bold text-foreground">Spelling Bee</h1>
      </div>
      <p className="text-muted-foreground text-center max-w-md">
        Listen to the word and type the correct spelling. Test your spelling skills!
      </p>
      <div className="grid gap-4 w-full max-w-md">
        {decks.map((deck) => (
          <Button
            key={deck.id}
            variant="outline"
            className="h-auto p-4 flex flex-col items-start gap-1 hover:bg-primary/10 hover:border-primary"
            onClick={() => onSelect(deck)}
          >
            <span className="font-semibold text-lg">{deck.name}</span>
            <span className="text-sm text-muted-foreground">{deck.description}</span>
            <span className="text-xs text-muted-foreground mt-1">
              {deck.words.length} words
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};
