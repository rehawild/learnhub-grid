import { QuestionSet, ReadingSessionState } from "@/types/ieltsreading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface QuestionPanelProps {
    questionSets: QuestionSet[];
    answers: Record<string, string>;
    onAnswer: (qId: string, val: string) => void;
    showResults: boolean;
}

export const QuestionPanel = ({ questionSets, answers, onAnswer, showResults }: QuestionPanelProps) => {
    return (
        <div className="h-full bg-slate-50 dark:bg-slate-900 rounded-lg border shadow-sm flex flex-col">
            <div className="p-4 border-b bg-white dark:bg-slate-950">
                <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Questions</h2>
            </div>
            <ScrollArea className="flex-1 p-6">
                <div className="space-y-8">
                    {questionSets.map((set) => (
                        <div key={set.id} className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded text-sm text-blue-700 dark:text-blue-300 font-medium">
                                {set.instruction}
                            </div>

                            <div className="space-y-6">
                                {set.questions.map((q) => {
                                    const isCorrect = showResults && answers[q.id]?.toUpperCase() === (q.correctAnswer as string).toUpperCase();
                                    const isWrong = showResults && !isCorrect;

                                    return (
                                        <div key={q.id} className={cn("space-y-3 p-4 rounded-lg transition-colors",
                                            isCorrect && "bg-green-50 dark:bg-green-900/10 border border-green-200",
                                            isWrong && "bg-red-50 dark:bg-red-900/10 border border-red-200"
                                        )}>
                                            <div className="flex gap-2">
                                                <span className="font-bold text-muted-foreground min-w-[1.5rem]">{q.id.replace("q", "")}.</span>
                                                <p className="font-medium text-sm">{q.text}</p>
                                            </div>

                                            {q.type === 'true_false_not_given' && (
                                                <RadioGroup
                                                    value={answers[q.id] || ""}
                                                    onValueChange={(val) => !showResults && onAnswer(q.id, val)}
                                                    className="flex gap-4 mt-2 ml-8"
                                                >
                                                    {["TRUE", "FALSE", "NOT GIVEN"].map((opt) => (
                                                        <div key={opt} className="flex items-center space-x-2">
                                                            <RadioGroupItem value={opt} id={`${q.id}-${opt}`} />
                                                            <Label htmlFor={`${q.id}-${opt}`} className="text-xs cursor-pointer">{opt}</Label>
                                                        </div>
                                                    ))}
                                                </RadioGroup>
                                            )}

                                            {q.type === 'multiple_choice' && q.options && (
                                                <RadioGroup
                                                    value={answers[q.id] || ""}
                                                    onValueChange={(val) => !showResults && onAnswer(q.id, val)}
                                                    className="space-y-2 mt-2 ml-8"
                                                >
                                                    {q.options.map((opt) => {
                                                        const letter = opt.charAt(0); // A, B, C...
                                                        return (
                                                            <div key={opt} className="flex items-start space-x-2">
                                                                <RadioGroupItem value={letter} id={`${q.id}-${letter}`} className="mt-1" />
                                                                <Label htmlFor={`${q.id}-${letter}`} className="text-sm leading-tight cursor-pointer font-normal">{opt}</Label>
                                                            </div>
                                                        );
                                                    })}
                                                </RadioGroup>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
};
