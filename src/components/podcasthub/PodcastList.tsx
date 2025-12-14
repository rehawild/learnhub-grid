import { PodcastEpisode } from "@/types/podcasthub";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Headphones, Clock, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PodcastListProps {
    episodes: PodcastEpisode[];
    onPlay: (episode: PodcastEpisode) => void;
}

export const PodcastList = ({ episodes, onPlay }: PodcastListProps) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {episodes.map((episode) => (
                <Card
                    key={episode.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col md:flex-row overflow-hidden"
                    onClick={() => onPlay(episode)}
                >
                    <div className="bg-primary/5 w-full md:w-32 flex items-center justify-center p-4">
                        <span className="text-4xl">{episode.thumbnail}</span>
                    </div>

                    <div className="flex-1 p-4 md:p-6 flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <div>
                                <Badge variant="outline" className="mb-2 text-xs">{episode.category}</Badge>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">{episode.title}</CardTitle>
                            </div>
                            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                {episode.level}
                            </Badge>
                        </div>

                        <CardDescription className="line-clamp-2 mb-2">
                            {episode.description}
                        </CardDescription>

                        <div className="mt-auto flex items-center justify-between text-muted-foreground text-sm">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {episode.duration}</span>
                            </div>
                            <Button
                                size="sm"
                                className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground"
                                variant="secondary"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onPlay(episode);
                                }}
                            >
                                <Play className="w-4 h-4" /> Listen
                            </Button>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};
