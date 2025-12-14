import { Question } from "@/types/mocktests";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface QuestionDisplayProps {
    question: Question;
    answer: string;
    onAnswer: (val: string) => void;
    isReview: boolean;
}

export const QuestionDisplay = ({ question, answer, onAnswer, isReview }: QuestionDisplayProps) => {
    const isCorrect = isReview && answer.toLowerCase() === question.correctAnswer.toLowerCase();
    const isWrong = isReview && !isCorrect;

    return (
        <div className={cn("p-4 rounded-lg border bg-card transition-colors",
            isCorrect && "border-green-500 bg-green-50 dark:bg-green-900/10",
            isWrong && "border-red-500 bg-red-50 dark:bg-red-900/10"
        )}>
            <div className="flex gap-3 mb-3">
                <span className="font-bold text-muted-foreground">Q.</span>
                <p className="font-medium text-lg">{question.text}</p>
            </div>

            <div className="pl-8">
                {question.type === 'multiple_choice' && question.options && (
                    <RadioGroup
                        value={answer}
                        onValueChange={onAnswer}
                        disabled={isReview}
                        className="space-y-2"
                    >
                        {question.options.map(opt => (
                            <div key={opt} className="flex items-center space-x-2">
                                <RadioGroupItem value={opt} id={`${question.id}-${opt}`} />
                                <Label htmlFor={`${question.id}-${opt}`} className="cursor-pointer font-normal">{opt}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                )}

                {question.type === 'true_false' && (
                    <RadioGroup
                        value={answer}
                        onValueChange={onAnswer}
                        disabled={isReview}
                        className="flex gap-6"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="True" id={`${question.id}-true`} />
                            <Label htmlFor={`${question.id}-true`}>True</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="False" id={`${question.id}-false`} />
                            <Label htmlFor={`${question.id}-false`}>False</Label>
                        </div>
                    </RadioGroup>
                )}

                {question.type === 'fill_blank' && (
                    <Input
                        value={answer}
                        onChange={(e) => onAnswer(e.target.value)}
                        disabled={isReview}
                        placeholder="Type answer here..."
                        className="max-w-md"
                    />
                )}

                {isWrong && (
                    <div className="mt-4 text-sm font-semibold text-red-600 dark:text-red-400">
                        Correct Answer: {question.correctAnswer}
                    </div>
                )}
            </div>
        </div>
    );
};
