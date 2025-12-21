import { useState, useMemo } from "react";
import { Proverb } from "@/types/proverbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface WisdomDrillProps {
    proverb: Proverb;
    onComplete: () => void;
    onBack: () => void;
    onScore: (points: number) => void;
}

export const WisdomDrill = ({ proverb, onComplete, onBack, onScore }: WisdomDrillProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const options = useMemo(() => {
        return [proverb.missingWord, ...proverb.distractors].sort(() => Math.random() - 0.5);
    }, [proverb]);

    const phraseParts = useMemo(() => {
        const parts = proverb.phrase.split(new RegExp(`(${proverb.missingWord})`, 'i'));
        return parts;
    }, [proverb]);

    const handleSelect = (option: string) => {
        if (selectedOption) return;
        const isCorrect = option === proverb.missingWord;
        setSelectedOption(option);
        if (isCorrect) {
            onScore(10);
        }
    };

    return (
        <div className="w-full space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-8">
                <div className="p-12 bg-card rounded-[2.5rem] border-2 border-primary/10 shadow-xl flex flex-wrap items-center justify-center gap-x-3 gap-y-6">
                    {phraseParts.map((part, i) => (
                        part.toLowerCase() === proverb.missingWord.toLowerCase() ? (
                            <div key={i} className={cn(
                                "min-w-[160px] h-20 border-b-4 flex items-center justify-center transition-all duration-300 px-6 bg-muted/30 rounded-t-3xl",
                                selectedOption
                                    ? (selectedOption === proverb.missingWord ? "border-green-500 text-green-500" : "border-red-500 text-red-500")
                                    : "border-primary/20"
                            )}>
                                <span className="text-4xl font-bold italic tracking-tighter">
                                    {selectedOption || "?"}
                                </span>
                            </div>
                        ) : (
                            <span key={i} className="text-3xl md:text-4xl font-bold text-foreground/80 leading-relaxed italic tracking-tight">
                                {part}
                            </span>
                        )
                    ))}
                </div>

                {!selectedOption && (
                    <p className="text-muted-foreground text-lg font-medium animate-pulse">
                        Select the missing wisdom...
                    </p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                {options.map((option) => (
                    <Button
                        key={option}
                        variant="outline"
                        className={cn(
                            "h-24 text-2xl font-bold italic tracking-widest transition-all duration-300 border-2 rounded-3xl",
                            !selectedOption && "hover:border-primary/50 hover:bg-primary/5 shadow-md hover:shadow-xl hover:scale-[1.02]",
                            selectedOption === option && (
                                option === proverb.missingWord
                                    ? "border-green-500 bg-green-500/10 text-green-500 shadow-lg shadow-green-500/20"
                                    : "border-red-500 bg-red-500/10 text-red-500"
                            ),
                            selectedOption && option === proverb.missingWord && "border-green-500 bg-green-500/10 text-green-500 shadow-lg shadow-green-500/20",
                            selectedOption && selectedOption !== option && option !== proverb.missingWord && "opacity-20 grayscale pointer-events-none"
                        )}
                        onClick={() => handleSelect(option)}
                    >
                        {option}
                    </Button>
                ))}
            </div>

            {selectedOption && (
                <div className="pt-8 animate-in slide-in-from-top-4 duration-500">
                    <Button
                        size="lg"
                        className="w-full h-20 text-xl font-bold uppercase tracking-[0.2em] rounded-[1.5rem] shadow-2xl shadow-primary/20 transition-all hover:scale-[1.01]"
                        onClick={onComplete}
                    >
                        Continue Mastery
                        <ArrowRight className="ml-3 w-6 h-6" />
                    </Button>
                </div>
            )}
        </div>
    );
};
