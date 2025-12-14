import { EssaySection } from "@/types/essayhelper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface EssayBuilderProps {
    section: EssaySection;
    currentIndex: number;
    totalSections: number;
    onUpdateContent: (content: string) => void;
    onNext: () => void;
    onPrev: () => void;
}

export const EssayBuilder = ({
    section,
    currentIndex,
    totalSections,
    onUpdateContent,
    onNext,
    onPrev
}: EssayBuilderProps) => {
    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            {/* Progress Header */}
            <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                <span className="uppercase tracking-widest">Section {currentIndex + 1} of {totalSections}</span>
                <Badge variant="outline">{section.id}</Badge>
            </div>

            {/* Main Editor Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                    <CardDescription>
                        {section.tips[0]}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Tips Area */}
                    <div className="bg-muted p-4 rounded-lg">
                        <p className="font-semibold text-sm mb-2 text-foreground">💡 Helpful Tips:</p>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {section.tips.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Input Area */}
                    <Textarea
                        value={section.content}
                        onChange={(e) => onUpdateContent(e.target.value)}
                        placeholder={section.placeholder}
                        className="min-h-[300px] text-lg leading-relaxed p-4 resize-none"
                    />
                </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={onPrev} disabled={currentIndex === 0} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Previous
                </Button>
                <Button size="lg" onClick={onNext} className="gap-2">
                    {currentIndex === totalSections - 1 ? 'Preview Essay' : 'Next Section'} <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
