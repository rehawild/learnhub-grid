import { PronunciationWord } from "@/types/pronunciation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

interface WordListProps {
    words: PronunciationWord[];
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    onSelectWord: (word: PronunciationWord) => void;
}

export const WordList = ({ words, categories, selectedCategory, onSelectCategory, onSelectWord }: WordListProps) => {
    const filteredWords = selectedCategory === "All"
        ? words
        : words.filter(w => w.category === selectedCategory);

    return (
        <div className="space-y-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
                {categories.map(cat => (
                    <Button
                        key={cat}
                        variant={selectedCategory === cat ? "default" : "outline"}
                        onClick={() => onSelectCategory(cat)}
                        className="rounded-full"
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            {/* Words Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredWords.map((word) => (
                    <Card
                        key={word.id}
                        className="cursor-pointer hover:border-primary transition-all hover:translate-y-[-2px] group"
                        onClick={() => onSelectWord(word)}
                    >
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <Badge variant="secondary" className="mb-2">{word.category}</Badge>
                                <Badge className={
                                    word.difficulty === 'Hard' ? 'bg-destructive' :
                                        word.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                                }>
                                    {word.difficulty}
                                </Badge>
                            </div>
                            <CardTitle className="text-2xl group-hover:text-primary transition-colors">{word.word}</CardTitle>
                            <CardDescription className="text-lg font-serif">{word.phonetic}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center text-sm text-muted-foreground mt-2">
                                <Mic className="w-4 h-4 mr-1" /> Practice Now
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
