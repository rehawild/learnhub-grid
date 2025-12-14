import { InterviewTopic, InterviewQuestion, UserResponse } from "@/types/interviewprep";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Square, ChevronRight, ChevronLeft, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface InterviewSessionProps {
    topic: InterviewTopic;
    questionIndex: number;
    isRecording: boolean;
    recordingTime: number;
    userResponse?: UserResponse;
    onToggleRecord: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export const InterviewSession = ({
    topic,
    questionIndex,
    isRecording,
    recordingTime,
    userResponse,
    onToggleRecord,
    onNext,
    onPrev
}: InterviewSessionProps) => {
    const question = topic.questions[questionIndex];
    const [showTips, setShowTips] = useState(false);
    const [showSample, setShowSample] = useState(false);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            {/* Progress Bar (Simple) */}
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Question {questionIndex + 1} of {topic.questions.length}</span>
                <span>{topic.title}</span>
            </div>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                <div
                    className="bg-primary h-full transition-all duration-300"
                    style={{ width: `${((questionIndex + 1) / topic.questions.length) * 100}%` }}
                />
            </div>

            {/* Question Card */}
            <Card className="min-h-[300px] flex flex-col justify-between">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold leading-normal">{question.text}</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col items-center gap-8 pb-12">
                    <div className="flex flex-col items-center gap-3">
                        <div className={cn("text-5xl font-mono font-bold transition-colors", isRecording ? "text-red-500" : "text-muted-foreground")}>
                            {formatTime(isRecording ? recordingTime : userResponse?.duration || 0)}
                        </div>

                        <Button
                            size="lg"
                            variant={isRecording ? "destructive" : "default"}
                            className={cn("rounded-full w-20 h-20 shadow-xl transition-all hover:scale-105", isRecording && "ring-4 ring-red-200 animate-pulse")}
                            onClick={onToggleRecord}
                        >
                            {isRecording ? <Square className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                        </Button>
                        <p className="text-sm text-muted-foreground">{isRecording ? "Click to stop" : "Click to record"}</p>
                    </div>

                    {/* Assistance Toggles */}
                    <div className="flex gap-4">
                        <Button variant="outline" size="sm" onClick={() => setShowTips(!showTips)} className="gap-2">
                            {showTips ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />} Tips
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setShowSample(!showSample)} className="gap-2">
                            {showSample ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />} Sample Answer
                        </Button>
                    </div>

                    {showTips && (
                        <Alert className="bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 text-yellow-800 dark:text-yellow-200 animate-in fade-in slide-in-from-top-2">
                            <AlertTitle className="font-bold mb-2">💡 Helpful Tips:</AlertTitle>
                            <AlertDescription>
                                <ul className="list-disc list-inside space-y-1">
                                    {question.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}

                    {showSample && (
                        <Alert className="bg-blue-50 dark:bg-blue-900/10 border-blue-200 text-blue-800 dark:text-blue-200 animate-in fade-in slide-in-from-top-2">
                            <AlertTitle className="font-bold mb-2">🗣️ Sample Answer:</AlertTitle>
                            <AlertDescription className="italic">
                                "{question.sampleAnswer}"
                            </AlertDescription>
                        </Alert>
                    )}
                </CardContent>
            </Card>

            <div className="flex justify-between pt-4">
                <Button variant="ghost" onClick={onPrev} disabled={questionIndex === 0} className="gap-2">
                    <ChevronLeft className="w-4 h-4" /> Previous
                </Button>
                <Button onClick={onNext} className="gap-2">
                    {questionIndex < topic.questions.length - 1 ? "Next Question" : "Finish Review"} <ChevronRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
