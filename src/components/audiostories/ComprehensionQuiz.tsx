import { AudioStory } from "@/types/audiostories";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Trophy } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ComprehensionQuizProps {
    story: AudioStory;
    answers: Record<string, number>;
    score: number | null;
    onSelectAnswer: (qid: string, index: number) => void;
    onSubmit: () => void;
    onBack: () => void;
}

export const ComprehensionQuiz = ({
    story,
    answers,
    score,
    onSelectAnswer,
    onSubmit,
    onBack
}: ComprehensionQuizProps) => {

    const isSubmitted = score !== null;

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8">
            {isSubmitted && (
                <Card className={cn("text-center p-6 text-white mb-6", score >= 100 ? "bg-green-600" : score >= 50 ? "bg-yellow-600" : "bg-red-600")}>
                    <Trophy className="w-12 h-12 mx-auto mb-2" />
                    <h2 className="text-3xl font-bold">Score: {score}%</h2>
                    <p>{score === 100 ? "Perfect understanding!" : "Good effort, keep practicing!"}</p>
                </Card>
            )}

            <div className="grid gap-6">
                {story.quiz.map((q, qIndex) => (
                    <Card key={q.id}>
                        <CardHeader>
                            <CardTitle className="text-lg">
                                {qIndex + 1}. {q.question}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <RadioGroup
                                value={answers[q.id]?.toString()}
                                onValueChange={(val) => !isSubmitted && onSelectAnswer(q.id, parseInt(val))}
                                disabled={isSubmitted}
                            >
                                {q.options.map((opt, optIndex) => {
                                    let itemClass = "flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent transition-colors cursor-pointer";
                                    if (isSubmitted) {
                                        if (optIndex === q.correctAnswer) itemClass = "flex items-center space-x-2 p-3 rounded-lg border bg-green-500/10 border-green-500/50 text-green-700 dark:text-green-300";
                                        else if (answers[q.id] === optIndex && optIndex !== q.correctAnswer) itemClass = "flex items-center space-x-2 p-3 rounded-lg border bg-destructive/10 border-destructive/50 text-destructive dark:text-red-400";
                                    }

                                    return (
                                        <div key={optIndex} className={itemClass}>
                                            <RadioGroupItem value={optIndex.toString()} id={`${q.id}-${optIndex}`} />
                                            <Label htmlFor={`${q.id}-${optIndex}`} className="flex-1 cursor-pointer">{opt}</Label>
                                        </div>
                                    );
                                })}
                            </RadioGroup>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={onBack} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Story
                </Button>
                {!isSubmitted && (
                    <Button onClick={onSubmit} className="gap-2" disabled={Object.keys(answers).length < story.quiz.length}>
                        <CheckCircle className="w-4 h-4" /> Submit Quiz
                    </Button>
                )}
            </div>
        </div>
    );
};
