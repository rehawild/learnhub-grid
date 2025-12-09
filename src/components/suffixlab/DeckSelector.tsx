import { SuffixDeck } from "@/types/suffixlab";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DeckSelectorProps {
  decks: SuffixDeck[];
  onSelectDeck: (deck: SuffixDeck) => void;
}

export const DeckSelector = ({ decks, onSelectDeck }: DeckSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {decks.map((deck) => (
        <Card
          key={deck.id}
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onSelectDeck(deck)}
        >
          <CardHeader>
            <CardTitle className="text-lg">{deck.name}</CardTitle>
            <CardDescription>{deck.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {deck.words.length} words
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
