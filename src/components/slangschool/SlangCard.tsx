import { SlangTerm } from "@/types/slangschool";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, MessageCircle, Quote } from "lucide-react";

interface SlangCardProps {
    term: SlangTerm;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
}

export const SlangCard = ({
    term,
    onNext,
    onPrev,
    isFirst
}: SlangCardProps) => {
    return (
        <div className="w-full max-w-2xl mx-auto space-y-8 animate-in zoom-in-95 duration-500">
            <Card className="overflow-hidden border-2 border-primary/20 bg-card shadow-2xl rounded-3xl">
                <div className="bg-primary/5 p-12 text-center border-b border-primary/10 relative">
                    <div className="absolute top-4 right-4 text-primary opacity-20">
                        <Quote className="w-12 h-12" />
                    </div>
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <h2 className="text-5xl font-bold text-foreground mb-4">"{term.term}"</h2>
                    <p className="text-muted-foreground font-semibold uppercase tracking-widest text-xs">
                        {term.category} Slang Discovery
                    </p>
                </div>

                <CardContent className="p-10 space-y-8 text-center md:text-left">
                    <div className="space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary block">True Meaning</span>
                        <p className="text-2xl font-semibold italic leading-tight decoration-primary/30 decoration-wavy underline-offset-8 underline">
                            {term.meaning}
                        </p>
                    </div>

                    <div className="bg-muted p-8 rounded-2xl border border-border/50 relative overflow-hidden">
                        <div className="absolute top-2 right-2 opacity-5">
                            <BookOpen className="w-12 h-12" />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">Real-World Usage</span>
                        <p className="text-lg font-medium italic text-foreground leading-relaxed">
                            "{term.example}"
                        </p>
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
                    Previous
                </Button>
                <Button
                    className="flex-1 py-6 font-bold shadow-lg shadow-primary/20"
                    onClick={onNext}
                >
                    Master This Lingo
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
    );
};
