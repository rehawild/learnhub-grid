import { Proverb } from "@/types/proverbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Quote, Sparkles } from "lucide-react";

interface ProverbCardProps {
    proverb: Proverb;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
}

export const ProverbCard = ({
    proverb,
    onNext,
    onPrev,
    isFirst
}: ProverbCardProps) => {
    return (
        <div className="w-full space-y-8 animate-in zoom-in-95 duration-500">
            <Card className="overflow-hidden border-2 border-primary/10 bg-card shadow-xl rounded-[2.5rem]">
                <div className="p-12 text-center relative border-b border-primary/5">
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
                            <Sparkles className="w-8 h-8 text-primary/60" />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight italic tracking-tight">
                        "{proverb.phrase}"
                    </h2>
                </div>

                <CardContent className="p-12 space-y-10">
                    <div className="space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 block">Meaning</span>
                        <p className="text-2xl font-semibold leading-tight text-foreground/90">
                            {proverb.meaning}
                        </p>
                    </div>

                    {proverb.origin && (
                        <div className="pt-8 border-t border-primary/5">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 block mb-4">The Backstory</span>
                            <p className="text-lg font-medium italic text-muted-foreground leading-relaxed">
                                {proverb.origin}
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>

            <div className="flex gap-4">
                <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 h-16 font-bold rounded-2xl border-2 hover:bg-primary/5 transition-colors"
                    onClick={onPrev}
                    disabled={isFirst}
                >
                    Previous
                </Button>
                <Button
                    size="lg"
                    className="flex-1 h-16 font-bold rounded-2xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
                    onClick={onNext}
                >
                    Ready to Drill
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
            </div>
        </div>
    );
};
