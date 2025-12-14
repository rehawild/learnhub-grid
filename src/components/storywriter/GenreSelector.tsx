import { StoryGenre } from "@/types/storywriter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";

interface GenreSelectorProps {
    genres: StoryGenre[];
    onSelect: (genre: StoryGenre) => void;
}

export const GenreSelector = ({ genres, onSelect }: GenreSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {genres.map((genre) => (
                <Card
                    key={genre.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full"
                    onClick={() => onSelect(genre)}
                >
                    <CardHeader>
                        <div className="text-4xl mb-4">{genre.icon}</div>
                        <CardTitle className="group-hover:text-primary transition-colors">{genre.name}</CardTitle>
                        <CardDescription>{genre.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Button
                            className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                            variant="secondary"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(genre);
                            }}
                        >
                            <PenTool className="w-4 h-4" /> Start Writing
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
