import { ClauseQuestion } from "@/types/clausebuilder";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClauseInputProps {
    question: ClauseQuestion;
    selectedOption: string | null;
    isCorrect: boolean | null;
    showExplanation: boolean;
    onSelectOption: (option: string) => void;
    onNext: () => void;
}

export const ClauseInput = ({
    question,
    selectedOption,
    isCorrect,
    showExplanation,
    onSelectOption,
    onNext,
}: ClauseInputProps) => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card>
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                    <p className="text-muted-foreground text-sm uppercase tracking-wider">Start</p>
                    <h3 className="text-2xl sm:text-3xl font-medium">
                        {question.sentenceStart}
                    </h3>
                    <Plus className="w-6 h-6 mx-auto text-muted-foreground/50" />
                    <div className={cn(
                        "min-h-[3rem] flex items-center justify-center p-2 rounded-lg border-2 border-dashed transition-all",
                        selectedOption ? "border-solid border-primary bg-primary/5" : "border-muted-foreground/20 text-muted-foreground/50"
                    )}>
                        <p className="text-xl sm:text-2xl font-medium text-foreground">
                            {selectedOption || "(Select a clause)"}
                        </p>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-3">
                {question.options.map((option) => {
                    const isSelected = selectedOption === option;
                    const isCorrectAnswer = option === question.correctClause;

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
                                "h-auto py-4 text-lg justify-start text-left whitespace-normal",
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
                            <p className="font-semibold mb-1">Why?</p>
                            <p className="text-sm text-muted-foreground">{question.explanation}</p>
                        </div>
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
