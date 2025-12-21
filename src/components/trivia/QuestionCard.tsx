import { TriviaQuestion, TriviaOption } from "@/types/trivia";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface QuestionCardProps {
    question: TriviaQuestion;
    selectedOptionId: string | null;
    isAnswered: boolean;
    onSelectOption: (id: string) => void;
    onSubmit: () => void;
    onNext: () => void;
}

export const QuestionCard = ({
    question,
    selectedOptionId,
    isAnswered,
    onSelectOption,
    onSubmit,
    onNext
}: QuestionCardProps) => {
    return (
        <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
                <h2 className="text-2xl font-bold leading-relaxed text-foreground">
                    {question.text}
                </h2>
            </div>

            <div className="grid gap-3">
                {question.options.map((option) => {
                    const isSelected = selectedOptionId === option.id;
                    const isCorrect = option.id === question.correctOptionId;

                    let variant = "outline";
                    let className = "justify-start text-left h-auto py-4 px-6 text-lg hover:border-primary transition-all";

                    if (isAnswered) {
                        if (isCorrect) {
                            className = cn(className, "bg-green-100 dark:bg-green-900/40 border-green-500 text-green-700 dark:text-green-300");
                        } else if (isSelected) {
                            className = cn(className, "bg-red-100 dark:bg-red-900/40 border-red-500 text-red-700 dark:text-red-300");
                        } else {
                            className = cn(className, "opacity-50");
                        }
                    } else if (isSelected) {
                        className = cn(className, "border-primary bg-primary/5 ring-1 ring-primary");
                    }

                    return (
                        <Button
                            key={option.id}
                            variant="outline"
                            className={className}
                            onClick={() => onSelectOption(option.id)}
                            disabled={isAnswered}
                        >
                            <div className="flex items-center w-full gap-3">
                                <span className="w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold text-muted-foreground bg-background shrink-0 uppercase">
                                    {option.id}
                                </span>
                                <span className="flex-1">{option.text}</span>
                                {isAnswered && isCorrect && <Check className="w-5 h-5 shrink-0" />}
                                {isAnswered && isSelected && !isCorrect && <X className="w-5 h-5 shrink-0" />}
                            </div>
                        </Button>
                    );
                })}
            </div>

            {isAnswered && (
                <Card className="bg-muted/50 border-none animate-in fade-in zoom-in-95">
                    <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                                <Check className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">Explanation</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    {question.explanation}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            <div className="flex justify-end pt-4">
                {!isAnswered ? (
                    <Button size="lg" onClick={onSubmit} disabled={!selectedOptionId} className="w-full sm:w-auto">
                        Submit Answer
                    </Button>
                ) : (
                    <Button size="lg" onClick={onNext} className="w-full sm:w-auto">
                        Next Question
                    </Button>
                )}
            </div>
        </div>
    );
};
