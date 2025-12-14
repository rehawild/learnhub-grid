import { PronunciationWord, PronunciationAttempt } from "@/types/pronunciation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Square, Volume2, RotateCcw, Play } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface AudioRecorderProps {
    word: PronunciationWord;
    isRecording: boolean;
    attempts: PronunciationAttempt[];
    onStartRecording: () => void;
    onStopRecording: () => void;
    onPlayReference: () => void;
    onPlayAttempt: (attempt: PronunciationAttempt) => void;
}

export const AudioRecorder = ({
    word,
    isRecording,
    attempts,
    onStartRecording,
    onStopRecording,
    onPlayReference,
    onPlayAttempt
}: AudioRecorderProps) => {

    const latestAttempt = attempts[0];

    return (
        <div className="max-w-xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-300">

            {/* Target Word Card */}
            <Card className="text-center py-8">
                <CardHeader>
                    <CardTitle className="text-5xl font-bold mb-2">{word.word}</CardTitle>
                    <CardDescription className="text-2xl font-serif text-primary">{word.phonetic}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-muted-foreground italic px-8">"{word.tips}"</p>

                    <Button variant="outline" size="lg" onClick={onPlayReference} className="gap-2 rounded-full">
                        <Volume2 className="w-5 h-5" /> Listen to Native
                    </Button>
                </CardContent>
            </Card>

            {/* Recording Controls */}
            <div className="flex justify-center">
                <Button
                    size="lg"
                    variant={isRecording ? "destructive" : "default"}
                    className={cn(
                        "w-24 h-24 rounded-full shadow-2xl transition-all hover:scale-105",
                        isRecording && "animate-pulse ring-4 ring-destructive/30"
                    )}
                    onClick={isRecording ? onStopRecording : onStartRecording}
                >
                    {isRecording ? <Square className="w-10 h-10" /> : <Mic className="w-10 h-10" />}
                </Button>
            </div>
            {isRecording && <p className="text-center text-destructive font-medium animate-pulse">Recording... Speak now!</p>}

            {/* Results Section */}
            {attempts.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-center mt-8">Your Latest Attempt</h3>

                    <Card className={cn("overflow-hidden border-l-4",
                        latestAttempt.score >= 90 ? "border-l-green-500" :
                            latestAttempt.score >= 80 ? "border-l-yellow-500" : "border-l-red-500"
                    )}>
                        <CardContent className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <div className="text-3xl font-bold mb-1">{latestAttempt.score}%</div>
                                    <div className="text-sm text-muted-foreground">{latestAttempt.feedback}</div>
                                </div>
                                <Button size="icon" variant="ghost" className="rounded-full w-12 h-12 bg-secondary" onClick={() => onPlayAttempt(latestAttempt)}>
                                    <Play className="w-5 h-5 ml-1" />
                                </Button>
                            </div>
                            <Progress value={latestAttempt.score} className={cn("h-3",
                                latestAttempt.score >= 90 ? "bg-green-100 [&>div]:bg-green-500" :
                                    latestAttempt.score >= 80 ? "bg-yellow-100 [&>div]:bg-yellow-500" : "bg-red-100 [&>div]:bg-red-500"
                            )} />
                        </CardContent>
                    </Card>

                    {attempts.length > 1 && (
                        <div className="px-4">
                            <h4 className="text-sm font-medium text-muted-foreground mb-3">Previous Attempts</h4>
                            <div className="space-y-2">
                                {attempts.slice(1, 4).map(att => (
                                    <div key={att.id} className="flex items-center justify-between text-sm p-2 bg-secondary/30 rounded">
                                        <span>Score: {att.score}%</span>
                                        <Button variant="ghost" size="sm" onClick={() => onPlayAttempt(att)}><Play className="w-3 h-3 mr-1" /> Listen</Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
