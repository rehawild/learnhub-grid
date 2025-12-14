import { PoetryQuestion } from "@/types/poetry";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PoetryAnalysisProps {
    question: PoetryQuestion;
    currentNumber: number;
    totalNumber: number;
    showExplanation: boolean;
    selectedAnswer?: string;
    onAnswer: (answer: string) => void;
    onNext: () => void;
}

export const PoetryAnalysis = ({
    question,
    currentNumber,
    totalNumber,
    showExplanation,
    selectedAnswer,
    onAnswer,
    onNext
}: PoetryAnalysisProps) => {

    return (
        <div className="space-y-8 max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between text-sm uppercase tracking-widest text-muted-foreground">
                <span>Stanza Analysis</span>
                <span>{currentNumber} / {totalNumber}</span>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-serif text-center">
                        {question.question}
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    {question.options.map((option) => {
                        const isSelected = selectedAnswer === option;
                        const isCorrect = option === question.correctAnswer;

                        let variant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" = "outline";

                        if (showExplanation) {
                            if (isCorrect) variant = "default";
                            else if (isSelected) variant = "destructive";
                        } else if (isSelected) {
                            variant = "default";
                        }

                        return (
                            <Button
                                key={option}
                                variant={variant}
                                className={cn(
                                    "h-auto py-4 text-lg text-center whitespace-normal",
                                    showExplanation && isCorrect && "bg-green-600 hover:bg-green-700 border-green-600 text-white",
                                    !showExplanation && "hover:border-primary hover:bg-primary/5 hover:text-primary"
                                )}
                                onClick={() => !showExplanation && onAnswer(option)}
                                disabled={showExplanation}
                            >
                                {option}
                                {showExplanation && isCorrect && <Check className="w-5 h-5 ml-2 shrink-0" />}
                                {showExplanation && isSelected && !isCorrect && <X className="w-5 h-5 ml-2 shrink-0" />}
                            </Button>
                        );
                    })}
                </CardContent>
            </Card>

            {showExplanation && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 space-y-6">
                    <div className="bg-muted p-6 rounded-lg flex gap-4">
                        <div className="p-2 bg-background rounded-full h-fit border shadow-sm">
                            <Sparkles className="w-5 h-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-semibold text-foreground">Insight</p>
                            <p className="text-muted-foreground">{question.explanation}</p>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button onClick={onNext} size="lg" className="gap-2">
                            Next Insight <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
