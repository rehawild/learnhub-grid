import { StoryQuestion } from "@/types/storytime";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StoryQuizProps {
    question: StoryQuestion;
    currentNumber: number;
    totalNumber: number;
    onAnswer: (answer: string) => void;
}

export const StoryQuiz = ({ question, currentNumber, totalNumber, onAnswer }: StoryQuizProps) => {
    return (
        <div className="space-y-8 max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Question {currentNumber} of {totalNumber}
                </span>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-center leading-snug">
                        {question.question}
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    {question.options.map((option) => (
                        <Button
                            key={option}
                            variant="outline"
                            className={cn(
                                "h-auto py-4 text-lg justify-start text-left whitespace-normal",
                                "hover:border-primary hover:bg-primary/5 hover:text-primary"
                            )}
                            onClick={() => onAnswer(option)}
                        >
                            {option}
                        </Button>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};
