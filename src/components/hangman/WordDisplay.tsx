import { cn } from "@/lib/utils";

interface WordDisplayProps {
    word: string;
    guessedLetters: string[];
    reveal?: boolean;
}

export const WordDisplay = ({ word, guessedLetters, reveal = false }: WordDisplayProps) => {
    return (
        <div className="flex gap-2 sm:gap-4 justify-center flex-wrap">
            {word.split("").map((letter, index) => {
                const isGuessed = guessedLetters.includes(letter);
                return (
                    <span
                        key={index}
                        className={cn(
                            "border-b-4 border-foreground w-8 sm:w-12 h-12 sm:h-16 flex items-center justify-center text-3xl sm:text-5xl font-bold font-mono select-none transition-colors",
                            !isGuessed && reveal && "text-red-500", // Missed letters shown in red at end
                            !isGuessed && !reveal && "text-transparent", // Hidden
                            isGuessed && "text-foreground" // Found
                        )}
                    >
                        {letter}
                    </span>
                );
            })}
        </div>
    );
};
