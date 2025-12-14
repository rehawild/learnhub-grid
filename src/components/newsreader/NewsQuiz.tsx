import { NewsQuestion } from "@/types/newsreader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NewsQuizProps {
    question: NewsQuestion;
    currentNumber: number;
    totalNumber: number;
    onAnswer: (answer: string) => void;
}

export const NewsQuiz = ({ question, currentNumber, totalNumber, onAnswer }: NewsQuizProps) => {
    return (
        <div className="space-y-8 max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                <span className="uppercase tracking-widest">Question {currentNumber} of {totalNumber}</span>
                <span>Recall Check</span>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl leading-snug">
                        {question.question}
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    {question.options.map((option) => (
                        <Button
                            key={option}
                            variant="outline"
                            className={cn(
                                "h-auto py-4 text-lg justify-start text-left whitespace-normal hover:border-primary hover:text-primary"
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
