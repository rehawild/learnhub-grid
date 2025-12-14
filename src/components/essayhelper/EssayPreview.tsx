import { EssaySection } from "@/types/essayhelper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, RotateCcw, Pencil } from "lucide-react";
import { toast } from "sonner";

interface EssayPreviewProps {
    sections: EssaySection[];
    onBackToEdit: () => void;
    onReset: () => void;
}

export const EssayPreview = ({ sections, onBackToEdit, onReset }: EssayPreviewProps) => {

    const fullText = sections.map(s => s.content).filter(Boolean).join("\n\n");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(fullText);
        toast.success("Essay copied to clipboard!");
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-2xl">Final Draft</CardTitle>
                    <Button variant="outline" size="sm" onClick={copyToClipboard} className="gap-2">
                        <Copy className="w-4 h-4" /> Copy
                    </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                    {sections.map((section) => (
                        <div key={section.id} className="border-b last:border-0 pb-4 last:pb-0">
                            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">{section.title}</h3>
                            <p className="text-lg leading-relaxed whitespace-pre-wrap">
                                {section.content || <span className="text-muted-foreground italic text-base">No content written...</span>}
                            </p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <Button variant="outline" onClick={onBackToEdit} className="gap-2">
                    <Pencil className="w-4 h-4" /> Continue Editing
                </Button>
                <Button variant="destructive" onClick={onReset} className="gap-2">
                    <RotateCcw className="w-4 h-4" /> Start New Essay
                </Button>
            </div>
        </div>
    );
};
