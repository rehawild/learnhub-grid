import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, RotateCcw, BookOpen } from "lucide-react";
import { toast } from "sonner";

interface StoryCompleteProps {
    content: string;
    onBackToEdit: () => void;
    onReset: () => void;
}

export const StoryComplete = ({ content, onBackToEdit, onReset }: StoryCompleteProps) => {

    const copyToClipboard = () => {
        navigator.clipboard.writeText(content);
        toast.success("Story copied to clipboard!");
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8">
            <Card className="border-2 border-primary/10">
                <CardHeader className="flex flex-col items-center text-center pb-2">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                        <BookOpen className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-3xl font-serif">The End</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-muted/30 p-6 rounded-lg italic font-serif text-lg leading-relaxed whitespace-pre-wrap">
                        {content}
                    </div>
                </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" onClick={onBackToEdit} className="gap-2">
                    Back to Writing
                </Button>
                <Button variant="outline" onClick={copyToClipboard} className="gap-2">
                    <Copy className="w-4 h-4" /> Copy Text
                </Button>
                <Button onClick={onReset} className="gap-2">
                    <RotateCcw className="w-4 h-4" /> New Story
                </Button>
            </div>
        </div>
    );
};
