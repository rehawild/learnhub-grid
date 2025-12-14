import { InterviewTopic, UserResponse } from "@/types/interviewprep";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, List, CheckCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface SelfEvaluationProps {
    topic: InterviewTopic;
    responses: Record<string, UserResponse>;
    onSubmitEvaluation: (qid: string, rating: number, notes: string) => void;
    onRetry: () => void;
    onBack: () => void;
}

export const SelfEvaluation = ({
    topic,
    responses,
    onSubmitEvaluation,
    onRetry,
    onBack
}: SelfEvaluationProps) => {

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Session Complete! 🎉</h2>
                <p className="text-muted-foreground">Take a moment to reflect on your answers.</p>
            </div>

            <div className="space-y-6">
                {topic.questions.map((q, i) => {
                    const response = responses[q.id];
                    return (
                        <Card key={q.id}>
                            <CardHeader>
                                <CardTitle className="text-lg">Q{i + 1}: {q.text}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 bg-secondary/30 rounded-lg flex items-center justify-between">
                                    <span className="text-sm font-medium">Recorded Duration:</span>
                                    <span className="font-mono">{response?.duration || 0}s</span>
                                    {/* Mock Audio Player would go here */}
                                </div>

                                <div className="space-y-2">
                                    <Label>How confident did you feel? (1-5)</Label>
                                    <Slider
                                        defaultValue={[response?.selfRating || 3]}
                                        max={5}
                                        min={1}
                                        step={1}
                                        onValueCommit={(val) => onSubmitEvaluation(q.id, val[0], response?.notes || "")}
                                        className="py-4"
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground px-1">
                                        <span>Shaky</span>
                                        <span>Confident</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Notes for next time:</Label>
                                    <Textarea
                                        placeholder="I should speak slower / mention X project..."
                                        defaultValue={response?.notes || ""}
                                        onBlur={(e) => onSubmitEvaluation(q.id, response?.selfRating || 3, e.target.value)}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="flex justify-center gap-4 pt-4">
                <Button variant="outline" size="lg" onClick={onBack} className="gap-2">
                    <List className="w-4 h-4" /> Back to Topics
                </Button>
                <Button size="lg" onClick={onRetry} className="gap-2">
                    <RotateCcw className="w-4 h-4" /> Practice Again
                </Button>
            </div>
        </div>
    );
};
