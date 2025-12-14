import { PrepositionQuestion } from "@/types/prepositionpro";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrepositionInputProps {
    question: PrepositionQuestion;
    selectedOption: string | null;
    isCorrect: boolean | null;
    showExplanation: boolean;
    onSelectOption: (option: string) => void;
    onNext: () => void;
}

export const PrepositionInput = ({
    question,
    selectedOption,
    isCorrect,
    showExplanation,
    onSelectOption,
    onNext,
}: PrepositionInputProps) => {
    // Split the sentence by the placeholder (___) to render it nicely
    const parts = question.sentence.split("___");

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card>
                <CardContent className="pt-6 pb-6 text-center">
                    <h2 className="text-2xl font-medium leading-relaxed">
                        {parts[0]}
                        <span className={cn(
                            "inline-block min-w-[3rem] border-b-2 px-2 mx-1 font-bold text-primary transition-colors",
                            isCorrect === true && "text-green-600 border-green-600",
                            isCorrect === false && "text-red-600 border-red-600"
                        )}>
                            {selectedOption || "?"}
                        </span>
                        {parts[1]}
                    </h2>
                </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
                {question.options.map((option) => {
                    const isSelected = selectedOption === option;
                    const isCorrectAnswer = option === question.correctAnswer;

                    let variant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" = "outline";
                    if (showExplanation) {
                        if (isCorrectAnswer) variant = "default"; // Highlight correct answer
                        else if (isSelected && !isCorrectAnswer) variant = "destructive"; // Highlight wrong selection
                    } else if (isSelected) {
                        variant = "default";
                    }

                    return (
                        <Button
                            key={option}
                            variant={variant}
                            className={cn(
                                "h-16 text-xl font-medium transition-all",
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
                <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className={cn(
                        "p-4 rounded-lg flex items-start gap-3",
                        isCorrect ? "bg-green-50 text-green-900" : "bg-red-50 text-red-900"
                    )}>
                        {isCorrect ? (
                            <Check className="w-5 h-5 mt-0.5 shrink-0" />
                        ) : (
                            <X className="w-5 h-5 mt-0.5 shrink-0" />
                        )}
                        <div>
                            <p className="font-semibold">{isCorrect ? "Correct!" : "Incorrect"}</p>
                            <p className="mt-1 flex items-center gap-2">
                                <Info className="w-4 h-4" />
                                {question.explanation}
                            </p>
                        </div>
                    </div>

                    <Button onClick={onNext} className="w-full size-lg gap-2 text-lg h-12">
                        Next Question <ArrowRight className="w-5 h-5" />
                    </Button>
                </div>
            )}
        </div>
    );
};
