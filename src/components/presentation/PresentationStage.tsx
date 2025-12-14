import { PresentationTopic, PresentationSettings, PresentationRecording } from "@/types/presentation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ChevronLeft, StopCircle, Play, Mic } from "lucide-react";

interface PresentationStageProps {
    topic: PresentationTopic;
    settings: PresentationSettings;
    step: string;
    elapsedTime: number;
    currentSlideIndex: number;
    recordings: PresentationRecording[];
    onStart: () => void;
    onNext: () => void;
    onPrev: () => void;
    onFinish: () => void;
    onPlayRecording: (rec: PresentationRecording) => void;
}

export const PresentationStage = ({
    topic,
    settings,
    step,
    elapsedTime,
    currentSlideIndex,
    recordings,
    onStart,
    onNext,
    onPrev,
    onFinish,
    onPlayRecording
}: PresentationStageProps) => {

    const formatTime = (secs: number) => {
        const mins = Math.floor(secs / 60);
        const scs = secs % 60;
        return `${mins}:${scs.toString().padStart(2, '0')}`;
    };

    const currentSlideContent = topic.slides ? topic.slides[currentSlideIndex] : "No Content";
    const totalSlides = topic.slides?.length || 0;

    if (step === "preparation") {
        return (
            <Card className="text-center py-10 max-w-2xl mx-auto">
                <CardContent className="space-y-6">
                    <h2 className="text-3xl font-bold">Ready to Present?</h2>
                    <p className="text-muted-foreground text-lg">
                        Topic: <span className="text-foreground font-semibold">{topic.title}</span><br />
                        Mode: <span className="text-foreground font-semibold">{settings.mode}</span>
                    </p>
                    <div className="bg-secondary/20 p-6 rounded-lg text-left max-w-sm mx-auto">
                        <h4 className="font-semibold mb-2">Outline:</h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm">
                            {topic.slides?.map((s, i) => <li key={i}>{s}</li>)}
                        </ol>
                    </div>
                    <Button size="lg" className="text-lg px-8 py-6 rounded-full" onClick={onStart}>
                        <Play className="w-6 h-6 mr-2" /> Start Presentation
                    </Button>
                </CardContent>
            </Card>
        );
    }

    if (step === "completed") {
        return (
            <Card className="text-center py-10 max-w-2xl mx-auto animate-in fade-in zoom-in-95">
                <CardContent className="space-y-6">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <StopCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold">Presentation Finished!</h2>
                    <p className="text-muted-foreground">Total Time: {formatTime(elapsedTime)}</p>

                    {recordings.length > 0 && (
                        <div className="bg-card border p-4 rounded-lg mt-8 max-w-md mx-auto">
                            <h3 className="font-semibold mb-3">Your Recording</h3>
                            <Button variant="outline" className="w-full gap-2" onClick={() => onPlayRecording(recordings[recordings.length - 1])}>
                                <Play className="w-4 h-4" /> Playback Audio
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        );
    }

    // Presenting State
    const progress = totalSlides > 0 ? ((currentSlideIndex + 1) / totalSlides) * 100 : 0;

    return (
        <div className="max-w-4xl mx-auto space-y-6">

            {/* Top Bar: Timer & Progress */}
            <div className="flex items-center justify-between bg-card border p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 text-destructive animate-pulse font-bold">
                    <Mic className="w-5 h-5" /> Recording
                </div>
                <div className="text-4xl font-mono font-bold tabular-nums">
                    {formatTime(elapsedTime)}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                    Slide {currentSlideIndex + 1} / {totalSlides}
                </div>
            </div>

            {/* Main Slide Area */}
            <Card className="aspect-video flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-white/10">
                    <div
                        className="h-full bg-primary transition-all duration-500 ease-linear"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="text-center p-8 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        {currentSlideContent}
                    </h2>
                    {settings.mode === "PechaKucha" && (
                        <div className="mt-8 text-sm text-white/50 animate-pulse">
                            Auto-advancing in {settings.durationPerSlide - (elapsedTime % settings.durationPerSlide)}s...
                        </div>
                    )}
                </div>
            </Card>

            {/* Controls */}
            {settings.mode !== "PechaKucha" && (
                <div className="flex justify-between items-center px-4">
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={onPrev}
                        disabled={currentSlideIndex === 0}
                        className="w-32"
                    >
                        <ChevronLeft className="w-5 h-5 mr-1" /> Previous
                    </Button>

                    <Button
                        variant="destructive"
                        onClick={onFinish}
                        className="px-8"
                    >
                        <StopCircle className="w-5 h-5 mr-2" /> Stop Early
                    </Button>

                    <Button
                        variant="default"
                        size="lg"
                        onClick={onNext}
                        className="w-32"
                    >
                        {currentSlideIndex === totalSlides - 1 ? "Finish" : "Next"} <ChevronRight className="w-5 h-5 ml-1" />
                    </Button>
                </div>
            )}

            {settings.mode === "PechaKucha" && (
                <div className="flex justify-center">
                    <Button variant="destructive" onClick={onFinish}>
                        <StopCircle className="w-5 h-5 mr-2" /> Stop Presentation
                    </Button>
                </div>
            )}
        </div>
    );
};
