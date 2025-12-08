import { PrefixDeck } from "@/types/prefixmaster";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface DeckSelectorProps {
  decks: PrefixDeck[];
  selectedDeckId: string | null;
  onSelectDeck: (deck: PrefixDeck) => void;
}

export const DeckSelector = ({ decks, selectedDeckId, onSelectDeck }: DeckSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
      {decks.map((deck) => (
        <Card
          key={deck.id}
          className={`cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
            selectedDeckId === deck.id ? "ring-2 ring-primary" : ""
          }`}
          onClick={() => onSelectDeck(deck)}
        >
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">{deck.name}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>{deck.description}</CardDescription>
            <p className="text-sm text-muted-foreground mt-2">
              {deck.words.length} prefixes
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
