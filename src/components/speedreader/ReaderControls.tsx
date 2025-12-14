import { ReaderSettings } from "@/types/speedreader";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, RotateCcw, FastForward, Rewind } from "lucide-react";

interface ReaderControlsProps {
    isPlaying: boolean;
    settings: ReaderSettings;
    onTogglePlay: () => void;
    onUpdateSettings: (s: Partial<ReaderSettings>) => void;
    onReset: () => void;
}

export const ReaderControls = ({
    isPlaying,
    settings,
    onTogglePlay,
    onUpdateSettings,
    onReset
}: ReaderControlsProps) => {

    return (
        <div className="space-y-6 bg-muted/30 p-6 rounded-xl border">

            <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" onClick={onReset} title="Reset">
                    <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                    size="lg"
                    className="w-32 gap-2"
                    onClick={onTogglePlay}
                >
                    {isPlaying ? (
                        <>
                            <Pause className="h-5 w-5 fill-current" /> Pause
                        </>
                    ) : (
                        <>
                            <Play className="h-5 w-5 fill-current" /> Read
                        </>
                    )}
                </Button>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                    <span>Speed</span>
                    <span className="text-primary">{settings.wpm} WPM</span>
                </div>
                <Slider
                    value={[settings.wpm]}
                    min={100}
                    max={800}
                    step={25}
                    onValueChange={(vals) => onUpdateSettings({ wpm: vals[0] })}
                    className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Slow (100)</span>
                    <span>Speedy (800)</span>
                </div>
            </div>

            <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Chunk Size: {settings.chunkSize} word(s)</span>
                <div className="flex gap-1">
                    {[1, 2, 3].map(size => (
                        <Button
                            key={size}
                            variant={settings.chunkSize === size ? "default" : "outline"}
                            size="sm"
                            onClick={() => onUpdateSettings({ chunkSize: size })}
                            className="h-7 w-8 p-0"
                        >
                            {size}
                        </Button>
                    ))}
                </div>
            </div>

        </div>
    );
};
