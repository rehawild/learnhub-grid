import { ReviewTopic, SavedRecording } from "@/types/recordreview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Square, Trash2, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecorderInterfaceProps {
    topic: ReviewTopic;
    isRecording: boolean;
    elapsed: number;
    recordings: SavedRecording[];
    onStartRecording: () => void;
    onStopRecording: () => void;
    onPlayRecording: (rec: SavedRecording) => void;
    onDeleteRecording: (id: string) => void;
}

export const RecorderInterface = ({
    topic,
    isRecording,
    elapsed,
    recordings,
    onStartRecording,
    onStopRecording,
    onPlayRecording,
    onDeleteRecording
}: RecorderInterfaceProps) => {

    const formatTime = (secs: number) => {
        const mins = Math.floor(secs / 60);
        const scs = secs % 60;
        return `${mins}:${scs.toString().padStart(2, '0')}`;
    };

    const currentTopicRecordings = recordings.filter(r => r.topicId === topic.id);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in zoom-in-95 duration-300">

            {/* Left: Prompts & Recorder */}
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{topic.description}</p>
                        <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Prompts to help you start:</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {topic.questions.map((q, i) => (
                                    <li key={i}>{q}</li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card className="text-center py-8">
                    <div className="text-5xl font-mono font-bold mb-6 tabular-nums">
                        {formatTime(elapsed)}
                    </div>

                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            variant={isRecording ? "destructive" : "default"}
                            className={cn(
                                "w-20 h-20 rounded-full shadow-xl transition-all hover:scale-105",
                                isRecording && "animate-pulse ring-4 ring-destructive/30"
                            )}
                            onClick={isRecording ? onStopRecording : onStartRecording}
                        >
                            {isRecording ? <Square className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                        </Button>
                    </div>
                </Card>
            </div>

            {/* Right: Saved Recordings */}
            <Card className="h-full flex flex-col">
                <CardHeader>
                    <CardTitle>Session History</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto">
                    {currentTopicRecordings.length === 0 ? (
                        <div className="text-center text-muted-foreground py-10">
                            <Mic className="w-12 h-12 mx-auto mb-4 opacity-20" />
                            <p>No recordings yet. Start speaking!</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {currentTopicRecordings.map((rec) => (
                                <div key={rec.id} className="flex items-center justify-between p-3 border rounded-lg bg-card hover:bg-accent/50 transition-colors">
                                    <div>
                                        <div className="font-semibold">Recording {new Date(rec.timestamp).toLocaleTimeString()}</div>
                                        <div className="text-sm text-muted-foreground">{formatTime(rec.duration)}</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="icon" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10" onClick={() => onPlayRecording(rec)}>
                                            <Play className="w-4 h-4" />
                                        </Button>
                                        <Button size="icon" variant="ghost" className="text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => onDeleteRecording(rec.id)}>
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>

        </div>
    );
};
