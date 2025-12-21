import { useState, useMemo } from "react";
import { Collocation } from "@/types/collocations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowRight, Zap, Puzzle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollocationDrillProps {
    collocation: Collocation;
    onComplete: () => void;
    onBack: () => void;
    onScore: (points: number) => void;
}

export const CollocationDrill = ({ collocation, onComplete, onBack, onScore }: CollocationDrillProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const options = useMemo(() => {
        return [collocation.collocate, ...collocation.distractors].sort(() => Math.random() - 0.5);
    }, [collocation]);

    const handleSelect = (option: string) => {
        if (selectedOption) return;
        const isCorrect = option === collocation.collocate;
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
                    Partnership Drill
                </div>

                <div className="space-y-4">
                    <h2 className="text-lg font-medium text-muted-foreground uppercase tracking-widest">Complete the Partnership</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className={cn(
                            "min-w-[180px] h-20 border-b-4 flex items-center justify-center transition-all duration-300 px-6 bg-muted/40 rounded-t-2xl",
                            selectedOption
                                ? (selectedOption === collocation.collocate ? "border-green-500 text-green-500" : "border-red-500 text-red-500")
                                : "border-primary/30"
                        )}>
                            <span className="text-4xl font-semibold italic uppercase tracking-tighter">
                                {selectedOption || "?"}
                            </span>
                        </div>
                        <h2 className="text-5xl font-extrabold text-foreground">{collocation.headword}</h2>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {options.map((option) => (
                    <Button
                        key={option}
                        variant="outline"
                        className={cn(
                            "h-24 text-xl font-bold italic uppercase tracking-widest transition-all duration-300 border-2 shadow-sm rounded-2xl",
                            !selectedOption && "hover:border-primary/50 hover:bg-primary/5 hover:shadow-md",
                            selectedOption === option && (
                                option === collocation.collocate
                                    ? "border-green-500 bg-green-500/10 text-green-500"
                                    : "border-red-500 bg-red-500/10 text-red-500"
                            ),
                            selectedOption && option === collocation.collocate && "border-green-500 bg-green-500/10 text-green-500",
                            selectedOption && selectedOption !== option && option !== collocation.collocate && "opacity-30 pointer-events-none"
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
                        <div className="absolute -top-4 -right-4 text-primary opacity-5">
                            <Puzzle className="w-24 h-24" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary block mb-3">Partnership Locked</span>
                        <p className="text-2xl font-bold italic text-foreground leading-relaxed">
                            "{collocation.phrase}"
                        </p>
                        <p className="mt-4 text-sm text-muted-foreground italic max-w-lg mx-auto leading-relaxed">
                            {collocation.meaning}
                        </p>
                    </div>
                    <Button size="lg" className="w-72 py-8 text-xl font-bold shadow-xl shadow-primary/20" onClick={onComplete}>
                        Next Word Match
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            )}
        </div>
    );
};
