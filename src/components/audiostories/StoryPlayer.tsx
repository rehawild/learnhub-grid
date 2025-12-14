import { AudioStory } from "@/types/audiostories";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, FileQuestion, BookOpen } from "lucide-react";

interface StoryPlayerProps {
    story: AudioStory;
    isPlaying: boolean;
    onTogglePlay: () => void;
    onStartQuiz: () => void;
}

export const StoryPlayer = ({
    story,
    isPlaying,
    onTogglePlay,
    onStartQuiz
}: StoryPlayerProps) => {

    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <Card className="border-2 border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30">
                    <div className="flex items-center gap-4">
                        <span className="text-4xl">{story.coverImage}</span>
                        <div>
                            <CardTitle className="text-2xl">{story.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">by {story.author}</p>
                        </div>
                    </div>
                    <Button
                        size="icon"
                        className="rounded-full w-12 h-12"
                        onClick={onTogglePlay}
                    >
                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                    </Button>
                </CardHeader>
                <CardContent className="p-8">
                    <div className="prose prose-lg dark:prose-invert max-w-none leading-loose font-serif">
                        {story.content}
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end pt-2">
                <Button size="lg" onClick={onStartQuiz} className="gap-2 shadow-lg">
                    <FileQuestion className="w-4 h-4" /> Take Quiz
                </Button>
            </div>
        </div>
    );
};
