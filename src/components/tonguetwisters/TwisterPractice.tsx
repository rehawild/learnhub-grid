import { TongueTwister, TwisterAttempt } from "@/types/tonguetwisters";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Square, Timer, Play, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TwisterPracticeProps {
    twister: TongueTwister;
    isRecording: boolean;
    attempts: TwisterAttempt[];
    onStartRecording: () => void;
    onStopRecording: () => void;
    onPlayAttempt: (attempt: TwisterAttempt) => void;
}

export const TwisterPractice = ({
    twister,
    isRecording,
    attempts,
    onStartRecording,
    onStopRecording,
    onPlayAttempt
}: TwisterPracticeProps) => {

    // Live timer
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRecording) {
            const start = Date.now();
            interval = setInterval(() => {
                setElapsed((Date.now() - start) / 1000);
            }, 50);
        } else {
            setElapsed(0);
        }
        return () => clearInterval(interval);
    }, [isRecording]);

    const latestAttempt = attempts[0];

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-300">

            {/* Challenge Card */}
            <Card className="text-center py-10 px-4 bg-gradient-to-br from-card to-secondary/20">
                <div className="mb-6 flex justify-center">
                    <span className="bg-background border px-4 py-1 rounded-full text-sm font-mono flex items-center gap-2">
                        <Timer className="w-4 h-4" /> Target: {twister.targetSpeed}s
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                    "{twister.text}"
                </h2>

                <div className="flex flex-col items-center gap-4">
                    <Button
                        size="lg"
                        variant={isRecording ? "destructive" : "default"}
                        className={cn(
                            "w-20 h-20 rounded-full shadow-xl transition-all hover:scale-105",
                            isRecording && "animate-pulse ring-4 ring-destructive/30 scale-110"
                        )}
                        onClick={isRecording ? onStopRecording : onStartRecording}
                    >
                        {isRecording ? <Square className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                    </Button>

                    {isRecording ? (
                        <div className="text-4xl font-mono font-bold text-destructive">
                            {elapsed.toFixed(2)}s
                        </div>
                    ) : (
                        <p className="text-muted-foreground text-sm">Tap mic to start timer & recording</p>
                    )}
                </div>
            </Card>

            {/* Results */}
            {attempts.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-center">Recent Attempts</h3>
                    <div className="grid gap-3">
                        {attempts.map((att, i) => {
                            const isFastEnough = att.duration <= twister.targetSpeed;
                            return (
                                <div key={att.id} className={cn(
                                    "flex items-center justify-between p-4 rounded-lg border bg-card transition-all",
                                    i === 0 && "border-l-4",
                                    isFastEnough ? (i === 0 ? "border-l-green-500" : "") : (i === 0 ? "border-l-red-500" : "")
                                )}>
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center font-bold text-white",
                                            isFastEnough ? "bg-green-500" : "bg-muted-foreground/30 text-muted-foreground"
                                        )}>
                                            {isFastEnough ? <Award className="w-6 h-6" /> : (i + 1)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg">{att.duration.toFixed(2)}s</div>
                                            <div className="text-xs text-muted-foreground">
                                                {isFastEnough ? "Challenge Beaten! 🎉" : `Too slow! Aim for < ${twister.targetSpeed}s`}
                                            </div>
                                        </div>
                                    </div>
                                    <Button size="icon" variant="ghost" className="rounded-full" onClick={() => onPlayAttempt(att)}>
                                        <Play className="w-5 h-5" />
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
