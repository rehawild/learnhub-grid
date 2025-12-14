import { TedTalk } from "@/types/tedtalks";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface VideoPlayerProps {
    talk: TedTalk;
    currentTime: number;
    autoScroll: boolean;
    showVocab: boolean;
    onProgress: (time: number) => void;
    onPlayStateChange: (isPlaying: boolean) => void;
    onToggleAutoScroll: () => void;
    onToggleVocab: () => void;
}

// Declare global YT interface
declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: () => void;
    }
}

export const VideoPlayer = ({
    talk,
    currentTime,
    autoScroll,
    showVocab,
    onProgress,
    onPlayStateChange,
    onToggleAutoScroll,
    onToggleVocab
}: VideoPlayerProps) => {

    const activeSegmentId = talk.transcript.find(s => currentTime >= s.startTime && currentTime < s.endTime)?.id;
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<any>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Initialize YouTube Player
    useEffect(() => {
        // Load API if not loaded
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        }

        const initPlayer = () => {
            playerRef.current = new window.YT.Player('youtube-player', {
                height: '100%',
                width: '100%',
                videoId: talk.videoUrl,
                playerVars: {
                    'playsinline': 1,
                    'modestbranding': 1
                },
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        };

        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            window.onYouTubeIframeAPIReady = initPlayer;
        }

        return () => {
            if (playerRef.current && playerRef.current.destroy) {
                playerRef.current.destroy();
            }
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [talk.videoUrl]);

    const onPlayerStateChange = (event: any) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
            onPlayStateChange(true);
            intervalRef.current = setInterval(() => {
                if (playerRef.current && playerRef.current.getCurrentTime) {
                    onProgress(playerRef.current.getCurrentTime());
                }
            }, 500);
        } else {
            onPlayStateChange(false);
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    };

    const handleSeek = (time: number) => {
        if (playerRef.current && playerRef.current.seekTo) {
            playerRef.current.seekTo(time, true);
            // If paused, maybe play? standard behavior usually to just seek.
            onProgress(time);
        }
    };

    // Auto-scroll logic
    useEffect(() => {
        if (autoScroll && activeSegmentId && scrollContainerRef.current) {
            const activeEl = document.getElementById(`segment-${activeSegmentId}`);
            if (activeEl) {
                activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [activeSegmentId, autoScroll]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-300">

            {/* Video Section */}
            <div className="lg:col-span-2 space-y-4">
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative shadow-xl">
                    <div id="youtube-player" className="w-full h-full"></div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold">{talk.title}</h2>
                    <p className="text-muted-foreground">{talk.speaker}</p>
                </div>
            </div>

            {/* Transcript & Vocab Section */}
            <div className="lg:col-span-1 h-[500px] flex flex-col gap-4">

                <div className="flex items-center justify-between text-sm text-muted-foreground p-2 bg-secondary/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                        <Switch id="auto-scroll" checked={autoScroll} onCheckedChange={onToggleAutoScroll} />
                        <Label htmlFor="auto-scroll">Auto-Scroll</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="show-vocab" checked={showVocab} onCheckedChange={onToggleVocab} />
                        <Label htmlFor="show-vocab">Vocab</Label>
                    </div>
                </div>

                <Card className="flex-1 overflow-hidden flex flex-col">
                    <div
                        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
                        ref={scrollContainerRef}
                    >
                        {talk.transcript.map(segment => {
                            const isActive = segment.id === activeSegmentId;

                            return (
                                <div
                                    key={segment.id}
                                    id={`segment-${segment.id}`}
                                    className={cn(
                                        "p-3 rounded-lg transition-colors cursor-pointer text-sm leading-relaxed",
                                        isActive ? "bg-primary/10 border-l-4 border-primary" : "hover:bg-accent"
                                    )}
                                    // Clicking a transcript line seeks the video
                                    onClick={() => handleSeek(segment.startTime)}
                                >
                                    <span className="text-xs text-muted-foreground block mb-1">
                                        {Math.floor(segment.startTime / 60)}:{(segment.startTime % 60).toString().padStart(2, '0')}
                                    </span>
                                    <p>
                                        {segment.text.split(" ").map((word, i) => {
                                            const cleanWord = word.replace(/[.,]/g, "").toLowerCase();
                                            const vocabItem = talk.vocabulary.find(v => v.word.toLowerCase() === cleanWord);

                                            if (showVocab && vocabItem) {
                                                return (
                                                    <span key={i} className="group relative text-blue-500 font-bold decoration-dotted underline cursor-help mx-0.5">
                                                        {word}
                                                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-popover text-popover-foreground text-xs rounded shadow-lg border hidden group-hover:block z-50">
                                                            <span className="font-bold block mb-1">{vocabItem.word}</span>
                                                            {vocabItem.definition}
                                                        </span>
                                                    </span>
                                                );
                                            }
                                            return <span key={i} className="mx-0.5">{word}</span>;
                                        })}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </Card>
            </div>

        </div>
    );
};
