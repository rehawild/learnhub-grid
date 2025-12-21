import { useState, useMemo } from "react";
import { ResumeBullet } from "@/types/resumehelp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowRight, Trophy, Zap, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AchievementDrillProps {
    bullets: ResumeBullet[];
    onComplete: (score: number) => void;
    onBack: () => void;
}

export const AchievementDrill = ({ bullets, onComplete, onBack }: AchievementDrillProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const currentBullet = bullets[currentIndex];

    // Distractors: other strong bullets from the same set
    const options = useMemo(() => {
        if (!currentBullet) return [];

        const strong = currentBullet.strong;
        const distractors = bullets
            .filter(b => b.id !== currentBullet.id)
            .map(b => b.strong)
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);

        return [strong, ...distractors].sort(() => Math.random() - 0.5);
    }, [currentBullet, bullets]);

    const handleSelect = (option: string) => {
        if (selectedOption) return;
        setSelectedOption(option);

        if (option === currentBullet.strong) {
            setScore(prev => prev + 25);
        }
    };

    const handleNext = () => {
        if (currentIndex === bullets.length - 1) {
            setIsFinished(true);
            onComplete(score);
        } else {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
        }
    };

    if (isFinished) {
        return (
            <Card className="w-full max-w-xl mx-auto text-center p-8 space-y-6 animate-in fade-in zoom-in duration-500 border-2 border-primary/20">
                <div className="flex justify-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                        <Trophy className="w-10 h-10 text-primary" />
                    </div>
                </div>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold uppercase tracking-tight">Expert Narrative!</CardTitle>
                    <CardDescription className="text-lg italic font-medium">
                        Your bullet points are now optimized for high-level recruitment.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-8 rounded-3xl border border-border/50 mb-4">
                        <div className="text-6xl font-black text-primary mb-2">
                            {score}
                        </div>
                        <p className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Impact Quotient</p>
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
                    Identify the Strongest Version
                </div>
                <div className="p-6 bg-muted/40 rounded-2xl border-2 border-border shadow-sm">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-2">Weak Current Bullet:</span>
                    <p className="text-xl font-black italic">"{currentBullet.weak}"</p>
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
                                option === currentBullet.strong
                                    ? "border-green-500/50 bg-green-500/5 dark:bg-green-500/10"
                                    : "border-red-500/50 bg-red-500/5 dark:bg-red-500/10"
                            ),
                            selectedOption && option === currentBullet.strong && "border-green-500/50 bg-green-500/5 dark:bg-green-500/10",
                            selectedOption && selectedOption !== option && option !== currentBullet.strong && "opacity-50 grayscale pointer-events-none"
                        )}
                        onClick={() => handleSelect(option)}
                    >
                        <CardContent className="p-6 flex items-center justify-between gap-4">
                            <span className="text-lg font-bold italic leading-snug flex-1">"{option}"</span>
                            {selectedOption && (
                                <div className="animate-in zoom-in duration-300 shrink-0">
                                    {option === currentBullet.strong ? (
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
                    {selectedOption !== currentBullet.strong && (
                        <div className="text-center px-6 py-4 bg-muted/30 rounded-2xl border border-border/50 animate-in slide-in-from-top-2">
                            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-tighter font-bold">Strongest Narrative:</p>
                            <p className="text-lg font-black text-primary italic leading-relaxed">"{currentBullet.strong}"</p>
                        </div>
                    )}
                    <Button size="lg" className="w-64 py-6 text-xl font-bold shadow-xl shadow-primary/20" onClick={handleNext}>
                        {currentIndex === bullets.length - 1 ? "End Practice" : "Next Drill"}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            )}
        </div>
    );
};
