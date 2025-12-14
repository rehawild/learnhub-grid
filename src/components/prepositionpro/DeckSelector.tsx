import { PrepositionDeck } from "@/types/prepositionpro";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DeckSelectorProps {
    decks: PrepositionDeck[];
    onSelectDeck: (deck: PrepositionDeck) => void;
}

export const DeckSelector = ({ decks, onSelectDeck }: DeckSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {decks.map((deck) => (
                <Card key={deck.id} className="hover:border-primary transition-colors cursor-pointer" onClick={() => onSelectDeck(deck)}>
                    <CardHeader>
                        <CardTitle>{deck.name}</CardTitle>
                        <CardDescription>{deck.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{deck.questions.length} questions</span>
                            <Button onClick={(e) => {
                                e.stopPropagation();
                                onSelectDeck(deck);
                            }}>Start</Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
