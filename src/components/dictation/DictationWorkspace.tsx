import { DictationExercise } from "@/types/dictation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Play, Pause, RotateCcw, Check, Sparkles } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Slider } from "@/components/ui/slider";

interface DictationWorkspaceProps {
    exercise: DictationExercise;
    userText: string;
    isPlaying: boolean;
    playbackSpeed: number;
    onTogglePlay: () => void;
    onUpdateText: (text: string) => void;
    onSetSpeed: (speed: number) => void;
    onCheck: () => void;
}

export const DictationWorkspace = ({
    exercise,
    userText,
    isPlaying,
    playbackSpeed,
    onTogglePlay,
    onUpdateText,
    onSetSpeed,
    onCheck
}: DictationWorkspaceProps) => {

    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <Card>
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl">{exercise.title}</CardTitle>
                    <p className="text-muted-foreground">Listen carefully and type what you hear.</p>
                </CardHeader>
                <CardContent className="space-y-6">

                    {/* Audio Controls */}
                    <div className="flex flex-col items-center gap-4 bg-secondary/20 p-6 rounded-lg">
                        <Button
                            size="icon"
                            className="w-16 h-16 rounded-full shadow-lg"
                            onClick={onTogglePlay}
                        >
                            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                        </Button>

                        <div className="flex items-center gap-4">
                            <span className="text-xs font-medium text-muted-foreground">Speed:</span>
                            <ToggleGroup type="single" value={playbackSpeed.toString()} onValueChange={(val) => { if (val) onSetSpeed(parseFloat(val)); }}>
                                <ToggleGroupItem value="0.5" aria-label="0.5x Speed" className="text-xs">0.5x</ToggleGroupItem>
                                <ToggleGroupItem value="0.75" aria-label="0.75x Speed" className="text-xs">0.75x</ToggleGroupItem>
                                <ToggleGroupItem value="1" aria-label="1x Speed" className="text-xs">1.0x</ToggleGroupItem>
                            </ToggleGroup>
                        </div>
                    </div>

                    {/* Text Input */}
                    <Textarea
                        placeholder="Type here..."
                        className="min-h-[200px] text-lg leading-relaxed p-6 resize-none focus-visible:ring-primary"
                        value={userText}
                        onChange={(e) => onUpdateText(e.target.value)}
                        autoFocus
                    />

                </CardContent>
            </Card>

            <div className="flex justify-end pt-2">
                <Button size="lg" onClick={onCheck} className="gap-2" disabled={userText.length === 0}>
                    <Check className="w-4 h-4" /> Check My Work
                </Button>
            </div>
        </div>
    );
};
