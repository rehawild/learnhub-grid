import { CambridgePart, ClozeOption } from "@/types/cambridge";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface MultipleChoiceClozeProps {
    part: CambridgePart;
    answers: Record<string, string>;
    onAnswer: (id: string, val: string) => void;
    showResults: boolean;
}

export const MultipleChoiceCloze = ({ part, answers, onAnswer, showResults }: MultipleChoiceClozeProps) => {
    // Helper to inject gap numbers into text like "The internet (1)..."
    // For now, simpler approach: Displays text top, questions below.

    return (
        <Card className="max-w-4xl mx-auto shadow-md">
            <CardContent className="p-6 space-y-8">
                <div className="prose dark:prose-invert max-w-none bg-muted/30 p-6 rounded-lg font-serif text-lg leading-relaxed">
                    {/* Simplified rendering: just show the text block */}
                    {part.text?.split('\n').map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {part.items.map((item) => {
                        const q = item as ClozeOption;
                        const isCorrect = showResults && answers[q.id] === q.correctAnswer;
                        const isWrong = showResults && answers[q.id] !== q.correctAnswer;

                        return (
                            <div key={q.id} className={cn("border p-4 rounded-lg transition-colors",
                                isCorrect && "bg-green-50 border-green-200 dark:bg-green-900/10",
                                isWrong && "bg-red-50 border-red-200 dark:bg-red-900/10"
                            )}>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                                        {q.id}
                                    </span>
                                    <span className="text-sm text-muted-foreground font-medium">Select the best word</span>
                                </div>
                                <RadioGroup
                                    value={answers[q.id] || ""}
                                    onValueChange={(val) => !showResults && onAnswer(q.id, val)}
                                    className="grid grid-cols-2 gap-2"
                                >
                                    {Object.entries(q.options).map(([key, value]) => (
                                        <div key={key} className="flex items-center space-x-2">
                                            <RadioGroupItem value={key} id={`${q.id}-${key}`} />
                                            <Label htmlFor={`${q.id}-${key}`} className="cursor-pointer font-normal">
                                                <span className="font-bold text-muted-foreground mr-1">{key}</span>
                                                {value}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
};
