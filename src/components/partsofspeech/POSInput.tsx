import { POSQuestion, PartOfSpeechType } from "@/types/partsofspeech";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface POSInputProps {
    question: POSQuestion;
    selectedOption: PartOfSpeechType | null;
    isCorrect: boolean | null;
    showExplanation: boolean;
    onSelectOption: (option: PartOfSpeechType) => void;
    onNext: () => void;
}

export const POSInput = ({
    question,
    selectedOption,
    isCorrect,
    showExplanation,
    onSelectOption,
    onNext,
}: POSInputProps) => {
    // Parse sentence to find *word* and highlight it
    const parts = question.sentence.split("*");
    const pre = parts[0];
    const target = parts[1]; // content between *
    const post = parts[2];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card>
                <CardContent className="pt-8 pb-8 text-center">
                    <p className="text-2xl leading-relaxed text-foreground">
                        {pre}
                        <span className="inline-block px-2 py-1 mx-1 bg-primary/20 text-primary border-b-2 border-primary rounded font-bold">
                            {target}
                        </span>
                        {post}
                    </p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
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
                                "h-16 text-lg capitalize transition-all",
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
