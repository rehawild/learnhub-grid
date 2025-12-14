import { WordSearchDeck } from "@/types/wordsearch";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DeckSelectorProps {
    decks: WordSearchDeck[];
    onSelectDeck: (deck: WordSearchDeck) => void;
}

export const DeckSelector = ({ decks, onSelectDeck }: DeckSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
            {decks.map((deck) => (
                <Card
                    key={deck.id}
                    className="cursor-pointer hover:border-primary transition-all group hover:shadow-md"
                    onClick={() => onSelectDeck(deck)}
                >
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="group-hover:text-primary transition-colors">
                                {deck.name}
                            </CardTitle>
                            <Badge variant={
                                deck.difficulty === 'easy' ? 'secondary' :
                                    deck.difficulty === 'medium' ? 'default' : 'destructive'
                            }>
                                {deck.difficulty}
                            </Badge>
                        </div>
                        <CardDescription>{deck.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {deck.topics.map(topic => (
                                <Badge key={topic} variant="outline" className="text-xs">
                                    {topic}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
