import { ArticleDeck } from "@/types/articleexpert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DeckSelectorProps {
  decks: ArticleDeck[];
  onSelectDeck: (deck: ArticleDeck) => void;
}

export const DeckSelector = ({ decks, onSelectDeck }: DeckSelectorProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground">Choose a Deck</h2>
        <p className="text-muted-foreground">Select an article practice deck to begin</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {decks.map((deck) => (
          <Card
            key={deck.id}
            className="cursor-pointer transition-all hover:scale-105 hover:shadow-lg bg-card border-border"
            onClick={() => onSelectDeck(deck)}
          >
            <CardHeader>
              <CardTitle className="text-lg">{deck.name}</CardTitle>
              <CardDescription>{deck.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {deck.sentences.length} sentences
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
