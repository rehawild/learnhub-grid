import { useState } from "react";
import { PitchScenario, PitchOption, PitchSegment } from "@/types/pitching";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowRight, Trophy, Sparkles, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImpactPracticeProps {
    scenario: PitchScenario;
    onComplete: (score: number) => void;
    onBack: () => void;
}

export const ImpactPractice = ({ scenario, onComplete, onBack }: ImpactPracticeProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<PitchOption | null>(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const currentSegment = scenario.segments[currentIndex];

    const handleSelect = (option: PitchOption) => {
        if (selectedOption) return;
        setSelectedOption(option);

        if (option.impact === 'high') setScore(prev => prev + 25);
        else if (option.impact === 'medium') setScore(prev => prev + 10);
    };

    const handleNext = () => {
        if (currentIndex === scenario.segments.length - 1) {
            setIsFinished(true);
            onComplete(score);
        } else {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
        }
    };

    if (isFinished) {
        const isHighImpact = score >= (scenario.segments.length * 20);

        return (
            <Card className="w-full max-w-xl mx-auto text-center p-8 space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                        <Trophy className="w-10 h-10 text-primary" />
                    </div>
                </div>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">Pitch Successful!</CardTitle>
                    <CardDescription className="text-lg">
                        {isHighImpact
                            ? "Your narrative was incredibly compelling. Stakeholders are ready to move forward."
                            : "A solid effort. With a bit more punch in your hook, this would be undeniable."}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-5xl font-black text-primary mb-2">
                        {score}
                    </div>
                    <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Impact Score</p>
                </CardContent>
                <div className="flex flex-col gap-3">
                    <Button onClick={onBack} size="lg" className="w-full py-6 text-lg font-bold">
                        Return to Lab
                    </Button>
                </div>
            </Card>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    <Sparkles className="w-3 h-3" />
                    Phase {currentIndex + 1}: {currentSegment.title}
                </div>
                <h2 className="text-2xl font-bold">Select the most impactful phrasing</h2>
                <p className="text-muted-foreground">Think about your audience's perspective.</p>
            </div>

            <div className="grid gap-4">
                {currentSegment.options.map((option) => (
                    <Card
                        key={option.id}
                        className={cn(
                            "cursor-pointer transition-all duration-300 border-2",
                            !selectedOption && "hover:border-primary/50 hover:bg-primary/5",
                            selectedOption?.id === option.id && (
                                option.impact === 'high' ? "border-green-500/50 bg-green-500/5 dark:bg-green-500/10" :
                                    option.impact === 'medium' ? "border-yellow-500/50 bg-yellow-500/5 dark:bg-yellow-500/10" :
                                        "border-red-500/50 bg-red-500/5 dark:bg-red-500/10"
                            ),
                            selectedOption && selectedOption.id !== option.id && "opacity-50 grayscale pointer-events-none"
                        )}
                        onClick={() => handleSelect(option)}
                    >
                        <CardContent className="p-6 flex items-start gap-4">
                            <div className="flex-1">
                                <p className="text-lg font-medium leading-tight">"{option.text}"</p>
                                {selectedOption?.id === option.id && (
                                    <div className="mt-4 animate-in slide-in-from-top-2 duration-300">
                                        <div className={cn(
                                            "flex items-center gap-2 text-sm font-bold uppercase mb-2",
                                            option.impact === 'high' ? "text-green-600" :
                                                option.impact === 'medium' ? "text-yellow-600" :
                                                    "text-red-600"
                                        )}>
                                            {option.impact === 'high' ? <CheckCircle2 className="w-4 h-4" /> :
                                                option.impact === 'medium' ? <AlertCircle className="w-4 h-4" /> :
                                                    <XCircle className="w-4 h-4" />}
                                            {option.impact} Impact
                                        </div>
                                        <p className="text-sm text-muted-foreground">{option.feedback}</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {selectedOption && (
                <div className="flex justify-center pt-8">
                    <Button size="lg" className="w-64 py-6 text-xl font-bold animate-in slide-in-from-bottom-4" onClick={handleNext}>
                        {currentIndex === scenario.segments.length - 1 ? "Complete Pitch" : "Next Segment"}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            )}
        </div>
    );
};
