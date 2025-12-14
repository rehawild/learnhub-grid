import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RotateCcw, Music } from "lucide-react";
import { Song } from "@/types/songlyrics";

interface ResultModalProps {
    score: number | null;
    song: Song;
    onRetry: () => void;
    onBack: () => void;
}

export const ResultModal = ({ score, song, onRetry, onBack }: ResultModalProps) => {
    const finalScore = score || 0;

    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95">
            <Card className="text-center overflow-hidden border-2 border-primary/20">
                <div className={`py-12 px-6 text-white ${finalScore >= 80 ? 'bg-gradient-to-br from-green-500 to-green-700' : 'bg-gradient-to-br from-orange-500 to-red-600'}`}>
                    <div className="text-6xl mb-4">{finalScore >= 80 ? '🌟' : '🎸'}</div>
                    <h2 className="text-5xl font-bold mb-2">{finalScore}%</h2>
                    <p className="text-xl opacity-90">
                        {finalScore >= 100 ? "Perfect Harmony!" : finalScore >= 80 ? "Great Rhythm!" : "Keep Practicing!"}
                    </p>
                </div>
                <CardContent className="p-8">
                    <p className="text-muted-foreground text-lg mb-8">
                        You've completed <strong>{song.title}</strong> by {song.artist}.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Button variant="outline" size="lg" onClick={onBack} className="gap-2">
                            <Music className="w-4 h-4" /> New Song
                        </Button>
                        <Button size="lg" onClick={onRetry} className="gap-2 shadow-md">
                            <RotateCcw className="w-4 h-4" /> Replay Song
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
