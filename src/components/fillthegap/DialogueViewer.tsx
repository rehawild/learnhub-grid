import { FillGapExercise, Gap } from "@/types/fillthegap";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DialogueViewerProps {
    exercise: FillGapExercise;
    userAnswers: Record<string, string>;
    isComplete: boolean;
    score: number | null;
    onSelectWord: (gapId: string, word: string) => void;
    onCheck: () => void;
    onRetry: () => void;
}

export const DialogueViewer = ({
    exercise,
    userAnswers,
    isComplete,
    score,
    onSelectWord,
    onCheck,
    onRetry
}: DialogueViewerProps) => {

    const renderSegment = (segment: string | Gap) => {
        if (typeof segment === 'string') {
            return <span>{segment}</span>;
        }

        const selected = userAnswers[segment.id];
        const isCorrect = isComplete && selected === segment.correctWord;
        const isWrong = isComplete && selected !== segment.correctWord;

        return (
            <Popover>
                <PopoverTrigger asChild>
                    <button
                        disabled={isComplete}
                        className={cn(
                            "inline-flex items-center justify-center px-3 py-1 mx-1 rounded-md border-2 border-dashed font-medium transition-all min-w-[80px]",
                            !selected && "border-muted-foreground/50 text-muted-foreground bg-muted/20 hover:bg-muted/40",
                            selected && !isComplete && "border-primary text-primary bg-primary/10",
                            isCorrect && "border-green-500 bg-green-500/10 text-green-700 dark:text-green-300 border-solid",
                            isWrong && "border-destructive bg-destructive/10 text-destructive border-solid line-through"
                        )}
                    >
                        {selected || "___"}
                    </button>
                </PopoverTrigger>
                {!isComplete && (
                    <PopoverContent className="w-40 p-1">
                        <div className="grid gap-1">
                            {segment.options.map((opt) => (
                                <Button
                                    key={opt}
                                    variant="ghost"
                                    size="sm"
                                    className="justify-start font-normal"
                                    onClick={() => onSelectWord(segment.id, opt)}
                                >
                                    {opt}
                                </Button>
                            ))}
                        </div>
                    </PopoverContent>
                )}
                {isWrong && (
                    <span className="text-green-600 font-bold ml-1 text-sm">
                        {segment.correctWord}
                    </span>
                )}
            </Popover>
        );
    };

    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300 max-w-2xl mx-auto">

            {/* Score Card */}
            {isComplete && score !== null && (
                <Card className={cn(
                    "text-center p-6 text-white transition-all duration-500",
                    score >= 80 ? "bg-green-600 shadow-green-900/20" :
                        score >= 50 ? "bg-yellow-600 shadow-yellow-900/20" :
                            "bg-red-600 shadow-red-900/20"
                )}>
                    <h2 className="text-3xl font-bold mb-2">You scored {score}%</h2>
                    <p>{score === 100 ? "Perfect! You're a natural." : "Keep practicing to improve!"}</p>
                </Card>
            )}

            {/* Dialogue Bubbles */}
            <div className="space-y-6">
                {exercise.dialogue.map((line) => (
                    <div key={line.id} className="flex gap-4 items-start">
                        <div className="text-4xl shadow-sm rounded-full bg-secondary/50 p-2">{line.avatar}</div>
                        <div className="bg-card border rounded-2xl rounded-tl-none p-6 shadow-sm flex-1">
                            <p className="text-sm font-semibold text-muted-foreground mb-2">{line.speaker}</p>
                            <div className="text-lg leading-loose">
                                {line.segments.map((seg, i) => <span key={i}>{
                                    // wrapper to avoid key issues
                                    renderSegment(seg)
                                }</span>)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Actions */}
            <div className="flex justify-center pt-8 pb-20">
                {isComplete ? (
                    <Button size="lg" onClick={onRetry} className="gap-2">
                        <RotateCcw className="w-4 h-4" /> Try Again
                    </Button>
                ) : (
                    <Button size="lg" onClick={onCheck} className="gap-2 shadow-lg hover:scale-105 transition-transform">
                        <CheckCircle className="w-4 h-4" /> Check Answers
                    </Button>
                )}
            </div>
        </div>
    );
};
