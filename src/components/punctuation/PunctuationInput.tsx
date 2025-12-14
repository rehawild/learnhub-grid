import { PunctuationQuestion } from "@/types/punctuation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface PunctuationInputProps {
    question: PunctuationQuestion;
    selectedOption: string | null;
    isCorrect: boolean | null;
    showExplanation: boolean;
    onSelectOption: (option: string) => void;
    onNext: () => void;
}

export const PunctuationInput = ({
    question,
    selectedOption,
    isCorrect,
    showExplanation,
    onSelectOption,
    onNext,
}: PunctuationInputProps) => {
    const parts = question.sentence.split("___");

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card>
                <CardContent className="pt-6 pb-6 text-center">
                    <p className="text-2xl font-serif leading-relaxed">
                        {parts[0]}
                        <span className={cn(
                            "inline-block min-w-[2rem] border-b-2 px-1 mx-0.5 font-bold text-primary transition-colors",
                            isCorrect === true && "text-green-600 border-green-600",
                            isCorrect === false && "text-red-600 border-red-600"
                        )}>
                            {selectedOption || "\u00A0"}
                        </span>
                        {parts[1]}
                    </p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {question.options.map((option) => {
                    const isSelected = selectedOption === option;
                    const isCorrectAnswer = option === question.correctAnswer;

                    let variant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" = "outline";
                    if (showExplanation) {
                        if (isCorrectAnswer) variant = "default";
                        else if (isSelected) variant = "destructive";
                    } else if (isSelected) {
                        variant = "default";
                    }

                    return (
                        <Button
                            key={option}
                            variant={variant}
                            className={cn(
                                "h-20 text-3xl font-serif transition-ALL",
                                showExplanation && isCorrectAnswer && "bg-green-600 hover:bg-green-700 border-green-600 text-white",
                                !showExplanation && "hover:border-primary hover:bg-primary/5 hover:text-primary"
                            )}
                            onClick={() => !showExplanation && onSelectOption(option)}
                            disabled={showExplanation}
                        >
                            {option}
                        </Button>
                    );
                })}
            </div>

            {showExplanation && (
                <div className="animate-in fade-in zoom-in-95 duration-200 space-y-4">
                    <div className="bg-muted p-4 rounded-lg flex gap-3 items-start">
                        <Info className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                        <div>
                            <p className="font-semibold mb-1">Explanation</p>
                            <p className="text-sm text-muted-foreground">{question.explanation}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button onClick={onNext} size="lg" className="gap-2">
                            Next Question <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
