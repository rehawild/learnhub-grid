import { NegotiationPhrase } from "@/types/negotiation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Info, BookOpen, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface NegotiationCardProps {
    phrase: NegotiationPhrase;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export const NegotiationCard = ({
    phrase,
    onNext,
    onPrev,
    isFirst,
    isLast
}: NegotiationCardProps) => {
    return (
        <Card className="w-full max-w-2xl mx-auto border-2 border-primary/20 shadow-lg overflow-hidden animate-in zoom-in-95 duration-500">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-foreground flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Strategy Insight
                    </CardTitle>
                    <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <Target className="w-3 h-3" />
                        {phrase.strategy}
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-8 space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold text-foreground leading-tight tracking-tight">
                        "{phrase.text}"
                    </h2>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Info className="w-4 h-4" />
                        Negotiation Phrase
                    </div>
                </div>

                <div className="grid gap-4 mt-8">
                    <div className="bg-muted/50 p-4 rounded-xl border border-border/50">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Meaning</span>
                        <p className="text-foreground leading-relaxed">{phrase.meaning}</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-xl border border-border/50">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Strategic Context</span>
                        <p className="text-foreground leading-relaxed italic">"{phrase.context}"</p>
                    </div>
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
                    {isLast ? "Start Review" : "Next Strategy"}
                </Button>
            </div>
        </Card>
    );
};
