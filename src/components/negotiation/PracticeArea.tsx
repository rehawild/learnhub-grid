import { useState, useEffect, useCallback } from "react";
import { NegotiationPhrase } from "@/types/negotiation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, XCircle, RotateCcw, Trophy, ArrowRight, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface PracticeAreaProps {
    phrases: NegotiationPhrase[];
    onComplete: (score: number) => void;
    onBack: () => void;
}

export const PracticeArea = ({ phrases, onComplete, onBack }: PracticeAreaProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shuffledWords, setShuffledWords] = useState<string[]>([]);
    const [selectedWords, setSelectedWords] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const currentPhrase = phrases[currentIndex];

    const initPhrase = useCallback(() => {
        if (!currentPhrase) return;
        const words = currentPhrase.text
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
            .split(" ")
            .filter(w => w.length > 0);

        // Randomize
        const shuffled = [...words].sort(() => Math.random() - 0.5);
        setShuffledWords(shuffled);
        setSelectedWords([]);
        setIsCorrect(null);
    }, [currentPhrase]);

    useEffect(() => {
        initPhrase();
    }, [initPhrase]);

    const handleWordClick = (word: string, index: number) => {
        if (isCorrect !== null) return;

        const newShuffled = [...shuffledWords];
        newShuffled.splice(index, 1);
        setShuffledWords(newShuffled);
        setSelectedWords([...selectedWords, word]);
    };

    const handleSelectedClick = (word: string, index: number) => {
        if (isCorrect !== null) return;

        const newSelected = [...selectedWords];
        newSelected.splice(index, 1);
        setSelectedWords(newSelected);
        setShuffledWords([...shuffledWords, word]);
    };

    const checkAnswer = () => {
        const original = currentPhrase.text
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
            .toLowerCase();
        const user = selectedWords.join(" ").toLowerCase();

        if (user === original) {
            setIsCorrect(true);
            setScore(prev => prev + 10);
        } else {
            setIsCorrect(false);
        }
    };

    const nextQuestion = () => {
        if (currentIndex === phrases.length - 1) {
            setIsFinished(true);
            onComplete(score);
        } else {
            setCurrentIndex(prev => prev + 1);
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
                    <CardTitle className="text-3xl font-bold">Negotiation Master!</CardTitle>
                    <CardDescription className="text-lg">
                        You've demonstrated a deep understanding of strategic phrasing.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-5xl font-black text-primary mb-2">
                        {score}
                    </div>
                    <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Total Skill Points</p>
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
                    <Brain className="w-3 h-3" />
                    Strategy Practice
                </div>
                <h2 className="text-2xl font-bold">Unscramble the strategic phrase</h2>
                <p className="text-muted-foreground italic">Target Strategy: {currentPhrase.strategy}</p>
            </div>

            <Card className="border-2 border-dashed border-primary/30 bg-muted/5 p-6 min-h-[120px] flex flex-wrap gap-2 items-center justify-center transition-all">
                {selectedWords.length === 0 && <span className="text-muted-foreground/50 italic font-medium">Build the sentence phrase by phrase...</span>}
                {selectedWords.map((word, i) => (
                    <Button
                        key={`selected-${i}-${word}`}
                        variant="secondary"
                        className={cn(
                            "h-auto py-2 px-4 text-lg font-medium animate-in zoom-in duration-200",
                            isCorrect === true && "bg-green-500 text-white hover:bg-green-500 hover:text-white",
                            isCorrect === false && "bg-red-500 text-white hover:bg-red-500 hover:text-white"
                        )}
                        onClick={() => handleSelectedClick(word, i)}
                    >
                        {word}
                    </Button>
                ))}
            </Card>

            <div className="flex flex-wrap gap-2 justify-center py-4">
                {shuffledWords.map((word, i) => (
                    <Button
                        key={`shuffled-${i}-${word}`}
                        variant="outline"
                        className="h-auto py-2 px-4 text-lg font-medium border-2"
                        onClick={() => handleWordClick(word, i)}
                    >
                        {word}
                    </Button>
                ))}
            </div>

            <div className="flex flex-col items-center gap-4">
                {isCorrect === null ? (
                    <Button
                        size="lg"
                        className="w-full sm:w-64 py-6 text-xl font-bold shadow-lg shadow-primary/10"
                        disabled={shuffledWords.length > 0}
                        onClick={checkAnswer}
                    >
                        Check Sequence
                    </Button>
                ) : (
                    <div className="w-full flex flex-col items-center gap-6">
                        <div className={cn(
                            "flex items-center gap-3 px-6 py-3 rounded-2xl border-2 animate-in slide-in-from-top-2",
                            isCorrect ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"
                        )}>
                            {isCorrect ? (
                                <>
                                    <CheckCircle2 className="w-6 h-6" />
                                    <span className="font-bold text-lg">Perfect execution!</span>
                                </>
                            ) : (
                                <>
                                    <XCircle className="w-6 h-6" />
                                    <span className="font-bold text-lg">Strategy misaligned. Try again.</span>
                                </>
                            )}
                        </div>

                        {!isCorrect && (
                            <div className="text-center px-6 py-4 bg-muted/30 rounded-2xl border border-border/50">
                                <p className="text-sm text-muted-foreground mb-1 uppercase tracking-tighter font-bold">Ideal Sequence:</p>
                                <p className="text-xl font-black text-primary">"{currentPhrase.text}"</p>
                            </div>
                        )}

                        <Button
                            size="lg"
                            className="w-full sm:w-64 py-6 text-xl font-bold"
                            onClick={isCorrect ? nextQuestion : initPhrase}
                        >
                            {isCorrect ? (
                                <>Next Scenario <ArrowRight className="w-5 h-5 ml-2" /></>
                            ) : (
                                <>Retry Step <RotateCcw className="w-5 h-5 ml-2" /></>
                            )}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
