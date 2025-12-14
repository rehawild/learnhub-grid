import { StoryPrompt } from "@/types/storywriter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Sparkles } from "lucide-react";

interface StoryWorkspaceProps {
    prompt: StoryPrompt;
    content: string;
    onUpdate: (content: string) => void;
    onFinish: () => void;
}

export const StoryWorkspace = ({
    prompt,
    content,
    onUpdate,
    onFinish
}: StoryWorkspaceProps) => {
    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            {/* Prompt Card */}
            <Card className="bg-muted/30 border-dashed">
                <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-yellow-500" />
                        <span className="font-bold uppercase tracking-wider text-sm text-yellow-600 dark:text-yellow-400">Story Prompt</span>
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-serif italic">
                        "{prompt.text}"
                    </CardTitle>
                    <CardDescription className="pt-2">
                        <span className="font-semibold block mb-1">Try to include:</span>
                        <div className="flex flex-wrap gap-2">
                            {prompt.elements.map((el, i) => (
                                <Badge key={i} variant="outline" className="bg-background">{el}</Badge>
                            ))}
                        </div>
                    </CardDescription>
                </CardHeader>
            </Card>

            {/* Editor Area */}
            <Card>
                <CardContent className="p-0">
                    <Textarea
                        value={content}
                        onChange={(e) => onUpdate(e.target.value)}
                        placeholder="Once upon a time..."
                        className="min-h-[400px] text-lg leading-relaxed p-6 resize-none border-none focus-visible:ring-0 rounded-lg"
                    />
                </CardContent>
            </Card>

            {/* Action Bar */}
            <div className="flex justify-end pt-2">
                <Button size="lg" onClick={onFinish} disabled={content.length < 10} className="gap-2">
                    <CheckCircle className="w-4 h-4" /> Finish Story
                </Button>
            </div>
        </div>
    );
};
