import { useState, useEffect, useMemo } from "react";
import { DialectItem } from "@/types/britishVsUs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRightLeft, CheckCircle2, XCircle, Info, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { dialectItems } from "@/data/britishVsUs/items";

interface DialectCardProps {
    item: DialectItem;
    onCorrect: () => void;
    onWrong: () => void;
}

export const DialectCard = ({ item, onCorrect, onWrong }: DialectCardProps) => {
    const [selectedSide, setSelectedSide] = useState<'uk' | 'us'>(Math.random() > 0.5 ? 'uk' : 'us');
    const [answerState, setAnswerState] = useState<'pending' | 'correct' | 'wrong'>('pending');
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const targetDialect = selectedSide === 'uk' ? 'us' : 'uk';
    const targetValue = item[targetDialect];
    const sourceValue = item[selectedSide];

    const options = useMemo(() => {
        // Get 3 random distractors from other items
        const otherItems = dialectItems.filter(i => i.id !== item.id);
        const distractors = otherItems
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(i => i[targetDialect]);

        return [targetValue, ...distractors].sort(() => Math.random() - 0.5);
    }, [item, targetDialect, targetValue]);

    const handleSelect = (option: string) => {
        if (answerState === 'correct') return;

        setSelectedOption(option);
        if (option === targetValue) {
            setAnswerState('correct');
            setTimeout(() => {
                onCorrect();
                // Reset local state for next item (parent will change 'item' prop)
                setAnswerState('pending');
                setSelectedOption(null);
                setSelectedSide(Math.random() > 0.5 ? 'uk' : 'us');
            }, 2500);
        } else {
            setAnswerState('wrong');
            onWrong();
            setTimeout(() => setAnswerState('pending'), 1000);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8 animate-in zoom-in-95 duration-700">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-yellow-500/20 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

                <Card className="relative overflow-hidden border-2 border-yellow-500/10 bg-card/80 backdrop-blur-xl shadow-2xl rounded-[3rem]">
                    <CardContent className="p-0">
                        {/* Split Header */}
                        <div className="grid grid-cols-2 h-48 border-b border-yellow-500/10 relative">
                            <div className={cn(
                                "flex flex-col items-center justify-center transition-all duration-700",
                                selectedSide === 'uk' ? "bg-purple-500/5" : "bg-yellow-500/5 grayscale opacity-50"
                            )}>
                                <span className="text-4xl mb-2">🇬🇧</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600">United Kingdom</span>
                            </div>

                            <div className={cn(
                                "flex flex-col items-center justify-center transition-all duration-700",
                                selectedSide === 'us' ? "bg-yellow-500/5" : "bg-purple-500/5 grayscale opacity-50"
                            )}>
                                <span className="text-4xl mb-2">🇺🇸</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600">United States</span>
                            </div>

                            {/* The "Bridge" Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background border-2 border-yellow-500/20 rounded-full flex items-center justify-center shadow-lg z-10">
                                <ArrowRightLeft className={cn(
                                    "w-6 h-6 text-yellow-500 transition-transform duration-1000",
                                    answerState === 'correct' && "rotate-180"
                                )} />
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Source Display */}
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-[10px] font-bold uppercase tracking-widest">
                                    <MapPin className="w-3 h-3" />
                                    Local Term
                                </div>
                                <h2 className="text-5xl font-bold text-foreground transition-all">
                                    {sourceValue}
                                </h2>
                                <div className="text-xs text-muted-foreground italic font-medium max-w-[200px] mx-auto leading-relaxed">
                                    "{selectedSide === 'uk' ? item.exampleUK : item.exampleUS}"
                                </div>
                            </div>

                            {/* Target Interactive Slot */}
                            <div className="text-center space-y-4 relative">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 text-[10px] font-bold uppercase tracking-widest">
                                    Translation Required
                                </div>

                                <div className={cn(
                                    "h-24 flex items-center justify-center rounded-3xl border-4 border-dashed transition-all duration-500",
                                    answerState === 'correct' ? "border-green-500/50 bg-green-500/5" : "border-yellow-500/20 bg-yellow-500/[0.02]",
                                    answerState === 'wrong' && "animate-shake border-red-500/50"
                                )}>
                                    {answerState === 'correct' ? (
                                        <div className="flex flex-col items-center animate-in zoom-in duration-500">
                                            <h2 className="text-4xl font-bold text-green-600">{targetValue}</h2>
                                            <Sparkles className="w-4 h-4 text-green-500 absolute -top-2 -right-2" />
                                        </div>
                                    ) : (
                                        <span className="text-3xl font-bold text-yellow-300">?</span>
                                    )}
                                </div>

                                {answerState === 'correct' && (
                                    <div className="text-xs text-green-600 italic font-medium animate-in slide-in-from-top-2">
                                        Perfect Match! "{targetDialect.toUpperCase()}" Crossing Complete.
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Context Footer (Revealed on Correct) */}
                        <div className={cn(
                            "h-0 overflow-hidden transition-all duration-700 bg-yellow-500/5 border-t border-yellow-500/10",
                            answerState === 'correct' && "h-32"
                        )}>
                            <div className="p-8 flex items-start gap-4">
                                <div className="p-2 bg-yellow-500/10 rounded-lg shrink-0">
                                    <Info className="w-4 h-4 text-yellow-600" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 block">Linguistic Insight</span>
                                    <p className="text-sm text-foreground leading-relaxed italic">
                                        {item.context}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Action Stamps */}
            <div className="flex flex-wrap justify-center gap-4 py-4">
                {options.map((option) => (
                    <Button
                        key={option}
                        variant="outline"
                        disabled={answerState === 'correct'}
                        className={cn(
                            "h-16 px-8 rounded-full border-2 text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95",
                            selectedOption === option && option === targetValue && "border-green-500 bg-green-500/10 text-green-600",
                            selectedOption === option && option !== targetValue && "border-red-500 bg-red-500/10 text-red-600",
                            !selectedOption && "hover:border-yellow-500 hover:text-yellow-600 hover:shadow-lg hover:shadow-yellow-500/10"
                        )}
                        onClick={() => handleSelect(option)}
                    >
                        {option}
                    </Button>
                ))}
            </div>
        </div>
    );
};
