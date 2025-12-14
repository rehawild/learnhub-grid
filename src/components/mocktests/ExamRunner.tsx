import { MockTestState } from "@/types/mocktests";
import { QuestionDisplay } from "./QuestionDisplay";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, Clock } from "lucide-react";

interface ExamRunnerProps {
    state: MockTestState;
    onAnswer: (qId: string, val: string) => void;
    onFinish: () => void;
    onExit: () => void;
}

export const ExamRunner = ({ state, onAnswer, onFinish, onExit }: ExamRunnerProps) => {
    const { currentExam, answers, status, score, elapsedSeconds } = state;
    if (!currentExam) return null;

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60).toString().padStart(2, '0');
        const s = (secs % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Header / StatusBar */}
            <div className="flex items-center justify-between bg-card p-4 rounded-lg border shadow-sm sticky top-4 z-10">
                <div>
                    <h2 className="font-bold text-lg">{currentExam.title}</h2>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Clock className="w-4 h-4" />
                        <span className="font-mono">{formatTime(elapsedSeconds)}</span>
                    </div>
                </div>
                <div>
                    {status === 'review' ? (
                        <div className="text-right">
                            <span className="block text-sm text-muted-foreground">Final Score</span>
                            <span className="text-2xl font-bold text-primary">{score} pts</span>
                        </div>
                    ) : (
                        <Button onClick={onFinish} variant="default">Submit Exam</Button>
                    )}
                </div>
            </div>

            {/* Questions List */}
            <ScrollArea className="h-[calc(100vh-200px)] pr-4">
                <div className="space-y-8 pb-20">
                    {currentExam.sections.map(section => (
                        <div key={section.id} className="space-y-4">
                            <div className="bg-muted/50 p-3 rounded border-l-4 border-primary">
                                <h3 className="font-bold text-lg">{section.title}</h3>
                                <p className="text-sm text-muted-foreground">{section.description}</p>
                            </div>

                            <div className="space-y-6">
                                {section.questions.map(q => (
                                    <QuestionDisplay
                                        key={q.id}
                                        question={q}
                                        answer={answers[q.id] || ""}
                                        onAnswer={(val) => onAnswer(q.id, val)}
                                        isReview={status === 'review'}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}

                    {status === 'review' && (
                        <div className="flex justify-center pt-8">
                            <Button size="lg" onClick={onExit} variant="outline" className="gap-2">
                                <CheckCircle className="w-4 h-4" /> Return to Menu
                            </Button>
                        </div>
                    )}
                </div>
            </ScrollArea>
        </div>
    );
};
