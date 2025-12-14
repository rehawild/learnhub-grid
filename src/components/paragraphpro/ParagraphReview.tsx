import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, RotateCcw, Pencil } from "lucide-react";
import { toast } from "sonner";
import { ParagraphGuide } from "@/types/paragraphpro";

interface ParagraphReviewProps {
    guide: ParagraphGuide;
    parts: Record<string, string>;
    onBackToEdit: () => void;
    onReset: () => void;
}

export const ParagraphReview = ({ guide, parts, onBackToEdit, onReset }: ParagraphReviewProps) => {

    // Combine parts into a single paragraph
    const fullParagraph = guide.parts
        .map(part => parts[part.id])
        .filter(Boolean)
        .join(" ");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(fullParagraph);
        toast.success("Paragraph copied to clipboard!");
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8">
            <Card className="border-2 border-primary/10">
                <CardHeader className="flex flex-row items-center justify-between pb-2 border-b">
                    <CardTitle className="text-xl font-bold text-foreground">
                        Your Paragraph
                    </CardTitle>
                    <Button variant="ghost" size="sm" onClick={copyToClipboard} className="gap-2 text-muted-foreground hover:text-foreground">
                        <Copy className="w-4 h-4" /> Copy
                    </Button>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="whitespace-pre-wrap font-serif text-lg leading-relaxed text-foreground/90">
                        {fullParagraph || <span className="italic text-muted-foreground">Your paragraph is empty...</span>}
                    </div>
                </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <Button variant="outline" onClick={onBackToEdit} className="gap-2">
                    <Pencil className="w-4 h-4" /> Keep Editing
                </Button>

                <Button onClick={onReset} className="gap-2 hover:bg-destructive hover:text-white">
                    <RotateCcw className="w-4 h-4" /> Start New Paragraph
                </Button>
            </div>
        </div>
    );
};
