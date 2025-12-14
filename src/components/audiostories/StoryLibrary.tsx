import { AudioStory } from "@/types/audiostories";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Headphones } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface StoryLibraryProps {
    stories: AudioStory[];
    onSelect: (story: AudioStory) => void;
}

export const StoryLibrary = ({ stories, onSelect }: StoryLibraryProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
                <Card
                    key={story.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full overflow-hidden"
                    onClick={() => onSelect(story)}
                >
                    <div className="bg-primary/5 h-32 flex items-center justify-center text-6xl">
                        {story.coverImage}
                    </div>
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline">{story.category}</Badge>
                            <Badge className={
                                story.level === 'Advanced' ? 'bg-destructive' :
                                    story.level === 'Intermediate' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
                            }>
                                {story.level}
                            </Badge>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors line-clamp-1">{story.title}</CardTitle>
                        <CardDescription className="line-clamp-1">by {story.author}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Button
                            className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                            variant="secondary"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(story);
                            }}
                        >
                            <Headphones className="w-4 h-4" /> Listen & Read
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
