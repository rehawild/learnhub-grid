import { Song } from "@/types/songlyrics";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Pause, CheckCircle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface LyricPlayerProps {
    song: Song;
    isPlaying: boolean;
    userAnswers: Record<string, string>;
    onTogglePlay: () => void;
    onUpdateAnswer: (lineId: string, gapIndex: number, value: string) => void;
    onCheck: () => void;
}

export const LyricPlayer = ({
    song,
    isPlaying,
    userAnswers,
    onTogglePlay,
    onUpdateAnswer,
    onCheck
}: LyricPlayerProps) => {

    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            {/* Player Header */}
            <Card className="bg-primary/5 border-primary/20 text-center py-6">
                <div className="flex flex-col items-center gap-4">
                    <span className="text-6xl animate-pulse-slow">{song.coverArt}</span>
                    <div>
                        <h2 className="text-3xl font-bold text-foreground">{song.title}</h2>
                        <p className="text-muted-foreground">{song.artist}</p>
                    </div>
                    <Button
                        size="lg"
                        className={cn("rounded-full w-16 h-16 shadow-xl text-white", isPlaying ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90")}
                        onClick={onTogglePlay}
                    >
                        {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                    </Button>
                </div>
            </Card>

            {/* Lyrics Sheet */}
            <Card>
                <CardContent className="p-8 space-y-4">
                    {song.lyrics.map((line) => {
                        const words = line.text.split(' ');
                        // This logic is a bit simple; assumes spaces separate words perfectly for index mapping
                        // A better way is to iterate words and check if current index matches a gap

                        return (
                            <div key={line.id} className="flex flex-wrap items-center gap-2 text-lg leading-loose justify-center md:justify-start">
                                {words.map((word, index) => {
                                    // Clean word for matching (remove punctuation)
                                    const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
                                    const gap = line.gaps.find(g => g.index === index || g.word === cleanWord); // Fallback to word match if index is tricky

                                    if (gap) {
                                        const key = `${line.id}-${gap.index}`;
                                        return (
                                            <Input
                                                key={key}
                                                className="w-24 inline-flex h-8 text-center font-bold text-primary border-b-2 border-primary/30 focus:border-primary px-1 shadow-none rounded-none focus-visible:ring-0"
                                                placeholder="____"
                                                value={userAnswers[key] || ""}
                                                onChange={(e) => onUpdateAnswer(line.id, gap.index, e.target.value)}
                                            />
                                        );
                                    }
                                    return <span key={index}>{word}</span>;
                                })}
                            </div>
                        );
                    })}
                </CardContent>
            </Card>

            <div className="flex justify-end pt-2">
                <Button size="lg" onClick={onCheck} className="gap-2 shadow-lg">
                    <CheckCircle className="w-4 h-4" /> Check Answers
                </Button>
            </div>
        </div>
    );
};
