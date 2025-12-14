import { FixQuestion } from "@/types/sentencefix";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FixInputProps {
    question: FixQuestion;
    selectedOption: string | null;
    isCorrect: boolean | null;
    showExplanation: boolean;
    onSelectOption: (option: string) => void;
    onNext: () => void;
}

export const FixInput = ({
    question,
    selectedOption,
    isCorrect,
    showExplanation,
    onSelectOption,
    onNext,
}: FixInputProps) => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader>
                    <CardTitle className="text-lg text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-destructive" />
                        Incorrect Sentence
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-serif text-destructive line-through decoration-destructive/50">
                        {question.incorrectSentence}
                    </p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-4">
                {question.options.map((option) => {
                    const isSelected = selectedOption === option;
                    const isCorrectAnswer = option === question.correctSentence;

                    let variant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" = "outline";
                    if (showExplanation) {
                        if (isCorrectAnswer) variant = "default"; // Correct answer -> Green/Default
                        else if (isSelected) variant = "destructive"; // Wrong selection -> Red
                    } else if (isSelected) {
                        variant = "default";
                    }

                    return (
                        <Button
                            key={option}
                            variant={variant}
                            className={cn(
                                "h-auto py-4 px-6 text-lg justify-start text-left whitespace-normal",
                                showExplanation && isCorrectAnswer && "bg-green-600 hover:bg-green-700 border-green-600 text-white",
                                !showExplanation && "hover:border-primary hover:text-primary"
                            )}
                            onClick={() => !showExplanation && onSelectOption(option)}
                            disabled={showExplanation}
                        >
                            <div className="flex items-center gap-3 w-full">
                                {showExplanation && isCorrectAnswer && <Check className="w-5 h-5 shrink-0" />}
                                {showExplanation && isSelected && !isCorrectAnswer && <X className="w-5 h-5 shrink-0" />}
                                <span>{option}</span>
                            </div>
                        </Button>
                    );
                })}
            </div>

            {showExplanation && (
                <div className="animate-in fade-in zoom-in-95 duration-200 space-y-4">
                    <div className="bg-muted p-4 rounded-lg text-sm">
                        <p className="font-semibold mb-1">Explanation:</p>
                        <p className="text-muted-foreground">{question.explanation}</p>
                    </div>
                    <div className="flex justify-end">
                        <Button onClick={onNext} size="lg" className="gap-2">
                            Next Sentence <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
