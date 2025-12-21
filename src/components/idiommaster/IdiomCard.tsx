import { useState } from "react";
import { Idiom } from "@/types/idiommaster";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, HelpCircle, ArrowRight, RotateCw, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface IdiomCardProps {
    idiom: Idiom;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export const IdiomCard = ({
    idiom,
    onNext,
    onPrev,
    isFirst,
    isLast
}: IdiomCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="w-full max-w-2xl mx-auto space-y-8 animate-in zoom-in-95 duration-500">
            <div
                className="relative perspective-1000 cursor-pointer h-[400px] w-full"
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className={cn(
                    "relative w-full h-full transition-all duration-700 transform-style-3d",
                    isFlipped && "rotate-y-180"
                )}>
                    {/* Front Side */}
                    <div className="absolute inset-0 backface-hidden bg-card border-2 border-primary/20 flex flex-col items-center justify-center p-12 text-center rounded-3xl shadow-xl">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <BookOpen className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-4xl font-bold text-foreground italic mb-4">"{idiom.phrase}"</h2>
                        <p className="text-muted-foreground font-semibold uppercase tracking-widest text-xs flex items-center gap-2">
                            <RotateCw className="w-3 h-3" /> Tap to reveal meaning
                        </p>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-card via-card to-primary/10 border-2 border-primary/50 flex flex-col items-center justify-center p-12 text-center rounded-3xl rotate-y-180 shadow-[0_0_40px_rgba(234,179,8,0.15)]">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Meaning Decoded</span>
                        <h3 className="text-2xl font-semibold text-foreground mb-8 leading-tight">
                            {idiom.meaning}
                        </h3>

                        <div className="w-full p-6 bg-primary/[0.03] rounded-2xl border border-primary/20 text-left relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute top-2 right-2 opacity-5">
                                <Lightbulb className="w-12 h-12 text-primary" />
                            </div>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-primary/70 block mb-2">Usage Example</span>
                            <p className="text-foreground italic leading-relaxed text-lg font-medium italic">"{idiom.example}"</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <Button
                    variant="outline"
                    className="flex-1 py-6 font-bold"
                    onClick={(e) => { e.stopPropagation(); onPrev(); setIsFlipped(false); }}
                    disabled={isFirst}
                >
                    Previous
                </Button>
                <Button
                    className="flex-1 py-6 font-bold shadow-lg shadow-primary/20"
                    onClick={(e) => { e.stopPropagation(); onNext(); setIsFlipped(false); }}
                >
                    {isLast ? "Begin Practice Drill" : "Next Idiom"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
    );
};
