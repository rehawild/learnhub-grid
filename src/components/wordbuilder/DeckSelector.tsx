import { WordBuilderDeck } from "@/types/wordbuilder";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DeckSelectorProps {
  decks: WordBuilderDeck[];
  onSelectDeck: (deck: WordBuilderDeck) => void;
}

export const DeckSelector = ({ decks, onSelectDeck }: DeckSelectorProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground">Choose a Deck</h2>
        <p className="text-muted-foreground mt-2">
          Select a deck to practice building words with prefixes and suffixes
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {decks.map((deck) => (
          <Card
            key={deck.id}
            className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 hover:border-primary"
            onClick={() => onSelectDeck(deck)}
          >
            <CardHeader>
              <CardTitle className="text-lg">{deck.name}</CardTitle>
              <CardDescription>{deck.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {deck.words.length} words · {deck.availableParts.length} parts
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
