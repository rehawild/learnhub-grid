import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface WordListProps {
    words: string[];
    foundWords: string[];
}

export const WordList = ({ words, foundWords }: WordListProps) => {
    return (
        <div className="flex flex-wrap gap-2 justify-center max-w-lg">
            {words.map((word) => {
                const isFound = foundWords.includes(word);
                return (
                    <Badge
                        key={word}
                        variant={isFound ? "secondary" : "outline"}
                        className={cn(
                            "px-3 py-1 text-sm transition-all duration-300",
                            isFound
                                ? "line-through opacity-50 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800"
                                : "hover:border-primary"
                        )}
                    >
                        {word}
                    </Badge>
                );
            })}
        </div>
    );
};
