import { FlashcardDeck } from "@/types/flashcard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DeckSelectorProps {
  decks: FlashcardDeck[];
  selectedDeckId: string | null;
  onSelectDeck: (deck: FlashcardDeck) => void;
}

export const DeckSelector = ({ decks, selectedDeckId, onSelectDeck }: DeckSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
      {decks.map((deck) => (
        <Card
          key={deck.id}
          className={cn(
            "cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg",
            selectedDeckId === deck.id && "ring-2 ring-primary"
          )}
          onClick={() => onSelectDeck(deck)}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{deck.name}</CardTitle>
            <CardDescription>{deck.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {deck.cards.length} cards
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
