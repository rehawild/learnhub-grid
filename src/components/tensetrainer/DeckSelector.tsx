import { TenseDeck } from "@/types/tensetrainer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DeckSelectorProps {
  decks: TenseDeck[];
  onSelectDeck: (deck: TenseDeck) => void;
}

export const DeckSelector = ({ decks, onSelectDeck }: DeckSelectorProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground">Choose a Tense Deck</h2>
        <p className="text-muted-foreground mt-2">
          Select a deck to practice verb tenses
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {decks.map((deck) => (
          <Card
            key={deck.id}
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => onSelectDeck(deck)}
          >
            <CardHeader>
              <CardTitle className="text-lg">{deck.name}</CardTitle>
              <CardDescription>{deck.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {deck.words.length} exercises
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
