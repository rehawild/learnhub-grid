import { ResumeBullet } from "@/types/resumehelp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Target, Zap, ArrowRight, Lightbulb } from "lucide-react";

interface ResumeCardProps {
    bullet: ResumeBullet;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export const ResumeCard = ({
    bullet,
    onNext,
    onPrev,
    isFirst,
    isLast
}: ResumeCardProps) => {
    return (
        <Card className="w-full max-w-2xl mx-auto border-2 border-primary/20 shadow-lg overflow-hidden animate-in zoom-in-95 duration-500">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-foreground flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Impact Lab
                    </CardTitle>
                    <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <Zap className="w-3 h-3" />
                        Active Transformation
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-8 space-y-8">
                <div className="space-y-6">
                    <div className="space-y-2 opacity-60">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground block">The Weak Version</span>
                        <div className="p-4 bg-muted/30 rounded-xl border border-dashed border-border text-lg font-medium italic">
                            "{bullet.weak}"
                        </div>
                    </div>

                    <div className="flex justify-center py-2">
                        <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                    </div>

                    <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block">The Strong Version</span>
                        <div className="p-6 bg-primary/5 rounded-2xl border-2 border-primary/20 text-xl font-bold italic leading-relaxed">
                            "{bullet.strong}"
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="p-4 bg-muted/50 rounded-xl border border-border/50">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-2">Power Word</span>
                        <div className="text-lg font-black text-primary">{bullet.actionVerb}</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-xl border border-border/50">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-2">Key Metric</span>
                        <div className="text-lg font-black text-primary">{bullet.impactLabel}</div>
                    </div>
                </div>

                <div className="p-4 bg-yellow-500/5 rounded-xl border border-yellow-500/20 flex gap-4 items-start">
                    <Lightbulb className="w-5 h-5 text-yellow-600 shrink-0 mt-1" />
                    <p className="text-sm text-foreground/80 italic leading-relaxed">{bullet.explanation}</p>
                </div>
            </CardContent>

            <div className="flex bg-muted/30 p-4 gap-4 border-t border-primary/10">
                <Button
                    variant="outline"
                    className="flex-1 py-6 font-bold"
                    onClick={onPrev}
                    disabled={isFirst}
                >
                    Previous
                </Button>
                <Button
                    className="flex-1 py-6 font-bold"
                    onClick={onNext}
                >
                    {isLast ? "Start Achievement Drill" : "Next Example"}
                </Button>
            </div>
        </Card>
    );
};
