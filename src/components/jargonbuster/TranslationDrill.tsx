import { useState, useMemo } from "react";
import { JargonTerm } from "@/types/jargonbuster";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowRight, Trophy, Zap, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

interface TranslationDrillProps {
    terms: JargonTerm[];
    onComplete: (score: number) => void;
    onBack: () => void;
}

export const TranslationDrill = ({ terms, onComplete, onBack }: TranslationDrillProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const currentTerm = terms[currentIndex];

    // Distractors: other plainEnglish terms from the same set
    const options = useMemo(() => {
        if (!currentTerm) return [];
        const plainEnglish = currentTerm.plainEnglish;
        const distractors = terms
            .filter(t => t.id !== currentTerm.id)
            .map(t => t.plainEnglish)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        return [plainEnglish, ...distractors].sort(() => Math.random() - 0.5);
    }, [currentTerm, terms]);

    const handleSelect = (option: string) => {
        if (selectedOption) return;
        setSelectedOption(option);

        if (option === currentTerm.plainEnglish) {
            setScore(prev => prev + 10);
        }
    };

    const handleNext = () => {
        if (currentIndex === terms.length - 1) {
            setIsFinished(true);
            onComplete(score);
        } else {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
        }
    };

    if (isFinished) {
        return (
            <Card className="w-full max-w-xl mx-auto text-center p-8 space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                        <Trophy className="w-10 h-10 text-primary" />
                    </div>
                </div>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">Translator Master!</CardTitle>
                    <CardDescription className="text-lg">
                        You've successfully decoded the jargon and communicated in plain English.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-5xl font-black text-primary mb-2">
                        {score}
                    </div>
                    <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Clarity Score</p>
                </CardContent>
                <div className="flex flex-col gap-3">
                    <Button onClick={onBack} size="lg" className="w-full py-6 text-lg font-bold">
                        Finish & Go Back
                    </Button>
                </div>
            </Card>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    <Zap className="w-3 h-3" />
                    Translate to Plain English
                </div>
                <h2 className="text-4xl font-black text-foreground uppercase tracking-tight">"{currentTerm.term}"</h2>
                <p className="text-muted-foreground italic">Used in: {currentTerm.example}</p>
            </div>

            <div className="grid gap-4">
                {options.map((option) => (
                    <Card
                        key={option}
                        className={cn(
                            "cursor-pointer transition-all duration-300 border-2",
                            !selectedOption && "hover:border-primary/50 hover:bg-primary/5",
                            selectedOption === option && (
                                option === currentTerm.plainEnglish
                                    ? "border-green-500/50 bg-green-500/5 dark:bg-green-500/10"
                                    : "border-red-500/50 bg-red-500/5 dark:bg-red-500/10"
                            ),
                            selectedOption && option === currentTerm.plainEnglish && "border-green-500/50 bg-green-500/5 dark:bg-green-500/10",
                            selectedOption && selectedOption !== option && option !== currentTerm.plainEnglish && "opacity-50 grayscale pointer-events-none"
                        )}
                        onClick={() => handleSelect(option)}
                    >
                        <CardContent className="p-6 flex items-center justify-between">
                            <span className="text-xl font-bold">{option}</span>
                            {selectedOption && (
                                <div className="animate-in zoom-in duration-300">
                                    {option === currentTerm.plainEnglish ? (
                                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    ) : selectedOption === option ? (
                                        <XCircle className="w-6 h-6 text-red-500" />
                                    ) : null}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {selectedOption && (
                <div className="flex flex-col items-center gap-6 pt-4">
                    {!(selectedOption === currentTerm.plainEnglish) && (
                        <div className="text-center px-6 py-4 bg-muted/30 rounded-2xl border border-border/50 animate-in slide-in-from-top-2">
                            <p className="text-sm text-muted-foreground mb-1 uppercase tracking-tighter font-bold">Correct Translation:</p>
                            <p className="text-xl font-black text-primary italic">{currentTerm.plainEnglish}</p>
                        </div>
                    )}
                    <Button size="lg" className="w-64 py-6 text-xl font-bold" onClick={handleNext}>
                        {currentIndex === terms.length - 1 ? "Complete Drill" : "Next Term"}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            )}
        </div>
    );
};
