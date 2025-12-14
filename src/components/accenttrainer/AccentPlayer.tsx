import { AccentRegion, AccentExample } from "@/types/accenttrainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Mic, Square, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccentPlayerProps {
    region: AccentRegion;
    example: AccentExample;
    isPlaying: boolean;
    isRecording: boolean;
    onTogglePlay: () => void;
    onToggleRecord: () => void;
    onSelectExample: (example: AccentExample) => void;
}

export const AccentPlayer = ({
    region,
    example,
    isPlaying,
    isRecording,
    onTogglePlay,
    onToggleRecord,
    onSelectExample
}: AccentPlayerProps) => {

    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            {/* Phrase Selector */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {region.examples.map((ex) => (
                    <Button
                        key={ex.id}
                        variant={example.id === ex.id ? "default" : "outline"}
                        onClick={() => onSelectExample(ex)}
                        className="whitespace-nowrap"
                    >
                        {ex.phrase}
                    </Button>
                ))}
            </div>

            {/* Main Player */}
            <Card className="text-center overflow-hidden border-2 border-primary/20">
                <div className="bg-primary/5 py-12 flex flex-col items-center justify-center gap-4 relative">
                    <div className="text-6xl">{region.flag}</div>
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold">{example.phrase}</h2>
                        <p className="text-2xl font-mono text-muted-foreground">{example.phonetic}</p>
                    </div>

                    {/* Visualizer Mock */}
                    <div className="flex gap-1 items-end h-16 w-32 absolute bottom-4 right-4 opacity-50">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div
                                key={i}
                                className={cn("w-2 bg-primary rounded-t-sm transition-all duration-300", isPlaying ? `h-${Math.floor(Math.random() * 12) + 4}` : "h-2")}

                            />
                        ))}
                    </div>
                </div>

                <CardContent className="p-8 flex justify-center gap-8">
                    <div className="flex flex-col items-center gap-2">
                        <Button
                            size="lg"
                            className="rounded-full w-20 h-20 shadow-xl"
                            onClick={onTogglePlay}
                        >
                            {isPlaying ? <Square className="w-8 h-8" /> : <Volume2 className="w-10 h-10" />}
                        </Button>
                        <span className="text-sm font-medium">Listen</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Button
                            size="lg"
                            variant="destructive"
                            className={cn("rounded-full w-20 h-20 shadow-xl transition-all", isRecording && "animate-pulse ring-4 ring-red-300")}
                            onClick={onToggleRecord}
                        >
                            {isRecording ? <Square className="w-8 h-8" /> : <Mic className="w-10 h-10" />}
                        </Button>
                        <span className="text-sm font-medium">{isRecording ? "Stop" : "Record"}</span>
                    </div>
                </CardContent>
            </Card>

            {/* Tips Section */}
            <Card className="bg-blue-50 border-blue-200 text-blue-900">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        💡 Pro Tip
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg leading-relaxed">
                        {example.tip}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};
