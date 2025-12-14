import { PodcastEpisode } from "@/types/podcasthub";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface PodcastPlayerProps {
    episode: PodcastEpisode;
    isPlaying: boolean;
    currentTime: number;
    onTogglePlay: () => void;
    onSeek: (seconds: number) => void;
}

export const PodcastPlayer = ({
    episode, isPlaying, currentTime,
    onTogglePlay, onSeek
}: PodcastPlayerProps) => {

    // Just for visual completeness
    const maxDuration = 300; // Mock 5 mins total usually

    // Auto-scroll transcript
    const activeSegmentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (activeSegmentRef.current) {
            activeSegmentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentTime]);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8">
            {/* Player Controls */}
            <Card className="border-2 border-primary/10 overflow-hidden text-center">
                <div className="bg-primary/5 py-8 flex items-center justify-center">
                    <span className="text-8xl drop-shadow-md animate-bounce-slow">{episode.thumbnail}</span>
                </div>
                <CardContent className="p-6 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">{episode.title}</h2>
                        <p className="text-muted-foreground">{episode.description}</p>
                    </div>

                    <div className="space-y-2">
                        <Slider
                            value={[currentTime]}
                            max={maxDuration}
                            step={1}
                            onValueChange={(val) => onSeek(val[0])}
                            className="cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground font-mono">
                            <span>{formatTime(currentTime)}</span>
                            <span>{episode.duration}</span>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-6">
                        <Button variant="ghost" size="icon" onClick={() => onSeek(Math.max(0, currentTime - 10))}>
                            <SkipBack className="w-6 h-6" />
                        </Button>
                        <Button
                            size="icon"
                            className="w-16 h-16 rounded-full shadow-lg"
                            onClick={onTogglePlay}
                        >
                            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => onSeek(currentTime + 10)}>
                            <SkipForward className="w-6 h-6" />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Transcript */}
            <Card className="h-[300px] flex flex-col">
                <CardHeader className="py-3 px-6 border-b bg-muted/20">
                    <CardTitle className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                        Live Transcript
                    </CardTitle>
                </CardHeader>
                <ScrollArea className="flex-1 p-6">
                    <div className="space-y-4">
                        {episode.transcript.map((segment) => {
                            const isActive = currentTime >= segment.timestamp &&
                                (currentTime < segment.timestamp + 5); // Rough approximation

                            return (
                                <div
                                    key={segment.id}
                                    ref={isActive ? activeSegmentRef : null}
                                    className={cn(
                                        "flex gap-4 transition-all duration-300",
                                        isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
                                    )}
                                >
                                    <div className="w-16 text-right text-xs font-mono text-muted-foreground pt-1">
                                        {formatTime(segment.timestamp)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-xs mb-1 text-primary">{segment.speaker}</div>
                                        <p className="leading-relaxed">{segment.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </ScrollArea>
            </Card>
        </div>
    );
};
