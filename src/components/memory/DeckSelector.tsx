import { MemoryDeck } from "@/types/memory";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface DeckSelectorProps {
    decks: MemoryDeck[];
    onSelect: (deck: MemoryDeck) => void;
}

export const DeckSelector = ({ decks, onSelect }: DeckSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {decks.map((deck) => (
                <Card
                    key={deck.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-lg group"
                    onClick={() => onSelect(deck)}
                >
                    <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors flex items-center justify-between">
                            {deck.name}
                        </CardTitle>
                        <CardDescription>
                            {deck.description}
                        </CardDescription>
                        <div className="text-xs text-muted-foreground pt-2">
                            {deck.pairs.length * 2} Cards
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
};
