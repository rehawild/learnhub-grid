import { Story } from "@/types/storytime";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StoryReaderProps {
    story: Story;
    onFinished: () => void;
}

export const StoryReader = ({ story, onFinished }: StoryReaderProps) => {
    return (
        <div className="space-y-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Card>
                <CardHeader className="text-center border-b bg-muted/20">
                    <div className="text-6xl mb-4">{story.coverEmoji}</div>
                    <CardTitle className="text-3xl font-serif">{story.title}</CardTitle>
                    <p className="text-muted-foreground italic">by {story.author}</p>
                </CardHeader>
                <CardContent className="p-6 sm:p-10 space-y-6">
                    {story.content.map((paragraph, index) => (
                        <p key={index} className="text-lg leading-relaxed text-foreground/90 font-serif">
                            {paragraph}
                        </p>
                    ))}
                </CardContent>
            </Card>

            <div className="flex justify-center pb-8">
                <Button size="lg" onClick={onFinished} className="gap-2 text-lg">
                    Take Quiz <ArrowRight className="w-5 h-5" />
                </Button>
            </div>
        </div>
    );
};
