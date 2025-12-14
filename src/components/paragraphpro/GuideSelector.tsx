import { ParagraphGuide } from "@/types/paragraphpro";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, MessageCircle, Palette } from "lucide-react";

interface GuideSelectorProps {
    guides: ParagraphGuide[];
    onSelect: (guide: ParagraphGuide) => void;
}

// Helper to map string icon names to components
const iconMap: Record<string, any> = {
    BookOpen,
    MessageCircle,
    Palette
};

export const GuideSelector = ({ guides, onSelect }: GuideSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => {
                const IconComponent = iconMap[guide.icon] || BookOpen;
                return (
                    <Card
                        key={guide.id}
                        className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full"
                        onClick={() => onSelect(guide)}
                    >
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-full bg-primary/10 text-primary">
                                    <IconComponent className="w-6 h-6" />
                                </div>
                            </div>
                            <CardTitle className="group-hover:text-primary transition-colors">{guide.name}</CardTitle>
                            <CardDescription>{guide.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto">
                            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                                Style: {guide.structure}
                            </div>
                            <Button
                                className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                                variant="secondary"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onSelect(guide);
                                }}
                            >
                                <IconComponent className="w-4 h-4" /> Start Writing
                            </Button>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};
