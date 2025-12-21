import { JargonTerm } from "@/types/jargonbuster";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Info, MessageCircle, RefreshCw } from "lucide-react";

interface JargonCardProps {
    term: JargonTerm;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export const JargonCard = ({
    term,
    onNext,
    onPrev,
    isFirst,
    isLast
}: JargonCardProps) => {
    return (
        <Card className="w-full max-w-2xl mx-auto border-2 border-primary/20 shadow-lg overflow-hidden animate-in zoom-in-95 duration-500">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-foreground flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Decoding Jargon
                    </CardTitle>
                    <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <RefreshCw className="w-3 h-3" />
                        Translator Active
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-8 space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-black text-primary leading-tight tracking-tight uppercase">
                        {term.term}
                    </h2>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                        <Info className="w-4 h-4" />
                        The Buzzword
                    </div>
                </div>

                <div className="grid gap-6 mt-8">
                    <div className="bg-muted/50 p-6 rounded-2xl border border-border/50 space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">Formal Definition</span>
                        <p className="text-lg text-foreground leading-relaxed">{term.definition}</p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary block">Plain English Translation</span>
                        <p className="text-2xl font-bold text-foreground leading-relaxed">{term.plainEnglish}</p>
                    </div>

                    <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 space-y-2 italic">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block not-italic">Usage Example</span>
                        <p className="text-foreground leading-relaxed">"{term.example}"</p>
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
                    Back
                </Button>
                <Button
                    className="flex-1 py-6 font-bold"
                    onClick={onNext}
                >
                    {isLast ? "Start Translation Drill" : "Next Term"}
                </Button>
            </div>
        </Card>
    );
};
