import { Song } from "@/types/songlyrics";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Music } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SongSelectorProps {
    songs: Song[];
    onSelect: (song: Song) => void;
}

export const SongSelector = ({ songs, onSelect }: SongSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {songs.map((song) => (
                <Card
                    key={song.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full overflow-hidden"
                    onClick={() => onSelect(song)}
                >
                    <div className="bg-primary/5 h-32 flex items-center justify-center">
                        <span className="text-6xl drop-shadow-sm">{song.coverArt}</span>
                    </div>
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline" className="text-xs">{song.genre}</Badge>
                            <Badge className={song.difficulty === 'Hard' ? 'bg-destructive' : song.difficulty === 'Medium' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'}>
                                {song.difficulty}
                            </Badge>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors line-clamp-1">{song.title}</CardTitle>
                        <CardDescription>{song.artist}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Button
                            className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                            variant="secondary"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(song);
                            }}
                        >
                            <Play className="w-4 h-4" /> Start Singing
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
