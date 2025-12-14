import { CambridgePart, WordFormationItem } from "@/types/cambridge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface WordFormationProps {
    part: CambridgePart;
    answers: Record<string, string>;
    onAnswer: (id: string, val: string) => void;
    showResults: boolean;
}

export const WordFormation = ({ part, answers, onAnswer, showResults }: WordFormationProps) => {
    return (
        <Card className="max-w-3xl mx-auto shadow-md">
            <CardContent className="p-6 space-y-6">
                {(part.items as WordFormationItem[]).map((item) => {
                    const userAnswer = answers[item.id] || "";
                    const isCorrect = showResults && userAnswer.trim().toUpperCase() === item.correctAnswer;
                    const isWrong = showResults && !isCorrect;

                    // Split sentence by "________" or similar placeholder if we want precise placement.
                    // For standardized simplicity, we'll display the sentence with a Gap component.

                    const parts = item.sentence.split('________');

                    return (
                        <div key={item.id} className="flex flex-col md:flex-row gap-4 items-center bg-muted/30 p-4 rounded-lg">
                            <div className="flex-none w-32 font-bold text-right text-muted-foreground self-center md:self-start pt-2">
                                {item.rootWord}
                            </div>

                            <div className="flex-1 text-lg leading-relaxed text-center md:text-left">
                                {parts[0]}
                                <div className="inline-block mx-1 relative">
                                    <Input
                                        value={userAnswer}
                                        onChange={(e) => onAnswer(item.id, e.target.value)}
                                        disabled={showResults}
                                        className={cn("w-40 h-8 font-bold text-blue-600 dark:text-blue-400 text-center inline-flex",
                                            isCorrect && "border-green-500 bg-green-50 dark:bg-green-900/10",
                                            isWrong && "border-red-500 bg-red-50 dark:bg-red-900/10"
                                        )}
                                        placeholder="?"
                                    />
                                    {showResults && (
                                        <div className="absolute -right-6 top-1.5">
                                            {isCorrect ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-500" />}
                                        </div>
                                    )}
                                </div>
                                {parts[1]}
                            </div>

                            {isWrong && (
                                <div className="text-xs text-green-600 font-bold bg-green-100 px-2 py-1 rounded">
                                    {item.correctAnswer}
                                </div>
                            )}
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
};
