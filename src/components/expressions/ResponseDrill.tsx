import { useState, useMemo } from "react";
import { SocialExpression } from "@/types/expressions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Target, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResponseDrillProps {
    expression: SocialExpression;
    onComplete: () => void;
    onBack: () => void;
    onScore: (points: number) => void;
}

export const ResponseDrill = ({ expression, onComplete, onBack, onScore }: ResponseDrillProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const options = useMemo(() => {
        return [expression.expression, ...expression.distractors].sort(() => Math.random() - 0.5);
    }, [expression]);

    const handleSelect = (option: string) => {
        if (selectedOption) return;
        const isCorrect = option === expression.expression;
        setSelectedOption(option);
        if (isCorrect) {
            onScore(10);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 text-xs font-bold uppercase tracking-widest mb-2">
                    <Zap className="w-3 h-3" />
                    Situational Drill
                </div>

                <div className="p-10 bg-muted/40 rounded-[2.5rem] border-2 border-yellow-500/10 relative overflow-hidden text-center shadow-inner">
                    <div className="absolute top-4 right-4 text-yellow-500 opacity-5">
                        <Target className="w-24 h-24" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-4">The Scenario</span>
                    <p className="text-2xl font-semibold text-foreground leading-relaxed italic max-w-2xl mx-auto">
                        {expression.scenario}
                    </p>
                    <div className="mt-8 pt-6 border-t border-yellow-500/10">
                        <p className="text-yellow-600 font-bold tracking-tight text-lg">
                            {expression.prompt}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((option) => {
                    const isCorrect = option === expression.expression;
                    const isSelected = selectedOption === option;

                    return (
                        <Button
                            key={option}
                            variant="outline"
                            className={cn(
                                "h-24 text-xl font-bold transition-all duration-300 border-2 rounded-2xl px-6 whitespace-normal leading-tight relative group",
                                !selectedOption && "hover:border-yellow-500/50 hover:bg-yellow-500/5",
                                selectedOption && isCorrect && "border-green-500 bg-green-500/10 text-green-600 shadow-[0_0_15px_rgba(34,197,94,0.1)]",
                                selectedOption && isSelected && !isCorrect && "border-red-500 bg-red-500/10 text-red-600",
                                selectedOption && !isCorrect && !isSelected && "opacity-40 grayscale"
                            )}
                            onClick={() => handleSelect(option)}
                        >
                            <span className="flex-1 text-center">{option}</span>
                            {selectedOption && isCorrect && <CheckCircle2 className="w-6 h-6 ml-3 text-green-500 shrink-0" />}
                            {selectedOption && isSelected && !isCorrect && <XCircle className="w-6 h-6 ml-3 text-red-500 shrink-0" />}
                        </Button>
                    );
                })}
            </div>

            {selectedOption && (
                <div className="flex flex-col items-center gap-6 pt-4 animate-in zoom-in duration-500">
                    <div className="w-full p-6 bg-yellow-500/5 rounded-2xl border border-yellow-500/10 text-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 block mb-2">Mastery Insight</span>
                        <p className="text-xl font-bold italic text-foreground leading-relaxed">
                            "{expression.expression}" matches the {expression.socialFunction.toLowerCase()} function perfectly.
                        </p>
                    </div>
                    <Button
                        size="lg"
                        className="w-72 py-8 text-xl font-bold bg-yellow-600 hover:bg-yellow-700 shadow-xl shadow-yellow-500/20 rounded-2xl"
                        onClick={onComplete}
                    >
                        Continue Mastery
                        <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                </div>
            )}
        </div>
    );
};
