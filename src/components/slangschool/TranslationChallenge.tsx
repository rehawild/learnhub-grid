import { useState, useMemo } from "react";
import { SlangTerm } from "@/types/slangschool";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowRight, Zap, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

interface TranslationChallengeProps {
    term: SlangTerm;
    onComplete: () => void;
    onBack: () => void;
    onScore: (points: number) => void;
}

export const TranslationChallenge = ({ term, onComplete, onBack, onScore }: TranslationChallengeProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const options = useMemo(() => {
        return [term.standardEnglish, ...term.distractors].sort(() => Math.random() - 0.5);
    }, [term]);

    const handleSelect = (option: string) => {
        if (selectedOption) return;
        const isCorrect = option === term.standardEnglish;
        setSelectedOption(option);
        if (isCorrect) {
            onScore(10);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-2">
                    <Zap className="w-3 h-3" />
                    Translation Challenge
                </div>

                <div className="space-y-2">
                    <h2 className="text-5xl font-bold text-foreground">"{term.term}"</h2>
                    <p className="text-muted-foreground font-medium text-lg">Translate this into Standard English.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((option) => (
                    <Button
                        key={option}
                        variant="outline"
                        className={cn(
                            "h-24 text-xl font-bold transition-all duration-300 border-2 whitespace-normal leading-tight px-8",
                            !selectedOption && "hover:border-primary/50 hover:bg-primary/5 shadow-sm hover:shadow-md",
                            selectedOption === option && (
                                option === term.standardEnglish
                                    ? "border-green-500 bg-green-500/10 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                                    : "border-red-500 bg-red-500/10 text-red-500"
                            ),
                            selectedOption && option === term.standardEnglish && "border-green-500 bg-green-500/10 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]",
                            selectedOption && selectedOption !== option && option !== term.standardEnglish && "opacity-30 pointer-events-none"
                        )}
                        onClick={() => handleSelect(option)}
                    >
                        {option}
                    </Button>
                ))}
            </div>

            {selectedOption && (
                <div className="flex flex-col items-center gap-6 pt-4">
                    <div className="w-full p-8 bg-card rounded-3xl border-2 border-primary/20 animate-in zoom-in duration-500 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-4 -left-4 text-primary opacity-5">
                            <Languages className="w-24 h-24" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary block mb-3">Translation Insight</span>
                        <p className="text-2xl font-bold italic text-foreground leading-relaxed">
                            "{term.term}" ≈ "{term.standardEnglish}"
                        </p>
                        {term.origin && (
                            <p className="mt-4 text-sm text-muted-foreground italic">Origin: {term.origin}</p>
                        )}
                    </div>
                    <Button size="lg" className="w-72 py-8 text-xl font-bold shadow-xl shadow-primary/20" onClick={onComplete}>
                        Next Slang Challenge
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            )}
        </div>
    );
};
