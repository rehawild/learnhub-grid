import { SocialExpression } from "@/types/expressions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle, Quote, Info } from "lucide-react";

interface ExpressionCardProps {
    expression: SocialExpression;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
}

export const ExpressionCard = ({
    expression,
    onNext,
    onPrev,
    isFirst
}: ExpressionCardProps) => {
    return (
        <div className="w-full max-w-2xl mx-auto space-y-8 animate-in zoom-in-95 duration-500">
            <Card className="overflow-hidden border-2 border-purple-500/20 bg-card shadow-2xl rounded-[2.5rem]">
                <div className="bg-purple-500/5 p-12 text-center border-b border-yellow-500/10 relative">
                    <div className="absolute top-4 right-4 text-yellow-500 opacity-20">
                        <Quote className="w-12 h-12" />
                    </div>
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-8 h-8 text-purple-600" />
                        </div>
                    </div>
                    <h2 className="text-5xl font-bold text-foreground mb-4">"{expression.expression}"</h2>
                    <p className="text-yellow-600 font-semibold uppercase tracking-widest text-xs px-4 py-1.5 bg-yellow-500/10 rounded-full inline-block">
                        {expression.socialFunction}
                    </p>
                </div>

                <CardContent className="p-10 space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Info className="w-4 h-4 text-yellow-600" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Contextual Usage</span>
                        </div>
                        <p className="text-2xl font-semibold italic text-foreground leading-relaxed decoration-yellow-500/30 decoration-wavy underline-offset-8 underline">
                            "{expression.example}"
                        </p>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-2xl border border-border/50">
                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                            Use this when you want to be polite while checking in on someone's progress or wellbeing.
                        </p>
                    </div>
                </CardContent>
            </Card>

            <div className="flex gap-4">
                <Button
                    variant="outline"
                    className="flex-1 py-8 font-bold rounded-2xl border-2 hover:bg-yellow-50 transition-colors"
                    onClick={onPrev}
                    disabled={isFirst}
                >
                    Previous
                </Button>
                <Button
                    className="flex-1 py-8 font-bold bg-yellow-600 hover:bg-yellow-700 shadow-xl shadow-yellow-500/20 rounded-2xl text-lg"
                    onClick={onNext}
                >
                    Ready to Practice
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
            </div>
        </div>
    );
};
