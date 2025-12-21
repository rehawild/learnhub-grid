import { RiddleDeck } from "@/types/riddles";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, Zap } from "lucide-react";

interface DeckSelectorProps {
    decks: RiddleDeck[];
    onSelect: (deck: RiddleDeck) => void;
}

export const DeckSelector = ({ decks, onSelect }: DeckSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
            {decks.map((deck) => (
                <Card
                    key={deck.id}
                    className="cursor-pointer hover:border-primary/50 hover:shadow-xl transition-all duration-300 group overflow-hidden border-2"
                    onClick={() => onSelect(deck)}
                >
                    <div className="h-2 bg-primary/20 group-hover:bg-primary transition-colors" />
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                {deck.difficulty === 'easy' ? <Sparkles className="w-6 h-6" /> :
                                    deck.difficulty === 'medium' ? <Brain className="w-6 h-6" /> :
                                        <Zap className="w-6 h-6" />}
                            </div>
                            <Badge variant="outline" className="capitalize text-[10px] font-bold">
                                {deck.difficulty}
                            </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {deck.name}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 mt-2">
                            {deck.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {deck.riddles.length} Riddles
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
