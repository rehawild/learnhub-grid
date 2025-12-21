import { PhrasalVerb } from "@/types/phrasalverbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Info, BookOpen, Layers } from "lucide-react";

interface ParticleCardProps {
    verb: PhrasalVerb;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export const ParticleCard = ({
    verb,
    onNext,
    onPrev,
    isFirst,
    isLast
}: ParticleCardProps) => {
    return (
        <div className="w-full max-w-2xl mx-auto space-y-8 animate-in zoom-in-95 duration-500">
            <Card className="overflow-hidden border-2 border-primary/20 bg-card shadow-2xl rounded-3xl">
                <div className="bg-primary/5 p-12 text-center border-b border-primary/10">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <BookOpen className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <h2 className="text-5xl font-bold text-foreground">{verb.verb}</h2>
                        <h2 className="text-5xl font-bold text-primary">{verb.particle}</h2>
                    </div>
                    <p className="text-muted-foreground font-semibold uppercase tracking-widest text-xs">
                        Phrasal Verb Exploration
                    </p>
                </div>

                <CardContent className="p-10 space-y-8">
                    <div className="space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary block">Meaning</span>
                        <p className="text-2xl font-semibold leading-tight decoration-primary/30 decoration-wavy underline-offset-8 underline italic">
                            {verb.meaning}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border/50">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Layers className="w-4 h-4 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Grammar Profile</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                                {verb.isSeparable ? "Separable" : "Inseparable"}
                            </div>
                            {verb.usageTip && (
                                <p className="text-xs text-muted-foreground italic leading-relaxed">
                                    {verb.usageTip}
                                </p>
                            )}
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Info className="w-4 h-4 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Usage Example</span>
                            </div>
                            <p className="text-sm font-medium italic text-foreground leading-relaxed">
                                "{verb.example}"
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex gap-4">
                <Button
                    variant="outline"
                    className="flex-1 py-6 font-bold"
                    onClick={onPrev}
                    disabled={isFirst}
                >
                    Previous Verb
                </Button>
                <Button
                    className="flex-1 py-6 font-bold shadow-lg shadow-primary/20"
                    onClick={onNext}
                >
                    Master This Verb
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
    );
};
