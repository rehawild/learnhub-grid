import { Quote } from "@/types/quotequiz";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote as QuoteIcon, Check, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuoteCardProps {
    quote: Quote;
    currentNumber: number;
    totalNumber: number;
    selectedAnswer?: string;
    isCorrect: boolean | null;
    onAnswer: (answer: string) => void;
    onNext: () => void;
}

export const QuoteCard = ({
    quote,
    currentNumber,
    totalNumber,
    selectedAnswer,
    isCorrect,
    onAnswer,
    onNext
}: QuoteCardProps) => {
    const hasAnswered = selectedAnswer !== undefined;

    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                <span className="uppercase tracking-widest">Question {currentNumber} of {totalNumber}</span>
                {quote.source && <Badge variant="secondary">{quote.source}</Badge>}
            </div>

            <Card className="border-2 border-primary/5 bg-primary/5">
                <CardHeader>
                    <QuoteIcon className="w-12 h-12 text-primary/20 mb-4" />
                    <CardTitle className="text-3xl font-serif italic leading-relaxed text-center px-4">
                        "{quote.text}"
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {hasAnswered && (
                        <div className={cn(
                            "mt-4 p-4 rounded-lg text-center font-medium animate-in fade-in slide-in-from-top-2",
                            isCorrect
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        )}>
                            {isCorrect ? "Correct! Well spotted." : `Incorrect. It was ${quote.correctAnswer}.`}
                        </div>
                    )}
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quote.options.map((option) => {
                    const isSelected = selectedAnswer === option;
                    const isOptionCorrect = option === quote.correctAnswer;

                    let variant: "outline" | "default" | "destructive" = "outline";

                    if (hasAnswered) {
                        if (isOptionCorrect) variant = "default"; // Will style green manually
                        else if (isSelected) variant = "destructive";
                    } else if (isSelected) {
                        variant = "default";
                    }

                    return (
                        <Button
                            key={option}
                            variant={variant}
                            className={cn(
                                "h-16 text-lg justify-between px-6",
                                hasAnswered && isOptionCorrect && "bg-green-600 hover:bg-green-700 border-green-600 text-white",
                                !hasAnswered && "hover:border-primary hover:bg-primary/5 hover:text-primary"
                            )}
                            onClick={() => !hasAnswered && onAnswer(option)}
                            disabled={hasAnswered}
                        >
                            <span>{option}</span>
                            {hasAnswered && isOptionCorrect && <Check className="w-5 h-5" />}
                            {hasAnswered && isSelected && !isOptionCorrect && <X className="w-5 h-5" />}
                        </Button>
                    );
                })}
            </div>

            {hasAnswered && (
                <div className="flex justify-center pt-4 animate-in fade-in slide-in-from-bottom-4">
                    <Button size="lg" onClick={onNext} className="gap-2">
                        Next Quote <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            )}
        </div>
    );
};
