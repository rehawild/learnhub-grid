import { useState, useMemo } from "react";
import { Idiom } from "@/types/idiommaster";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowRight, Trophy, Zap, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface MeaningDrillProps {
    idioms: Idiom[];
    onComplete: (score: number) => void;
    onBack: () => void;
    onSelect: (idiomId: string, chosen: string, isCorrect: boolean) => void;
}

export const MeaningDrill = ({ idioms, onComplete, onBack, onSelect }: MeaningDrillProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [drillScore, setDrillScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const currentIdiom = idioms[currentIndex];

    const options = useMemo(() => {
        if (!currentIdiom) return [];
        const correct = currentIdiom.meaning;
        const distractors = idioms
            .filter(i => i.id !== currentIdiom.id)
            .map(i => i.meaning)
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);
        return [correct, ...distractors].sort(() => Math.random() - 0.5);
    }, [currentIdiom, idioms]);

    const handleSelect = (option: string) => {
        if (selectedOption) return;
        const isCorrect = option === currentIdiom.meaning;
        setSelectedOption(option);
        if (isCorrect) setDrillScore(prev => prev + 10);
        onSelect(currentIdiom.id, option, isCorrect);
    };

    const handleNext = () => {
        if (currentIndex === idioms.length - 1) {
            setIsFinished(true);
            onComplete(drillScore);
        } else {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
        }
    };

    if (isFinished) {
        return (
            <Card className="w-full max-w-xl mx-auto text-center p-8 space-y-6 animate-in fade-in zoom-in duration-500 border-2 border-primary/20 bg-card shadow-2xl">
                <div className="flex justify-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                        <Trophy className="w-10 h-10 text-primary" />
                    </div>
                </div>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold uppercase tracking-tight">Idiom Mastered!</CardTitle>
                    <CardDescription className="text-lg italic font-medium">
                        You've successfully decoded the hidden meanings of these expressions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-8 rounded-3xl border border-border/50 mb-4">
                        <div className="text-6xl font-bold text-primary mb-2">
                            {drillScore}
                        </div>
                        <p className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Mastery Score</p>
                    </div>
                </CardContent>
                <div className="flex flex-col gap-3">
                    <Button onClick={onBack} size="lg" className="w-full py-8 text-xl font-bold shadow-xl shadow-primary/20">
                        Finish & Go Back
                    </Button>
                </div>
            </Card>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-2">
                    <Zap className="w-3 h-3" />
                    Decipher the Expression
                </div>
                <div className="p-8 bg-muted/40 rounded-3xl border-2 border-border shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-2">Phrase:</span>
                    <p className="text-3xl font-bold italic">"{currentIdiom.phrase}"</p>
                </div>
            </div>

            <div className="grid gap-4">
                {options.map((option) => (
                    <Card
                        key={option}
                        className={cn(
                            "cursor-pointer transition-all duration-300 border-2",
                            !selectedOption && "hover:border-primary/50 hover:bg-primary/5",
                            selectedOption === option && (
                                option === currentIdiom.meaning
                                    ? "border-green-500/50 bg-green-500/5"
                                    : "border-red-500/50 bg-red-500/5"
                            ),
                            selectedOption && option === currentIdiom.meaning && "border-green-500/50 bg-green-500/5",
                            selectedOption && selectedOption !== option && option !== currentIdiom.meaning && "opacity-50 grayscale pointer-events-none"
                        )}
                        onClick={() => handleSelect(option)}
                    >
                        <CardContent className="p-6 flex items-center justify-between gap-4">
                            <span className="text-lg font-semibold italic leading-snug flex-1">"{option}"</span>
                            {selectedOption && (
                                <div className="animate-in zoom-in duration-300 shrink-0">
                                    {option === currentIdiom.meaning ? (
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
                    <div className="w-full p-6 bg-primary/5 rounded-2xl border border-primary/10 animate-in slide-in-from-top-2">
                        <div className="flex items-center gap-2 mb-2">
                            <MessageSquare className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Contextual Proof</span>
                        </div>
                        <p className="text-lg font-semibold italic text-foreground leading-relaxed">
                            {currentIdiom.context.replace("_____", currentIdiom.phrase)}
                        </p>
                    </div>
                    <Button size="lg" className="w-64 py-6 text-xl font-bold shadow-xl shadow-primary/20" onClick={handleNext}>
                        {currentIndex === idioms.length - 1 ? "End Practice" : "Next Challenge"}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            )}
        </div>
    );
};
