import { DailyChallenge, PracticeItem } from "@/types/practiceplus";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SessionRunnerProps {
    challenge: DailyChallenge;
    currentQuestionIndex: number;
    answers: Record<string, string>;
    showResult: boolean;
    score: number;
    onAnswer: (itemId: string, val: string) => void;
    onNext: () => void;
    onExit: () => void;
}

export const SessionRunner = ({ challenge, currentQuestionIndex, answers, showResult, score, onAnswer, onNext, onExit }: SessionRunnerProps) => {

    if (showResult) {
        return (
            <div className="max-w-xl mx-auto text-center space-y-6 animate-in fade-in zoom-in spin-in-1">
                <div className="bg-card border rounded-2xl p-8 shadow-xl">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-2">Well Done!</h2>
                    <p className="text-muted-foreground mb-6">You've completed {challenge.title}.</p>

                    <div className="text-4xl font-black text-primary mb-2">{score} / {challenge.items.length}</div>
                    <div className="text-sm text-muted-foreground mb-8">Correct Answers</div>

                    <Button onClick={onExit} size="lg" className="w-full">Continue Practice</Button>
                </div>
            </div>
        );
    }

    const item = challenge.items[currentQuestionIndex];
    const isLast = currentQuestionIndex === challenge.items.length - 1;
    const progress = ((currentQuestionIndex) / challenge.items.length) * 100;
    const currentAnswer = answers[item.id];

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-xl font-bold">{challenge.title}</h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="secondary" className="uppercase text-xs">{item.type}</Badge>
                        <span>Question {currentQuestionIndex + 1} of {challenge.items.length}</span>
                    </div>
                </div>
                <Button variant="ghost" size="sm" onClick={onExit}>Exit</Button>
            </div>

            <Progress value={progress} className="h-2" />

            {/* Question Card */}
            <Card className="min-h-[300px] flex flex-col shadow-md">
                <CardContent className="p-6 flex-1 flex flex-col">
                    {item.context && (
                        <div className="bg-muted/50 p-4 rounded-lg mb-6 text-sm italic border-l-4 border-primary">
                            "{item.context}"
                        </div>
                    )}

                    <h3 className="text-2xl font-medium mb-8 leading-relaxed">
                        {item.question}
                    </h3>

                    {/* Options */}
                    {item.options ? (
                        <div className="grid gap-3 mt-auto">
                            {item.options.map((opt) => (
                                <Button
                                    key={opt}
                                    variant={currentAnswer === opt ? "default" : "outline"}
                                    className={cn("justify-start h-auto py-4 px-6 text-lg font-normal",
                                        currentAnswer === opt && "ring-2 ring-primary ring-offset-2"
                                    )}
                                    onClick={() => onAnswer(item.id, opt)}
                                >
                                    {opt}
                                </Button>
                            ))}
                        </div>
                    ) : (
                        <div className="mt-auto">Input field placeholder (if needed)</div>
                    )}
                </CardContent>
            </Card>

            {/* Footer / Feedback */}
            <div className="flex justify-end pt-4">
                <Button
                    size="lg"
                    disabled={!currentAnswer}
                    onClick={onNext}
                    className="gap-2"
                >
                    {isLast ? "Finish" : "Next Question"} <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
