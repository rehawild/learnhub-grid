import { Story } from "@/types/storytime";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface StoryLibraryProps {
    stories: Story[];
    onSelectStory: (story: Story) => void;
}

export const StoryLibrary = ({ stories, onSelectStory }: StoryLibraryProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {stories.map((story) => (
                <Card key={story.id} className="cursor-pointer hover:border-primary transition-all hover:scale-105" onClick={() => onSelectStory(story)}>
                    <CardHeader className="text-center pb-2">
                        <div className="text-6xl mb-4">{story.coverEmoji}</div>
                        <CardTitle>{story.title}</CardTitle>
                        <CardDescription>by {story.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button onClick={(e) => {
                            e.stopPropagation();
                            onSelectStory(story);
                        }} className="w-full">
                            Read Now
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
