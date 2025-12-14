import { VerbQuestion } from "@/types/verbforms";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerbInputProps {
    question: VerbQuestion;
    selectedOption: string | null;
    isCorrect: boolean | null;
    onSelectOption: (option: string) => void;
    onNext: () => void;
}

export const VerbInput = ({
    question,
    selectedOption,
    isCorrect,
    onSelectOption,
    onNext,
}: VerbInputProps) => {

    const formatTenseLabel = (tense: string) => {
        return tense
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="text-center overflow-hidden">
                <div className="bg-muted/50 p-4 border-b">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Base Form
                    </p>
                    <h2 className="text-3xl font-bold mt-1 text-foreground">
                        {question.baseForm}
                    </h2>
                </div>
                <CardContent className="pt-8 pb-8">
                    <p className="text-lg text-muted-foreground mb-2">
                        Select the correct
                    </p>
                    <p className="text-2xl font-semibold text-primary">
                        {formatTenseLabel(question.targetTense)}
                    </p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
                {question.options.map((option) => {
                    const isSelected = selectedOption === option;
                    const isCorrectAnswer = option === question.correctAnswer;

                    let variant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" = "outline";

                    // Show results if answered
                    if (isCorrect !== null) {
                        if (isCorrectAnswer) variant = "default"; // Correct is always green/default
                        else if (isSelected) variant = "destructive"; // Wrong selection is red
                    } else if (isSelected) {
                        variant = "default";
                    }

                    return (
                        <Button
                            key={option}
                            variant={variant}
                            className={cn(
                                "h-16 text-lg font-medium transition-all",
                                isCorrect !== null && isCorrectAnswer && "bg-green-600 hover:bg-green-700 border-green-600 text-white",
                                isCorrect === null && "hover:border-primary hover:bg-primary/5 hover:text-primary"
                            )}
                            onClick={() => isCorrect === null && onSelectOption(option)}
                            disabled={isCorrect !== null}
                        >
                            <div className="flex items-center gap-2">
                                {option}
                                {isCorrect !== null && isCorrectAnswer && <Check className="w-4 h-4" />}
                                {isCorrect !== null && isSelected && !isCorrectAnswer && <X className="w-4 h-4" />}
                            </div>
                        </Button>
                    );
                })}
            </div>

            {isCorrect !== null && (
                <div className="flex justify-end animate-in fade-in zoom-in-95 duration-200">
                    <Button onClick={onNext} size="lg" className="w-full sm:w-auto gap-2">
                        Next Verb <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            )}
        </div>
    );
};
