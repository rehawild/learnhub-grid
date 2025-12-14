import { ClueQuestion } from "@/types/contextclues";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClueGameProps {
    question: ClueQuestion;
    currentNumber: number;
    totalNumber: number;
    selectedAnswer?: string;
    isCorrect: boolean | null;
    onAnswer: (answer: string) => void;
    onNext: () => void;
}

export const ClueGame = ({
    question,
    currentNumber,
    totalNumber,
    selectedAnswer,
    isCorrect,
    onAnswer,
    onNext
}: ClueGameProps) => {
    const hasAnswered = selectedAnswer !== undefined;

    // Helper to highlight the target word
    const renderSentence = () => {
        const parts = question.sentence.split(new RegExp(`(${question.targetWord})`, 'gi'));
        return (
            <span>
                {parts.map((part, i) =>
                    part.toLowerCase() === question.targetWord.toLowerCase() ? (
                        <span key={i} className="text-primary font-bold underline decoration-wavy underline-offset-4 mx-1">
                            {part}
                        </span>
                    ) : (
                        <span key={i}>{part}</span>
                    )
                )}
            </span>
        );
    };

    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                <span className="uppercase tracking-widest">Question {currentNumber} of {totalNumber}</span>
                <Badge variant="outline">Vocabulary</Badge>
            </div>

            <Card className="border-none shadow-none bg-transparent">
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl md:text-3xl leading-relaxed font-serif">
                        "{renderSentence()}"
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground mt-4">
                    <p>What does <span className="font-bold text-foreground">"{question.targetWord}"</span> mean in this context?</p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {question.options.map((option) => {
                    const isSelected = selectedAnswer === option;
                    const isOptionCorrect = option === question.correctAnswer;

                    let variant: "outline" | "default" | "destructive" = "outline";

                    if (hasAnswered) {
                        if (isOptionCorrect) variant = "default";
                        else if (isSelected) variant = "destructive";
                    } else if (isSelected) {
                        variant = "default";
                    }

                    return (
                        <Button
                            key={option}
                            variant={variant}
                            className={cn(
                                "h-16 text-lg",
                                hasAnswered && isOptionCorrect && "bg-green-600 hover:bg-green-700 border-green-600 text-white",
                                !hasAnswered && "hover:border-primary hover:bg-primary/5 hover:text-primary"
                            )}
                            onClick={() => !hasAnswered && onAnswer(option)}
                            disabled={hasAnswered}
                        >
                            <div className="flex items-center justify-between w-full px-4">
                                <span>{option}</span>
                                {hasAnswered && isOptionCorrect && <Check className="w-5 h-5" />}
                                {hasAnswered && isSelected && !isOptionCorrect && <X className="w-5 h-5" />}
                            </div>
                        </Button>
                    );
                })}
            </div>

            {hasAnswered && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                    {question.hint && (
                        <div className="bg-muted p-4 rounded-lg flex gap-3 items-start">
                            <Lightbulb className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                            <div>
                                <p className="font-semibold text-sm">Context Clue Explanation</p>
                                <p className="text-sm text-muted-foreground">{question.hint}</p>
                            </div>
                        </div>
                    )}
                    <div className="flex justify-center">
                        <Button size="lg" onClick={onNext} className="gap-2 w-full sm:w-auto">
                            Next Challenge <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
