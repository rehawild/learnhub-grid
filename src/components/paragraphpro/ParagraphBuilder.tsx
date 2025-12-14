import { ParagraphGuide } from "@/types/paragraphpro";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Eye, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ParagraphBuilderProps {
    guide: ParagraphGuide;
    parts: Record<string, string>;
    onUpdatePart: (id: string, value: string) => void;
    onReview: () => void;
}

export const ParagraphBuilder = ({
    guide,
    parts,
    onUpdatePart,
    onReview
}: ParagraphBuilderProps) => {
    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        Drafting: <span className="text-primary">{guide.name}</span>
                    </CardTitle>
                    <CardDescription>
                        Build your paragraph part by part.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {guide.parts.map((part) => (
                        <div key={part.id} className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Label htmlFor={part.id} className="text-base font-medium">
                                    {part.label}
                                </Label>
                                {part.tips.length > 0 && (
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="w-4 h-4 text-muted-foreground cursor-help hover:text-primary" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <ul className="list-disc list-inside text-xs">
                                                    {part.tips.map((tip, i) => (
                                                        <li key={i}>{tip}</li>
                                                    ))}
                                                </ul>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )}
                            </div>

                            <Textarea
                                id={part.id}
                                placeholder={part.placeholder}
                                value={parts[part.id]}
                                onChange={(e) => onUpdatePart(part.id, e.target.value)}
                                className="min-h-[100px] text-base resize-y"
                            />
                        </div>
                    ))}
                </CardContent>
            </Card>

            <div className="flex justify-end pt-2">
                <Button size="lg" onClick={onReview} className="gap-2">
                    <Eye className="w-4 h-4" /> Review Paragraph
                </Button>
            </div>
        </div>
    );
};
